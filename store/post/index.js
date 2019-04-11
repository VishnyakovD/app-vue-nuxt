export const state = ()=>({
  post:{}
})

export const mutations= {
  SET_POST(state, payload){
      state.post=payload
  }
}

export const actions={
  async INIT_POST({commit, state}, id){ 
      let data= await this.$axios.$get('/posts',{
        params:{
          'access-token':'Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT',
           _format:'json', 
          id:id,
          fields:'id,user_id,title,body'                   
      }
    })   
      commit('SET_POST', data.result[0])
  }
}