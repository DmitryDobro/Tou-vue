<template>
    <section class="main_page">
          <div class="conteiner">
        <div class="main_page-body">
            <div class="main_page-colomn">
                <div class="main_page-title _bigTitle">
                Мы создаем мобильные игры, в которые ты играешь
                </div>
            <div class="main_page-content">
                <linkMore>
                <p>Узнать подробнее</p>
                </linkMore>
                <!-- <div class="main_page-item _linkMore">
                    <a href="">
                        <p>Узнать подробнее</p>
                         <img src="@/assets/img/main/Arrow.png" alt="">
                    </a>
                </div> -->
                <div class="main_page-item">
                    <p class="main_page_text">«Оригинальные идеи, качество реализации игровых механик и внимание к деталям интерфейса - наши основные принципы.»</p>
                </div>
            </div>
            </div>
             <div class="main_page-colomn">
                  <div class="main_page-imgFon">
                    <img src="@/assets/img/main/Unicon.png" alt="">
                 </div>
            </div>
        </div>
    </div>
    </section>
  
</template>

<script>
import linkMore from "@/components/UI/linkMore.vue"
export default {
    components:{
        linkMore
    }
}
</script>

<style lang="scss" scoped>
  

</style>