<template>
    <div class="order">
        <div class="container">
            <main>
                <div class="py-5 text-center">
                    <h2>주문하기</h2>
                    
                </div>
                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3"><span class="text-primary">구입 목록</span>
                            <span class="badge bg-primary rounded-pill">{{state.items.length}}</span></h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(i,idx) in state.items" :key="idx">
                                <div>
                                    <h6 class="my-0">{{i.name}}</h6><small class="text-muted"> 정상가{{lib.getNumberFormatted(i.price)}}원</small>
                                </div>
                                <span class="text-muted" >{{ lib.getNumberFormatted(i.price - (i.price*i.discountPer/100)) }}원</span>
                            </li>
                    </ul>
                    <div class="total-price">
                        합계
                        <h3 class="text-danger">
                            {{lib.getNumberFormatted(computedPrice)}} 원
                        </h3>
                    </div>
                    <form class="card p-2">
                        <div class="input-group"><input type="text" class="form-control"
                                placeholder="Promo code"><button type="submit" class="btn btn-secondary">Redeem</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">주문자 정보</h4>
                    <div class="needs-validation" novalidate="">
                        <div class="row g-3">
                            <div class="col-12"><label for="username" class="form-label">이름</label>
                                <input type="text" class="form-control" id="username"
                                        v-model="state.form.name">
                            </div>
                            <div class="col-12"><label for="address" class="form-label">주소</label><input
                                    type="text" class="form-control" id="address"
                                    v-model="state.form.address">
                            </div>
                        </div>
                        <hr class="my-4">
                        <hr class="my-4">
                        <h4 class="mb-3">결제수단</h4>
                        <div class="my-3">
                            <div class="form-check"><input id="card" name="paymentMethod" type="radio"
                                    class="form-check-input" value="card" v-model="state.form.payment"><label class="form-check-label"
                                    for="card">신용카드</label></div>
                            <div class="form-check"><input id="bank" name="paymentMethod" type="radio"
                                    class="form-check-input" value="bank" v-model="state.form.payment"><label class="form-check-label"
                                    for="bank">무통장 입금</label></div>
                            <div class="form-check"><input id="kakao" name="paymentMethod" type="radio"
                                    class="form-check-input" value="kakao" v-model="state.form.payment"><label class="form-check-label"
                                    for="kakao">카카오페이</label></div>
                        </div>
                            <label for="cc-name" class="form-label">카드 번호</label>
                            <input type="text" class="form-control" id="cc-name" v-model="state.form.cardNumber">
                        <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" @click="submit">결제하기</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div></template>

<script>
import axios from 'axios';
import { computed, reactive } from 'vue';
import lib from '@/scripts/lib';
import router from '@/scripts/router';

export default {
    setup() {
        const state = reactive({
                items: [],
                itemIds:[],
                form:{
                    name:"",
                    address:"",
                    payment:"",
                    cardNumber:"",
                    items:"",
                    itemIds:[]
                }
        })
        
        const submit =()=>{
            state.form.itemIds = state.items.map((item) => item.id);
            // state.form.items = JSON.stringify(state.items.map((item) => item.name));

            const args = JSON.parse(JSON.stringify(state.form));
            args.items = JSON.stringify(state.items);

            axios.post("api/orders",args).then(() => {
                console.log(args);
                alert('주문 완료하였습니다.');
                router.push({path:"/orders"});
            })
        }
        const load = () => {
            axios.get("api/cart/items").then(({ data }) => {
                console.log(data);
                state.items = data;
            })
        };
        const computedPrice=computed(()=>{
            let result = 0;
            for(let i of state.items){
                result += i.price - (i.price*i.discountPer/100);
            }
            return result;
        })
        

        load();

        return { state, lib, computedPrice ,submit}
    }
}
</script>

<style scoped></style>