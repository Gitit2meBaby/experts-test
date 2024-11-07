import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Services | Excel Consultancy Services",
  description:
    "We provide Microsoft office services, Custom office Solutions, VBA and Macro Development, Cloud Based Solution with Azure. Call us today 1300 10 28 10",

  // OpenGraph
  openGraph: {
    title: "Our Microsoft Office Services",
    description:
      "We provide Microsoft office services, Custom office Solutions, VBA and Macro Development, Cloud Based Solution with Azure. Call us today 1300 10 28 10",
    url: "https://www.officeexperts.com.au/services/microsoft-office/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core Office services
    "Microsoft Office services",
    "Office consulting services",
    "Office solutions provider",
    "Custom Office solutions",
    "Office integration services",

    // Service-specific
    "VBA development",
    "Macro development",
    "Office automation",
    "Cloud solutions Azure",
    "Office migration services",

    // Location-based
    "Office consultants Australia",
    "Microsoft consultancy Sydney",
    "Office experts Melbourne",
    "Office solutions Brisbane",

    // Industry-specific
    "Business Office solutions",
    "Enterprise Office services",
    "Corporate Office consulting",
    "Office automation solutions",

    // Technology combinations
    "Office 365 migration",
    "Azure integration",
    "Office cloud services",
    "Microsoft consulting",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Our Microsoft Office Services",
    description:
      "We provide Microsoft office services, Custom office Solutions, VBA and Macro Development, Cloud Based Solution with Azure. Call us today 1300 10 28 10",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-office/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
