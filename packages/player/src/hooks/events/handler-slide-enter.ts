import { CustomEventMap } from '../../../types/globals';
import { stateHooks } from '../../hooks';

export const useHandlerSlideEnter = () => {

  return ({ detail }: CustomEventMap['slide.enter']) => {
    const { id } = detail.currentTarget as unknown as HTMLDivElement;
    const parsed = /slide-(\d)/g.exec(id);
    
    if (!parsed || parsed.length != 2) {
      return;
    }

    const index = parseInt(parsed[1]);
  };
};

export default useHandlerSlideEnter;

// const handleSlideEvent = (ev) => {
//   currentSlide = ev.detail.currentTarget.id;
// };

// const handleSlideEvent = (ev) => {
//   currentSlide = ev.detail.currentTarget.id;
// };