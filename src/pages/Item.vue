<template>
    <div class="Item">
        <div class="container">
            <main>
                <div class="py-5 text-center">
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">상품 현황</h4>
                    <div class="needs-validation" novalidate="">
                        <div class="row g-3">
                            <div class="col-12"><label for="itemname" class="form-label">상품명</label>
                                <span>{{itemStore.name}}</span>
                            </div>
                            <div class="col-12"><label for="price" class="form-label">원가</label>
                                <span>{{itemStore.price}}</span>
                            </div>
                            <div class="col-12"><label for="discountPer" class="form-label">할인률</label>
                                <span>{{itemStore.discountPer}}</span>
                            </div>
                            <div class="col-12"><label for="quantity" class="form-label">수량</label>
                                <span>{{itemStore.quantity}}</span>
                            </div>
                            <div class="col-12"><label for="imgPath" class="form-label">이미지</label>
                                <span>{{itemStore.imgPath}}</span>
                            </div>
                            <div class="col-12"><label for="discuont" class="form-label">할인가</label>
                            </div>
                           
                        </div>
                            <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" @click="submitPost">등록하기</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div></template>

<script>
import axios from "axios";
import {reactive} from "vue";
import lib from '@/scripts/lib';
import router from '@/scripts/router';
import store from '@/scripts/store'


export default {
    name : "Item",
    setup(){
        const state = reactive({
            item:"",
        })
        axios.get("/api/seller/item",).then((res) => {
            state.item = res.data;
        })
       
        return {state,lib,router,store}
    }
}
</script>

<style scoped></style>