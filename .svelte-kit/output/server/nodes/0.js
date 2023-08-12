

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.803877b0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.be9baba7.js"];
export const stylesheets = [];
export const fonts = [];
