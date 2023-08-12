import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { H as Header, F as Footer } from "../../chunks/Footer.js";
const banner = "/_app/immutable/assets/banner.d91ba6d2.jpg";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="banner" data-svelte-h="svelte-1xgcxx1"><img class="banner-img"${add_attribute("src", banner, 0)} alt="Website banner"></div>`;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="gallery" data-svelte-h="svelte-1x6jp34"><div class="gallery-container"><div class="gallery-card"><div class="gallery-card-text"><h1>Foto 1</h1></div></div> <div class="gallery-card"><div class="gallery-card-text"><h1>Foto 2</h1></div></div> <div class="gallery-card"><div class="gallery-card-text"><h1>Foto 3</h1></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="wrapper">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}  <div class="intro" data-svelte-h="svelte-2tk9zo"><div class="intro-container"><div class="intro-title"><h1>Testemunhar É Ajudar</h1></div> <hr> <div class="intro-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div></div> ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})}  <div class="contacts" data-svelte-h="svelte-dd73bb"><div class="contacts-container"><div class="contacts-title"><h1>Contacts</h1></div> <hr> <div class="contacts-content"><h2>e-mail@tea.pt</h2> <p>Rua da Associação 123<br>
                    XXXX-XXX Porto<br> <a href="">[ver mapa]</a><br>
                +3510000000</p></div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
