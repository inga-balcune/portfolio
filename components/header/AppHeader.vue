<template>
    <header class="header">
            <div class="header__logo-box">
                <img srcset="@/assets/img/logo-white.png" alt="Logo" class='header__logo'>
            </div>
            <div class="header__text-box">
                <AppHeaderHeading />
                <app-button-main href="#projects" class='btn btn--white'>View My Work</app-button-main>
                <!-- <a href="#projects" class='btn btn--white'>View My Work</a> -->
            </div>
        </header>
</template>

<script>
import AppButtonMain from '@/components/common/AppButtonMain'
import AppHeaderHeading from '@/components/header/AppHeaderHeading'
export default {
    components: {
       AppHeaderHeading,
       AppButtonMain 
    }
}
</script>

<style lang='scss' scoped>

.header {
    height: 85vh;
    background-image: 
        linear-gradient(
            to right bottom,
             rgba($color-primary-light,.6), 
             rgba($color-primary-dark, .6)),
        url(../../assets/img/Phuket-small.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

    // for devices that support clip-path
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        height: 95vh;
    }

    // add image with higher resolution here and in header add smaller image
    @media (min-resolution: 192dpi) and (min-width: 37.5em), 
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width: 125em) {
        background-image: 
        linear-gradient(
            to right bottom,
             rgba($color-primary-light,.6), 
             rgba($color-primary-dark, .6)),
        url(../../assets/img/Phuket.jpg);
    }


    @include respond(tab-land) { 
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
     }

    /* logo position is absolute to its parent, so parent has to be relative positioned */
    &__logo-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    &__logo {
        height: 4rem;
    }
    
    /* elem pos in relation to parent - to center the box use absolute positioning */
    /* elem in relation to itself - use transform: translate(x, y) to center items, */
    
    &__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
}

</style>
