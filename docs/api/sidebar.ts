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
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "api/authentication",
      },
      items: [
        {
          type: "doc",
          id: "api/create-token",
          label: "Create token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/refresh-token",
          label: "Refresh token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Organizations",
      link: {
        type: "doc",
        id: "api/organizations",
      },
      items: [
        {
          type: "doc",
          id: "api/list-organizations",
          label: "List organizations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-organization",
          label: "Create organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-organization",
          label: "Get organization by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-organization",
          label: "Update organization",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-organization",
          label: "Delete organization (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      link: {
        type: "doc",
        id: "api/products",
      },
      items: [
        {
          type: "doc",
          id: "api/list-products",
          label: "List products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-product",
          label: "Create product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-product",
          label: "Get product by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-product",
          label: "Update product",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-product",
          label: "Delete product (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants",
      link: {
        type: "doc",
        id: "api/tenants",
      },
      items: [
        {
          type: "doc",
          id: "api/list-tenants",
          label: "List tenants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-tenant",
          label: "Create tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-tenant",
          label: "Get tenant by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-tenant",
          label: "Update tenant",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-tenant",
          label: "Delete tenant (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "api/users",
      },
      items: [
        {
          type: "doc",
          id: "api/list-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-user",
          label: "Get user by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-user",
          label: "Update user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-user",
          label: "Delete user (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Permissions",
      link: {
        type: "doc",
        id: "api/permissions",
      },
      items: [
        {
          type: "doc",
          id: "api/list-permissions",
          label: "List permissions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-permission",
          label: "Create permission",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-permission",
          label: "Get permission by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-permission",
          label: "Update permission",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-permission",
          label: "Delete permission (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      link: {
        type: "doc",
        id: "api/roles",
      },
      items: [
        {
          type: "doc",
          id: "api/list-roles",
          label: "List roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-role",
          label: "Create role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-role",
          label: "Get role by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-role",
          label: "Update role",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-role",
          label: "Delete role (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Role Permissions",
      link: {
        type: "doc",
        id: "api/role-permissions",
      },
      items: [
        {
          type: "doc",
          id: "api/list-role-permissions",
          label: "List permissions for role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/set-role-permissions",
          label: "Set permissions for role",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Role Assignments",
      link: {
        type: "doc",
        id: "api/role-assignments",
      },
      items: [
        {
          type: "doc",
          id: "api/list-role-assignments",
          label: "List role assignments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-role-assignment",
          label: "Create role assignment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-role-assignment",
          label: "Get role assignment by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-role-assignment",
          label: "Delete role assignment (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Entitlements",
      link: {
        type: "doc",
        id: "api/entitlements",
      },
      items: [
        {
          type: "doc",
          id: "api/list-entitlements",
          label: "List entitlements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-entitlement",
          label: "Create entitlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-entitlement",
          label: "Get entitlement by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-entitlement",
          label: "Update entitlement",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-entitlement",
          label: "Delete entitlement (soft delete)",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
