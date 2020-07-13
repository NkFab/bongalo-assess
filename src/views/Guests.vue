<template>
  <div class="home">
    <Navbar
      width="50%"
      valueNow="50"
    />
    <div class="container">
      <div class="row">
        <div class="col px-md-5">
          <h3 class="mt-5">How many guests can you place accomodate?</h3>
          <p class="blockquote-footer">STEP 2</p>
          <h4>
            <small>
              Check that you have enough beds to accommodate all your guests comfortably.
            </small>
          </h4>
          <div class="d-flex mt-3">
            <h5><small><b>Guests</b></small></h5>
            <button
              type="button"
              @click.prevent="decreaseGuests"
              class="btn btn-outline-primary inc-dec"
            >-</button>
            <span>{{guests}}</span>
            <button
              type="button"
              @click.prevent="increaseGuests"
              class="btn btn-outline-primary inc-dec"
            >+</button>
          </div>
            <p class="mt-3">How many bedrooms can guests use?</p>
            <div class="form-group">
              <select class="form-control">
                <option>Studio</option>
                <option>Suite</option>
              </select>
            </div>
            <p>How many beds can guests use?</p>
            <div class="d-flex mt-3">
            <h5><small><b>Beds</b></small></h5>
            <button
              type="button"
              @click.prevent="addBeds"
              class="btn btn-outline-primary inc-dec"
            >-</button>
            <span>{{beds}}</span>
            <button
              type="button"
              @click.prevent="removeBeds"
              class="btn btn-outline-primary inc-dec"
            >+</button>
          </div>
          <h3 class="mt-5">Sleeping arrangements</h3>
          <p>Sharing the types of beds in each room can
            help people understand the sleeping arrangments</p>
            <Footer back="/" next="/location" label="Next"/>
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
  data() {
    return {
      guests: 1,
      beds: 1,
    };
  },
  methods: {
    increaseGuests() {
      this.guests += 1;
    },
    decreaseGuests() {
      if (this.guests > 1) {
        this.guests -= 1;
      }
    },
    addBeds() {
      this.beds += 1;
    },
    removeBeds() {
      if (this.beds > 1) {
        this.beds -= 1;
      }
    },
  },
};
</script>
<style scoped>
button.inc-dec{
  width: 25px;
  height: 25px;
  padding-left: 0.5rem;
  border-radius: 50%;
  font-size: 9pt;
  line-height: 0px;
  text-align: center;
  margin: 0 10px;
}
</style>
