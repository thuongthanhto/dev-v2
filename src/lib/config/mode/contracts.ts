import { Contracts } from '../types';
import * as mode from '@/assets/data/contracts/mode.json';

const contracts: Contracts = {
  merkleRedeem: '',
  merkleOrchard: '',
  multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  authorizer: mode.Authorizer,
  vault: mode.Vault,
  weightedPoolFactory: mode.WeightedPoolFactory,
  stablePoolFactory: mode.ComposableStablePoolFactory,
  lidoRelayer: '',
  balancerHelpers: mode.BalancerHelpers,
  batchRelayer: mode.BalancerRelayer,
  gaugeFactory: mode.ChildChainGaugeFactory,
  balancerMinter: mode.L2BalancerPseudoMinter,
  gaugeController: '',
  tokenAdmin: '',
  veBAL: '',
  veDelegationProxy: mode.VotingEscrowDelegationProxy,
  veBALHelpers: '',
  feeDistributor: '',
  feeDistributorDeprecated: '',
  faucet: '',
  gaugeRewardsHelper: '',
  gaugeWorkingBalanceHelper: '',
};

export default contracts;
