<template>
  <header class="header">
    <div class="header-body container">
      <div class="header-logo">LOGO</div>
      <div class="header-menu">
        <div class="header-login">LATEST</div>
        <div class="header-about">ABOUT</div>
      </div>
    </div>
  </header>
</template>

<script>
import '~/components/layouts/header.scss';

export default {
  name: 'MevnHeader',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    cartCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss"></style>
