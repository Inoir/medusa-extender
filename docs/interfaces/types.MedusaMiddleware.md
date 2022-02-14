[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaMiddleware

# Interface: MedusaMiddleware

[types](../modules/types.md).MedusaMiddleware

**`interface`**
Describe a custom middleware instance.

## Table of contents

### Methods

- [consume](types.MedusaMiddleware.md#consume)

## Methods

### consume

▸ **consume**(`err`, `req`, `res`, `next`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |
| `req` | [`MedusaAuthenticatedRequest`](../modules/types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/6eb943e/src/types.ts#L152)
