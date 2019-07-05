<template>
    <div class="form__group">
        <label 
            :for="id" 
            :label='label'
            @change="$emit('input', f_value)" 
            class='form__label'>
            <span></span>
            {{ f_value }}
        </label>
        <input 
            class='form__input'
            :id='id'  
            :type="type" 
            :value="label">
    </div>
</template>

<script>
export default {
    data() {
        return {
            props: {
                value: {},
                f_value: {},
                label: {
                    type: String,
                    default: ''
                },
                id: {
                    type: String,
                    default: ''
                },
                type: {
                    type: String,
                    default: ''
                }
            }
        }
    }

}
</script>



<style lang='scss'>

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
        background-color: rgba($color-white, .9);
        border: none;
        border-bottom: .2rem solid transparent;
        width: 90%;
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
        box-shadow: 0 1rem 2rem rgba($color-black, .2);
        border-bottom: .2rem solid $color-primary;
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
        margin-bottom: .1rem;

    }

}   

</style>
