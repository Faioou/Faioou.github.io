

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e7ea0c92.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.be9baba7.js"];
export const stylesheets = [];
export const fonts = [];
