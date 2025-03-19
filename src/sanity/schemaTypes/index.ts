import { type SchemaTypeDefinition } from 'sanity'
import homePage from './home-page'
import aboutPage from './about-page'
import team from './team'
import merchandisingPage from './merchandising-page'
import distributionPage from './distribution-page'
import principalsPage from './principals-page'
import warehousingPage from './warehousing-page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, aboutPage, team, merchandisingPage, distributionPage, warehousingPage, principalsPage],
}
