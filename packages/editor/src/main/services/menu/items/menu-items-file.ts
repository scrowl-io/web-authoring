import { MenuItemConstructorOptions, MenuItem, Menu } from 'electron';
import { MenuItemApiFile } from '../menu.types';
import { rq, log, fs } from '../..';
import { ProjectFile } from '../../../models/projects';

export const API: MenuItemApiFile = {
  create: {
    name: '/file/create',
    type: 'send',
  },
  save: {
    name: '/file/save',
    type: 'send'
  },
  open: {
    name: '/file/open',
    type: 'send',
  },
  close: {
    name: '/file/close',
    type: 'send',
  },
};

const menuId = 'file-menu';

export const create = (isMac: boolean) => {
  const template = {
    id: menuId,
    label: 'File',
    submenu: [
      {
        id: `${menuId}-create`,
        label: "New Project",
        accelerator: "CmdorCtrl+N",
        click: () => {
          rq.send(API.create.name);
        },
      },
      { type: "separator" },
      {
        id: `${menuId}-open`,
        label: "Open...",
        accelerator: "CmdorCtrl+O",
        click: () => {
          rq.send(API.open.name);
        },
      },
      {
        id: `${menuId}-open-recent`,
        label: "Open Recent",
        submenu: [],
      },
  
      { type: "separator" },
      {
        id: `${menuId}-save`,
        label: "Save",
        accelerator: "CmdorCtrl+S",
        enabled: false,
        click: () => {
          rq.send(API.save.name);
        },
      },
      { type: "separator" },
      {
        id: `${menuId}-close`,
        label: "Close Project",
        accelerator: "CmdorCtrl+W",
        enabled: false,
        click: () => {
          rq.send(API.close.name);
        },
      }
    ] as Array<MenuItemConstructorOptions>
  };

  if (isMac) {
    template.submenu.push({ type: 'separator' }, { role: 'quit' });
  }

  return template;
};

export const register = () => {
  rq.registerEndpointAll(API);
};

const getProjects = () => {
  return new Promise<rq.ApiResult>((resolve) => {
    fs.drainProjectFiles(5).then((drainRes) => {
      if (drainRes.error) {
        resolve(drainRes);
        return;
      }
  
      const filePromises: Array<Promise<rq.ApiResult>> = [];
  
      drainRes.data.filepaths.forEach((filepath) => {
        filePromises.push(fs.fileRead(filepath));
      });
  
      Promise.allSettled(filePromises).then((filePromiseRes) => {
        let projects: Array<ProjectFile> = [];
  
        filePromiseRes.forEach((fileRes, idx) => {
          if (fileRes.status === 'rejected') {
            log.error(`failed to open: ${drainRes.data.filepaths[idx]}`);
            return;
          }
  
          if (fileRes.value.error) {
            log.error('failed to open: ${drainRes.data.filepaths[idx]}', fileRes.value);
            return;
          }
  
          projects.push(fileRes.value.data.contents);
        });
  
        resolve({
          error: false,
          data: {
            projects,
          },
        });
      });
    });
  })
}

export const asyncInit = (menu: Menu) => {
  return new Promise<rq.ApiResult>((resolve) => {
    getProjects().then((res) => {
      if (res.error) {
        log.error(res);
        resolve(res);
        return;
      }
  
      const itemId = `${menuId}-open-recent`;
      const menuItem = menu.getMenuItemById(itemId);
  
      if (!menuItem) {
        return;
      }
  
      if (!menuItem.submenu) {
        return;
      }

      const appendProject = (project: ProjectFile, idx: number) => {
        const recentProjectItem = new MenuItem({
          id: `${itemId}-${(idx + 1)}`,
          label:  project.versions[0].name,
          click: () => {
            rq.send(API.open.name, project.versions[0]);
          },
        });
        
        menuItem.submenu?.append(recentProjectItem);
      }

      if (res.data.projects.length) {
        res.data.projects.forEach(appendProject); 
      } else {
        const noRecentProjects = new MenuItem({
          id: `${itemId}-${1}`,
          label: 'No Recent Projects',
          enabled: false,
        });

        menuItem.submenu?.append(noRecentProjects);
      }
  
      resolve({
        error: false,
        data: {
          init: true,
        },
      });
    });
  });
};

export default {
  register,
  create,
};
