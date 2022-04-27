<template>
  <div class="order">
    <div class="order__wrap">
      <div class="order__wrap__side">
        <div class="order__wrap__side__title">Alış Emri</div>
        <table class="order__wrap__side__table">
          <thead class="order__wrap__side__table__head">
            <tr class="order__wrap__side__table__head__wrap">
              <th scope="col">
                Toplam(TL)
              </th>
              <th scope="col">
                Miktar(BTC)
              </th>
              <th scope="col">
                Fiyat(TL)
              </th>
            </tr>
          </thead>
          <tbody class="order__wrap__side__table__body">
            <tr class="order__wrap__side__table__body__wrap">
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">BTC</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__progress buy"
                width="50%"
              ></td>
            </tr>
            <tr class="order__wrap__side__table__body__wrap">
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">BTC</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__progress buy"
                width="80%"
              ></td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="order__wrap__side">
        <div class="order__wrap__side__title">Satış Emri</div>
        <table class="order__wrap__side__table">
          <thead class="order__wrap__side__table__head">
            <tr class="order__wrap__side__table__head__wrap">
              <th scope="col">
                Toplam(TL)
              </th>
              <th scope="col">
                Miktar(BTC)
              </th>
              <th scope="col">
                Fiyat(TL)
              </th>
            </tr>
          </thead>
          <tbody class="order__wrap__side__table__body">
            <tr class="order__wrap__side__table__body__wrap">
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">BTC</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__progress sell"
                width="50%"
              ></td>
            </tr>
            <tr class="order__wrap__side__table__body__wrap">
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">BTC</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__content"
              >
                11,795.70 <span class="order__wrap__side__table__body__wrap__content__unit">₺</span>
              </td>
              <td
                class="order__wrap__side__table__body__wrap__progress sell"
                width="20%"
              ></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.order{
  @apply w-full h-full bg-dark-100 border-2 border-bn-gray-800/20 py-4 rounded-3xl;
  &__wrap{
    @apply w-full h-full flex divide-x divide-bn-gray-900;
    &__side{
      @apply w-full h-full;
      &__title{
        @apply text-xs font-bold py-3 px-8 text-bn-gray-300;
      }
      &__table{
        @apply w-full flex flex-col;
        &__head{
          @apply pb-1 w-full flex flex-col;
          &__wrap{
            @apply flex bg-[#151515] overflow-hidden;
            th{
              @apply flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8
            }
          }
        }
        &__body{
          @apply space-y-1;
          &__wrap{
            @apply flex relative cursor-pointer hover:bg-bn-gray-900/50;
            &__content{
              @apply z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8;
              &__unit{
                @apply text-bn-gray-600 ml-1;
              }
            }
            &__progress{
              @apply absolute h-full right-0 ;
            }
            .buy{
              @apply bg-gradient-to-l from-transparent to-bn-green/10;
            }
            .sell{
              @apply bg-gradient-to-l from-transparent to-bn-red/10;
            }
          }
        }
      }
    }
  }
}

</style>
