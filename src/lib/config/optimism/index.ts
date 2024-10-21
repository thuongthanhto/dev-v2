import { Config } from '../types';
import keys from './keys';
import contracts from './contracts';
import pools from './pools';
import tokenlists from './tokenlists';
import tokens from './tokens';
import rateProviders from './rateProviders';

const config: Config = {
  key: '10',
  chainId: 10,
  layerZeroChainId: 111,
  chainName: 'Optimism',
  name: 'Optimism Mainnet',
  shortName: 'Optimism',
  monorepoName: 'optimism',
  slug: 'optimism',
  network: 'optimism',
  trustWalletNetwork: 'optimism',
  unknown: false,
  visibleInUI: true,
  testNetwork: false,
  rpc: 'https://mainnet.optimism.io',
  ws: '',
  blockTime: 13,
  explorer: 'https://optimistic.etherscan.io/',
  explorerName: 'The Optimism Explorer',
  subgraph: `https://gateway-arbitrum.network.thegraph.com/api/${keys.graph}/subgraphs/id/FsmdxmvBJLGjUQPxKMRtcWKzuCNpomKuMTbSbtRtggZ7`,
  balancerApi: 'https://api.balancer.fi',
  poolsUrlV2: '',
  subgraphs: {
    main: [
      `https://gateway-arbitrum.network.thegraph.com/api/${keys.graph}/subgraphs/id/FsmdxmvBJLGjUQPxKMRtcWKzuCNpomKuMTbSbtRtggZ7`,
    ],
    aave: '',
    gauge: `https://gateway-arbitrum.network.thegraph.com/api/${keys.graph}/subgraphs/id/CbLt7GqU7sypjRaCfwissEBkFeCw3dUz2emrvBNJ7dZu`,
    blocks: `https://gateway-arbitrum.network.thegraph.com/api/${keys.graph}/subgraphs/id/HsWM1oAXHGWdkH8bK98UrW38PvyPx6Q4waRow2LT8mcp`,
  },
  bridgeUrl: '',
  supportsEIP1559: false,
  supportsElementPools: false,
  supportsVeBalSync: true,
  nativeAsset: {
    name: 'Ether',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    symbol: 'ETH',
    decimals: 18,
    deeplinkId: 'ether',
    logoURI: 'tokens/eth.png',
    minTransactionBuffer: '0.005',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'ethereum',
      platformId: 'optimistic-ethereum',
    },
  },
  addresses: {
    ...contracts,
  },
  keys: {
    infura: '',
    alchemy: '',
  },
  gauges: {
    type: 5,
    weight: 0,
  },
  pools,
  tokenlists,
  tokens,
  rateProviders,
};

export default config;
