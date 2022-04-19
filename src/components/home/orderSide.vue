<template>
  <div class="w-full h-full bg-dark-100 border-2 border-bn-gray-800/20 py-4 rounded-3xl">
    <div class="w-full h-full flex divide-x divide-bn-gray-900">
      <div class="w-full h-full">
        <div class="text-xs font-bold py-3 px-8 text-bn-gray-300">Alış Emri</div>
        <table class="w-full flex flex-col">
          <thead class="pb-1 w-full flex flex-col">
            <tr class="flex bg-[#151515] overflow-hidden">
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Toplam(TL)
              </th>
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Miktar(BTC)
              </th>
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Fiyat(TL)
              </th>
            </tr>
          </thead>
          <tbody class="space-y-1">
            <tr class="flex relative cursor-pointer hover:bg-bn-gray-900/50">
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">BTC</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="absolute w-1/2 h-full right-0 bg-gradient-to-l from-transparent to-bn-green/10"
              ></td>
            </tr>
            <tr class="flex relative cursor-pointer hover:bg-bn-gray-900/50">
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">BTC</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="absolute w-1/3 h-full right-0 bg-gradient-to-l from-transparent to-bn-green/10"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full h-full">
        <div class="text-xs font-bold py-3 px-8 text-bn-gray-300">Satış Emri</div>
        <table class="w-full flex flex-col">
          <thead class="pb-1 w-full flex flex-col">
            <tr class="flex bg-[#151515] overflow-hidden">
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Toplam(TL)
              </th>
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Miktar(BTC)
              </th>
              <th
                scope="col"
                class="flex w-full py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-bn-gray-500 sm:pl-6 lg:pl-8">
                Fiyat(TL)
              </th>
            </tr>
          </thead>
          <tbody class="space-y-1">
            <tr class="flex relative cursor-pointer hover:bg-bn-gray-900/50">
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">BTC</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="absolute w-1/2 h-full right-0 bg-gradient-to-l from-transparent to-bn-red/10"
              ></td>
            </tr>
            <tr class="flex relative cursor-pointer hover:bg-bn-gray-900/50">
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">BTC</span>
              </td>
              <td
                class="z-10 flex w-full whitespace-nowrap py-3 pl-4 pr-3 text-xs font-medium text-bn-gray-200 sm:pl-6 lg:pl-8"
              >
                11,795.70 <span class="text-bn-gray-600 ml-1">₺</span>
              </td>
              <td
                class="absolute w-1/3 h-full right-0 bg-gradient-to-l from-transparent to-bn-red/10"
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

<style lang="scss" scoped></style>
