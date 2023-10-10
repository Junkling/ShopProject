<template>
    
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Dashboard Template for Bootstrap</title>

  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              
            
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
                <div class="form-floating">
                    <input type="name" class="form-control" id="floatingInput" placeholder="상품이름" @keyup.enter="submit()" v-model="state.form.name">
                    <label for="floatingInput">Item Name</label>
                </div>
                <button class="btn btn-primary w-10 py-2" @click="submit()">검색</button>
            </div>
          </div>
          <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="(item, idx) in state.items" :key="idx">
                    <Card :item = "item"/>
                </div>
                </div>
            </div>
            </div>

          <canvas class="my-4" id="myChart" width="900" height="380"></canvas>

          <h2>Items</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>원가</th>
                  <th>할인가</th>
                  <th>할인율</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, idx1) in state.items" :key="idx1">
                        <td>{{state.items.length - idx1}}</td>
                        <td>{{i.name}}</td>
                        <td>{{i.price}}원</td>
                        <td>{{lib.getNumberFormatted(i.price - Math.ceil((i.price*i.discountPer/100)))}}원</td>
                        <td>{{i.discountPer}}%</td>
                        <td>
                          <router-link v-bind:to="{path: `/item/${i.id}`}">상세보기</router-link>
                        </td>
                    </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
</body>
</template>
<script>
import Card from "@/components/Card";
import axios from "axios";
import {reactive} from "vue";
import router from '@/scripts/router'
import store from '@/scripts/store'
import lib from '@/scripts/lib';

export default {
    name : "Dashboard",
    components: {
        Card
    },
    
    setup(){
        const state = reactive({
            items:[],
            form:{
                name:"",
                sellerId: 0,
                category:""
            }
        })
        axios.get("/api/dashboard/items").then((res) => {
            state.items = res.data;
        })
        const submit = () =>{
                axios.post("/api/dashboard/items", state.form).then((res) => {
                console.log(state.form.name);
                state.items = res.data;
                router.push({path: '/dashboard'})
            })
        }
       
        return {state,submit,lib,store,router}
    }
}
</script>
<style scoped>

</style>

