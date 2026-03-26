// src/data/authors.ts

export const authors = {
  leandro: {
    name: "Leandro Ubilla",
    avatar: "leandro-ubilla.webp",
    twitter: "https://x.com/leandroubilla_",
    bio: "Designer and Developer building ScriptingPixels."
  },
  guest: {
    name: "John Doe",
    avatar: "default.webp",
    twitter: "https://x.com/johndoe",
    bio: "A guest contributor."
  }
};

export type AuthorKey = keyof typeof authors;