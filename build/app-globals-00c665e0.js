import { i as initialize } from './ionic-global-9cce5b06.js';
import './index-38453636.js';
import { s as setupConfig } from './config-a7320371.js';

globalThis.Context = {};

const globalFn = () => { };

/**
 * The code to be executed should be placed within a default function that is
 * exported by the global script. Ensure all of the code in the global script
 * is wrapped in the function() that is exported.
*/
const appGlobalScript = async () => {
  setupConfig({
    mode: 'ios'
  });
};

const globalScripts = () => {
  appGlobalScript();
  initialize();
  globalFn();
};

export { globalScripts as g };

//# sourceMappingURL=app-globals-00c665e0.js.map