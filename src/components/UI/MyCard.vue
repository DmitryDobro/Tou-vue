<template>
    <div class="card">
        <div class="card-content">
        <div class="card-img">
            <img :src='imgUrl' alt="img">
        </div>
            <div class="card-title">
                <p>{{name}}</p>
                <p>{{profession}}</p>
            </div>
            <div class="card-descriptio">
                <p>Цитата:<br>{{quote}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 props:{
        name:{
            type:String,
            required:true
        },
        profession:{
            type:String,
            required:true
        },
        quote:{
            type:String,
            required:true
        },
        imgUrl:{
            type:String,
        },
    }
}
</script>

<style lang="scss">

</style>