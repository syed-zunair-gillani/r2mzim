import { defineField } from "sanity";

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    // SEO Section 
    { type: "string", name: "name", title: "Name" },
    { type: "string", name: "designation", title: "Designation" },
    { type: "image", name: "Icon", title:"Image" },
    defineField({
      title: "Caption",
      name: "caption",
      type: "text",
    }),
  ],
};
