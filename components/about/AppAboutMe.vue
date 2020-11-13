<template>
  <section class="section-about">
    <app-heading-H2>About me</app-heading-H2>
    <div class="grid-container">
      <AppAboutMeText />
      <AppAboutMeComposition />
    </div>
  </section>
</template>

<script>
import AppHeadingH2 from "@/components/common/AppHeadingH2";
import AppAboutMeText from "@/components/about/AppAboutMeText";
import AppAboutMeComposition from "@/components/about/AppAboutMeComposition";

export default {
  components: {
    AppHeadingH2,
    AppAboutMeText,
    AppAboutMeComposition
  }
};
</script>

<style lang="scss">
.section-about {
  background-color: $color-gray-light-1;
  padding: 20rem 0 35rem 0;
  margin-top: -20vh;

  @include respond(tab-big) {
    padding: 30rem 0 25rem 0;
  }

  @include respond(tab-port) {
    padding: 30rem 0 30rem 0;
  }

  @include respond(phone) {
    padding: 30rem 0 25rem 0;
  }
}
</style>
