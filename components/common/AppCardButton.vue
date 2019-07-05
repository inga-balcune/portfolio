<template>
    <a href="" target='_blank' class='card-btn'>
        <slot></slot>
    </a>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.card-btn {
    &:link,
    &:visited {
        font-size: $default-font-size;
        color: $color-white;
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        padding: .5rem 2rem;
        border: .1rem solid $color-white;
        color: $color-grey-dark;
    }

    &:hover {
        background-color: $color-primary;
        color: $color-white;
        box-shadow: 0 1rem 2rem rgba($color-black, .15);
    }

    &:active {
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
    }
}
</style>
