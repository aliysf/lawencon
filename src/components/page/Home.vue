<template>
    <div :style="image" >
        <div style="background-color: rgba(178,190,195,.5); height: 100%; position: absolute; width: 100%">
        </div>
        <div class="container">
            <div class="row" style="padding: 20px; margin: auto">
                <div class="col-md-5 m-auto" style=" background-color: white;padding: 20px ">
                    <div class="d-flex">
                        <b-form-group class="col-6" label="Leaving from:">
                            <b-form-select v-model="kota_asal" @change="generateTujuan" :options="list_kota_asal"></b-form-select>
                        </b-form-group>
                        <b-form-group class="col-6" label="Going to:">
                            <b-form-select v-model="kota_tujuan" :options="list_kota_tujuan"></b-form-select>
                        </b-form-group>
                    </div>
                    <b-form-group label="Going to:">
                        <b-form-datepicker v-model="tanggal" ></b-form-datepicker>
                    </b-form-group>
                    <b-button @click="search" style="background-color: coral" :disabled="kota_tujuan==null || tanggal==null">Search bus</b-button>
                </div>
                <div class="col-md-5 m-auto">
                    <img height="276px" width="100%" :src="require('@/assets/img/redBus-coupons-offers-1586.png')">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { RepositoryAPI } from '@/api/repository_api'
    const json = RepositoryAPI.get('json')
    export default {
        name: "Home",
        data(){
            return{
                list_kota_asal:[
                    { value: null, text: 'Pilih Kota Asal' },
                    "Dhaka",
                    "Comilla",
                    "Chittagong"
                ],
                list_kota_tujuan:[
                    { value: null, text: 'Pilih Kota Tujuan' },
                ],
                list_json:[
                    {nama:"Comilla", id:"1109001"},
                    {nama:"Chittagong", id:"1109002"},
                    {nama:"KuaKata", id:"1109003"},
                    {nama:"Coxs Bazar", id:"1109004"},
                    {nama:"Rajshahi", id:"1109005"},
                    {nama:"Dhaka", id:"1109006"},
                    {nama:"Mymensingh", id:"1109007"},
                    {nama:"Sylet", id:"1109008"}
                ],
                kota_asal:null,
                kota_tujuan:null,
                tanggal:null,
                image:{
                    backgroundImage: `url(${require('@/assets/img/slider.jpg')})`,
                    backgroundSize:'cover',
                    minHeight:'300px',
                    position:'relative'
                }
            }
        },
        methods:{
            async search(){
                var id=0
                for (let data of this.list_json){
                    if(data.nama==this.kota_tujuan){
                        id=data.id
                    }
                }
                let tiket_detail={
                    kota_asal: this.kota_asal,
                    kota_tujuan: this.kota_tujuan,
                    tanggal: this.tanggal
                }
                const response= await json.getBuses(id)
                this.$emit("changePage", "ListBus", response.data, tiket_detail)
            },
            generateTujuan(){
                this.list_kota_tujuan=[{ value: null, text: 'Pilih Kota Tujuan' }]
                this.kota_tujuan=null
                if(this.kota_asal=="Dhaka"){
                    this.list_kota_tujuan.push(
                        "Comilla", "Chittagong", "KuaKata", "Coxs Bazar", "Rajshahi"
                    )
                }
                else if(this.kota_asal=="Comilla"){
                    this.list_kota_tujuan.push(
                        "Dhaka", "Chittagong", "Rajshahi"
                    )
                }
                else if(this.kota_asal=="Chittagong"){
                    this.list_kota_tujuan.push(
                        "Mymensingh", "Dhaka", "Sylet"
                    )
                }
            }
        }
    }
</script>

<style scoped>

</style>
