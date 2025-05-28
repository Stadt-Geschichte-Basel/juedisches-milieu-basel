import './index-38453636.js';
import { c as createAnimation } from './animation-f8742375.js';

const animationBuilderFadePages = (_, opts) => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .fromTo('opacity', 0, 1)
    .duration(250);
  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .fromTo('opacity', 1, 0)
    .duration(250);
  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation);
  return animation;
};

export { animationBuilderFadePages as a };

//# sourceMappingURL=page-animation-92d0ff95.js.map