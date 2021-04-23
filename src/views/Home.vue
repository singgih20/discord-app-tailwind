<template>
  <div class="flex">
    <div
      class="w-20 flex-none flex flex-col min-h-screen h-screen overflow-y-auto"
    >
      <div class="overflow-y-auto">
        logos
      </div>
    </div>
    <div class="flex flex-1 flex-col min-h-screen h-screen">
      <div class="bg-red-500 flex">
        <div class="bg-red-300 w-56 flex-none">Tailwind CSS</div>
        <div class="">Rest of top bar</div>
      </div>
      <div class="flex-1 bg-blue-500 flex overflow-y-hidden">
        <div class="bg-green-300 w-56 flex-none flex flex-col justify-between">
          <div class="overflow-y-auto">left side</div>
          <div class="bg-red-500">Bottom</div>
        </div>
        <div class="flex-1 flex justify-between">
          <div class="bg-indigo-300 flex-1 flex flex-col justify-between">
            <div class="overflow-y-auto">middle chat</div>
            <div class="bg-gray-700">Chat input goes here</div>
          </div>
          <div class="bg-indigo-600 w-56 flex-none overflow-y-auto">
            right side
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
