import { defineField } from "sanity";

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // SEO Section 
    defineField({
      title: "Meta Title",
      name: "meta_title",
      type: "string",
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "text",
    }),
    defineField({
      title: "Hero",
      type: "object",
      name: "hero",
      fields: [
        { type: "image", name: "backgroundImage", title: "Background Image" },
        { type: "string", name: "title", title: "Title" },
        { type: "string", name: "caption", title: "Caption" },
        { type: "string", name: "link", title: "Link" }
      ]
    }),
    defineField({
      title: "Our Features",
      type: "object",
      name: "our_features",
      fields: [
        { type: "string", name: "caption", title: "Caption" },
        {
          title: "Feature",
          type: "array",
          name: "feature",
          of: [
            {
              type: "object",
              name: "inline",
              fields: [
                { type: "image", name: "Icon" },
                { type: "string", name: "title" },
                { type: "string", name: "info" }
              ]
            }
          ],
        }
      ]
    }),

    defineField({
      title: "Our Partnership",
      type: "object",
      name: "our_partnership",
      fields: [
        { type: "string", name: "caption", title: "Caption" },
        {
          title: "Partnership Images",
          name: "images",
          type: "array",
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              }
            }
          ],
          options: {
            layout: 'grid',
          },
        }
      ]
    }),

    defineField({
      title: "Ultimate Transport",
      type: "object",
      name: "ultimate_transport",
      fields: [
        { type: "string", name: "caption", title: "Caption" },
        { type: "string", name: "button_link", title: "Button Link" },
        {
          title: "Feature",
          type: "array",
          name: "feature",
          of: [
            {
              type: "object",
              name: "inline",
              fields: [
                { type: "image", name: "Icon" },
                { type: "string", name: "stats" },
                { type: "string", name: "title" },
                { type: "string", name: "info" }
              ]
            }
          ],
        }
      ]
    }),
  ],
};
