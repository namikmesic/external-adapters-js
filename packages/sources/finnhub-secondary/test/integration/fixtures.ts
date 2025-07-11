import nock from 'nock'

export const mockResponseSuccess = (): nock.Scope => {
  return nock('https://finnhub.io/api/v1', {
    encodedQueryParams: true,
  })
    .persist()
    .get('/quote')
    .query({ token: 'fake-api-key', symbol: 'OANDA:EUR_USD' })
    .reply(
      200,
      () => ({
        c: 1.15894,
        d: 0.00226,
        dp: 0.1954,
        h: 1.15943,
        l: 1.15497,
        o: 1.1554,
        pc: 1.15668,
        t: 1636322400,
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .get('/quote')
    .query({ token: 'fake-api-key', symbol: 'AAPL' })
    .reply(
      200,
      () => ({
        c: 175.43,
        d: 2.44,
        dp: 1.4105,
        h: 175.77,
        l: 173.11,
        o: 173.32,
        pc: 172.99,
        t: 1636322400,
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .get('/quote')
    .query({ token: 'fake-api-key', symbol: 'OANDA:USD_JPY' })
    .reply(
      200,
      () => ({
        c: 142.652,
        d: -0.677,
        dp: -0.4723,
        h: 143.365,
        l: 142.234,
        o: 143.348,
        pc: 143.329,
        t: 1690923600,
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
}

export const mockMarketStatusResponseSuccess = (): nock.Scope =>
  nock('https://finnhub.io/api/v1', {
    encodedQueryParams: true,
  })
    .persist()
    .get('/stock/market-status')
    .query({ token: 'fake-api-key', exchange: 'US' })
    .reply(
      200,
      {
        exchange: 'US',
        holiday: null,
        isOpen: true,
        session: 'regular',
        timezone: 'America/New_York',
        t: 1697018041,
      },
      ['Content-Type', 'application/json'],
    )
    .get('/stock/market-status')
    .query({ token: 'fake-api-key', exchange: 'AD' })
    .reply(
      200,
      {
        exchange: 'AD',
        holiday: null,
        isOpen: false,
        session: 'pre-market',
        timezone: 'Asia/Dubai',
        t: 1697018041,
      },
      ['Content-Type', 'application/json'],
    )
    .get('/stock/market-status')
    .query({ token: 'fake-api-key', exchange: 'AS' })
    .reply(
      200,
      {
        exchange: 'AS',
        holiday: 'Fake Holiday',
        isOpen: false,
        session: null,
        timezone: 'Europe/Amsterdam',
        t: 1697018041,
      },
      ['Content-Type', 'application/json'],
    )
    .get('/stock/market-status')
    .query({ token: 'fake-api-key', exchange: 'AT' })
    .reply(
      200,
      {
        exchange: '',
        holiday: null,
        isOpen: null,
        session: null,
        timezone: null,
        t: null,
      },
      ['Content-Type', 'application/json'],
    )
