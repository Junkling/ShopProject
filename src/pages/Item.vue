<template>
    <div class="Item">
        <div class="container">
            <main>
                <div class="py-5 text-center">
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">상품 현황</h4>
                    <h4 class="mb-3">{{this.$route.params.itemId}}</h4>
                    <div class="needs-validation" novalidate="">
                        <div class="row g-3">
                            <div class="col-12"><label for="itemname" class="form-label">상품명</label>
                                <input type="text" class="form-control" id="itemname"
                                        v-model="name">
                            </div>
                            <div class="col-12"><label for="price" class="form-label">가격</label><input
                                    type="text" class="form-control" id="price"
                                    v-model="price">
                            </div>
                            <div class="col-12"><label for="discountPer" class="form-label">할인률</label><input
                                    type="text" class="form-control" id="discountPer"
                                    v-model="discountPer">
                            </div>
                            <div class="col-12"><label for="quantity" class="form-label">수량</label><input
                                    type="text" class="form-control" id="quantity"
                                    v-model="quantity">
                            </div>
                            <div class="col-12"><label for="imageFiles" class="form-label">이미지</label><input
                                 ref="image" type="file" @change="upload">
                            </div>
                           
                        </div>
                            <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" @click="submitPost">수정하기</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div></template>

<script>
import lib from '@/scripts/lib';
import router from '@/scripts/router';
import store from '@/scripts/store'
import {reactive} from "vue";
// import axios from "axios";

export default {
    setup(){
        const state = reactive({
            item:{
                id: 0,
                name : "",
                imgPath : "",
                price : "",
                discountPer: "",
                quantity: ""
            }
        })
        // axios.get(`api/seller/item`,this.$route.params.id).then((res)=>{
        //     // console.log(this.$route.params.itemId)
        //     state.item = res.data
        // })
        return {lib,router,store,state}
    }
}
</script>

<style scoped></style>