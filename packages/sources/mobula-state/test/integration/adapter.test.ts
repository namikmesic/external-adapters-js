import { WebSocketClassProvider } from '@chainlink/external-adapter-framework/transports'
import {
  TestAdapter,
  setEnvVariables,
  mockWebSocketProvider,
  MockWebsocketServer,
} from '@chainlink/external-adapter-framework/util/testing-utils'
import FakeTimers from '@sinonjs/fake-timers'
import { mockWebsocketServer } from './fixtures'

describe('websocket', () => {
  let mockWsServer: MockWebsocketServer | undefined
  let testAdapter: TestAdapter
  const wsEndpoint = 'ws://localhost:9090'
  let oldEnv: NodeJS.ProcessEnv

  const dataPrice = {
    base: 'ETH',
    quote: 'USD',
    endpoint: 'price',
    transport: 'ws',
  }

  const dataFundingRate = {
    base: 'BTC',
    quote: '',
    exchange: 'binance',
    endpoint: 'funding-rate',
  }

  const dataFundingRateAergo = {
    base: 'AERGO',
    quote: '',
    exchange: 'binance',
    endpoint: 'funding-rate',
  }

  beforeAll(async () => {
    oldEnv = JSON.parse(JSON.stringify(process.env))
    process.env['WS_API_ENDPOINT'] = wsEndpoint
    process.env['WS_FUNDING_RATE_API_ENDPOINT'] = wsEndpoint
    process.env['API_KEY'] = 'mock-api-key'
    mockWebSocketProvider(WebSocketClassProvider)
    mockWsServer = mockWebsocketServer(wsEndpoint)

    const adapter = (await import('./../../src')).adapter
    testAdapter = await TestAdapter.startWithMockedCache(adapter, {
      clock: FakeTimers.install(),
      testAdapter: {} as TestAdapter<never>,
    })

    // Send initial request to start background execute and wait for cache to be filled with results
    await testAdapter.request(dataPrice)
    await testAdapter.waitForCache(1)
  })

  afterAll(async () => {
    setEnvVariables(oldEnv)
    mockWsServer?.close()
    testAdapter.clock?.uninstall()
    await testAdapter.api.close()
  })

  describe('price endpoint', () => {
    it('have data should return success', async () => {
      const response = await testAdapter.request(dataPrice)
      expect(response.json()).toMatchSnapshot()
    })

    it('no data should return failure', async () => {
      const response = await testAdapter.request({
        base: 'ETH',
        quote: 'EUR',
        endpoint: 'price',
        transport: 'ws',
      })
      expect(response.json()).toMatchSnapshot()
    })
  })

  describe('funding rate endpoint', () => {
    it('have data should return success', async () => {
      const response = await testAdapter.request(dataFundingRate)
      expect(response.json()).toMatchSnapshot()
    })

    it('have partial data return success', async () => {
      const response = await testAdapter.request(dataFundingRateAergo)
      expect(response.json()).toMatchSnapshot()
    })

    it('no data should return failure', async () => {
      const response = await testAdapter.request({
        base: 'ETH',
        quote: '',
        exchange: 'binance',
        endpoint: 'funding-rate',
      })
      expect(response.json()).toMatchSnapshot()
    })
  })
})
