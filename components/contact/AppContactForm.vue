<template>
  <div class="section-contact">
    <div class="contact">
      <div class="contact__form">
        <form id="contactform" class="form" v-if="!isSubmit">
          <app-heading-H2>Send me a message!</app-heading-H2>
          <div class="form form__group">
            <label for="name" class="form__label">Name</label>
            <input
              name="name"
              class="form__input"
              type="firstName"
              id="name"
              @blur="$v.firstName.$touch()"
              v-model="firstName"
            />
            <p class="form__input--warning" v-if="$v.firstName.$error">
              Please provide your name
            </p>
          </div>

          <div class="form__group">
            <label class="form__label" for="surname">Surname</label>
            <input
              name="surname"
              class="form__input"
              type="lastName"
              id="surname"
              @blur="$v.lastName.$touch()"
              v-model="lastName"
            />
            <p class="form__input--warning" v-if="$v.lastName.$error">
              Please provide your surname
            </p>
          </div>

          <div class="form__group">
            <label class="form__label" for="email">Email</label>
            <input
              name="email"
              class="form__input"
              type="email"
              id="email"
              @input="$v.email.$touch()"
              v-model="email"
            />
            <p class="form__input--warning" v-if="!$v.email.email">
              Please provide a valid email address
            </p>
          </div>

          <div class="form__group">
            <label class="form__label" for="subject">Subject</label>

            <AppRadioButton
              label="Freelance Work"
              v-model="subjectPicked"
              v_value="Freelance"
              name="subject"
              id="freelance"
            />

            <AppRadioButton
              label="Job opportunity"
              v-model="subjectPicked"
              v_value="Job"
              name="subject"
              id="job"
            />

            <AppRadioButton
              label="Other"
              v-model="subjectPicked"
              v_value="Other"
              name="subject"
              id="other"
            />
          </div>

          <div class="form__group">
            <label for="name" class="form__label">Message</label>
            <textarea
              class="form__input form__message"
              name="message"
              id="message"
              cols="50"
              rows="4"
              placeholder="Type your message here"
              @blur="$v.message.$touch()"
              v-model="message"
            ></textarea>
            <p class="form__input--warning" v-if="$v.message.$error">
              Provide a message that is at least
              {{ $v.message.$params.minLen.min }} characters long!
            </p>
          </div>
          <!-- <input name="_formsubmit_id" type="text" style="display:none"> -->

          <input
            class="form__submit-button"
            type="submit"
            :disabled="$v.$invalid"
            @click="formSubmit"
            value="Submit"
          />
        </form>
        <div class="confirmation" v-else>
          <app-heading-H2>Thank you, {{ firstName }}!</app-heading-H2>
          <div class="confirmation__text-box">
            <p class="heading-tertiary u-margin-bottom-small">
              I have received your text with the following details:
            </p>
            <p class="paragraph">Time: {{ time }}</p>
            <p class="paragraph">Full name: {{ firstName }} {{ lastName }}</p>
            <p class="paragraph">Email address: {{ email }}</p>
            <p class="paragraph">Subject: {{ subjectPicked }}</p>
            <p class="paragraph">Message: {{ message }}</p>
            <p class="heading-tertiary u-margin-top-small">
              I'll get back to you asap!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppHeadingH2 from "@/components/common/AppHeadingH2";
