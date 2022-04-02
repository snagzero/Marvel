<template lang="html">
    <div>
        <h3>This is characther.vue</h3>

        <ul>

            <li v-for="character in characters">
                {{character.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { public_key, secret_key } from '../marvel';
import axios from 'axios'
export default {
    name: 'Characters',

    data(){
        
        return{ 
            
            characters: []
        }
    },

    mounted(){

        this.getCharacters()

    },

    methods:{


        getCharacters: function(){
    
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
                .then((result) => {

                    
                    result.data.data.results.forEach((item) => {

                        console.log(item)

                        this.characters.push(item)
                    })

                })
                .catch((error) => {

                    console.log(error)
                })
      
        }
    }
}
</script>

<style lang="css">

</style>