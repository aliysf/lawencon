<template>
    <div>
        <header-comp @changePage="switchPage"></header-comp>
        <transition>
            <component @changePage="switchPage" :is="component_page" :data="data_json" :tiket="tiket"></component>
        </transition>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
    import Home from "../components/page/Home";
    import ListBus from "@/components/page/ListBus";
    import HeaderComp from "@/components/base/HeaderComp";
    import FooterComp from "@/components/base/FooterComp";
    import Purchase from "@/components/page/Purchase";
    export default {
        name: "BusesPage",
        components: {FooterComp, HeaderComp, Home, ListBus, Purchase},
        data(){
            return{
                component_page:'Home',
                data_json:null,
                tiket:null
            }
        },
        methods:{
            switchPage(val, data, tiket){
                this.component_page = val
                this.data_json=data
                this.tiket=tiket
            },
        }
    }
</script>

<style scoped>

</style>
