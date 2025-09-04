---
author: Leandro Ubilla
avatar: leandro-ubilla.webp
image: cover.webp
title: How to Create a Hover Swap Micro-Interaction for Social Media Icons in Framer
description: Learn how to create a hover swap micro-interaction for social media icons in Framer, using images or SVGs, with smooth animations and reduced opacity.
date: 2025-09-03
category: {
  label: "Framer",
  slug: "framer"
}
slug: how-to-hover-swap-micro-interaction-social-icons-framer
tags: ["Framer", "Micro Interaction", "Social Icons"]
published: true
featured: true
pinned: false
---


# How to Create a Hover Swap Micro-Interaction for Social Media Icons in Framer

Hi! Today I’m going to show you how to create a micro-interaction in Framer for social media icons. It works with both images and SVGs, where on hover the icon moves up and reappears from below with reduced opacity.

This is an interaction I made for my real estate template **Somner**, and I wanted to share the process with you.

![swap-social-icons-component.webp](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-11-03-image.webp)

At the end, you’ll be able to create reusable components for sections like **contact** or anywhere you need social icons that feel alive.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-16-48-45-image.webp)

This is the structure of the component.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-16-50-37-image.webp)

## Step 1: Create the Base Frame

- Start with a **24x24 Frame**.

- Name it **Swap Social Icon**.

Then convert it into a **Component** with `Ctrl + Alt + K`.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-16-52-05-image.webp)

## Step 2: Set Up the Default State

- Rename the variant to **Default**.

- Wrap your image in a **Stack**.

- Use these values (see screenshot for reference).

This keeps everything neatly aligned and ready for animation.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-16-53-14-image.webp)

## Step 3: Configure the Image

- Adjust the **Image** properties (see values in the screenshot).

- This is what controls how your icon will scale and animate smoothly.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-12-59-image.webp)

Convert the parent element into a Stack, Distribute : Start

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-15-30-image.webp)

Create an Image variable.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-19-09-image.webp)

Duplicate the Icon Wrapper. Then set the parent element to `Overflow: Hidden` and keep `Distribute: Start`.![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-20-33-image.webp)

Add a Hover variant.![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-22-27-image.webp)

And change Distribute from Start to End.

![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-23-13-image.webp)

First drop the component into your project, then upload an icon image or SVG, and hit preview.

If you want to reduce the hover opacity, just select the Hover variant and set **Opacity to 50%**.![](/media/blog/how-to-hover-swap-micro-interaction-social-icons-framer/2025-09-03-19-28-04-image.webp)

And that’s it, you just built a hover swap micro interaction in Framer.  
Now you can reuse this component anywhere: contact sections, footers, or even custom buttons.

Small detail, big impact.

Try it out in your next project and see how much more polished your UI feels.
