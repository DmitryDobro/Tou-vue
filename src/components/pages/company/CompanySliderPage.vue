<template>
     <section class="company">
      <div class="company-conteiner conteiner">
        <div class="company-body">
            <div class="card-row">
                <carousel :settings="settings" :breakpoints="breakpoints">
                  <template #addons>
                    <navigation class="test" />
                    </template>
                    <slide class="card__wrapper" v-for="item in items" :key="item.id">
                       <Card
                        :name="item.name"
                        :profession="item.profession"
                        :imgUrl="item.img"
                        :quote="item.quote"> 
                       </Card>
                    </slide>
               </carousel>
            </div>
        </div>
        <div class="company-link">
                <div class="company-link_content">
                    <router-link to="/company_info"></router-link>
                    <p>О студии</p>
                </div>
                  <div class="company-link_content">
                    <router-link to="/company_comand"></router-link>
                    <p>Команда</p>
                </div>
        </div>
      </div>
    </section>
</template>

<script>
import Card from "@/components/UI/MyCard.vue"
import {items} from '@/items' 
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
     components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
       data(){
        return{
        items:items,
         settings: {
        itemsToShow: 3,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
        }
    }
}
</script>

<style lang="scss" scoped>


</style>