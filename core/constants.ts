import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';
import { BASE_URL, SITE_NAME, OG_IMAGE, OG_DESCRIPTION } from '../template'

export const defaultMetaTags: MetaTags = {
  canonical: BASE_URL,
  description: OG_DESCRIPTION,
  image: OG_IMAGE,
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: SITE_NAME,
  type: PageType.website
};
