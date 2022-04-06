import { createStore } from 'vuex'
import axios from 'axios'

import { public_key } from '../marvel'

export default createStore({
  state: {
    characters: [],
    character: [],
    url: [],
    
  },
  getters: {
  },
  mutations: {
    // @ get characters list from api
    getCharacters(state){

      state.characters = []
     
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=9`)
      .then((result) => {

          
          result.data.data.results.forEach((item) => {

              console.log(item)

              state.characters.push(item)

              
          })

      })
      .catch((error) => {

          console.log(error)
      })
    },
    // @ get para img na page characters
    getCharacter(state, id){

      state.character = []

      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}&limit=9`)
                .then((result) => {

                    console.log(result)

                    result.data.data.results.forEach((item) =>{

                        state.character.push(item)

                        state.url = `${item.thumbnail.path}/`


                    })
                })
                .catch((error) =>{

                    console.log(error)
                })
    }
  },

  actions: {
    getCharacters: context => {

      context.commit('getCharacters')
    },

    getCharacter(context, id) {

      context.commit('getCharacter', id)

    }
  },
  modules: {
  }
})
