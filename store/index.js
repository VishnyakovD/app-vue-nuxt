export const state = ()=>({
  pagePosts:[],
  currentPage:1,
  pageCount:0,
  isLoaded:false,
})

export const mutations= {
  SET_POSTS_LIST(state, payload) {
    state.pagePosts = payload;
    state.isLoaded = true;
  },
  SET_PAGE(state, payload) {
    state.currentPage = payload
  },
  SET_PAGE_COUNT(state, payload) {
    state.pageCount = payload
  }
}

export const actions={
  async INIT_POSTS_LIST({commit, state}, page){
      let data = await this.$axios.$get('/posts', {params:{
        page:page,
        'access-token':'Y1A3q9Ee-dMhjxzsdco7qrr-W-6VPp4bpidT',
         _format:'json'
      
      }})
      debugger;
      
      commit('SET_POSTS_LIST', data.result)
      commit('SET_PAGE', data['_meta'].currentPage)
      commit('SET_PAGE_COUNT', data['_meta'].pageCount)
  },

  async SET_PAGE({commit, state}, page){
    commit('SET_PAGE', page)
  }
}