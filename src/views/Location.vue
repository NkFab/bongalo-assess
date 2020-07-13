<template>
  <div class="home">
    <Navbar
      width="75%"
      valueNow="75"
    />
    <div class="container">
      <div class="row">
        <div class="col px-md-5">
          <h3 class="mt-5">Where's your place located?</h3>
          <p class="blockquote-footer">STEP 3</p>
          <h4>
            <small>
              Guests will only get your exact address once they've booked a reservation.
            </small>
          </h4>
          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block mt-3"
          >
            <i class="fa fa-location-arrow"></i>  Use current location
          </button>
          <div class="d-flex">
            <hr>or enter your address
            <hr>
          </div>
          <div class="form-group">
            <label for="country">Country / Region</label>
            <select
              class="form-control"
              id="country"
            >
              <option>Rwanda</option>
            </select>
          </div>
          <div class="form-group">
            <label for="street">Street address</label>
            <input
              type="text"
              name="street"
              class="form-control"
              placeholder="House name/number + street/road"
            >
          </div>
          <div class="form-group">
            <label for="street">Apt, suite. (optional)</label>
            <input
              type="text"
              name="street"
              class="form-control"
              placeholder="Apt., suite, building access code"
            >
          </div>
         <Footer back="/guests" next="/amenities" label="Next"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Location',
  components: {
    Navbar,
    Footer,
  },
};
</script>
