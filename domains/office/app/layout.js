import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";
import CookieConsent from "../../../components/CookieConsent";

import "./global.css";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Office Consulting | Office Solutions | Office Experts Group",
  description:
    "Leading Microsoft Office consulting and solutions provider in Australia. Specializing in comprehensive Office solutions, integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Group | Microsoft Office Consulting & Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Australia. Specializing in comprehensive Office solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core Office services
    "Microsoft Office consulting",
    "Office solutions Australia",
    "Office programmers Australia",
    "Office automation solutions",
    "Office integration services",
    "Office 365 migration services",

    // Location-based
    "Office consultants Sydney",
    "Office solutions Melbourne",
    "Office consultants Brisbane",
    "Office specialists Perth",

    // Service-specific long tail
    "custom Office development",
    "Office business automation",
    "Office VBA development",
    "Office workflow automation",
    "Office template solutions",

    // Industry-specific
    "corporate Office solutions",
    "government Office services",
    "enterprise Office consulting",
    "business Office automation",

    // Technology combinations
    "Office SharePoint integration",
    "Office Azure solutions",
    "Office cloud migration",
    "Office business solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group | Microsoft Office Consulting & Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Australia. Specializing in comprehensive Office solutions, integration, and business automation.",
    images: [
      "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/",
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
  return (
    <html>
      <body>
        <Header />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
