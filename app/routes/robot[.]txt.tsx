import { DOCS_DOMAIN } from "~/contents/navigation/domain";

export const loader = async () => {
  const content = `
    User-agent: *
    Allow: /

    Allow: /$
    Allow: /*/$ 
    Allow: /docs/
    Allow: /docs/*/
    Allow: /blog/
    Allow: /blog/*/
    Allow: /*/docs/
    Allow: /*/docs/*/
    Allow: /*/blog/
    Allow: /*/blog/*/

    # Sitemap
    Sitemap: ${DOCS_DOMAIN}/sitemap.xml
  `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
