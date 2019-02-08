import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import Customer from "./components/Customer.vue";
import Login from "./components/Login.vue";
import VerifyLogin from "./components/VerifyLogin.vue";
import LoginAdmin from "./components/LoginAdmin.vue";
import VerifyLoginAdmin from "./components/VerifyLoginAdmin.vue";
import HomeAdmin from "./components/HomeAdmin.vue";
import CreateUser from "./components/CreateUser.vue";
import ErrorPage from "./components/ErrorPage";
import AdminCompteClient from "./components/AdminCompteClient.vue";
import rechercheClient from "./components/RechercheClient.vue";
import HomeClient from "./components/HomeClient.vue";

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
      path: "/search",
      name: "search",
      component: SearchCustomers
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
      path: "/HomeClient",
      name: "HomeClient",
      component: HomeClient
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
      path: "/rechercheClient",
      name: "rechercheClient",
      component: rechercheClient
    },
    {
      path: "/errorPage",
      name: "errorPage",
      component: ErrorPage
    }
  ]
});
