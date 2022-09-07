<template>
    <section class="company">
        <div class="company-conteiner conteiner">
            <div class="company-body">
                <div class="company-column">
                        <div class="company-title _bigTitle">
                            О компании
                        </div>
                        <div class="company-text">
                            <p>Toy.Stream - это компания-разработчик и издатель мобильных игр.
                                Мы работаем небольшими командами - это позволяет оставаться гибкими и быстро подстраиваться под потребности наших игроков. На каждом этапе - начиная с детального
                                разбора идеи, заканчивая реализацией игровых механик и геймплея - мы ориентируемся
                                на наших пользователей. Просто потому, что сами играем*</p>
                            <p>Также мы помогаем другим студиям разработки реализовывать свои идеи: поможем
                                протестировать идеи и прототипы, а хит - издадим на полностью прозрачных и вкусных
                                условиях*</p>


                        </div>
                </div>
                <div class="company-column">
                    <div class="company-items">
                        <div class="company-item">
                                <div class="company-item_img">
                                    <img src="@/assets/img/flag.png" alt="">
                                </div>
                                <div class="company-item_title">
                                    2млрд+
                                </div>
                                <div class="company-item_text">
                                    Установок
                                </div>
                        </div>
                        <div class="company-item">
                                <div class="company-item_img">
                                    <img src="@/assets/img/flag.png" alt="">
                                </div>
                                <div class="company-item_title">
                                    2млрд+
                                </div>
                                <div class="company-item_text">
                                    Установок
                                </div>
                        </div>
                        <div class="company-item">
                                <div class="company-item_img">
                                    <img src="@/assets/img/flag.png" alt="">
                                </div>
                                <div class="company-item_title">
                                    2млрд+
                                </div>
                                <div class="company-item_text">
                                    Установок
                                </div>
                        </div>
                        <div class="company-item">
                                <div class="company-item_img">
                                    <img src="@/assets/img/flag.png" alt="">
                                </div>
                                <div class="company-item_title">
                                    2млрд+
                                </div>
                                <div class="company-item_text">
                                    Установок
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider============================= -->
               <div class="card-row">
                <carousel :settings="settings" :breakpoints="breakpoints">
                  <template #addons>
                    <navigation class="test " />
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
            <!-- ===================================== -->
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
        itemsToShow: 2.5,
        wrapAround: true,
        snapAlign: 'left'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        600: {
          itemsToShow: 2
        }
      }
        }
    }
}
</script>

<style lang="scss" scoped>
.card-row{
    display: none;
    @media(max-width: 1025px){
        display: block;
    }
}
.company-link{
      @media(max-width: 1025px){
        display: none;
    }
}

</style>