<template>
  <div class="side" :class="!active ? 'tabItem' : ''">
    <div class="side__title">{{ title }}</div>
    <table class="side__table">
      <thead class="side__table__head">
        <tr class="side__table__head__wrap">
          <th scope="col">Toplam(TL)</th>
          <th scope="col">Miktar(BTC)</th>
          <th scope="col">Fiyat(TL)</th>
        </tr>
      </thead>
      <tbody class="side__table__body">
        <tr class="side__table__body__wrap">
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">BTC</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__progress" :class="type === 'buy' ? 'buy' : 'sell'" width="50%"></td>
        </tr>
        <tr class="side__table__body__wrap">
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">BTC</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__progress" :class="type === 'buy' ? 'buy' : 'sell'" width="50%"></td>
        </tr>
        <tr class="side__table__body__wrap">
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">BTC</span>
          </td>
          <td class="side__table__body__wrap__content">
            11,795.70
            <span class="side__table__body__wrap__content__unit">₺</span>
          </td>
          <td class="side__table__body__wrap__progress" :class="type === 'buy' ? 'buy' : 'sell'" width="50%"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  type: String,
  active: Boolean,
})
</script>

<style lang="scss" scoped>
.side {
  @apply w-full h-96 overflow-auto;
  &.tabItem{
    @apply hidden xl:block
  }
  &::-webkit-scrollbar {
    @apply w-1 h-1;
  }
  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
  &::-webkit-scrollbar-thumb {
    @apply bg-black/50;
  }
  &__title {
    @apply hidden xl:block text-xs font-bold pb-3 pt-6 px-8 text-bn-gray-300;
  }
  &__table {
    @apply w-full flex flex-col;
    &__head {
      @apply pb-1 w-full flex flex-col sticky top-0 z-20;
      &__wrap {
        @apply flex bg-[#151515] overflow-hidden;
        th {
          @apply flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8;
        }
      }
    }
    &__body {
      @apply space-y-1 h-full;
      &__wrap {
        @apply flex relative cursor-pointer hover:bg-bn-gray-900/50;
        &__content {
          @apply z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8;
          &__unit {
            @apply text-bn-gray-600 ml-1;
          }
        }
        &__progress {
          @apply absolute h-full right-0;
        }
        .buy {
          @apply bg-gradient-to-l from-transparent to-bn-green/10;
        }
        .sell {
          @apply bg-gradient-to-l from-transparent to-bn-red/10;
        }
      }
    }
  }
}
</style>
