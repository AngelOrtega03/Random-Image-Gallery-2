import { c as create_ssr_component, e as escape, d as add_attribute } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `body.svelte-3ndfbg.svelte-3ndfbg{background-image:url("./background.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;text-align:center}h1.svelte-3ndfbg.svelte-3ndfbg{font-family:Georgia, 'Times New Roman', Times, serif;font-size:3em;color:white;text-shadow:2px 2px 0px #000000}p.svelte-3ndfbg.svelte-3ndfbg{color:white;text-shadow:2px 2px 0px #000000}.display.svelte-3ndfbg img.svelte-3ndfbg{height:50%;width:50%}.display.svelte-3ndfbg.svelte-3ndfbg{width:50%;height:50%;margin:auto}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var randomName = "ejemplo.png";
  $$result.css.add(css);
  return `<body class="svelte-3ndfbg"><h1 class="svelte-3ndfbg" data-svelte-h="svelte-1abduww">Random Image Gallery</h1> <p class="svelte-3ndfbg" data-svelte-h="svelte-fo0xdz">Presiona el boton &quot;Generame&quot; para desplegar una imagen al azar</p> <button data-svelte-h="svelte-vk22pl">Generame</button><br><br> <div class="display svelte-3ndfbg"><img src="${"/src/routes/img/" + escape(randomName, true)}"${add_attribute("alt", randomName, 0)} class="svelte-3ndfbg"></div></body>`;
});
export {
  Page as default
};
