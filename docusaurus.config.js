module.exports = {
  title: "PaymentsDS",
  tagline: "Integrate with PaymentsDS and ",
  url: "https://paymentsds.netlify.app",
  baseUrl: "/",
  favicon: "img/payments-logo.png",
  organizationName: "PaymentsDS", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  customFields: {
    span: "#MakeYourTransactionsEasy",
  },
  themeConfig: {
    disableDarkMode: false,
    navbar: {
      // title: "PaymentsDS",
      logo: {
        alt: "PaymentsDS Logo",
        src: "img/payments.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "right",
        },
        {
          href: "https://github.com/PaymentsDS/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "JavaScript SDK",
              to: "docs/javascript/usage",
            },
            {
              label: "PHP SDK",
              to: "docs/php/usage",
            },
            {
              label: "Python SDK",
              to: "docs/python/usage",
            },
            {
              label: "Ruby SDK",
              to: "docs/ruby/usage",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PaymentsDS/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PaymentsDS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
