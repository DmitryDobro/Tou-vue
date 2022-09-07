<template>

    <div class="footer">
         <div class="conteiner">
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="footer-li navbar-li">{{link.title}}</router-link>
                    </li>
                </ul>
            
        </div>
        
    </div>
</template>

<script>
import {links} from "@/links"
export default {
   data(){
        return {
           links:links
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .footer{
        padding: 20px 0;
        background: rgba(239, 239, 239, 1);
    }
    .footer-li{
        font-size: 20px;
        line-height: 25px;
        color: #000;
        &:hover{
            color: rgba(255, 0, 0, 1);
        }
        &.router-link-active{
            color: rgba(166, 0, 2, 1);
        }
        @media(max-width: 758px){
            font-size: 14px;
        }
        @media(max-width: 400px){
            font-size: 12px;
        }
}
</style>