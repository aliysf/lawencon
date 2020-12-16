<template>
    <div class="container">
        <p align="center">{{tiket.kota_asal}} - {{tiket.kota_tujuan}} On {{new Date(tiket.tanggal).toDateString()}}</p>
        <table class="table">
            <tr>
                <th>Bus Name</th>
                <th>Dept. Time</th>
                <th>Coach Type</th>
                <th>Seats Available</th>
                <th>Fare</th>
                <th></th>
            </tr>
            <tr v-for="(bus,idx) in data" :key="idx">
                <td>{{bus.name}}</td>
                <td>{{bus.time}}</td>
                <td>{{bus.coach_type}}</td>
                <td>{{bus.seat}}</td>
                <td>{{bus.fare}}</td>
                <td><b-button variant="danger" @click="showModal(bus)">View Seats</b-button></td>
            </tr>
        </table>
        <b-modal  v-model="show" title="Select Seats" hide-footer>
            <div class="d-flex" v-if="bus!=null">
                <div class="col-3">
                    <span v-for="(i,idx) in bus.seat/2">
                        <button style="background-color: transparent; border: none; outline: none" @click="addSeat(seat_num(idx))">
                        <img  v-if="checked(seat_num(idx))" :src="require('@/assets/img/bseat.png')"/>
                            <img v-else :src="require('@/assets/img/fseat.png')">
                        </button>
                    </span>
                </div>
                <div class="col-3">
                    <span v-for="(i,idx) in bus.seat/2">
                        <button style="background-color: transparent; border: none; outline: none" @click="addSeat(seat_num(idx+bus.seat/2))">
                        <img v-if="checked(seat_num(idx+bus.seat/2))" :src="require('@/assets/img/bseat.png')"/>
                         <img v-else :src="require('@/assets/img/fseat.png')">
                        </button>
                    </span>
                </div>
                <div class="col-3">
                    <table class="table" style="height: 300px">
                        <tr>
                            <td>Seats</td>
                            <td>Fare</td>
                            <td>Class</td>
                        </tr>
                        <tr v-for="i in selected_seat">
                            <td>{{i}}</td>
                            <td>{{bus.fare}}</td>
                            <td>Economy</td>
                        </tr>
                    </table>
                    <div>
                        <p class="font-weight-bold">Total: {{sum_price}}</p>
                    </div>
                </div>
            </div>
            <b-button @click="submitForm">Submit</b-button>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "ListBus",
        props:{
            data:{},
            tiket:{}
        },
        data(){
            return{
                show:false,
                bus:null,
                selected_seat:[]
            }
        },
        watch:{
          show(val){
              if(val==false){
                  this.selected_seat=[]
                  this.bus=null
              }
          }
        },
        computed:{
          sum_price(){
              return this.bus.fare*this.selected_seat.length
          }
        },
        methods:{
            showModal(data){
                this.show=true
                this.bus=data
            },
            submitForm(){
              let data={
                  bus: this.bus,
                  seat: this.selected_seat,
                  tiket: this.tiket
              }
              this.$emit("changePage", "Purchase", data)
            },
            checked(id){
                let added=false
                for (let i of this.selected_seat){
                    if(i==id){
                        added=true
                    }
                }
                return !added
            },
            addSeat(id){
                let added=false
                for (let i of this.selected_seat){
                    if(i==id){
                        added=true
                    }
                }
                if(!added && this.selected_seat.length<5){
                    this.selected_seat.push(id)
                }

            },
            seat_num(val) {
                let id='A'
                id=id.charCodeAt(0)
                id+=Math.floor(val/2)
                if(val%2==0){
                    return String.fromCharCode(id)+1
                }
                else{
                    return String.fromCharCode(id)+2
                }
            }
        }
    }
</script>

<style scoped>

</style>
