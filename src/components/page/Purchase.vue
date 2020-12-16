<template>
<div class="container row">
    <div class="col-6">
        <b-form-group label="Nama:">
            <b-form-input></b-form-input>
        </b-form-group>
        <b-form-group  label="Alamat:">
            <b-form-input></b-form-input>
        </b-form-group>
        <b-form-group label="Email:">
            <b-form-input></b-form-input>
        </b-form-group>
    </div>
    <div class="col-6">
        Journy Details
        <br>
        {{data.bus.location}}
        <br>
        Date Time: {{new Date(data.tiket.tanggal).toDateString()}}
        <br>
        {{data.bus.name}}
        <br>
        {{data.bus.coach_type}}
        <br>
        Seats no: {{data.seat}}
    </div>

</div>
</template>

<script>
    export default {
        name: "Purchase",
        props:{
            data:{}
        },
    }
</script>

<style scoped>

</style>
