export const state = ()=>({
  user:{}
})

export const mutations= {
  SET_USER(state, payload){
      state.user=payload
  }
}

export const actions={
  async INIT_USER({commit, state}, id){ 
      let data= await this.$axios.$get('/users',{
        params:{
          'access-token':'Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT',
           _format:'json', 
          id:id,
          //fields:'id,user_id,title,body'                   
      }
    })   
      commit('SET_USER', data.result[0])
  }
}