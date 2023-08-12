import * as universal from '../entries/pages/products/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/products/+page.js";
export const imports = ["_app/immutable/nodes/5.ba60e455.js","_app/immutable/chunks/5.f3f75279.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.be9baba7.js","_app/immutable/chunks/Footer.e2803a8a.js"];
export const stylesheets = [];
export const fonts = [];
