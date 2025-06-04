<template>
    <client-only>
        <div class="border border-2 border-primary overflow-hidden image-container">
          <LMap
            :zoom="13"
            :center="[45.4753931, 9.2298680]"
            style="height: 300px; width: 100%"
          >
          <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <LMarker :lat-lng="[45.4753931, 9.2298680]">
              <LPopup>YogaTella</LPopup>
            </LMarker>
          </LMap>
        </div>
    </client-only>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import 'leaflet/dist/leaflet.css'
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
  
  onMounted(async () => {
    const L = await import('leaflet')
  
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
    })
  })
  </script>


