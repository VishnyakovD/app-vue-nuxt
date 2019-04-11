<template>
  <div v-if="user">
      <p>User : {{user.name}}</p>
      <p><img :src="user._links.avatar.href"></p>
      <div class="row">
          <BlogListItem v-for="(item, k) in userPosts" :item="item" :key="k"/>
      </div>
  </div> 
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import BlogListItem from "~/components/blog-list-item"
  export default {
    components:{
  BlogListItem
  },
    methods:{
      ...mapActions({
        getUser:'user/INIT_USER',
        getUserPosts:'userposts/INIT_USER_POSTS',
      }),

      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },

      loadUser(id){
        this.getUser(id)
      },

      loadUserPosts(id){
        this.getUserPosts(id)
      }
    },

  computed: {
    user(){   
      return this.$store.state.user.user
    }, 
    userPosts(){       
      return this.$store.state.userposts.userPosts
    },
  },

  beforeMount() {  
     this.loadUser(this.$route.params.id)
      this.loadUserPosts(this.$route.params.id)
  },

  beforeRouteUpdate(to, from, next){
    this.loadUser(to.params.id)
    this.loadUserPosts(this.$route.params.id)
  }

  }
</script>