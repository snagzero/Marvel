<!-- Characters List with persistent vote list -->
<template lang="html">
    <div>
        <!-- barra para search e filtro alfabetico ou por voto baseado no count do button vote-->
        <div id="sort-bar">
            <select name="sortBy" id="select" v-model="sortBy">
                <option value="alphabetically">Alphabetically</option>
                <option value="by vote">Vote</option>
            </select>
            
            <input type="text" v-model="searchValue" placeholder="Search Character" id="search-input">
        </div>

        <div class="card-container">
            <!-- Div para os cards dos characters-->
            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <!-- botao para voto individual -----????? ainda esta geral -->
                <button class="vote" @click="count++">Vote count is: {{ count }}</button>
                <!-- call pra thumbnail ??? character.thubnail so pega o texto do path {{character.thumbnail}}-->
                <div class="flex2">
                <h3>{{character.thumbnail}}</h3>
                </div>
                <img :src="url" alt="" class="char-img">

                <!-- button para link de cada personagem-->
                <router-link :to="{ name: 'character', params: { id: character.id } }">
                 
                    <button type="button" name="button" class="btn-view">View</button>
                
                </router-link>

                
            </div>
                
        </div>
       
    </div>
</template>

<script>
import { public_key } from '../marvel';
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Characters',

    data(){

        return{

            count: 0,
            search: '',
            
        }
    },
    mounted(){

        this.$store.dispatch('getCharacters')
        console.log(this.characters)        

    },
    
    computed: {

        ...mapState({
            characters: state => state.characters
         
        }),


    
    },
    

    methods:{

       
       
    }
}
</script>

<style lang="css">

    .card-container{
        margin-left: 30%;
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 10px;
    }

    .card {

        text-align: center;
        background-color: rgb(133, 10, 10);
        min-height: 280px;
    }

    .card h3{

        color: white;
    }

    .btn-view{

        padding: 10px;
        margin-top: 80px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: white;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }

    .input_group{

        padding: 10px;
        border-radius: 15px;
        background-color: transparent;
    }

    .vote{

        padding: 10px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: white;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }

    .char-img{

    border-radius: 10px;
    size: 10%;

    }

</style>