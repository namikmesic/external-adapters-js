# FINNHUB

![2.8.1](https://img.shields.io/github/package-json/v/smartcontractkit/external-adapters-js?filename=packages/sources/finnhub/package.json) ![v3](https://img.shields.io/badge/framework%20version-v3-blueviolet)

This document was generated automatically. Please see [README Generator](../../scripts#readme-generator) for more info.

## Known Issues

### CACHE_MAX_AGE interaction with Heartbeat messages

If `CACHE_MAX_AGE` is set below a current heartbeat interval (60000ms), the extended cache TTL feature for out-of-market-hours that relies on heartbeats will not work.

## Environment Variables

| Required? |      Name       |                      Description                      |  Type   | Options |           Default           |
| :-------: | :-------------: | :---------------------------------------------------: | :-----: | :-----: | :-------------------------: |
|           |  API_ENDPOINT   |          The HTTP URL to retrieve data from           | string  |         | `https://finnhub.io/api/v1` |
|    ✅     |     API_KEY     |                   A Finnhub API key                   | string  |         |                             |
|           | WS_API_ENDPOINT |           The WS URL to retrieve data from            | string  |         |    `wss://ws.finnhub.io`    |
|           |   WS_ENABLED    | Whether data should be returned from websocket or not | boolean |         |           `false`           |

---

## Data Provider Rate Limits

|    Name    | Requests/credits per second | Requests/credits per minute | Requests/credits per hour |                      Note                      |
| :--------: | :-------------------------: | :-------------------------: | :-----------------------: | :--------------------------------------------: |
|    free    |                             |             60              |                           |                                                |
| all-in-one |                             |             300             |                           | limit is for market data, not fundamental data |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                                                                                                        Options                                                                                                                                         | Default |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [commodities](#quote-endpoint), [commodity-quote](#quote-endpoint), [common](#quote-endpoint), [equity-quote](#quote-endpoint), [forex-quote](#quote-endpoint), [forex](#quote-endpoint), [market-status](#market-status-endpoint), [quote](#quote-endpoint), [stock](#quote-endpoint) | `quote` |

## Quote Endpoint

Supported names for this endpoint are: `commodities`, `commodity-quote`, `common`, `equity-quote`, `forex`, `forex-quote`, `quote`, `stock`.

### Input Params

| Required? |     Name     |    Aliases     |                                            Description                                            |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----------: | :------------: | :-----------------------------------------------------------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |     base     | `coin`, `from` |                          The symbol of symbols of the currency to query                           | string |         |         |            |                |
|           |    quote     | `market`, `to` |                             The symbol of the currency to convert to                              | string |         |         |            |                |
|           |   exchange   |                |                                  The exchange to fetch data for                                   | string |         |         |            |                |
|           | endpointName |                | Is set automatically based on request endpoint alias/name. Providing a custom value has no effect | string |         |         |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "quote",
    "base": "EUR",
    "quote": "USD"
  }
}
```

---

## Market-status Endpoint

`market-status` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  | Aliases |      Description       |  Type  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Default | Depends On | Not Valid With |
| :-------: | :----: | :-----: | :--------------------: | :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: | :--------: | :------------: |
|    ✅     | market |         | The name of the market | string | `AD`, `AS`, `AT`, `AX`, `BA`, `BC`, `BD`, `BE`, `BH`, `BK`, `BO`, `BR`, `CA`, `CN`, `CO`, `CR`, `CS`, `DB`, `DE`, `DU`, `F`, `HA`, `HE`, `HK`, `HM`, `IC`, `IR`, `IS`, `JK`, `JO`, `KL`, `KQ`, `KS`, `KW`, `L`, `LS`, `MC`, `ME`, `MI`, `MT`, `MU`, `MX`, `NE`, `NL`, `NS`, `NYSE`, `NZ`, `OL`, `PA`, `PM`, `PR`, `QA`, `RG`, `RO`, `SA`, `SC`, `SG`, `SI`, `SN`, `SR`, `SS`, `ST`, `SW`, `SX`, `SZ`, `T`, `TA`, `TG`, `TL`, `TO`, `TW`, `TWO`, `US`, `V`, `VI`, `VN`, `VS`, `WA`, `ad`, `as`, `at`, `ax`, `ba`, `bc`, `bd`, `be`, `bh`, `bk`, `bo`, `br`, `ca`, `cn`, `co`, `cr`, `cs`, `db`, `de`, `du`, `f`, `ha`, `he`, `hk`, `hm`, `ic`, `ir`, `is`, `jk`, `jo`, `kl`, `kq`, `ks`, `kw`, `l`, `ls`, `mc`, `me`, `mi`, `mt`, `mu`, `mx`, `ne`, `nl`, `ns`, `nyse`, `nz`, `ol`, `pa`, `pm`, `pr`, `qa`, `rg`, `ro`, `sa`, `sc`, `sg`, `si`, `sn`, `sr`, `ss`, `st`, `sw`, `sx`, `sz`, `t`, `ta`, `tg`, `tl`, `to`, `tw`, `two`, `us`, `v`, `vi`, `vn`, `vs`, `wa` |         |            |                |

### Example

There are no examples for this endpoint.

---

MIT License
