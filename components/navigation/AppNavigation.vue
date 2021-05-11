<template>
  <div class="navigation" role="navigation" id="nav">
    <input
      type="checkbox"
      aria-labelledby="nav"
      class="navigation__checkbox"
      id="navi-toggle"
    />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <span
            class="navigation__link"
            @click="uncheck(), scrollToElement('about')"
          >
            About Me
          </span>
        </li>
        <li class="navigation__item">
          <span
            class="navigation__link"
            @click="uncheck(), scrollToElement('skills')"
            >My Skills</span
          >
        </li>
        <li class="navigation__item">
          <span
            class="navigation__link"
            @click="uncheck(), scrollToElement('projects')"
            >Projects</span
          >
        </li>
        <li class="navigation__item">
          <span
            class="navigation__link"
            @click="uncheck(), scrollToElement('contact')"
            >Contact Me</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    uncheck(event) {
      document.getElementById("navi-toggle").checked = false;
    },
    scrollToElement(elemId) {
      return document.getElementById(elemId).scrollIntoView();
    }
  }
};
</script>

<style lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 40;
    text-align: center;
    cursor: pointer;
    box-shadow: 2px 2px 10px 2px rgba($color-black, 0.2);

    @include respond(tab-port) {
      top: 3.7rem;
      right: 3rem;
    }
  }

  &__background {
    background-image: radial-gradient(
      $color-primary-light,
      $color-primary-dark
    );
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    z-index: 30;
    transition: all 0.8s cubic-bezier(0.755, 0.05, 0.855, 0.06);

    @include respond(tab-port) {
      top: 4rem;
      right: 4rem;
    }
  }

  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 35;

    opacity: 0;
    width: 0;
    visibility: hidden;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__list {
    @include center-elem;
    list-style: none;
    text-align: center;
    width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: $color-white;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      $color-white 50%
    );
    background-size: 225%;
    transition: all 0.4s;

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(2rem);
    }

    &:visited {
      color: red;
    }
  }

  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }

  // &__checkbox:not(:checked) ~ &__background {
  //     transform: scale(80);
  // }

  &__checkbox:checked ~ &__nav {
    visibility: visible;
    opacity: 1;
    width: 100%;
  }

  // &__checkbox:not(:checked) ~ &__background {
  //     transform: scale(5);
  // }

  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 0.2rem;
      background-color: $color-primary;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(45deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-45deg);
  }
}
</style>
