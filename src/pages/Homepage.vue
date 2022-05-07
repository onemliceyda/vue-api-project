<template>
  <div class="container">
    <div class="d-block mt-2">
      <div class="card p-3 shadow">
        <div class="card-header border-0 mx-3 shadow bg-primary ">
          <h1 class="header text-white text-center">
            Müşteri Listesi
          </h1>
        </div>
        <b-card class="row mx-3 shadow text-left my-3" no-body>
          <b-table
            style="text-align: center;"
            striped
            hover
            :items="customers"
            :fields="fields"
          >
            <template #cell(Accounts)="row">
              <b-button
                size="sm"
                @click="row.toggleDetails"
                class="mr-2"
                variant="primary"
              >
                Show
              </b-button>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthService from "../services/AuthService";
import CustomerService from "../services/CustomerService";
export default {
  name: "CustomerList",
  data() {
    return {
      customers: [],
      fields: [
        {
          key: "FirstName",
          sortable: true
        },
        {
          key: "LastName",
          sortable: true
        },
        {
          key: "BirthDate",
          sortable: true
        },
        {
          key: "Email",
          sortable: true
        },
        {
          key: "Accounts"
        }
      ]
    };
  },
  methods: {
    // müşteri listesini getir
    getAllCustomer() {
      CustomerService.GetCustomer()
        .then(response => {
          if (response.data.IsSuccess == 1 || response.data.IsSuccess == true) {
            //başarılı
            this.customers = response.data.Result;
          } else {
            //hatalı
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    // sayfa oluşurken çalışacak scope
    this.getAllCustomer();
  }
};
</script>
