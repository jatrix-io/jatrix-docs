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
          id: "api/list-users-by-permission",
          label: "List users by effective permission",
          className: "api-method get",
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
        {
          type: "doc",
          id: "api/activate-user",
          label: "Activate user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reject-user",
          label: "Reject user",
          className: "api-method post",
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
      label: "User Permission Grants",
      link: {
        type: "doc",
        id: "api/user-permission-grants",
      },
      items: [
        {
          type: "doc",
          id: "api/list-user-permission-grants",
          label: "List user permission grants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-user-permission-grant",
          label: "Grant or deny a single permission to a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-user-permission-grant",
          label: "Get a user permission grant by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-user-permission-grant",
          label: "Revoke (soft delete) a user permission grant",
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
    {
      type: "category",
      label: "Biometric",
      link: {
        type: "doc",
        id: "api/biometric",
      },
      items: [
        {
          type: "doc",
          id: "api/enroll-biometric",
          label: "Enroll biometric",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/verify-biometric",
          label: "Verify biometric (1:1)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-biometric-enrollments",
          label: "List biometric enrollments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-biometric-enrollment",
          label: "Delete biometric enrollment (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Groups",
      link: {
        type: "doc",
        id: "api/groups",
      },
      items: [
        {
          type: "doc",
          id: "api/list-groups",
          label: "List groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-group",
          label: "Create group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-group",
          label: "Get group by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-group",
          label: "Update group",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-group",
          label: "Delete group (soft delete)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-group-members",
          label: "List group members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-group-member",
          label: "Add user to group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/remove-group-member",
          label: "Remove user from group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-user-groups",
          label: "List groups for a user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "User Profiles",
      link: {
        type: "doc",
        id: "api/user-profiles",
      },
      items: [
        {
          type: "doc",
          id: "api/get-user-profile",
          label: "Get user profile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsert-user-profile",
          label: "Upsert user profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/list-user-documents",
          label: "List user documents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-user-document",
          label: "Create user document (URL already known)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-user-document-status",
          label: "Update document status",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-user-document",
          label: "Delete user document (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "File Storage",
      link: {
        type: "doc",
        id: "api/file-storage",
      },
      items: [
        {
          type: "doc",
          id: "api/upload-tenant-logo",
          label: "Upload tenant logo",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/upload-user-avatar",
          label: "Upload user avatar",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/upload-user-document",
          label: "Upload user document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Brand",
      link: {
        type: "doc",
        id: "api/brand",
      },
      items: [
        {
          type: "doc",
          id: "api/get-brand-config",
          label: "Get brand config by subdomain",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
