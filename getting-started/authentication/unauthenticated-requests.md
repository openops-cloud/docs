# Unauthenticated requests and user settings

## Overview

Some API routes require a user session. When a request is made without a valid access token, the API can return an authorization-related response.

This page documents the behavior of the **user settings** endpoint.

## Prerequisites

- Access to an OpenOps deployment.
- An HTTP client (for example, `curl`).

## User settings endpoint

The user settings endpoint is mounted at:

- `GET /v1/users/me/settings`
- `PUT /v1/users/me/settings`

The route module registers the controller under the `/v1/users/me/settings` prefix.

## Authentication expectations

The `PUT /v1/users/me/settings` route explicitly restricts access to a `USER` principal:

```ts
config: {
  allowedPrincipals: [PrincipalType.USER],
}
```

Requests without a valid access token do not have a `USER` principal.

### Access tokens

The API authentication layer looks for an access token in either of these locations:

- Cookie named `token`
- `Authorization` header in the form `Bearer <token>`

This logic is implemented in `AccessTokenAuthnHandler`.

## Example: calling user settings without a token

```bash
curl -i https://app.openops.com/api/v1/users/me/settings
```

## Troubleshooting

### Getting a response you did not expect

Route access checks are performed by the security handler chain:

- Authentication handlers populate `request.principal`.
- Authorization handlers validate `request.principal.type` against the route configuration.

If a request is missing a `Bearer` token (and has no `token` cookie), the request uses an `UNKNOWN` principal created by the anonymous authentication handler.

## Related documentation

- [OpenAPI UI endpoint](../openapi.md)