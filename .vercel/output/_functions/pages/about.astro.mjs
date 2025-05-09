import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9eRJOAN.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmcIovxS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const title = "About me";
  const description = "Learn more about the coder behind the keyboard.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mb-28 px-5"> <div class="max-w-2xl"> <span class="font-medium uppercase text-sm">A few things about me</span> <h1 class="heading-hero">
My Path in Web Development
</h1> <h2 class="font-semibold text-xl md:text-3xl mb-4">
Years of Pixels & Code
</h2> <p class="text-base leading-relaxed mb-6">I'm from Montevideo, Uruguay</p> <p class="text-base leading-relaxed mb-6">
I started my journey in web development back in 2008 with MySpace, 
        creating layouts and building my own website. At the time, I had 
        zero visitors because I had no marketing skills and was still 
        learning the ropes of design.
</p> <p class="text-base leading-relaxed mb-6">
In 2010, I created a network of Flash game websites that 
        received millions of visits, using PHP, MySQL and HTML5. However,
          everything changed in 2012 when Google altered its algorithms, 
          leading me to transition to WordPress for theme development 
          and freelance web design.
</p> <p class="text-base leading-relaxed mb-6">
As I continued to grow, I learned React and Webflow and began working 
        freelance, while also dabbling in a bit of UI design.
</p> <h2 class="font-semibold text-xl md:text-3xl mt-10 mb-4">
What I'm Building Now
</h2> <p class="text-base leading-relaxed mb-6">
Right now, I'm working as a freelance Webflow developer, 
        helping clients bring clean, modern designs to life on the web.
</p> <p class="text-base leading-relaxed mb-6">
At the same time, I'm diving into Framer and Astro.js
</p> <p class="text-base leading-relaxed mb-6">
The goal? Launch a couple of premium template stores where I can 
        combine good UI, smooth interactions, and fast performance.
</p> </div> </section> ` })}`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/about.astro", void 0);

const $$file = "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
