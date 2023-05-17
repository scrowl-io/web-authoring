import { MenuItemConstructorOptions } from 'electron';
import { MenuItemApiOutline } from '../menu.types';
import { rq } from '../..';

export const create = (isMac: boolean, isRebuild?: boolean, type?: string) => {
  const menuId = 'outline-menu';
  const courseOutlineMenu = [
    {
      id: `${menuId}-add-slide`,
      label: 'Add New Slide',
      accelerator: 'CmdorCtrl+Alt+S',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.addSlide.name);
      },
    },
    {
      id: `${menuId}-add-lesson`,
      label: 'Add New Lesson',
      accelerator: 'CmdorCtrl+Alt+L',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.addLesson.name);
      },
    },
    {
      id: `${menuId}-add-module`,
      label: 'Add New Module',
      accelerator: 'CmdorCtrl+Alt+M',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.addModule.name);
      },
    },
    { type: 'separator' },
    {
      id: `${menuId}-dup-slide`,
      label: 'Duplicate Slide',
      accelerator: 'CmdorCtrl+Alt+D',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.duplicateSlide.name);
      },
    },
    {
      id: `${menuId}-rename-slide`,
      label: 'Rename Slide',
      accelerator: 'CmdorCtrl+Alt+R',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.renameSlide.name);
      },
    },
    { type: 'separator' },
    {
      id: `${menuId}-delete-slide`,
      label: 'Delete Slide',
      accelerator: 'CmdorCtrl+D',
      enabled: isRebuild ? true : false,
      click: () => {
        rq.send(API.removeSlide.name);
      },
    },
  ];

  const assessmentOutlineMenu = [
    {
      id: `${menuId}-add-slide`,
      label: 'Add New Slide',
      accelerator: 'CmdorCtrl+Alt+S',
      enabled: false,
      // visible: false,
      submenu: [
        // {
        //   label: 'test',
        //   enabled: false,
        // },
      ],
      acceleratorWorksWhenHidden: false,
      registerAccelerator: false,
      click: () => {
        rq.send(API.addSlide.name);
      },
    },
    {
      id: `${menuId}-add-lesson`,
      label: 'Add New Lesson',
      accelerator: 'CmdorCtrl+Alt+L',
      enabled: false,
      submenu: [],
      acceleratorWorksWhenHidden: false,
      registerAccelerator: false,
      click: () => {
        rq.send(API.addLesson.name);
      },
    },
    {
      id: `${menuId}-add-module`,
      label: 'Add New Module',
      accelerator: 'CmdorCtrl+Alt+M',
      enabled: false,
      submenu: [],
      acceleratorWorksWhenHidden: false,
      registerAccelerator: false,
      click: () => {
        rq.send(API.addModule.name);
      },
    },
    { type: 'separator' },
    {
      id: `${menuId}-dup-slide`,
      label: 'Duplicate Slide',
      accelerator: 'CmdorCtrl+Alt+D',
      enabled: false,
      // visible: false,
      submenu: [],
      acceleratorWorksWhenHidden: false,
      registerAccelerator: false,
      click: () => {
        rq.send(API.duplicateSlide.name);
      },
    },
    {
      id: `${menuId}-rename-slide`,
      label: 'Rename Slide',
      accelerator: 'CmdorCtrl+Alt+R',
      enabled: true,
      click: () => {
        rq.send(API.renameSlide.name);
      },
    },
    { type: 'separator' },
    {
      id: `${menuId}-delete-slide`,
      label: 'Delete Slide',
      accelerator: 'CmdorCtrl+D',
      enabled: false,
      // visible: false,
      submenu: [],
      acceleratorWorksWhenHidden: false,
      registerAccelerator: false,
      click: () => {
        rq.send(API.removeSlide.name);
      },
    },
  ];

  const template: MenuItemConstructorOptions = {
    id: menuId,
    label: 'Outline',
    // @ts-ignore
    submenu: type === 'assessment' ? assessmentOutlineMenu : courseOutlineMenu,
  };

  return template;
};

export const API: MenuItemApiOutline = {
  addSlide: {
    name: '/outline/slide/add',
    type: 'send',
  },
  duplicateSlide: {
    name: '/outline/slide/duplicate',
    type: 'send',
  },
  renameSlide: {
    name: '/outline/slide/rename',
    type: 'send',
  },
  removeSlide: {
    name: '/outline/slide/remove',
    type: 'send',
  },
  addLesson: {
    name: '/outline/lesson/add',
    type: 'send',
  },
  addModule: {
    name: '/outline/module/add',
    type: 'send',
  },
};

export const register = () => {
  rq.registerEndpointAll(API);
};

export default {
  create,
};