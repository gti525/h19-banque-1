import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import AddCustomer from "./components/AddCustomer.vue";
import Customer from "./components/Customer.vue";
import Login from "./components/Login.vue";
import VerifyLogin from "./components/VerifyLogin.vue";
import LoginAdmin from "./components/LoginAdmin.vue";
import VerifyLoginAdmin from "./components/VerifyLoginAdmin.vue";
import HomeAdmin from "./components/HomeAdmin.vue";
import CreateUser from "./components/CreateUser.vue";
import ErrorPage from "./components/ErrorPage";
import AdminCompteClient from "./components/AdminCompteClient.vue";
import RechercheUserByAdmin from "./components/RechercheUserByAdmin.vue";
import HomeClient from "./components/HomeClient.vue";
import TransferToOtherAccount from "./components/TransferToOtherAccount";
import ShowAccountTransactions from "./components/ShowAccountTransactions";
import ShowCreditTransactions from "./components/ShowCreditTransactions";
import CreditCardPayment from "./components/CreditCardPayment";
import CreateCompany from "./components/CreateCompany";
import ModifyPassword from "./components/ModifyPassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/h",
      name: "customers",
      alias: "/customer",
      component: CustomersList,
      children: [
        {
          path: "/customer/:id",
          name: "customer-details",
          component: Customer,
          props: true
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    },
    {
      path: "/homeAdmin",
      name: "homeAdmin",
      component: HomeAdmin,
    },
        {
          path: "/AdminCompteClient/:id",
          name: "AdminCompteClient-details",
          component: AdminCompteClient,
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/verifylogin",
      name: "verifylogin",
      component: VerifyLogin
    },
    {
      path: "/loginAdmin",
      name: "loginadmin",
      component: LoginAdmin
    },
    {
      path: "/modifyPassword",
      name: "ModifyPassword",
      component: ModifyPassword
    },
    {
      path: "/HomeClient",
      name: "HomeClient",
      component: HomeClient
    },
    {
      path: "/createCompany",
      name: "createCompany",
      component: CreateCompany
    },
    {
      path: "/verifyloginAdmin",
      name: "verifyloginadmin",
      component: VerifyLoginAdmin
    },
    {
      path: "/createUser",
      name: "createUser",
      component: CreateUser
    },
    {
      path: "/createCompany",
      name: "createCompany",
      component: CreateCompany
    },
    {
      path: "/RechercheUserByAdmin",
      name: "RechercheUserByAdmin",
      component: RechercheUserByAdmin
    },
    {
      path: "/ShowAccountTransactions",
      name: "ShowAccountTransactions",
      component: ShowAccountTransactions
    },
    {
      path: "/ShowCreditTransactions",
      name: "ShowCreditTransactions",
      component: ShowCreditTransactions
    },
    {
      path: "/TransferToOtherAccount",
      name: "TransferToOtherAccount",
      component: TransferToOtherAccount
    },
    {
      path: "/CreditCardPayment",
      name: "CreditCardPayment",
      component: CreditCardPayment
    },
    {
      path: "/errorPage",
      name: "errorPage",
      component: ErrorPage
    }
  ]
});
