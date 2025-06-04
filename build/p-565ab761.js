import{g as t}from"./p-eb6f4547.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var n;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(n||(n={}));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var i;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(i||(i={}));const d={getEngine(){const e=t();if(e?.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return e?.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==n.Unimplemented)throw o}):Promise.resolve(void 0)}};export{d as K,i as a};
