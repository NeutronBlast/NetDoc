<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  components: {
    Home,
  }
}
</script>

