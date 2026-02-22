import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/jatrix-api",
    },
    {
      type: "category",
      label: "Health",
      link: {
        type: "doc",
        id: "api/health",
      },
      items: [
        {
          type: "doc",
          id: "api/get-health",
          label: "Health check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-ready",
          label: "Readiness check",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
