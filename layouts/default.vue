<template>
<div>
    <div class="container-fluid">
       <BreadCrumbs/>
    </div>

    <div class="container">
      <h1>Блог</h1>
      <nuxt />
    </div>

    <div class="container-fluid">
        <div class="alert" style="padding: 30px 15px; background-color: #f5f5f5;    margin-bottom:0">...</div>
    </div> 
</div>
</template>



<script>
  import BreadCrumbs from "~/components/bread-crumbs"
  export default {
    name: 'default',
    components:{
      BreadCrumbs
    }
  }
</script>



<style>

body{
  padding: 0;
  margin: 0;
}
.container-fluid{
  padding-left:0;
  padding-right: 0;
}

</style>
