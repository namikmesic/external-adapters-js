# FINALTO

![1.1.0](https://img.shields.io/github/package-json/v/smartcontractkit/external-adapters-js?filename=packages/sources/finalto/package.json) ![v3](https://img.shields.io/badge/framework%20version-v3-blueviolet)

This document was generated automatically. Please see [README Generator](../../scripts#readme-generator) for more info.

## Environment Variables

| Required? |      Name       |          Description          |  Type  | Options | Default |
| :-------: | :-------------: | :---------------------------: | :----: | :-----: | :-----: |
|    ✅     | WS_API_USERNAME | API username for WS endpoint  | string |         |         |
|    ✅     | WS_API_PASSWORD | API password for WS endpoint  | string |         |         |
|    ✅     | WS_API_ENDPOINT | WS endpoint for Data Provider | string |         |         |

---

## Data Provider Rate Limits

There are no rate limits for this adapter.

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                               Options                                                               | Default |
| :-------: | :------: | :-----------------: | :----: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [commodities](#quote-endpoint), [forex](#quote-endpoint), [fx](#quote-endpoint), [quote](#quote-endpoint), [stock](#quote-endpoint) | `quote` |

## Quote Endpoint

Supported names for this endpoint are: `commodities`, `forex`, `fx`, `quote`, `stock`.

### Input Params

| Required? | Name  |    Aliases     |                  Description                   |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :--------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `coin`, `from` | The symbol of symbols of the currency to query | string |         |         |            |                |
|    ✅     | quote | `market`, `to` |    The symbol of the currency to convert to    | string |         |         |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "quote",
    "base": "GBP",
    "quote": "USD"
  }
}
```

---

MIT License
