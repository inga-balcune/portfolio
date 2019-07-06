<template>
    <div class="footer__logo-box">
        <picture class="footer__logo">
            <source 
                srcset='@/assets/img/logo-white-small-1x.png 1x, @/assets/img/logo-white-small-2x.png 2x' 
                media='(max-width: 37.5em))'>
            <img class="footer__logo-two"
                srcset="@/assets/img/logo-white-1x.png 1x, @/assets/img/logo-white-2x.png 2x" 
                alt="Footer Logo"
                src='@/assets/img/logo-white-2x.png'>
        </picture>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.footer__logo-box {
        text-align: center;

         @include respond(tab-port) { 
            padding: 3rem 0;
         }
    }

    .footer__logo {
        width: 12rem;
        height: auto;
    }

    .footer__logo-two {
        width: 12rem;
        height: auto;
    }
</style>
