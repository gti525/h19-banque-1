import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import VerifyLogin from "./components/VerifyLogin.vue";
import LoginAdmin from "./components/LoginAdmin.vue";
import VerifyLoginAdmin from "./components/VerifyLoginAdmin.vue";
import HomeAdmin from "./components/HomeAdmin.vue";
import CreateUser from "./components/CreateUser.vue";
import AdminCompteClient from "./components/AdminCompteClient.vue";
import RechercheUserByAdmin from "./components/RechercheUserByAdmin.vue";
import HomeClient from "./components/HomeClient.vue";
import TransferToOtherAccount from "./components/TransferToOtherAccount";
import ShowAccountTransactions from "./components/ShowAccountTransactions";
import ShowAccountTransactionsAdmin from "./components/ShowAccountTransactionsAdmin";
import ShowCreditTransactions from "./components/ShowCreditTransactions";
import CreditCardPayment from "./components/CreditCardPayment";
import CreateCompany from "./components/CreateCompany";
import ResetPassword from "./components/ResetPassword";
import BeforeResetPassword from "./components/BeforeResetPassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
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
      path: "/ShowAccountTransactionsAdmin/:id",
      name: "ShowAccountTransactionsAdmin-details",
      component: ShowAccountTransactionsAdmin,
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/resetPassword",
      name: "ResetPassword",
      component: ResetPassword
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
      path: "/BeforeResetPassword",
      name: "BeforeResetPassword",
      component: BeforeResetPassword
    }
  ]
});
