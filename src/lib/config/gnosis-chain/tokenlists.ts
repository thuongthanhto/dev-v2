import { TokenListURLMap } from '@/types/TokenList';

const tokenlists: TokenListURLMap = {
  Balancer: {
    Allowlisted:
      'https://raw.githubusercontent.com/thuongthanhto/token-list/refs/heads/main/tokenlist.json',
  },
  External: [
    'https://raw.githubusercontent.com/thuongthanhto/token-list/refs/heads/main/tokenlist.json',
  ],
};

export default tokenlists;
