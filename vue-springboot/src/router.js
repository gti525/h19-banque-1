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

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
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
      path: "/search",
      name: "search",
      component: SearchCustomers
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/verify",
      name: "verify",
      component: VerifyLogin
    },
    {
      path: "/loginAdmin",
      name: "loginadmin",
      component: LoginAdmin
    },
    {
      path: "/verifyloginAdmin",
      name: "verifyloginadmin",
      component: VerifyLoginAdmin
    },
    {
      path: "/homeAdmin",
      name: "homeAdmin",
      component: HomeAdmin
    },
    {
      path: "/createUser",
      name: "createUser",
      component: CreateUser
    }
  ]
});
