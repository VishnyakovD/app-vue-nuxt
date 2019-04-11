export const state = ()=>({
  userPosts:{}
})

export const mutations= {
  SET_USER_POSTS(state, payload){
      state.userPosts=payload
  }
}

export const actions={
  async INIT_USER_POSTS({commit, state}, id){ 
      let data= await this.$axios.$get('/posts',{
        params:{
          'access-token':'Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT',
           _format:'json', 
          user_id:id,
          //fields:'id,user_id,title,body'                   
      }
    })   
      commit('SET_USER_POSTS', data.result)
  }
}