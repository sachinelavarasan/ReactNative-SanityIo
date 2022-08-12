export default {
    name: "menucategory",
    title: "Menu Category",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Category name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image of Category",
        type: "image",
      },
    ],
  };
  