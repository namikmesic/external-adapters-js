# BITGO_RESERVES

![2.2.0](https://img.shields.io/github/package-json/v/smartcontractkit/external-adapters-js?filename=packages/sources/bitgo-reserves/package.json) ![v3](https://img.shields.io/badge/framework%20version-v3-blueviolet)

This document was generated automatically. Please see [README Generator](../../scripts#readme-generator) for more info.

## Environment Variables

| Required? |        Name         |                                                              Description                                                               |  Type  | Options |                Default                |
| :-------: | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :-----------------------------------: |
|           |    API_ENDPOINT     |                                                       An API endpoint for Go USD                                                       | string |         | `https://reserves.gousd.com/por.json` |
|           | VERIFICATION_PUBKEY | Public RSA key used for verifying data signature for Go USD. Expected to be formatted as a single line eg: "-----BEGIN PUBLIC KEY----- |

...contents...
-----END PUBLIC KEY-----" | string | | `` |

---

## Data Provider Rate Limits

|  Name   | Requests/credits per second | Requests/credits per minute | Requests/credits per hour | Note |
| :-----: | :-------------------------: | :-------------------------: | :-----------------------: | :--: |
| default |                             |             10              |                           |      |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |            Options             |  Default   |
| :-------: | :------: | :-----------------: | :----: | :----------------------------: | :--------: |
|           | endpoint | The endpoint to use | string | [reserves](#reserves-endpoint) | `reserves` |

## Reserves Endpoint

`reserves` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  | Aliases |                                        Description                                         |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :-----: | :----------------------------------------------------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|           | client |         | Used to match ${client}\_API_ENDPOINT ${client}\_VERIFICATION_PUBKEY environment variables | string |         | `gousd` |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "reserves",
    "client": "gousd"
  }
}
```

---

MIT License
