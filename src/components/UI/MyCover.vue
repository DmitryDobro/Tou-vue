<template>
    <div class="cover-popap" v-if="popap">
            <div class="cover-popap_content">
                <div class="cover-popap_close" @click="closePopap">
                    <span>&#10006;</span>
                </div>
                <div class="cover-item_popap">
                    <div class="cover-item_title_popap _bigTitle">
                        <h4>{{title}}</h4>
                    </div>
                    <div class="cover-item_text _popap">
                        <p>{{text1}}</p>
                        <p>{{text2}}</p>
                        <p>{{text2}}</p>
                    </div>
                </div>
               <div class="cover-item_popap">
                <div class="cover-img_popap">
                    <img :src='imgUrl' alt="">
                </div>
                <div class="cover-item_link">
                    <a href="">
                        <img src="@/assets/img/cover/GP.png" alt="">
                    </a>
                      <a href="">
                        <img src="@/assets/img/cover/AS.png" alt="">
                    </a>
                </div>
              </div>
            </div>
     </div>
    <div class="cover">
        <div class="cover-item">
            <div class="cover-item_title _bigTitle">
                <h4>{{title}}</h4>
            </div>
            <div class="cover-item_text">
                <p>{{text1}}</p>
                <p>{{text2}}</p>
            </div>
        </div>
         <div class="cover-item item_img">
            <div class="cover-img">
                <img :src='imgUrl' alt="">
            </div>
         </div>
        <div class="cover-item">
            <div class="cover-item_link">
               <linkMore
               @click.prevent="showPopap">Подробнее</linkMore>
            </div>
        </div>
    </div>
</template>

<script>
import linkMore from "@/components/UI/linkMore.vue"
export default {
     emits: ["test"],
    components:{
        linkMore
    },
    props:{
        title:{
            type:String,
            required:true
        },
        text1:{
            type:String,
            required:true
        },
         text2:{
            type:String,
            required:true
        },
        imgUrl:{
            type:String,
        },
    },
    data(){
        return{
            popap: false,
        }
    },
    methods:{
     showPopap(){
        this.popap = true
     },
     closePopap(){
         this.popap = false
     }
    }
}
</script>

<style lang="scss">
.cover {
    display: grid;
    grid-template-columns: [start] 1fr [col2] 1fr;
    grid-template-rows: 1fr;
    margin: 30px 0;
      &:nth-child(even){
        .cover-item.item_img{
            grid-column-start: start;
        }
    }
    @media(max-width: 758px){
        display: block;
    }
}
.cover-item.item_img{
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: col2;   
     padding: 0; 
     @media(max-width: 758px){
          margin-bottom: 20px;
    }
}
.cover-item {
    padding: 0 20px;
      p,h4{
        margin-bottom: 30px;
    }
     @media(max-width: 758px){
        padding: 0;
    }

}
.cover-item_title {
}
.cover-item_text {
    max-width: 600px;
    font-size: 24px;
    line-height: 30px;
}
.cover-item_link {
}
.cover-img {
    img{
        max-width: 100%;
        max-height: 100%;
    }
}




.cover-popap {
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.cover-popap_content {
    position: relative;
    display: flex;
    margin: 0 auto;
    padding: 75px 30px;
    max-width: 1100px;
    max-height: 600px;
    background-color: #fff;
     p,
     h4{
        margin-bottom: 40px;
    }
    @media(max-width: 758px){
        flex-direction: column;
         max-width: 400px;
         max-height: 800px; 
         padding: 0px 30px;
          p{
            margin-bottom: 15px;
            } 
    }
}
.cover-popap_close{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 35px;
}

.cover-img_popap {
    width: 100%;
    height: 100%;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.cover-item_link{
    display: flex;
    justify-content: space-between;
    img{
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
}
</style>