import { AnimationBuilder, createAnimation } from '@ionic/core';

export const animationBuilderFadePages: AnimationBuilder = (_, opts) => {
  const enteringAnimation = createAnimation().addElement(opts.enteringEl).fromTo('opacity', 0, 1).duration(250);

  const leavingAnimation = createAnimation().addElement(opts.leavingEl).fromTo('opacity', 1, 0).duration(250);

  const animation = createAnimation().addAnimation(enteringAnimation).addAnimation(leavingAnimation);

  return animation;
};
