<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <a
        class="navbar-brand"
        href="#"
      >
        <img
          :src="logo"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        >
      </a>
    </nav>
    <div class="progress" style="height: 3px;">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        :style="{'width': width}"
        :aria-valuenow="valueNow"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>

</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: 'Navbar',
  props: ['width', 'valueNow'],
  data() {
    return {
      logo,
    };
  },
};
</script>
