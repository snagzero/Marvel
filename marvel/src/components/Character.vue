<template lang="html">
    <div>
        <!-- div para imagen-->
        <div class="flex-container">
            <div class="flex2">
                <img :src="url" alt="" class="char-img">
            </div>
            <!--div para nome description-->
            <div class="flex" v-for="char in character">
                <h3>{{char.name}}</h3>
                <p>{{char.description}}</p>
                
<!-- character about
                <p>{{char.id}}</p>
                <p>{{char.modified}}</p>
                <p>{{char.resourceURI}}</p>
                <p>{{char.urls}}</p>
                <p>{{char.thumbnail}}</p>
                <p>{{char.comics}}</p>
                <p>{{char.stories}}</p>
                <p>{{char.events}}</p>
                <p>{{char.series}}</p>
                
-->
            </div>

            

        </div>
        <!-- botao para back home-->
        <router-link to="/">
            <button type="button" name="button" class="btn-back">Back</button>

        </router-link>
        
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Character',

    data(){

        return{

            url: '',
            size: 'detail.jpg',
        }
    },
    mounted(){

        this.$store.dispatch('getCharacter', this.$route.params.id)

        this.getImage()

    },

    computed: {
        ...mapState({
            character: state => state.character,
            preUrl: state => state.url
        })
    },


    methods: {

        getImage: function(){

            this.url = `${this.preUrl}${this.size}`

        }
        
    }
}
        
</script>

<style lang="css">

.flex-container{

    margin: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex{

    flex: 50%;
    text-align: left;

}

.flex2{

    flex: 1%;
    
}

.char-img{

    border-radius: 10px;

}

.btn-back{

    width: 200px;
    padding: 10px;
    border-radius: 25px;
    background-color: transparent;
    font-size: 18px;
    margin-bottom: 100px;
    cursor: pointer;
}
</style>
