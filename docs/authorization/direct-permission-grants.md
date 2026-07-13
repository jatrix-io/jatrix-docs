# Direct Permission Grants

Direct user permission grants let you grant or revoke a **single permission** for a
**single user**, without creating or assigning a role. They were introduced in
[ADR-0011](https://github.com/jatrix-io/jatrix-spec/blob/main/decisions/ADR-0011-direct-user-permission-grants.md)
to remove the need for bespoke, single-permission roles ("role explosion") when only
one user needs an exception.

## What a grant is

A grant is a row scoped to `(organization, tenant, product, user, permission)` with an
`effect`:

- **`ALLOW`** — the user has this permission, even if no role grants it.
- **`DENY`** — the user does not have this permission, even if a role grants it.

Grants are explicit, individually auditable database rows — not inherited, derived, or
computed. This keeps them compatible with Jatrix's "no implicit inheritance" rule
(authorization matrix §7): a grant is a fact you assert, not a policy that's inferred.

See the [API Reference](/docs/api) ("User Permission Grants" tag) for the full
request/response shapes, or use the endpoints directly:

- `POST /v1/organizations/{orgId}/user-permission-grants` — create a grant
- `GET /v1/organizations/{orgId}/user-permission-grants` — list grants
- `GET /v1/organizations/{orgId}/user-permission-grants/{id}` — get a grant
- `DELETE /v1/organizations/{orgId}/user-permission-grants/{id}` — revoke (soft-delete) a grant

## ALLOW vs DENY

| Effect  | Effect on the user                                                   |
|---------|-----------------------------------------------------------------------|
| `ALLOW` | Grants the permission directly. Works even with no role assignment.   |
| `DENY`  | Removes the permission, overriding any role that would otherwise grant it. |

A user can hold a permission from `ALLOW` alone — no role assignment is required.

## DENY-wins precedence

Permission resolution is:

```
effective = (role_permissions ∪ ALLOW grants) − DENY grants
```

**DENY always wins**, matched by `permission_id`, regardless of whether the permission
came from a role or from an `ALLOW` grant. There is no priority/ordering to configure —
if a `DENY` grant exists for a permission, that permission is removed from the user's
effective set, full stop.

If DENY grants remove every permission a user would otherwise have, the effective set
is empty and authorization fails with `ROLE_ASSIGNMENT_REQUIRED` (see authorization
matrix §10) — the same failure code used for a user with no role at all.

Entitlement gating is unaffected: a grant cannot make a permission effective for a
tenant/product that has no active entitlement.

## When to use a grant vs a role

| Use a **role** when...                                   | Use a **grant** when...                                  |
|------------------------------------------------------------|-------------------------------------------------------------|
| The permission set is shared by a group of users (a job function, a team). | One specific user needs one specific permission exception. |
| You expect to onboard more users with the same permissions. | You'd otherwise have to create a throwaway, single-permission role. |
| The permission should change together for everyone who holds it. | You need to temporarily revoke one permission from one user without touching their role. |

Rule of thumb: **role = shared permission set, grant = per-user exception.** If you
find yourself creating a role that only one user will ever hold, use a grant instead.
