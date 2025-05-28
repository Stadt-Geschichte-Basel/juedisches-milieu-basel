import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { g as getIonMode } from './ionic-global-9cce5b06.js';

const itemGroupIosCss = "ion-item-group{display:block}";

const itemGroupMdCss = "ion-item-group{display:block}";

const ItemGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "group", class: {
        [mode]: true,
        // Used internally for styling
        [`item-group-${mode}`]: true,
        item: true,
      } }));
  }
};
ItemGroup.style = {
  ios: itemGroupIosCss,
  md: itemGroupMdCss
};

export { ItemGroup as ion_item_group };

//# sourceMappingURL=ion-item-group.entry.js.map