<script setup lang="ts">
import { orderBy } from 'lodash';
import { computed, reactive, toRef, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

import TokenListItem from '@/components/lists/TokenListItem.vue';
import { useTokens } from '@/providers/tokens.provider';
import { TokenInfoMap } from '@/types/TokenList';
import { useMagicKeys } from '@vueuse/core';

interface Props {
  open?: boolean;
  excludedTokens?: string[];
  subset?: string[];
  includeEther?: boolean;
  disableInjection?: boolean;
  hideTokenLists?: boolean;
  ignoreBalances?: boolean;
  notFoundContent?: string;
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  excludedTokens: () => [],
  subset: () => [],
  includeEther: false,
  disableInjection: false,
  hideTokenLists: false,
  ignoreBalances: false,
});

const emit = defineEmits(['close', 'selectTokenlist', 'select']);

interface ComponentState {
  loading: boolean;
  selectTokenList: boolean;
  query: string;
  results: TokenInfoMap;
  focussedToken: number;
}

/**
 * STATE
 */
const state: ComponentState = reactive({
  loading: false,
  selectTokenList: false,
  query: '',
  results: {},
  focussedToken: 0,
});

/**
 * COMPOSABLES
 */
const {
  getToken,
  searchTokens,
  priceFor,
  balanceFor,
  dynamicDataLoading,
  nativeAsset,
  injectTokens,
} = useTokens();
const { t } = useI18n();

/**
 * COMPUTED
 */
const title = computed(() => {
  if (state.selectTokenList) return t('manageLists');
  return t('tokenSearch');
});

const tokens = computed(() => {
  const tokensWithValues = Object.values(state.results).map(token => {
    const balance = balanceFor(token.address);
    const price = priceFor(token.address);
    const value = Number(balance) * price;
    return {
      ...token,
      price,
      balance,
      value,
    };
  });

  if (props.ignoreBalances) return tokensWithValues;
  else return orderBy(tokensWithValues, ['value', 'balance'], ['desc', 'desc']);
});

const excludedTokens = computed(() => [
  ...props.excludedTokens,
  ...(props.includeEther ? [] : [nativeAsset.address]),
]);

const focussedTokenAddress = computed((): string => {
  console.log(state.results, state.focussedToken);
  const key = Object.keys(tokens.value)[state.focussedToken];
  return tokens.value[key].address;
});

/**
 * METHODS
 */
async function onSelectToken(token: string): Promise<void> {
  if (!getToken(token)) {
    await injectTokens([token]);
  }

  emit('select', token);
  emit('close');
}

/**
 * WATCHERS
 */
watch(
  toRef(state, 'query'),
  async newQuery => {
    state.loading = true;
    state.results = await searchTokens(newQuery, {
      excluded: excludedTokens.value,
      disableInjection: props.disableInjection,
      subset: props.subset,
    }).finally(() => {
      state.loading = false;
    });
  },
  { immediate: true }
);

const { ArrowDown, ArrowUp, Enter, Tab } = useMagicKeys();
watchEffect(() => {
  if (
    ArrowDown.value &&
    state.focussedToken < Object.keys(state.results).length
  )
    state.focussedToken++;
  if (Tab.value && state.focussedToken < Object.keys(state.results).length)
    state.focussedToken++;

  if (ArrowUp.value && state.focussedToken > 0) state.focussedToken--;

  if (Enter.value) onSelectToken(focussedTokenAddress.value);
});

console.log('tokens.length', tokens.value.length);
</script>

<template>
  <BalModal show noContentPad @close="$emit('close')">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center">
          <h5>{{ title }}</h5>
        </div>
      </div>
    </template>

    <div class="flex px-4 pt-2 pb-3 mr-2">
      <BalTextInput
        v-model="state.query"
        name="tokenSearchInput"
        :placeholder="$t('searchBy')"
        size="sm"
        class="w-full"
        autoFocus
      >
        <template #prepend>
          <div class="flex justify-center items-center w-8 h-full">
            <BalIcon name="search" size="sm" class="mr-2 text-gray-500" />
          </div>
        </template>
      </BalTextInput>
    </div>
    <div class="overflow-hidden">
      <RecycleScroller
        v-if="tokens.length > 0"
        v-slot="{ item: token, index }"
        class="overflow-y-scroll list-height"
        :items="tokens"
        :itemSize="70"
        keyField="address"
        :buffer="100"
      >
        <a @click="onSelectToken(token.address)">
          <TokenListItem
            :token="token"
            :hideBalance="ignoreBalances"
            :balanceLoading="dynamicDataLoading"
            :focussed="index == state.focussedToken"
            tabIndex="0"
          />
        </a>
      </RecycleScroller>
      <div
        v-else-if="state.loading"
        class="flex justify-center items-center h-96"
      >
        <BalLoadingIcon />
      </div>
      <div
        v-else
        class="p-12 h-96 text-center text-secondary"
        v-html="notFoundContent ? notFoundContent : $t('errorNoTokens')"
      />
    </div>
  </BalModal>
</template>

<style scoped>
.list-height {
  height: 70vh;
}
</style>


