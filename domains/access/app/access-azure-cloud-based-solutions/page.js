import React from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/access-azure-cloud-solutions/",
      url: "https://www.accessexperts.com.au/access-azure-cloud-solutions/",
      name: "Microsoft Access Azure Cloud Solutions & Integration Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional Microsoft Access Azure cloud integration services. Our experts deliver seamless database migration, cloud optimization, and Azure integration solutions.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/access-azure-cloud-solutions/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/azure-cloud-solutions/"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.accessexperts.com.au/#website",
      url: "https://www.accessexperts.com.au/",
      name: "Access Experts: Azure Cloud Integration Services",
      description:
        "Expert Microsoft Access and Azure Cloud Integration Solutions",
      publisher: {
        "@id": "https://www.accessexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.accessexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.accessexperts.com.au/#organization",
      name: "Access Experts",
      url: "https://www.accessexperts.com.au/",
      telephone: "1300 10 28 10",
      email: "consult@officeexperts.com.au",
      priceRange: "$50-$5000",
      paymentAccepted: "Credit Card, Cheque, Direct Debit",
      currenciesAccepted: "AUD",
      openingHours: "Mo-Fr 09:00-17:00",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.accessexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 326,
        height: 107,
        caption: "Access Experts",
      },
      image: {
        "@id": "https://www.accessexperts.com.au/#/schema/logo/image/",
      },
      sameAs: ["https://www.facebook.com/MSOfficeExperts"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "112",
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};

export default Page;
