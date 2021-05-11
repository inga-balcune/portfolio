<template>
  <section class="error">
    <div class="error__text-box">
      <AppFooterLogo class="u-margin-bottom-medium" />
      <h1 class="error__title">
        Oh no, you've found my little assistant's homepage!
      </h1>
      <p class="error__title--description">
        Although she sleeps a lot, sometimes she also gets some coding done...
      </p>
      <app-button-main href="/" class="btn btn--white u-margin-top-medium"
        >Back to the real thing</app-button-main
      >
    </div>
  </section>
</template>

<script>
import AppFooterLogo from "@/components/common/AppFooterLogo";
import AppButtonMain from "@/components/common/AppButtonMain";

export default {
  components: {
    AppFooterLogo,
    AppButtonMain
  }
};
</script>

<style lang="scss">
.error {
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.6),
      rgba($color-primary-dark, 0.6)
    ),
    url(~assets/img/Missy-small.jpg);
  background-size: cover;
  // background-color: $color-primary-dark;
  background-position: center;

  // add image with higher resolution here and in header add smaller image
  @media (min-resolution: 192dpi) and (min-width: 37.5em),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width: 125em) {
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.6),
        rgba($color-primary-dark, 0.6)
      ),
      url(~assets/img/Missy.jpg);
  }

  // for devices that support clip-path
  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    height: 95vh;
  }

  @include respond(tab-land) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  }

  &__title {
    color: $color-gray-light-2;
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    text-align: center;

    &--description {
      color: $color-gray-light-2;
      font-size: 1.8rem;
      font-weight: 400;
    }
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>
