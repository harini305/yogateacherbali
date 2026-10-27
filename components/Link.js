import NextLink from "next/link";

// Site-wide link: no automatic prefetching. A page is fetched only when the
// visitor actually clicks, instead of for every link that scrolls into view,
// which keeps CDN requests down. Pass prefetch explicitly to override.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
