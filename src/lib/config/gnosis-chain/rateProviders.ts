import { convertKeysToLowerCase } from '@/lib/utils/objects';
import { RateProviders } from '../types';

const rateProviders: RateProviders = {
  '*': {
    '0x0000000000000000000000000000000000000000': true,
  },
  '0xaf204776c7245bF4147c2612BF6e5972Ee483701': {
    '0x89C80A4540A00b5270347E02e2E144c71da2EceD': true,
  },
  '0xc791240D1F2dEf5938E2031364Ff4ed887133C3d': {
    '0xdc90e2680094314CEaB45CE15100F6e02cEB7ceD': true,
  },
};

export default convertKeysToLowerCase(rateProviders);
