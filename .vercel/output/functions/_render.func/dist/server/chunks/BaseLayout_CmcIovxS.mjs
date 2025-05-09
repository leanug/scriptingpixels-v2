import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, b as renderTemplate, r as renderComponent, m as maybeRenderHead, f as renderHead, g as renderSlot } from './astro/server_C9eRJOAN.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Overlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="overlay" class="fixed inset-0 bg-black/90 backdrop-blur-md hidden flex-col items-center justify-center text-white z-40 overflow-hidden"> <!-- Close Button --> <button class="absolute z-10 top-5 right-5 text-3xl cursor-pointer" id="close-overlay" aria-label="Close menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> <!-- Animated container --> <div class="flex flex-col mx-12 justify-center w-full h-full animate-growDown"> <!-- Navigation Links with fade-in animation --> <nav class="flex flex-col gap-y-8 text-6xl font-semibold"> <a href="/" class="fade-in delay-100"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">01</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Home</h2> </div> </a> <a href="/about" class="fade-in delay-200 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">02</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">About me</h2> </div> </a> <a href="/process" class="fade-in delay-300 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">03</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Process</h2> </div> </a> <a href="/services" class="fade-in delay-400 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">04</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Services</h2> </div> </a> </nav> <!-- Social Links --> <div class="flex flex-col space-y-2 mt-12 fade-in delay-500"> <p class="text-lg">Follow me</p> <div class="flex items-center space-x-5 text-3xl mt-2"> <a href="https://twitter.com/leandroubilla_" aria-label="Twitter" class="hover:text-gray-300"> <img aria-hidden="true" class="w-6 h-6" src="/x-social-media-white-icon.png" alt="Fiverr Logo"> </a> <a href="https://youtube.com/scriptingpixels" aria-label="YouTube"> <img aria-hidden="true" class="w-8 h-8" src="/youtube-app-white-icon.png" alt="Fiverr Logo"> </a> </div> <a href="mailto:leandroubilla@protonmail.com" class="px-4 fade-in delay-600 text-lg py-2 w-40 mt-10 text-center text-[#212121] hover:cursor-pointer bg-white rounded-lg font-semibold">
Work with me
</a> </div> </div> </div>`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/components/Overlay.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Tags --><title>${Astro2.props.title ?? "Astro Basics"}</title><meta name="description"${addAttribute(Astro2.props.description ?? "Modern UI and web development", "content")}><meta property="og:title"${addAttribute(Astro2.props.title ?? "Astro Basics", "content")}><meta property="og:description"${addAttribute(Astro2.props.description ?? "Modern UI and web development", "content")}><meta property="og:image" content="/og-image.jpg"><meta property="og:type" content="website"><meta property="og:url" content="https://www.leandroubilla.com">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-37fxchfa": true })}${renderComponent($$result, "SpeedInsights", $$Index, { "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="relative leading-tightest" data-astro-cid-37fxchfa> <div class="bg-[#FAFAFA] flex justify-center text-[#1D1D1D]" data-astro-cid-37fxchfa> <div class="flex flex-col w-full min-h-screen max-w-6xl mx-auto" data-astro-cid-37fxchfa> <main class="flex-grow" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> </div> </div> ${renderComponent($$result, "Overlay", $$Overlay, { "data-astro-cid-37fxchfa": true })} </div> ${renderScript($$result, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
