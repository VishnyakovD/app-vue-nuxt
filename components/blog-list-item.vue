<template>
  <div class="col-sm-6 col-md-4" :key="item.id">
    <div class="thumbnail">
      <img src="https://www.stroydomtrust.ru/assets/gallery/1191/8076.jpg">
      <div class="caption">
        <h3 style="overflow: hidden;height: 79px;">{{item.title}}</h3>
        <p>
          <router-link :to="`/post/${item.id}`" class="btn btn-link" style="padding: 10px 0;font-size: 20px;">More...</router-link>
        </p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'BlogListItem',
  props: {
    item:{}
  }
}
</script>
