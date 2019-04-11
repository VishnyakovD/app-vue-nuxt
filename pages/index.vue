<template>
<section>
  <div class="row">
    <div class="col-md-12">
      <h1>{{ msg }}</h1>
    </div>
  </div>
  <div class="row">
      <BlogListItem v-for="(item, k) in listItems" :item="item" :key="k"/>
  </div>
  <div style="display:flex;flex-wrap:wrap;">
    
      <nuxt-link :to="{ path: '/', query: { page: index+1 }}" 
      v-for="(item, index) in pages" :key="'idx'+index" :class="{'current':(1+index)===currentPage}"
     style="display:block;width:35px;height:35px; text-align:center;padding:5px; border:1px solid blue;margin:2px"
      >{{(index+1)}}</nuxt-link>
      
  </div>
 
</section>


</template>

<style>
 .current{
   color:red!important;
   font-weight: 600!important;
   border-color:red!important;
   background: yellowgreen
 }
</style>


<script>
import Vue from "vue"
import BlogListItem from "~/components/blog-list-item"
import {mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: 'Home-page',
  props: {
    msg: String
  },

  components:{
    BlogListItem
  },

  async fetch({store}) {   
    await store.dispatch('INIT_POSTS_LIST', 1)
  },

  watch: {
    '$route.query'(page) {
      this.$store.dispatch('INIT_POSTS_LIST', page.page)
    }
  },


  computed:{
    ...mapState({
      listItems: (state) => state.pagePosts
    }),
    // listItems(){
    //   return this.$store.state.pagePosts
    // },
    pages(){
        return new Array(this.$store.state.pageCount)
    },
    currentPage(){
       return this.$store.state.currentPage || 1
    } 
  },

  methods:{
      ...mapActions({
        getPosts:'INIT_POSTS_LIST',
        setCurrentPage:'SET_PAGE'
      })
  }
}


</script>

