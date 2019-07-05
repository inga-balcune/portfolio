<template>
    <div class='form__radio-group'>
        <input 
            class='form__radio-input'
            :id='id'  
            type="radio" 
            :value="label" 
            :name="name">
        <label 
            :for="id" 
            @click="$emit('input', v_value)" 
            class='form__radio-label'>
            <span class="form__radio-button"></span>
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {},
        v_value: {},
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang='scss'>

.form {
    &__radio-group {
        width: 49%;
        display: inline-block;
        margin: .5rem 0;

        @include respond(tab-port) {
            width: 100%;
            margin-bottom: 1rem;
        }
    }

    &__radio-label {
        font-size: 1.6rem;
        cursor: pointer;
        position: relative;
        padding-left: 4rem;
        text-transform: uppercase;
    }

    &__radio-input {
        display: none;
    }

    &__radio-button {
        height: 2.5rem;
        width: 2.5rem;
        border: .2rem solid $color-primary;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 0;
        left: -0.4rem;
    }

    &__radio-button::after {
        content: "";
        display: block;
        height: 1rem;
        width: 1rem;
        border-radius: 49%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: $color-primary;
        opacity: 0;
        transition: opacity .2s;

    }

    &__radio-input:checked + .form__radio-label > .form__radio-button::after {
        opacity: 1;
    }

}

</style>
