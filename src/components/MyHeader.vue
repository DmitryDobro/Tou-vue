<template>
    <header class="header">
        <div class="navbar">
            <div class="container">
                <div class="navbar-content">
                    <div class="navbar-item">
                         <div class="navbar-burger" @click="getActive">
                            <span></span>
                        </div>
                        <div class="navbar-logo">
                            <div class="navbar-logoImg">
                                <img src="@/assets/img/main/LogoImg.png" alt="">
                            </div>
                            <div class="navbar-logoTxt">
                                <img src="@/assets/img/main/LogoTxt.png" alt="">
                            </div>
                        </div>
                    </div>
                    
                    <ul class="navbar-list header-menu">
                        <li class="navbar-item" v-for="link in links" :key="link.alias"
                        @click="removeActive">
                            <router-link :to="link.url" class="header-li navbar-li">{{link.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {links} from "@/links"
export default {
   data(){
        return {
           links:links
        }
    },
    methods:{
        getActive(){
            let burger = document.querySelector('.navbar-burger')
            let menu = document.querySelector('.header-menu')
            let body = document.body
            burger.classList.toggle('active') 
            menu.classList.toggle('active') 
            body.classList.toggle('active') 
            console.log(body);
           
            // document.addEventListener('click', (event) =>{
            //     if(!event.target.closest('.header-menu') && !event.target.closest('.header-burger.active')){
            //         // burger.classList.remove('active') 
            //         menu.classList.remove('active') 
            //     }
            // })
           
        },
        removeActive(){
            let burger = document.querySelector('.navbar-burger')
            let menu = document.querySelector('.header-menu')
            let body = document.body
            burger.classList.remove('active') 
            menu.classList.remove('active') 
            body.classList.remove('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 0 10px;
}
</style>