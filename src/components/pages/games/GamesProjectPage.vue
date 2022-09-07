<template>
     <section class="games">
        <div class="games-conteiner conteiner">
             <div class="gamesProjest-body">
                <div class="games-cover" >
                <Cover v-for="coverItem in coverItems" :key="coverItem.id"
                :title="coverItem.title"
                :text1="coverItem.text1"
                :text2="coverItem.text2"
                :imgUrl="coverItem.img"
                >
                </Cover>
                </div>
             </div>
               <div class="games-link">
                    <div class="games-link_content">
                        <router-link to="/games_main"></router-link>
                        <p>Игры</p>
                    </div>
                    <div class="games-link_content">
                        <router-link to="/games_project"></router-link>
                        <p>Наши работы</p>
                    </div>
                 </div>
        </div>

     </section>
              
</template>

<script>
import Cover from "@/components/UI/MyCover.vue"
import {coverItems} from '@/items'
export default {
    components:{
        Cover
    }, 
    data(){
        return{
            coverItems:coverItems,
        }
    }, 
}
</script>

<style lang="scss">

</style>