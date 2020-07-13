<template>
  <footer class="fixed-bottom d-flex justify-content-between border-top px-3 ">
              <router-link tag="button" :to="back" class="btn btn-outline-primary mb-2 mt-2 back">
                <i class="fas fa-chevron-left"></i>  Back</router-link>
              <router-link tag="button" :to="next" class="btn btn-primary mb-2 mt-2">
                {{label}}
                </router-link>
            </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: ['label', 'back', 'next'],
};
</script>
<style scoped>
button.back {
  border: none;
}
</style>
