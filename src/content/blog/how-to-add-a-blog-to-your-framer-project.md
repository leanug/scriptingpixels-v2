---
author: Leandro Ubilla
avatar: leandro-profile.png
image: cover.webp
title: How to Add a Blog to Your Framer Project
description: Learn how to add a fully functional blog to your Framer site from scratch.
date: 2025-07-23
category: {
  label: "Framer",
  slug: "framer"
}
slug: how-to-add-a-blog-to-your-framer-project
published: true
featured: true
pinned: true
---

## Table of Contents

- [How to add a blog to a blank project](#how-to-add-a-blog-to-a-blank-project)  
- [How to add a blog to a project with the CMS already set up](#how-to-add-a-blog-to-a-project-with-the-cms-already-set-up)


## Starting with a blank Framer project? No problem.

If your template doesn’t include a blog by default, you'll need to set things up manually. That means creating your own CMS items from scratch, but don’t worry, it’s simpler than it sounds.

In this quick guide, I’ll walk you through how to add a blog to any Framer site, even if your starting point is completely empty.

![Framer add blog button](/media/blog/how-to-add-a-blog-to-your-framer-project/1.webp)

We’re starting with a blank canvas.
Head over to the CMS panel and click “Add Blog.”
Framer will automatically create two collections for you:
one for your blog posts, and one for blog categories.

## Why Are Categories and Blog Posts Stored Separately?

When building a blog or CMS, you’ll often see that categories and blog posts are managed as separate collections. Here’s why:

### Better Organization & Reusability  
Categories act like labels or folders for your posts. By keeping them separate, you can easily add, edit, or remove categories without touching individual blog posts.  
This means if you want to rename or restructure a category, you do it once, and all posts under that category update automatically.

### Faster Queries & Performance  
Separating categories allows the system to fetch posts and categories independently.  
For example, when showing a list of categories, the CMS doesn’t have to scan through every post, improving speed and scalability.

### Cleaner Data Structure  
Posts contain their own content, metadata, images, and links. Categories are simpler objects with just a name and maybe a description or slug.  
Separating these keeps your database or content files cleaner and easier to maintain.

### More Flexibility in Design & Filtering  
Since categories are their own entities, you can build dynamic filters, menus, or tag clouds that update based on category data, without needing to parse through posts every time.

And now we get 4 categories and 5 blog posts

![Blog posts and categories created for us by Framer](/media/blog/how-to-add-a-blog-to-your-framer-project/2.webp)

Now, if we click **Back**, we can see this:

![Framer left menu showing the pages list](/media/blog/how-to-add-a-blog-to-your-framer-project/3.webp)

## After Creating the Blog

Once you create your blog CMS collection in Framer, your site structure automatically expands. You get:

- **Home** – Your main landing page, the front door of your site.

- **/blog** – A dynamic CMS route that lists all your articles. This is the URL where all your articles will be shown, for example, `yourdomain.com/blog`.

And under `/blog`, you'll see something like:

- **Articles • 5** – This shows you have 5 blog posts in your CMS, each one pulling from your collection.

✅ Clean structure  
✅ SEO-ready  
✅ Scalable as hell

Now you're set to start dropping knowledge bombs.

## How to add a blog to a project with the CMS already set up

If you're using a template or working on a project where the CMS is already set up, you might not see the Add Blog button in the CMS panel. In that case, there's a simple workaround.

![Framer left menu no new blog option](/media/blog/how-to-add-a-blog-to-your-framer-project/16.webp)

Go back to the Framer dashboard, create a new blank project, and follow the same steps to add a blog. Once it's created, you can copy the CMS structure into your main project.

![Framer dashboard new project](/media/blog/how-to-add-a-blog-to-your-framer-project/15.webp)

With this new blank project open, create a new blog by following the steps from the first section of this post.

Next, head over to the CMS tab.

![Framer dashboard CMS tab](/media/blog/how-to-add-a-blog-to-your-framer-project/5.webp)

In the CMS tab, right-click **Articles** and choose **Copy**.

![Framer dashboard copy collection](/media/blog/how-to-add-a-blog-to-your-framer-project/4.webp)

Go to the Framer dashboard and open your target project. In my case, I’m using the one from the micro animations tutorial.

![Framer dashboard project](/media/blog/how-to-add-a-blog-to-your-framer-project/19.webp)

In the CMS tab, right-click anywhere on the left panel (don’t click on any of the collections) and choose Paste.
Categories will be included automatically, no need to copy them separately.

![Framer dashboard paste collection](/media/blog/how-to-add-a-blog-to-your-framer-project/17.webp)

As you can see, all the data has been copied from the other project into this one, so you don’t have to waste time setting up all the fields for your Blog or Categories collections.

![Framer dashboard articles and categories collections](/media/blog/how-to-add-a-blog-to-your-framer-project/18.webp)

## ✅ Done. What’s Next?

As you can see, you just saved a ton of time.

No rebuilding collections. No messing with field types. No wondering what you forgot.

You’ve now got a fully functional blog, complete with posts, categories, and a clean URL structure, ready to go.

### This gives you:

A scalable setup you can keep adding to

Better SEO right out of the gate

Less time fiddling, more time publishing

### Next step? Start writing.

Even if it’s just one article a week, it compounds.

Your blog is now a growth engine. Don’t let it sit idle.