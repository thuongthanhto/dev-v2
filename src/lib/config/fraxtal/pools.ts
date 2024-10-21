import { CSP_ISSUE_POOL_IDS } from '@/constants/pool-lists/csp-issue';
import { PoolWarning, Pools } from '@/types/pools';
import { Network } from '../types';
import { Protocol } from '@/composables/useProtocols';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'GyroE',
    'ComposableStable',
  ],
  Stable: {
    AllowList: [],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    AllowList: [],
  },
  Factories: {
    '0x4bdcc2fb18aeb9e2d281b0278d946445070eada7': 'composableStablePool',
    '0x9da18982a33fd0c7051b19f0d7c76f2d5e7e017c': 'weightedPool',
  },
  Stakable: {
    VotingGaugePools: [
      '0xa0b92b33beafce388ce0092afdcd0ca77323eb12000000000000000000000006',
      '0xa0af0b88796c1aa67e93db89fead2ab7aa3d6747000000000000000000000007',
      '0x33251abecb0364df98a27a8d5d7b5ccddc774c42000000000000000000000008',
      '0x1570315476480fa80cec1fff07a20c1df1adfd53000200000000000000000009',
      '0x760b30eb4be3ccd840e91183e33e2953c6a31253000000000000000000000005',
    ],
    AllowList: [],
  },
  Deep: [],
  BoostedApr: [],
  Metadata: {
    '0x33251abecb0364df98a27a8d5d7b5ccddc774c42000000000000000000000008': {
      points: [
        {
          protocol: Protocol.Superfest,
          multiple: '',
          url: 'https://jumper.exchange/superfest',
          description:
            'To find out more about Superfest, visit <a href="https://jumper.exchange/superfest" target="_blank" rel="noopener noreferrer">jumper.exchange/superfest</a>',
        },
      ],
    },
    '0x1570315476480fa80cec1fff07a20c1df1adfd53000200000000000000000009': {
      points: [
        {
          protocol: Protocol.Superfest,
          multiple: '',
          url: 'https://jumper.exchange/superfest',
          description:
            'To find out more about Superfest, visit <a href="https://jumper.exchange/superfest" target="_blank" rel="noopener noreferrer">jumper.exchange/superfest</a>',
        },
      ],
    },
  },
  DisabledJoins: [],
  BrandedRedirect: {
    Gyro2: 'gyro',
    Gyro3: 'gyro',
    GyroE: 'gyro',
  },
  Issues: {
    [PoolWarning.CspPoolVulnWarning]: CSP_ISSUE_POOL_IDS[Network.MODE],
  },
};

export default pools;
