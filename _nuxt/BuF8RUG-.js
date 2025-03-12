import{c as s,b as d,o as l}from"./SX2a4SLN.js";const t={class:"flex flex-col min-h-screen bg-gray-100 p-6"},o={__name:"dashboard",setup(i){return(a,e)=>(l(),s("div",t,e[0]||(e[0]=[d('<h1 class="text-3xl font-bold text-gray-800 mb-6">Weather Drone Dashboard</h1><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700">Current Temperature</h2><div class="flex items-center justify-between"><span class="text-3xl font-bold text-blue-600">24.5°C</span><svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg></div><p class="text-sm text-gray-500 mt-2">3% higher than yesterday</p></div><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700">Humidity</h2><div class="flex items-center justify-between"><span class="text-3xl font-bold text-green-600">68%</span><svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2"></path></svg></div><p class="text-sm text-gray-500 mt-2">5% lower than yesterday</p></div><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700">Wind Speed</h2><div class="flex items-center justify-between"><span class="text-3xl font-bold text-purple-600">12 km/h</span><svg class="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><p class="text-sm text-gray-500 mt-2">Steady from NW</p></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700 mb-4">Temperature Trends (24h)</h2><div class="h-64 bg-gray-50 rounded border border-gray-200 flex items-end justify-between px-4 pt-4"><div class="h-1/4 w-4 bg-blue-500 rounded-t"></div><div class="h-1/3 w-4 bg-blue-500 rounded-t"></div><div class="h-2/5 w-4 bg-blue-500 rounded-t"></div><div class="h-1/2 w-4 bg-blue-500 rounded-t"></div><div class="h-3/5 w-4 bg-blue-500 rounded-t"></div><div class="h-3/4 w-4 bg-blue-500 rounded-t"></div><div class="h-4/5 w-4 bg-blue-500 rounded-t"></div><div class="h-full w-4 bg-blue-500 rounded-t"></div><div class="h-4/5 w-4 bg-blue-500 rounded-t"></div><div class="h-3/4 w-4 bg-blue-500 rounded-t"></div><div class="h-3/5 w-4 bg-blue-500 rounded-t"></div><div class="h-1/2 w-4 bg-blue-500 rounded-t"></div></div></div><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700 mb-4">Humidity &amp; Precipitation</h2><div class="h-64 bg-gray-50 rounded border border-gray-200 p-4"><div class="relative h-full"><div class="absolute top-0 left-0 right-0 h-full flex items-center"><div class="w-full h-0.5 bg-gray-200"></div></div><div class="absolute top-1/4 left-0 right-0 h-full flex items-center"><div class="w-full h-0.5 bg-gray-200"></div></div><div class="absolute top-1/2 left-0 right-0 h-full flex items-center"><div class="w-full h-0.5 bg-gray-200"></div></div><div class="absolute top-3/4 left-0 right-0 h-full flex items-center"><div class="w-full h-0.5 bg-gray-200"></div></div><div class="absolute bottom-0 left-0 right-0 w-full h-full"><svg viewBox="0 0 100 100" class="w-full h-full"><path d="M0,50 Q10,20 20,40 T40,30 T60,50 T80,40 T100,30" fill="none" stroke="#60a5fa" stroke-width="2"></path></svg></div></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6"><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700 mb-2">Air Quality Index</h2><div class="flex items-center mb-2"><div class="w-full bg-gray-200 rounded-full h-4"><div class="bg-green-500 h-4 rounded-full" style="width:62%;"></div></div><span class="ml-2 text-sm font-semibold">62</span></div><p class="text-sm text-gray-500">Good air quality</p></div><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700 mb-4">Barometric Pressure</h2><div class="flex items-center justify-center"><div class="relative w-32 h-32"><svg viewBox="0 0 100 100" class="w-full h-full"><circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="10"></circle><circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" stroke-width="10" stroke-dasharray="282.7" stroke-dashoffset="70"></circle></svg><div class="absolute inset-0 flex items-center justify-center flex-col"><span class="text-2xl font-bold">1013</span><span class="text-xs text-gray-500">hPa</span></div></div></div></div><div class="bg-white rounded-lg shadow p-4"><h2 class="font-semibold text-lg text-gray-700 mb-4">UV Index</h2><div class="flex justify-between items-center"><span class="text-3xl font-bold text-orange-500">6</span><div class="flex"><div class="h-6 w-6 bg-green-300 rounded-l"></div><div class="h-6 w-6 bg-green-500"></div><div class="h-6 w-6 bg-yellow-300"></div><div class="h-6 w-6 bg-yellow-500"></div><div class="h-6 w-6 bg-orange-400"></div><div class="h-6 w-6 bg-orange-600"></div><div class="h-6 w-6 bg-red-400"></div><div class="h-6 w-6 bg-red-600"></div><div class="h-6 w-6 bg-purple-400"></div><div class="h-6 w-6 bg-purple-600 rounded-r"></div></div></div><p class="text-sm text-gray-500 mt-2">Moderate</p></div></div><div class="bg-white rounded-lg shadow p-6"><h2 class="font-semibold text-lg text-gray-700 mb-4">Drone Status</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div class="border border-gray-200 rounded p-3"><div class="text-sm text-gray-500">Battery</div><div class="flex items-center mt-1"><div class="w-full bg-gray-200 rounded-full h-2.5 mr-2"><div class="bg-green-500 h-2.5 rounded-full" style="width:78%;"></div></div><span class="text-sm font-medium">78%</span></div></div><div class="border border-gray-200 rounded p-3"><div class="text-sm text-gray-500">Signal Strength</div><div class="flex items-center mt-1"><div class="w-full bg-gray-200 rounded-full h-2.5 mr-2"><div class="bg-blue-500 h-2.5 rounded-full" style="width:92%;"></div></div><span class="text-sm font-medium">92%</span></div></div><div class="border border-gray-200 rounded p-3"><div class="text-sm text-gray-500">GPS Accuracy</div><div class="flex items-center mt-1"><div class="w-full bg-gray-200 rounded-full h-2.5 mr-2"><div class="bg-teal-500 h-2.5 rounded-full" style="width:95%;"></div></div><span class="text-sm font-medium">95%</span></div></div><div class="border border-gray-200 rounded p-3"><div class="text-sm text-gray-500">Status</div><div class="flex items-center mt-1"><div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div><span class="text-sm font-medium">Active - Collecting Data</span></div></div></div></div>',5)])))}};export{o as default};
