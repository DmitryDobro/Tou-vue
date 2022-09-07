<template>
   <section class="games">
        <div class="conteiner">
            <div class="games-body">
                <div class="games-column">
                    <div class="games-title _bigTitle">
                        игры
                    </div>
                    <div class="games-content">
                        <div class="games-item">
                            <p class="game-text">Toy.Stream сегодня — это команда из более 500 человек и офисы по всему миру. Мы входим в топ-10 игровых разработчиков по установкам — общее количество загрузок перевалило за 2 млрд, а ежемесячная аудитория составляет более 250 млн игроков.</p>
                            <p class="game-text">
                                В разработке у нас всегда находится более десяти проектов одновременно. Мы постоянно экспериментируем, ищем новые тренды и пробуем себя в новых жанрах.
                            </p>
                        </div>
                        <div class="games-item _linkMore">
                            <router-link to="/games_project">
                               <p> Смотреть наши работы</p>
                                <img src="@/assets/img/Arrow_bottom.svg" alt="">
                            </router-link>
                        </div>
                    </div>
                </div>
                 <div class="games-column">
                    <div class="games-imgFon">
                        <img src="@/assets/img/robot.png" alt="">
                    </div>
                 </div>
                 <div class="games-column">
                     <div class="company-link">
                    <div class="company-link_content">
                        <router-link to="/games_main"></router-link>
                        <p>Игры</p>
                    </div>
                    <div class="company-link_content">
                        <router-link to="/games_project"></router-link>
                        <p>Наши работы</p>
                    </div>
                     </div>
                 </div>
            </div>
        </div>
   </section> 
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>



</style>