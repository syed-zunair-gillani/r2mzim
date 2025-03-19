import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home') // Ensure a single 'home' document
        ),
      S.listItem()
        .title('About Page')
        .schemaType('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about') // Ensure a single 'about' document
        ),
      S.listItem()
        .title('Merchandising Page')
        .schemaType('merchandising')
        .child(
          S.document()
            .schemaType('merchandising')
            .documentId('merchandising') // Ensure a single 'merchandising' document
        ),
      S.listItem()
        .title('Distribution Page')
        .schemaType('distribution')
        .child(
          S.document()
            .schemaType('distribution')
            .documentId('distribution') // Ensure a single 'distribution' document
        ),
      S.listItem()
        .title('Warehousing Page')
        .schemaType('warehousing')
        .child(
          S.document()
            .schemaType('warehousing')
            .documentId('warehousing') // Ensure a single 'warehousing' document
        ),
      S.listItem()
        .title('Principals Page')
        .schemaType('principals')
        .child(
          S.document()
            .schemaType('principals')
            .documentId('principals') // Ensure a single 'principals' document
        ),
      // Include other documents (exclude these to prevent listing them twice)
      ...S.documentTypeListItems().filter((item: any) =>
        !["home", "about", "merchandising", "distribution", "warehousing", "principals"].includes(item.getId())
      ),
    ]);