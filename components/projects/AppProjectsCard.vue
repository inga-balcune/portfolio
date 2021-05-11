<template>
  <div class="project-container">
    <div
      v-for="(project, key) in projects"
      :key="key"
      class="project-container__col"
    >
      <div class="card">
        <ul class="card__side card__side--front">
          <div
            class="card__picture"
            v-bind:style="{
              backgroundImage:
                'linear-gradient(to right bottom, #537895, #09203f), url(' +
                project.image +
                ')',
              backgroundImage: 'url(' + project.image + ')'
            }"
          >
            &nbsp;
          </div>
          <li class="card__heading">
            {{ project.heading }}
          </li>
          <li class="card__details">
            {{ project.details }}
          </li>
        </ul>
        <div class="card__side card__side--back card__side--back-1">
          <h3 class="card__back-heading u-margin-top-medium">
            Features
          </h3>
          <div class="card__back-list">
            <ul>
              <li
                v-for="(feature, key) in project.features"
                :key="key"
                class="card-back-heading"
              >
                <span class="card-back-heading--main"
                  >{{ feature.name }}
                  <span class="card-back-heading--sub">{{
                    feature.subTitle
                  }}</span>
                </span>
              </li>
              <div class="card-back-btn">
                <app-card-button :href="project.url" class="u-margin-top-small"
                  >Visit Site</app-card-button
                >
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCardButton from "@/components/common/AppCardButton";
export default {
  data() {
    return {
      projects: [
        {
          heading: "Countries of the world",
          details:
            "This is my first serious web development project. In its development I used some of the newest programming techniques, languages and frameworks.",
          image: require("~/assets/img/countries.png"),
          imageAlt: "Countries of the world project image",
          color: "red",
          url: "https://countries-of-the-world-project.herokuapp.com/",
          features: [
            { name: "CSS", subTitle: "Flexbox, Grid" },
            { name: "Sass", subTitle: "Variables, mixins, layouts" },
            { name: "Javascript", subTitle: "ES6" },
            { name: "Vue", subTitle: "Components, props, vuex" },
            { name: "Nuxt", subTitle: "Universal, nuxtServerInit()" }
          ]
        },
        {
          heading: "Share your recipe",
          details:
            "This is my second project that includes login and user authentication, posting to and fetching data from Firebase, and material design framework Vue Material.",
          image: require("~/assets/img/share-your-recipe.png"),
          imageAlt: "Share your recipe project image",
          url: "https://share-your-recipe.herokuapp.com/",
          features: [
            { name: "SASS", subTitle: "Variables, Mixins" },
            { name: "VueJS", subTitle: "Props, Vuex" },
            { name: "Nuxt", subTitle: "Middleware" },
            { name: "Vue Material", subTitle: "Layout, Components" },
            { name: "Firebase", subTitle: "Realtime Database" }
          ]
        },
        {
          heading: "Greatest Minds",
          details:
            "A web development assignment requested by a multinational SaaS company in Copenhagen. Requirements: create a responsive table, populate it using the given endpoints. Show a spinner on data loading, delay loading if data loads in less than 3 sec.",
          image: require("~/assets/img/minds.png"),
          imageAlt: "Greatest Minds project Image",
          url: "https://greatest-minds.herokuapp.com/",
          features: [
            { name: "CSS", subTitle: "Spinner, Table" },
            { name: "SASS", subTitle: "Variables, Mixins" },
            { name: "ES6", subTitle: "async/await, API calls" },
            { name: "VueJS / NUXT", subTitle: "Components, Props" },
            { name: "AXIOS", subTitle: "GET, Then, Catch" }
          ]
        },
        {
          heading: "Team Assembly",
          details:
            "An assignment was given by a Digital Innovation Agency in Copenhagen. Requirements: create a website where you can add projects and assemble a team to it. The project page should consist of the involved team's images, background & contact info.",
          image: require("~/assets/img/team-assembly.png"),
          imageAlt: "Team Assembly Project Image",
          url: "https://team-assembly-assignment.herokuapp.com",
          features: [
            { name: "SASS", subTitle: "Variables, Mixins" },
            { name: "ES6", subTitle: "filter, map, includes, new Set" },
            { name: "VueJS", subTitle: "Components, Props" },
            { name: "Nuxt", subTitle: "asyncData" },
            { name: "AXIOS", subTitle: "GET, PUT, DELETE" }
          ]
        }
      ]
    };
  },
  components: {
    AppCardButton
  }
};
</script>

