<template>
    <navbar />
    <maincontent />
</template>
<script>
import navbar from './components/navbar/navbar.vue';
import maincontent from "./components/content/content.vue"
export default {
  components: { navbar, maincontent },
}
</script>