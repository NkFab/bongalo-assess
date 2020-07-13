<template>
  <div class="home">
    <Navbar
      width="100%"
      valueNow="100"
    />
    <div class="container">
      <div class="row">
        <div class="col px-md-5">
          <h3 class="mt-5">What amenities do you offer?</h3>
          <p class="blockquote-footer">STEP 3</p>
          <h4>
            <small>
              These are just the amenities guests usually expect,
              but you add even more after you publish.
            </small>
          </h4>
          <div class="d-flex justify-content-between border-bottom mt-4">
            <p>Essentials
              Towels, bed sheets, soap, toilet paper, and pillows</p>
            <div class="form-check">
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label=""
              >
            </div>
          </div>
          <div class="d-flex justify-content-between border-bottom mt-4">
            <p>Wifi</p>
            <div class="form-check">
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label=""
              >
            </div>
          </div>
          <div class="d-flex justify-content-between border-bottom mt-4">
            <p>TV</p>
            <div class="form-check">
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label=""
              >
            </div>
          </div>
          <div class="d-flex justify-content-between border-bottom mt-4">
            <p>Heart</p>
            <div class="form-check">
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label=""
              >
            </div>
          </div>
          <Footer back="/location" next="/success" label="Done"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Location',
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped>
input.form-check-input {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>
