<template>
  <ol class="breadcrumb" style="padding: 30px 15px;">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ol>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    msg: String
  }
}
</script>
