import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/ssr.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="wrapper">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <div class="about"><div class="about-container"><div class="about-title" data-svelte-h="svelte-1etsgga"><h1>Produtos</h1></div> <hr> <div class="about-content">${each(data["posts"], (post) => {
    return `${escape(post.title)}`;
  })}</div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
