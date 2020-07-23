module.exports = {
  title: "PaymentsDS",
  tagline: "Integrate with PaymentsDS and ",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/payments.png",
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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
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
