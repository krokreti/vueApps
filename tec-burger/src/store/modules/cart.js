const state = {
    cart: [], 
    carts: [],
    //      { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity: 1 }
  }
  const mutations = {
    ADD_CART(state, produto) {
      const carts = [ ...state.carts]
      const index = carts.findIndex(cart => cart.id === produto.id)
      if(index !== -1) {
        carts[index].quantity++
      } else {
        carts.push({...produto, quantity: 1})
      }
      state.carts = [ ...carts ]
    },
    REMOVE_CART(state, produto) {
      const carts = [ ...state.carts ]
      const index = carts.findIndex(cart => cart.id === produto.id)
      if(index !== -1) {
        const item = carts[index]
        if(item.quantity === 0) {
          carts.splice(index, 1)
        } else {
          carts[index].quantity--
        }
      }
      state.carts = [ ...carts ]
    }
  }
  const actions = {
    addToCart({commit}, produto) {
      commit('ADD_CART', produto)
    },
    removeFromCart({commit}, produto) {
      commit('REMOVE_CART', produto)
    }
  }
  const getters = {
    carts: (state) => state.carts,
    cartItemNumber: (state) => {
      return state.carts.reduce((count, curItem) => {
        return count + curItem.quantity
      }, 0) 
    }
  }

  const cartModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default cartModule;