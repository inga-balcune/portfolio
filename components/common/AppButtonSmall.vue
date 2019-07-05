<template>
    <a href="#" class="btn-text">
        <slot></slot>
    </a>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.btn-text:link, .btn-text:visited {
  font-size: 1.6rem;
  color: $color-primary;
  display: inline-block;
  text-decoration: none;
  border-bottom: 0.1rem solid $color-primary;
  padding: .3rem;
}

.btn-text:hover {
  background-color: #2E4C6A;
  color: $color-white;
  -webkit-box-shadow: 0 1rem 2rem rgba($color-black, .15);
  box-shadow: 0 1rem 2rem rgba($color-black, .15);
}

.btn-text:active {
    -webkit-box-shadow: 0 .5rem 1rem rgba($color-black, .15);
    box-shadow: 0 .5rem 1rem rgba($color-black, .15);
}

</style>
