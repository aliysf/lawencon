<template>
    <div class="header" >
        <b-navbar >
            <b-navbar-brand href="#">
                <img height="100px" :src="require('@/assets/img/redbus_india_logo.png')">
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#"><b-button style="background-color: coral; color: white; border: none">Sign Up</b-button></b-nav-item>
                <b-nav-item href="#" ><b-button style="background-color: coral; color: white; border: none">Login</b-button></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <div style="background-color: coral">
            <b-button style="background-color: transparent; border: none" @click="backHome">Home</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-comp",
        methods:{
            backHome(){
                this.$emit('changePage', 'Home')
            }
        }
    }
</script>

<style scoped>

</style>
