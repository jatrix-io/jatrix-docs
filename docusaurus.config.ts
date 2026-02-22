// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  future: {
    experimental_faster: (process.env.DOCUSAURUS_FASTER ?? "true") === "true",
    v4: true,
  },
  title: "Jatrix Docs",
  tagline: "SaaS Governance Engine — Identity, Multi-tenancy, Authorization",
  url: "https://jatrix.cloud",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  organizationName: "jatrix",
  projectName: "jatrix-docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "Jatrix",
      logo: {
        alt: "Jatrix Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          label: "API Reference",
          position: "left",
          to: "/docs/api",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/docs/intro" },
            { label: "API Reference", to: "/docs/api" },
          ],
        },
        {
          title: "ProCode Ind",
          items: [
            {
              label: "procodeind.com",
              href: "https://procodeind.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ProCode Ind`,
    },
    prism: {
      additionalLanguages: ["json", "bash", "go", "javascript"],
    },
    languageTabs: [
      { highlight: "bash", language: "curl", logoClass: "curl" },
      { highlight: "go", language: "go", logoClass: "go" },
      { highlight: "javascript", language: "javascript", logoClass: "nodejs" },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          jatrix: {
            specPath: "openapi/jatrix-v1.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
