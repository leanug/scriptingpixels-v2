import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9eRJOAN.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmcIovxS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Scripting Pixels \u2013 Coming Soon";
  const description = "A new collection of Framer and Astro templates by Leandro Ubilla, focused on clean design, performance, and usability.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[70vh] flex items-center justify-center px-5 text-center"> <div class="max-w-xl space-y-6"> <span class="text-sm uppercase font-medium tracking-wide text-gray-500">Coming Soon</span> <h1 class="text-4xl md:text-5xl font-bold leading-tight text-balance">
Framer templates made with clarity and purpose.
</h1> <p class="text-lg text-gray-600 text-balance">
I'm crafting a curated set of developer-friendly templates for modern creators and businesses.
</p> <div class="flex justify-center gap-3 mt-6 flex-wrap"> <a href="https://www.x.com/leandroubilla_" class="all-btn">
X / Twitter
</a> </div> </div> </section> ` })}`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/index.astro", void 0);

const $$file = "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
