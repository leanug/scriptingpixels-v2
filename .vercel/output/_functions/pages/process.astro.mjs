import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9eRJOAN.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmcIovxS.mjs';
export { renderers } from '../renderers.mjs';

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const title = "Process";
  const description = "Building Your Website, Step by Step";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section aria-label="Web development process" class="px-5 mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <div> <span class="text-sm">Step 01.</span> <h2 class="font-semibold text-3xl">
Project Request
</h2> <div class="space-y-3 mt-5"> <p>
First, you send a quick project request. This helps me understand what 
            you need and see if we're a good fit.
</p> <p>
If it makes sense to move forward, we can hop on a video call or continue 
            the conversation through email or WhatsApp, whatever works best for you.
</p> </div> </div> <div> <span class="text-sm">Step 02.</span> <h2 class="font-semibold text-3xl">
First Meeting
</h2> <div class="space-y-3 mt-5"> <p>
(Optional) If you prefer a quick face-to-face before we begin, 
            we can set up a short video call to go over your project, 
            goals, and expectations. It's a good way to make sure we're 
            on the same page and clarify anything upfront.
</p> <p>
Not into calls? That's totally fine, we can keep it all async via email or chat.
</p> </div> </div> <div> <span class="text-sm">Step 03.</span> <h2 class="font-semibold text-3xl">
Proposal
</h2> <div class="space-y-3 mt-5"> <p>
Once I understand your project, I'll put together <b>a clear, 
            upfront proposal</b>, no hourly rates, just a flat project price 
            so you know exactly what to expect. No surprises, <b>just transparency.</b> </p> </div> </div> <div> <span class="text-sm">Step 04.</span> <h2 class="font-semibold text-3xl">
Project Request
</h2> <div class="space-y-3 mt-5"> <p>
With everything in place, the real work begins. 
            I'll start building your project while keeping you updated along the way.
</p> <p>
Expect clear communication and regular progress reports through Slack, 
            email, or whatever works best for you. No guesswork, just steady progress.
</p> </div> </div> <div> <span class="text-sm">Step 05.</span> <h2 class="font-semibold text-3xl">
Launch
</h2> <div class="space-y-3 mt-5"> <p>
With everything in place, the real work begins. 
            I'll start building your project while keeping you updated along the way.
</p> <p>
Expect clear communication and regular progress reports through Slack, 
            email, or whatever works best for you. No guesswork, just steady progress.
</p> </div> </div> </section> ` })}`;
}, "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/process.astro", void 0);

const $$file = "/media/leanug/Kingston 120/Astro/scriptingpixels-v2/src/pages/process.astro";
const $$url = "/process";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Process,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
