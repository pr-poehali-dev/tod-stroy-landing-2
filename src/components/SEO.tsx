import { Helmet } from "react-helmet-async";

const SITE = "https://todstr.ru";
const SITE_NAME = "ТОД Строй";
const DEFAULT_IMG = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/27d058df-1613-40ce-a859-9f969b97a803.jpg";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object | object[];
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical = "/",
  ogImage = DEFAULT_IMG,
  ogType = "website",
  keywords,
  schema,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes("ТОД Строй") ? title : `${title} | ТОД Строй`;
  const canonicalUrl = `${SITE}${canonical}`;

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <html lang="ru" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

/* ── Готовые схемы ──────────────────────────────────── */

export const SCHEMA_BREADCRUMB = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": `${SITE}${item.url}`,
  })),
});

export const SCHEMA_SERVICE = (name: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "ТОД Строй",
    "url": SITE,
    "telephone": "+7-906-001-46-66",
  },
  "areaServed": { "@type": "City", "name": "Москва" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "RUB",
    "price": price,
    "availability": "https://schema.org/InStock",
  },
});

export const SCHEMA_ARTICLE = (title: string, description: string, image: string, datePublished: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "author": {
    "@type": "Organization",
    "name": "ТОД Строй",
    "url": SITE,
  },
  "publisher": {
    "@type": "Organization",
    "name": "ТОД Строй",
    "logo": { "@type": "ImageObject", "url": `${SITE}/favicon.svg` },
  },
});
