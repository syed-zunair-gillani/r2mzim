import { defineField } from "sanity";

export default {
  name: 'merchandising',
  title: 'Merchandising Page',
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
    { type: "string", name: "caption", title: "Caption" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
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

    
  ],
};
