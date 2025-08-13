---
author: Leandro Ubilla
avatar: leandro-ubilla.webp
image: cover.webp
title: "Framer and Webflow Took Over My Client Requests: Here’s Why I Dropped WordPress"
description: My client started choosing Framer and Webflow over WordPress, and I share the story behind the shift and what I learned.
date: 2025-08-13
category: {
  label: "Web Development",
  slug: "web-development"
}
slug: framer-and-webflow-took-over-my-client-requests
tags: ["Framer", "Webflow", "WordPress"]
published: true
featured: true
pinned: false
---

For years, almost every project I worked on started the same way.

The design agency would send me the designs or the changes they wanted to make to a site, and I would implement them in WordPress, go through feedback, revisions, and then delivery.

“Can you update the header and add a form?” Two hours later, I was still wrestling with a bloated theme, outdated plugins, and a dashboard that looked like it had not been touched since 2012.

The most difficult case was a site where the home page was split into four moving sections. It was not customizable at all and required major changes. On top of that, it was difficult to update because the theme’s name was already taken by another template, which caused conflicts.

I got tired of wrestling with WordPress themes. Every “simple” change turned into a scavenger hunt through template overrides, hooks, and endless CSS tweaks. Change one thing, and three other things would break. It felt less like customization and more like defusing a bomb while blindfolded.

So I decided to switch to something better. I first tried Wix.

![](/media/blog/framer-and-webflow-took-over-my-client-requests/2025-08-13-00-49-03-image.webp)

Although I like Squarespace more, it does not have a free plan.

![](/media/blog/framer-and-webflow-took-over-my-client-requests/2025-08-13-00-50-25-image.webp)

 I learned from some YouTube tutorials and published a gig on Fiverr.

![](/media/blog/framer-and-webflow-took-over-my-client-requests/2025-08-13-00-52-09-image.webp)

It was my first gig on Fiverr. I landed it after a month, for someone in Israel. A simple mockup for $20.

But I did not like it much. It was hard to make templates and customize them.

Then I discovered some YouTube videos about Webflow, so I tried learning it with a Udemy course from an instructor named Vako Shvili.

![](/media/blog/framer-and-webflow-took-over-my-client-requests/61250540f4bb236999a00bd3a8ac81567c8f090c.webp)

I never even started half of the Udemy courses I bought.

There was also Framer. Many designers I follow on X use it because it is no-code, simpler than Webflow, and quite similar. With just a few videos from Framer University and some YouTubers, you can already start building.

I did the same as I had done with Wix: I posted gigs for Webflow and Framer, alongside my WordPress and design gigs.

Then something changed.

One client asked for Webflow.  
Another requested Framer.

My first paid Webflow gig was for a German site, meetovo.com. 

They initially asked me to integrate Swiper.js, then to create a Figma prototype, a set of dashboards with new features for their HR web app, and finally, to design social media content. I turned down the social media role because I wasn’t comfortable with their style, so I focused solely on the dashboards and the prototype with all the new interactions.

After that, I didn’t hear from them again.

Before long, nobody was asking for WordPress anymore.

I took the opportunity to finally remove all my WordPress gigs, and the agency I worked with stopped sending me WordPress projects as well.

I no longer even offer WordPress as an option.

Here is why I stopped using WordPress and why you might want to do the same. I am not alone either. On forums like Reddit, dozens of other developers are ditching it for the same reasons:

- **They are just faster.** No endless plugin updates, no PHP errors. You can go from idea to live site in hours instead of weeks.

- **Design freedom without the mess.** No fighting against theme templates or WordPress’s outdated block editor. You drag, drop, and tweak until it looks right.

- **No maintenance headaches.** Forget security patches, server migrations, and plugins breaking each other.

- **Better performance out of the box.** Framer and Webflow sites are optimized for speed and SEO from the start.

- **Easier for clients to update.** Clients do not need training. The CMS is visual, not a clunky dashboard full of settings they will never use.

- **Built-in hosting and CDN.** No need to manage hosting providers or set up caching. It is already handled.

All of these reasons boil down to one simple fact: WordPress adds a lot of unnecessary complexity. Wait until you see the source code of a site built with Elementor, there are extra <code>&lt;div&gt;</code>s everywhere. From bloated HTML full of &lt;div&gt; wrappers to endless plugin conflicts, it slows down development and maintenance. 

Framer and Webflow strip all that away, they give you a visual canvas, clean code, and a hosting setup that just works. You focus on building and designing, not wrestling with updates or debugging a broken theme.

**Example: a simple button**

**WordPress (with a page builder like Elementor):**

```html
<div class="elementor-element elementor-element-123 elementor-button-wrapper">
  <div class="elementor-button-align-wrapper">
    <a href="#" class="elementor-button elementor-size-md">
      <span class="elementor-button-content-wrapper">
        <span class="elementor-button-text">Click Me</span>
      </span>
    </a>
  </div>
</div>
```

Framer/Webflow equivalent (clean and minimal):

```html
<a href="#" class="button">Click Me</a>
```

For developers tired of fighting the WordPress ecosystem, switching to Framer or Webflow simply makes building and maintaining sites easier.

## When SaaS Tools Make Sense

I get why some developers don’t want to use SaaS platforms, some even turn down clients who ask for them.

As one Redditor put it:

> “We pass on clients who want to use a SaaS platform. They're generally not serious about marketing the site or don’t see the value in having control of the code. Either way, that's not a good fit for us.”

And another added:

> “Why work with someone else’s limitations that you’re going to get blamed for? No thanks.”

Yes, there can be other problems too. Plans can change, pricing can spike. But for a large portion of the web design market, these tools are a solid alternative to WordPress and they simplify your life.

And if things ever go south, you can always migrate to a more code-controlled option like Next.js or Astro.js.

**Happy building.**

This is Leandro... signing off from the USCSS Sulaco.

![](/media/blog/framer-and-webflow-took-over-my-client-requests/27162653a5fdd69aea9b77c83f14d7975588d0ef.webp)
