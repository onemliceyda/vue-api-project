<template>
  <div class="container">
    <div class="d-block mt-2">
      <div class="card p-3 shadow">
        <div class="card-header border-0 mx-3 shadow">
          <h1 class="text-secondary header">
           Müşteri Listesi
          </h1>
        </div>
        <b-card
          v-for="(customer, index) in customers"
          :key="index"
          class="row mx-3 shadow border-card text-left my-3"
          no-body
        >
          <div class="p-1 m-2">
            <span class="badge badge-dark mx-1 p-3">
              <span class="title"
                >Ad-Soyad:<span class="mx-1 text-white">{{
                  customer.FirstName
                }}</span></span
              >
            </span>
                <span class="badge badge-dark mx-1 p-3">
              <span class="title"
                >Ad-Soyad:<span class="mx-1 text-white">{{
                  customer.LastName
                }}</span></span
              >
            </span>
            <span class="badge badge-secondary mx-1 p-3">
              <span class="title"
                >Email:<span class="mx-1 text-white">{{
                  customer.Email
                }}</span></span
              >
            </span>
             <span class="badge badge-secondary mx-1 p-3">
              <span class="title"
                >Email:<span class="mx-1 text-white">{{
                  customer.BirthDate
                }}</span></span
              >
            </span>
               <span class="badge badge-secondary mx-1 p-3">
              <span class="title"
                >Email:<span class="mx-1 text-white">{{
                  customer.ContactName
                }}</span></span
              >
            </span>
                  <span class="badge badge-secondary mx-1 p-3">
              <span class="title"
                >Email:<span class="mx-1 text-white">{{
                  customer.Phone
                }}</span></span
              >
            </span>
                  <span class="badge badge-secondary mx-1 p-3">
              <span class="title"
                >Email:<span class="mx-1 text-white">{{
                  customer.Address
                }}</span></span
              >
            </span>
          </div>

          <b-list-group flush>
            <b-list-group-item>
              <div class="bg-white p-2 my-2 text-dark rounded shadow sub-title">
                <p class="ml-2 pt-2 text-secondary">Oluşturulma Tarih:</p>
                <hr />
                <p class="ml-2">{{ customer.CreatedDate }}</p>
              </div>
              <div class="bg-white p-2 my-2 text-dark rounded shadow sub-title">
                <p class="ml-2 pt-2 text-secondary">Konu:</p>
                <hr />
                <p class="ml-2">{{ customer.Subject }}</p>
              </div>
              <div class="bg-white p-2 my-2 text-dark rounded shadow sub-title">
                <p class="ml-2 pt-2 text-secondary">Mesaj:</p>
                <hr />
                <p class="ml-2">{{ customer.Message }}</p>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthService from "../services/AuthService"
  export default {
    name: "CustomerList",
    data() {
      return {
        customers: [],
      };
    },
    methods: {
    handleSubmit() {
      AuthService.CustomerList(this.customers)
        .then((response) => {
          if (response.data.IsSuccess == true || response.data.IsSuccess == 1) {
            
            console.log("Kullanıcılara bağlantı sağlandı.");
          } else {
            console.log(error);
          }
        });
    },
  },
  }
   
</script>