<style lang="scss" scoped>
.project-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.project-container__col {
  margin: 0 3rem;

  @include respond(tab-land) {
    margin: 2rem 3rem;
  }
}

.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 50rem;
  min-width: 30rem;
  margin-bottom: 8rem;
  box-shadow: 0 1px 0 rgba($color-black, 0.12);

  &__side {
    height: 55rem;
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
    list-style: none;

    &--front {
      background-color: $color-white;
    }

    &--back {
      transform: rotateY(180deg);

      &-1 {
        background-image: linear-gradient(
          to right bottom,
          $color-primary-light,
          $color-primary-dark
        );
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }

  // FRONT SIDE STYLING

  &__picture {
    background-position: center; /* Center the image */
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba($color-primary, 0.4);
    height: 23rem;
    background-blend-mode: overlay;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
    position: relative;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      -webkit-background-size: auto 43px;
      -moz-background-size: auto 43px;
      -o-background-size: auto 43px;
    }
  }

  &__heading {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: $color-black;
    margin: 2rem 3rem 1rem 3rem;
    line-height: 2.1rem;
  }

  &__details {
    margin: 0 3rem;
    font-size: $default-font-size;
  }

  // BACK SIDE STYLING

  &__back-heading {
    font-size: 2.2rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    color: $color-white;
  }

  &__back-list {
    position: relative;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;
    }

    li {
      text-align: center;
      font-size: 1.7rem;
      padding: 1rem;
      position: relative;
    }
  }

  .card-back-heading {
    color: rgba($color-gray-light-2, 0.8);
    text-transform: uppercase;
    line-height: 1.3;

    &--main {
      display: block;
      font-size: 2rem;
      font-weight: 700;
    }

    &--sub {
      display: block;
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      position: relative;

      &:after {
        background-color: $color-gray-light-2;
        bottom: -0.5rem;
        content: "";
        display: block;
        height: 0.1rem;
        left: 50%;
        position: absolute;
        transform: translate(-50%, 0);
        width: 5rem;
      }
    }
  }

  // @include respond(tab-port) {

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    min-height: 100rem;
    max-width: 40rem;
    margin-bottom: 12rem;
    position: relative;

    &__side {
      position: relative;
      top: 0;
      left: 0;
      border-radius: 3px;

      &--front {
        height: auto;
        margin-top: 1rem;
        background-blend-mode: overlay;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 91%, 0 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 91%, 0% 100%);
      }

      &--back {
        margin-top: -5rem;
        height: 60rem;
        transform: rotateY(0);
        -webkit-clip-path: polygon(0 9%, 100% 0%, 100% 91%, 0% 100%);
        clip-path: polygon(0 9%, 100% 0%, 100% 91%, 0% 100%);
      }
    }

    &:hover &__side--front {
      transform: rotateY(0);
    }

    // FRONT SIDE STYLING

    //  &__picture {
    //     height: 33rem;
    // }

    &__details {
      margin: 2rem 3rem;
      margin-bottom: 10rem;
      font-size: $default-font-size;
    }

    // BACK SIDE STYLING

    &__back-heading {
      margin-top: 8rem;
      font-size: 2.2rem;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
      color: $color-white;
    }

    &__back-list {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;

      ul {
        margin: 0 auto;
      }

      li {
        font-size: 1.7rem;
      }
    }

    .card-back-heading {
      color: rgba($color-gray-light-2, 0.8);
      text-transform: uppercase;
      line-height: 1.3;

      &--main {
        display: block;
        font-size: 2rem;
        font-weight: 700;

        // margin-left: 1.4rem;

        /* animation-delay: 3s; starts afte 3s
                        animation-iteration-count: 3; anim plays 3 times
                        animation-timing-function: ease-out; starts slow and then goes quicker
                        */
      }

      &--sub {
        display: block;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        position: relative;

        &:after {
          background-color: $color-gray-light-2;
          bottom: -0.5rem;
          content: "";
          display: block;
          height: 0.1rem;
          left: 50%;
          position: absolute;
          transform: translate(-50%, 0);
          width: 5rem;
        }
      }
    }
  }
}

.card-back-btn {
  text-align: center;
}
</style>
