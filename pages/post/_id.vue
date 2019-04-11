<template>
  <div v-if="post">
    <h2> {{post.title}}</h2>
    <p>{{post.body}}</p>
    <div v-if="user">
      <span>User : </span>
      <router-link :to="`/user/${user.id}`">
        {{user.name}}
      </router-link>
    </div>
  </div> 
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'

  export default {
    methods:{
      ...mapActions({
        getPost:'post/INIT_POST',
        getUser:'user/INIT_USER'
      }),

      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },

      loadPost(id){
        this.getPost(id)
      },

      loadUser(id){
        this.getUser(id)
      }
    },

  computed: {
    post(){
      if(this.$store.state.post.post){
         this.loadUser(this.$store.state.post.post.user_id)
      }       
      return this.$store.state.post.post

    },
    user(){       
      return this.$store.state.user.user
    },
  },

  beforeMount() {  
     this.loadPost(this.$route.params.id)
     console.log("store", this.$store.state)
  },

  beforeRouteUpdate(to, from, next){
    this.loadPost(to.params.id)
  }

  }
</script>