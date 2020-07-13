<template>
  <div class="home">
    <Navbar
      width="25%"
      valueNow="25"
    />
    <div class="container">
      <div class="row">
        <div class="col px-md-5">
          <h1 class="display-4 mt-5">Hi, there! Let’s get started listing your space.</h1>
          <p class="blockquote-footer">STEP 1</p>
          <h2><small>What kind of place do you have?</small> </h2>
          <form>
            <div class="form-group">
              <select class="form-control">
                <option>Entire place</option>
                <option>Private room</option>
                <option>Shared room</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control">
                <option>Entire place</option>
                <option>Private room</option>
                <option>Shared room</option>
              </select>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter a location"
              >
            </div>
            <router-link to="/guests" tag="button"
              class="btn btn-primary"
            >Continue</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
