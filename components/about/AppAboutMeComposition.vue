<template>
    <div class="grid-container--item">
        <div class="composition">
            <img srcset="@/assets/img/Georgia.jpg 300w, @/assets/img/Georgia-large.jpg 1000w" 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                alt="Photo 1" 
                class="composition__photo composition__photo--p1"
                src='@/assets/img/Georgia-large.jpg'>
            <img srcset="@/assets/img/napoli.jpg 300w, @/assets/img/napoli-large.jpg 1000w" 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                alt="Photo 2" 
                class="composition__photo composition__photo--p2"
                src='@/assets/img/napoli-large.jpg'>
            <img srcset="@/assets/img/PanamaBike.jpg 300w, @/assets/img/PanamaBike-large.jpg 1000w" 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3" 
                class="composition__photo composition__photo--p3"
                src='@/assets/img/PanamaBike-large.jpg'>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.composition {

    position: relative;

    @include respond(phone) { 
        padding: 0 3rem;

     }

    &__photo {
        width: 55%;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.4);
        border-radius: 2px;
        position: absolute;
        z-index: 10; 
        -webkit-transition: all .2s;
        transition: all .2s;
        outline-offset: .7rem; // to make space between image and outline


        @include respond(tab-port) { 
            margin-top: 6rem;
            float: left;
            position: relative;
            width: 33.333333%;
            box-shadow: 0 1.5rem 3rem rgba($color-black, .2);

         }

         

        &--p1 {
            left: 0;
            top: -2rem;

            @include respond(tab-port) { 
                top: 1rem;
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
             }
        }

        &--p2 {
            right: 0;
            top: 2rem;

            @include respond(tab-port) { 
                top: -2rem;
                -webkit-transform: scale(1.3);
                transform: scale(1.3);
                z-index: 25;
             }
        }

        &--p3 {
            left: 20%;
            top: 10rem;

            @include respond(tab-port) { 
                top: 1rem;
                left: 0;
                -webkit-transform: scale(1.25);
                transform: scale(1.25);
             }
        }

        &:hover {
            outline: .7rem solid $color-primary;
             -webkit-transform: scale(1.05) translateY(-.5rem);
            transform: scale(1.05) translateY(-.5rem);
            box-shadow: 0 2.5rem 4rem rgba($color-black, .5);
            z-index: 20; // to arrange images on top 
        }

    }

    &:hover &__photo:not(:hover) {
        transform: scale(.95);
    }

}

</style>
