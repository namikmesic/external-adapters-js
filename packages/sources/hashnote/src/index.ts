import { expose, ServerInstance } from '@chainlink/external-adapter-framework'
import { Adapter } from '@chainlink/external-adapter-framework/adapter'
import { config } from './config'
import { price } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: price.name,
  name: 'HASHNOTE',
  config,
  endpoints: [price],
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1m: 1,
        note: 'API only updates once per day',
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
