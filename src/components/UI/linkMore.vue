<template>
        <div class="_linkMore">
            <a href="#">
                <slot></slot>
                <img src="@/assets/img/main/Arrow.png" alt="">
            </a>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" >
    ._linkMore {
    width: 190px;
    height: 90px;
    background: rgba(206, 0, 2, 1);
    a{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        cursor: pointer;
        margin: 0 auto;
        font-size: 22px;
        line-height: 27px;
        color: #FFFFFF;
    }
}
</style>
