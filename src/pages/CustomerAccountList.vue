<template>
  <div class="container">
    <div class="d-block mt-2">
      <div class="card p-3 shadow">
        <template v-if="accounts.length > 0">
          <div class="card-header border-0 mx-3 shadow bg-primary ">
            <h1 class="header text-white text-center">
              {{ accounts[0] && accounts[0].FirstName }}
              {{ accounts[0] && accounts[0].LastName }} Müşterisinin Hesap
              Listesi
            </h1>
          </div>
          <b-card class="row mx-3 shadow text-left my-3" no-body>
            <b-table
              style="text-align: center;"
              striped
              hover
              :items="accounts"
              :fields="fields"
            >
              <template #cell(IsActiveStatus)="row">
                <div
                  v-if="row.item.IsActive == true"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div
                    style="width:30px;
                   height:30px; 
                   border-radius: 50%; 
                   background-color: lime;"
                  ></div>
                </div>
                <div v-else>
                  as
                </div>
              </template>
            </b-table>
          </b-card>
        </template>
        <template v-else>
          <div>
            <b-alert variant="danger" show class="text-center p-5">
              <h3>
                Müşteriye Ait Hesap Bulunamadı!
              </h3>
            </b-alert>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "../services/CustomerService";

export default {
  name: "CustomerAccountList",
  data() {
    return {
      accounts: [],
      fields: [
        {
          key: "Name",
          sortable: true
        },
        {
          key: "AccountNo",
          sortable: true
        },
        {
          key: "IsActiveStatus",
          sortable: true
        }
      ]
    };
  },
  methods: {
    getAccountListByCustomerId() {
      CustomerService.GetCustomerAccountByCustomerId(
        this.$route.params.customerId
      )
        .then(response => {
          if (response.data.IsSuccess == true || response.data.IsSuccess == 1) {
            this.accounts = response.data.Result;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.getAccountListByCustomerId();
  }
};
</script>

<style scoped></style>
