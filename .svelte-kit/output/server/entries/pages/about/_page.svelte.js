import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="wrapper">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <div class="about" data-svelte-h="svelte-wa5b0y"><div class="about-container"><div class="about-title"><h1>Quem Somos?</h1></div> <hr> <div class="about-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
