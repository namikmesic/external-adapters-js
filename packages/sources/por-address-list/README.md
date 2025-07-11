# POR_ADDRESS_LIST

![5.10.0](https://img.shields.io/github/package-json/v/smartcontractkit/external-adapters-js?filename=packages/sources/por-address-list/package.json) ![v3](https://img.shields.io/badge/framework%20version-v3-blueviolet)

This document was generated automatically. Please see [README Generator](../../scripts#readme-generator) for more info.

## Environment Variables

| Required? |            Name             |                                                                       Description                                                                        |  Type  | Options |                                 Default                                  |
| :-------: | :-------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :----------------------------------------------------------------------: |
|    ✅     |           RPC_URL           |                                   The RPC URL to connect to the EVM chain the address manager contract is deployed to.                                   | string |         |                                                                          |
|           |          CHAIN_ID           |                                                        The chain id to connect to for the RPC URL                                                        | number |         |                                   `1`                                    |
|           |         GROUP_SIZE          | The number of concurrent batched contract calls to make at a time. Setting this lower than the default may result in lower performance from the adapter. | number |         |                                  `100`                                   |
|           |    BACKGROUND_EXECUTE_MS    |                                The amount of time the background execute should sleep before performing the next request                                 | number |         |                                 `10000`                                  |
|           | COINBASE_CBBTC_API_ENDPOINT |                                               An API endpoint for Coinbase cbBTC native BTC wallet address                                               | string |         |           `https://coinbase.com/cbbtc/proof-of-reserves.json`            |
|           | BEDROCK_UNIBTC_API_ENDPOINT |                                               An API endpoint for Bedrock uniBTC native BTC wallet address                                               | string |         | `https://bedrock-datacenter.rockx.com/data/tvl/reserve_with_native.json` |
|           |    SOLVBTC_API_ENDPOINT     |                                                  An API endpoint for SolvBTC native BTC wallet address                                                   | string |         |            `https://por.sft-api.com/solv-btc-addresses.json`             |
|           |  SOLVBTC_BBN_API_ENDPOINT   |                                                An API endpoint for SolvBTC.BBN native BTC wallet address                                                 | string |         |           `https://por.sft-api.com/x-solv-btc-addresses.json`            |
|           |  SOLVBTC_ENA_API_ENDPOINT   |                                                An API endpoint for SolvBTC.ENA native BTC wallet address                                                 | string |         |          `https://por.sft-api.com/solv-btc-ena-addresses.json`           |
|           |  SOLVBTC_CORE_API_ENDPOINT  |                                                An API endpoint for SolvBTC.CORE native BTC wallet address                                                | string |         |          `https://por.sft-api.com/solv-btc-core-addresses.json`          |
|           |  SOLVBTC_JUP_API_ENDPOINT   |                                               An API endpoint for SolvBTC.JUP MirrorX AccountIDs on CEFFU                                                | string |         |           `https://por.sft-api.com/solv-btc-jup-mirrorx.json`            |
|           |      ZEUS_ZBTC_API_URL      |                                                    An API endpoint for Zeus native BTC wallet address                                                    | string |         |    `https://indexer.zeuslayer.io/api/v2/chainlink/proof-of-reserves`     |

---

## Data Provider Rate Limits

|  Name   | Requests/credits per second | Requests/credits per minute | Requests/credits per hour | Note |
| :-----: | :-------------------------: | :-------------------------: | :-----------------------: | :--: |
| default |              1              |                             |                           |      |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                                                                                                                          Options                                                                                                                                                           |  Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: |
|           | endpoint | The endpoint to use | string | [address](#address-endpoint), [bedrockbtcaddress](#bedrockbtcaddress-endpoint), [coinbasebtcaddress](#coinbasebtcaddress-endpoint), [multichainaddress](#multichainaddress-endpoint), [openedenaddress](#openedenaddress-endpoint), [solvbtcaddress](#solvbtcaddress-endpoint), [zeusbtcaddress](#zeusbtcaddress-endpoint) | `address` |

## Address Endpoint

`address` is the only supported name for this endpoint.

### Input Params

| Required? |          Name          | Aliases |                                             Description                                              |  Type   |       Options        |  Default  | Depends On | Not Valid With |
| :-------: | :--------------------: | :-----: | :--------------------------------------------------------------------------------------------------: | :-----: | :------------------: | :-------: | :--------: | :------------: |
|           |     confirmations      |         |                            The number of confirmations to query data from                            | number  |                      |           |            |                |
|    ✅     |    contractAddress     |         |                         The contract address holding the custodial addresses                         | string  |                      |           |            |                |
|           | contractAddressNetwork |         | The network of the contract, used to match {NETWORK}\_RPC_URL and {NETWORK}\_RPC_CHAIN_ID in env var | string  |                      |           |            |                |
|           |       batchSize        |         |                     The number of addresses to fetch from the contract at a time                     | number  |                      |   `10`    |            |                |
|    ✅     |        network         |         |                           The network name to associate with the addresses                           | string  |                      |           |            |                |
|    ✅     |        chainId         |         |                             The chain ID to associate with the addresses                             | string  |                      |           |            |                |
|           | searchLimboValidators  |         |                Flag to pass on to the balance adapter to search for limbo validators                 | boolean |                      |           |            |                |
|           |        abiName         |         |                               The name of ABI used for contractAddress                               | string  | `Default`, `Lombard` | `Default` |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "address",
    "confirmations": 0,
    "contractAddress": "abc",
    "contractAddressNetwork": "",
    "batchSize": 10,
    "network": "ethereum",
    "chainId": "1",
    "abiName": "Default"
  }
}
```

---

## Solvbtcaddress Endpoint

`solvbtcaddress` is the only supported name for this endpoint.

### Input Params

| Required? | Name | Aliases |                       Description                       |  Type  |              Options               | Default | Depends On | Not Valid With |
| :-------: | :--: | :-----: | :-----------------------------------------------------: | :----: | :--------------------------------: | :-----: | :--------: | :------------: |
|           | type |         | The type of bitcoin which we are fetching addresses for | string | `BBN`, `BTC`, `CORE`, `ENA`, `JUP` |  `BTC`  |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "solvbtcaddress",
    "type": "BTC"
  }
}
```

---

## Bedrockbtcaddress Endpoint

`bedrockbtcaddress` is the only supported name for this endpoint.

### Input Params

| Required? | Name | Aliases |                                                            Description                                                             |  Type  |         Options          | Default | Depends On | Not Valid With |
| :-------: | :--: | :-----: | :--------------------------------------------------------------------------------------------------------------------------------: | :----: | :----------------------: | :-----: | :--------: | :------------: |
|    ✅     | type |         | The type of addresses you are looking for. BTC is native BTC address. tokens is for token-balance EA. vault is for eth-balance EA. | string | `BTC`, `tokens`, `vault` |         |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "bedrockbtcaddress",
    "type": "BTC"
  }
}
```

---

## Coinbasebtcaddress Endpoint

`coinbasebtcaddress` is the only supported name for this endpoint.

### Input Params

| Required? |  Name   | Aliases |                   Description                    |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :-----: | :-----: | :----------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | network |         | The network name to associate with the addresses | string |         |         |            |                |
|    ✅     | chainId |         |   The chain ID to associate with the addresses   | string |         |         |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "coinbasebtcaddress",
    "network": "bitcoin",
    "chainId": "mainnet"
  }
}
```

