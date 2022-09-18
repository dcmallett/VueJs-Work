<template>
  <main v-if="appReady" class="min-h-full font-Poppins box-border">
    <TheNavigation />
    <router-view></router-view>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from './supabase/init';
import TheNavigation from './components/layout/TheNavigation.vue';
import store from './store/index'


//create data 
const appReady = ref(null)

//check to see if user is already logged in
const user = supabase.auth.user();

//if user does not exist need to make app ready
if (!user) {
  appReady.value = true
}
//runs when there is auth state change

//if user is logged in this will fire 
supabase.auth.onAuthStateChange((_, session) => {
  store.methods.setUser(session)
  appReady.value = true
})
</script>