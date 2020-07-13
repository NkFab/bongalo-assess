<template>
  <div
    id="page"
    class="row mx-auto justify-content-center align-items-center flex-column px-5"
  >
    <div class="display-1">
      <i class="text-success fa fa-check"></i>
    </div>
    <div class="display-4">
      <b>Yaaaaaay! You have successfully posted your place.</b>
    </div>
    <div><button
        type="button"
        class="btn btn-primary mt-4"
        @click="goBack()"
      >Home</button></div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#page {
  margin-top: 15%;
}
</style>