---

## Multichainaddress Endpoint

`multichainaddress` is the only supported name for this endpoint.

### Input Params

| Required? |          Name          | Aliases |                                               Description                                               |  Type  |                                                Options                                                | Default  | Depends On | Not Valid With |
| :-------: | :--------------------: | :-----: | :-----------------------------------------------------------------------------------------------------: | :----: | :---------------------------------------------------------------------------------------------------: | :------: | :--------: | :------------: |
|    ✅     |    contractAddress     |         |                          The contract address holding the custodial addresses                           | string |                                                                                                       |          |            |                |
|    ✅     | contractAddressNetwork |         |  The network of the contract, used to match {NETWORK}\_RPC_URL and {NETWORK}\_RPC_CHAIN_ID in env var   | string |                                                                                                       |          |            |                |
|    ✅     |        abiName         |         |                                     Used to select the ABI by name                                      | string | `MultiEVMPoRAddressList`, `PoRAddressListMulti`, `SolvMultiAddressList`, `SolvSolanaMultiAddressList` |          |            |                |
|           |          type          |         | The type of addresses you are looking for. tokens is for token-balance EA. vault is for eth-balance EA. | string |                                           `tokens`, `vault`                                           | `tokens` |            |                |
|           |    vaultPlaceHolder    |         |                   The tokenAddress indicating which vaultAddress needs to be returned                   | string |                                                                                                       |          |            |                |
|           |     confirmations      |         |                             The number of confirmations to query data from                              | number |                                                                                                       |          |            |                |
|           |       batchSize        |         |                      The number of addresses to fetch from the contract at a time                       | number |                                                                                                       |   `10`   |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "multichainaddress",
    "contractAddress": "0xb7C0817Dd23DE89E4204502dd2C2EF7F57d3A3B8",
    "contractAddressNetwork": "BINANCE",
    "abiName": "MultiEVMPoRAddressList",
    "type": "tokens",
    "vaultPlaceHolder": "0x0000000000000000000000000000000000000001",
    "confirmations": 0,
    "batchSize": 10
  }
}
```

---

## Openedenaddress Endpoint

`openedenaddress` is the only supported name for this endpoint.

### Input Params

| Required? |          Name          | Aliases |                                              Description                                              |  Type  |     Options      | Default | Depends On | Not Valid With |
| :-------: | :--------------------: | :-----: | :---------------------------------------------------------------------------------------------------: | :----: | :--------------: | :-----: | :--------: | :------------: |
|    ✅     |    contractAddress     |         |                         The contract address holding the custodial addresses                          | string |                  |         |            |                |
|    ✅     | contractAddressNetwork |         | The network of the contract, used to match {NETWORK}\_RPC_URL and {NETWORK}\_RPC_CHAIN_ID in env var  | string |                  |         |            |                |
|    ✅     |          type          |         | The type of addresses you are looking for. tbill returns only TBILL tokens, other returns all others. | string | `other`, `tbill` |         |            |                |

### Example

Request:

```json
{
  "data": {
    "endpoint": "openedenaddress",
    "contractAddress": "0x440139321A15d14ce0729E004e91D66BaF1A08B0",
    "contractAddressNetwork": "BASE",
    "type": "tbill"
  }
}
```

---

## Zeusbtcaddress Endpoint

`zeusbtcaddress` is the only supported name for this endpoint.

### Input Params

There are no input parameters for this endpoint.

### Example

Request:

```json
{
  "data": {
    "endpoint": "zeusbtcaddress"
  }
}
```

---

MIT License