import AppRadioButton from "@/components/common/AppRadioButton";
import AppInputField from "@/components/common/AppInputField";
import { required, email, minLength } from "vuelidate/lib/validators";
import moment from "moment";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      subjectPicked: "",
      message: "",
      isSubmit: false,
      time: moment().format("LLL")
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLen: minLength(6)
    },
    subjectPicked: {
      required
    }
  },
  components: {
    AppHeadingH2,
    AppRadioButton,
    AppInputField
  },
  methods: {
    // formSubmitted(email) {
    //     this.isSubmit = true
    //     // axios.post('https://inga-portfolio-contact-form.firebaseio.com/form.json', this.email)
    //     // .then(result => console.log(result))
    //     // .catch(error => console.log(error))
    //     axios.post('https://inga-portfolio-contact-form.firebaseio.com/form.json', {email})
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     });
    // },
    formSubmit(e) {
      this.isSubmit = true;
      e.preventDefault();
      let currentObj = this;
      axios
        .post("https://inga-portfolio-contact-form.firebaseio.com/form.json", {
          time: this.time,
          name: this.firstName,
          surname: this.lastName,
          email: this.email,
          subject: this.subjectPicked,
          message: this.message
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.section-contact {
  padding: 5rem 5rem;
  background-color: $color-primary-dark;

  @include respond(tab-port) {
    padding: 3rem 0;
  }
}

.contact {
  background-image: -webkit-linear-gradient(
      345deg,
      rgba($color-white, 0.9) 0%,
      rgba($color-white, 0.9) 50%,
      transparent 50%
    ),
    url(../../assets/img/CostaRica-small.jpg);
  background-image: linear-gradient(
      105deg,
      rgba($color-white, 0.9) 0%,
      rgba($color-white, 0.9) 50%,
      transparent 50%
    ),
    url(../../assets/img/CostaRica-small.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 0.3rem;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);

  @media (min-resolution: 192dpi) and (min-width: 37.5em),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width: 125em) {
    background-image: -webkit-linear-gradient(
        345deg,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 50%,
        transparent 50%
      ),
      url(../../assets/img/CostaRica.jpg);
    background-image: linear-gradient(
        105deg,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 50%,
        transparent 50%
      ),
      url(../../assets/img/CostaRica.jpg);
  }

  @include respond(tab-land) {
    background-image: -webkit-linear-gradient(
        345deg,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 55%,
        transparent 55%
      ),
      url(../../assets/img/CostaRica.jpg);
    background-image: linear-gradient(
        105deg,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 55%,
        transparent 55%
      ),
      url(../../assets/img/CostaRica.jpg);
  }

  @include respond(tab-port) {
    background-image: -webkit-linear-gradient(
        left,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 100%
      ),
      url(../../assets/img/CostaRica.jpg);
    background-image: linear-gradient(
        to right,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 100%
      ),
      url(../../assets/img/CostaRica.jpg);
  }

  &__form {
    width: 50%;
    padding: 6rem;

    @include respond(tab-land) {
      width: 55%;
    }

    @include respond(tab-port) {
      width: 100%;
    }
  }
}

.form {
  &__group {
    margin-bottom: 2rem;
  }

  &__input {
    font-family: inherit;
    font-size: $default-font-size;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba($color-white, 0.9);
    border: none;
    border-bottom: 0.2rem solid transparent;
    width: 80%;
    display: block;

    &--warning {
      font-size: 1.4rem;

      @include respond(phone) {
        font-size: 1.3rem;
      }
    }

    @include respond(tab-port) {
      width: 100%;
    }

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
      border-bottom: 0.2rem solid $color-primary;
    }
  }

  /* &__input:focus:invalid {
        border-bottom: .2rem solid orangered;
    } */

  &__label {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.1rem;
  }

  &__submit-button {
    display: inline-block;
    padding: 1rem 1.4rem;
    font-size: 1.6rem;
    font-weight: 300;
    color: $color-primary;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 0.1rem solid $color-primary;

    &:hover {
      background-color: $color-primary;
      color: $color-white;
      -webkit-appearance: none;
      -webkit-box-shadow: 0 1rem 2rem rgba($color-black, 0.15);
      box-shadow: 0 1rem 2rem rgba($color-black, 0.15);
    }

    &:active {
      -webkit-box-shadow: 0 0.5rem 1rem rgba($color-black, 0.15);
      box-shadow: 0 0.5rem 1rem rgba($color-black, 0.15);
    }

    &:disabled {
      border: 1px solid $color-grey-dark;
      background-color: $color-gray-light-2;
      color: $color-grey-dark;
    }
  }

  input[type="submit"] {
    -webkit-appearance: none;
    border-radius: 0;
  }
}

.confirmation {
  height: 60rem;
  width: auto;
}
</style>
