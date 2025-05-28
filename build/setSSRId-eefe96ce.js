/**
 * Get data from `window?.__NEXT_DATA__?.props?.pageProps?._ssrData?.[key]`
 *
 * If nothing found, returns undefined.
 *
 * This is for using this component in combination with server side rendering of next.js.
 *
 * It is up to the server code to put the correct data at the given path:
 * `window?.__NEXT_DATA__?.props?.pageProps?._ssrData.[key]`
 *
 * @param key the key in `window?.__NEXT_DATA__?.props?.pageProps?._ssrData?.[key]` to get data from
 * @returns any
 */
function getSSRData(key) {
  var _a, _b, _c, _d;
  if (key) {
    // @ts-ignore
    return (_d = (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.__NEXT_DATA__) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.pageProps) === null || _c === void 0 ? void 0 : _c._ssrData) === null || _d === void 0 ? void 0 : _d[key];
  }
}

/**
 * Set a key-value pair in `document.__STENCIL_DATA__`
 *
 * To make it work, ensure that `document.__STENCIL_DATA__` is an object,
 * e.g. by initializing the variable like this:
 * ```ts
 * document.__STENCIL_DATA__ = {}
 * ```
 *
 * When `document.__STENCIL_DATA__` is undefined or no object, the function
 * does nothing.
 *
 * @param key the key to set the data
 * @param val the value (data) to set
 */
function setSSRData(key, val) {
  // @ts-ignore
  if (typeof (document === null || document === void 0 ? void 0 : document.__STENCIL_DATA__) === 'object')
    document.__STENCIL_DATA__[key] = val;
}

/**
 * Sets the _ssrId of the given component.
 *
 * The generated _ssrId can be used in combination with the functions
 * `setSSRData()` and `getSSRData()`.
 *
 * To make it work, ensure that `document.__STENCIL_DATA__` is an object,
 * e.g. by initializing the variable like this:
 * ```ts
 * document.__STENCIL_DATA__ = {}
 * ```
 *
 * If the _ssrId is already set, it will not be overridden. This allows
 * you to have a predictable key to retrieve the fetched data with.
 *
 * Example:
 * ```ts
 * export class MyComponent {
 *   // reflect _ssrID on html attribute of component element
 *   @Prop({ reflect: true }) _ssrId?: string;
 *
 *   constructor() {
 *     setSSRId(this); // <- pass in the component
 *   }
 * }
 * ```
 *
 *
 * @param component the component instance
 */
const setSSRId = (component) => {
  // @ts-ignore
  if ((document === null || document === void 0 ? void 0 : document.__STENCIL_DATA__) && !component._ssrId) {
    component._ssrId = generateUID();
  }
};
function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const f = ('000' + firstPart.toString(36)).slice(-3);
  const s = ('000' + secondPart.toString(36)).slice(-3);
  return f + s;
}

export { setSSRData as a, getSSRData as g, setSSRId as s };

//# sourceMappingURL=setSSRId-eefe96ce.js.map