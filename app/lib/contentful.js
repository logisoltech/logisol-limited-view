import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS;

if (!spaceId || !accessToken) {
  console.warn('Contentful environment variables are not set. Please add NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS to your .env.local file.');
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});
