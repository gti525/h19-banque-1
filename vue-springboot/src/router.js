import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import Customer from "./components/Customer.vue";
import Login from "./components/Login.vue";

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
    }
  ]
});
