<!-- Characters List with persistent vote list -->
<template lang="html">
    <div>
        
        <div id="sort-bar">
            <select name="sortBy" id="select" v-model="sortBy">
                <option value="alphabetically">Alphabetically</option>
                <option value="by vote">Vote</option>
            </select>
            
            <input type="text" v-model="searchValue" placeholder="Search Character" id="search-input">
        </div>

        <div class="card-container">
            <!-- Div for characters cards-->
            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <button class="vote" @click="count++">Vote count is: {{ count }}</button>
                <p>{{character.thumbnail}}</p>
                <router-link :to="{ name: 'character', params: { id: character.id } }">
                    <!-- Button for specific characters-->
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

            url: '',
            size: 'detail.jpg',
            count: 0,
            search: '',
        }
    },
    mounted(){

        this.$store.dispatch('getCharacters')
        console.log(this.characters)

        this.$store.dispatch('getCharacters')

        this.getImage()
        

    },
    
    computed: {

        ...mapState({
            characters: state => state.characters
        }),


    
    },
    

    methods:{

        getImage: function(){

            this.url = `${this.preUrl}${this.size}`

        },
       
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
        background-color: #333;
        min-height: 280px;
    }

    .card h3{

        color: white;
    }

    .btn-view{

        padding: 10px;
        margin-top: 50px;
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

</style>