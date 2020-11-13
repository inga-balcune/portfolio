<template>
  <footer class="footer">
    <AppFooterLogo class="u-margin-bottom-big" />
    <div class="footer-container">
      <div class="footer-container__items">
        <div class="footer-container__navigation">
          <ul class="footer-container__list">
            <li class="footer-container__item">
              <a
                href="https://www.linkedin.com/in/ingabalcune/"
                target="_blank"
                class="footer-container__link"
                >LinkedIn</a
              >
            </li>
            <li class="footer-container__item">
              <a
                href="https://github.com/inga-balcune"
                target="_blank"
                class="footer-container__link"
                >Github</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-container__items">
        <div class="footer-container__copyright">
          <p>
            This website's layout and design has been inspired from
            <a
              href="https://codingheroes.io/"
              class="footer-container__link"
              target="_blank"
              >Jonas Schmedtmann</a
            >
            and his
            <a
              href="https://www.udemy.com/share/100YxSB0YYdVtVRXo=/"
              class="footer-container__link"
              target="_blank"
              >"Advanced CSS and Sass"</a
            >
            Udemy course.
          </p>
          <p
            class="footer-container__readMore"
            @click="readMore = true"
            v-if="!readMore"
          >
            read more...
          </p>
          <p v-show="readMore">
            <br />
            I developed this site using Vue and Nuxt.js frameworks. It includes
            web components, props, data and style binding, and list and
            conditional renderings.
            <br />
            Styles have been created using SASS preprocessor, and its variables
            and mixins. In terms of CSS, I have included some of its modern
            techniques like grid and flexbox.
            <br />
            Furthermore, I have used form validation plugin Vuelidate and Moment
            date library.
          </p>
          <p
            class="footer-container__readMore"
            @click="readMore = false"
            v-if="readMore"
          >
            show less...
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppFooterLogo from "@/components/common/AppFooterLogo";
export default {
  data() {
    return {
      readMore: false
    };
  },
  components: {
    AppFooterLogo
  }
};
</script>

<style lang="scss">
.footer {
  background-color: $color-primary-dark;
  padding: 5rem 0;
  // margin-top: -13rem;
  font-size: 1.4rem;
  color: $color-gray-light-1;
  // -webkit-clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
  // clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);

  &__logo-box {
    text-align: center;
    margin-bottom: 8rem;
    margin-top: 4rem;

    @include respond(phone) {
      margin-bottom: 4rem;
    }

    @include respond(tab-port) {
      padding: 3rem 0;
    }
  }

  // &__logo {
  //     width: 7rem;
  //     height: auto;

  //    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  //         width: 7rem;
  //     }
  // }
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  @include respond(phone) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  &__items {
    margin: 0 3rem;
    text-align: center;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
    }

    @include respond(phone) {
      width: 100%;
      margin: 0 1rem;
    }
  }

  &__navigation {
    border-top: 1px solid $color-gray-light-2;
    display: inline-block;
    padding-top: 1.5rem;

    @include respond(phone) {
      border-top: none;
      padding-top: 0;
    }
  }

  &__list {
    list-style: none;
  }

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__link {
    &:link,
    &:visited {
      color: $color-gray-light-1;
      background-color: $color-primary-dark;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: $color-gray-light-2;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }

  &__copyright {
    border-top: 1px solid $color-gray-light-2;
    display: inline-block;
    padding-top: 1.5rem;
    width: 78%;
    text-align: left;

    @include respond(phone) {
      border-top: none;
      width: 100%;
      padding: 1.5rem 2rem;
    }
  }

  &__readMore {
    font-size: 1.2rem;
    text-align: left;
    display: inline-block;
    width: 78%;
    cursor: pointer;
  }
}
</style>
