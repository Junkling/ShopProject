<template>
    <div class="Item">
        <div class="container">
            <main>
                <div class="py-5 text-center">
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">상품 현황</h4>
                    <div class="needs-validation" novalidate="">
                        <div class="row g-3">
                            <div class="card shadow-sm">
                            <span class="img" :style= "{backgroundImage: `url(${this.imgPath})`}" />
                            </div>
                        
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
                            <div class="col-12"><label for="imageFiles" class="form-label">이미지는 수정할 수 없습니다</label>
                                <input ref="image" type="file" @change="upload">
                            </div>
                           
                        </div>
                            <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" @click="Edit">수정하기</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div></template>

<script>
import router from '@/scripts/router';
import axios from 'axios';

export default {
    name : "item",
    data(){
        return{
            name:"",
            price:0,
            discountPer:0,
            quantity:0,
            imgPath:"",
            image:null,
            imageUploaded: null
        };
    },
    methods:{
        upload() {
            this.image = this.$refs.image.files[0] // 사용자가 올린 이미지
            console.log(this.image)
            this.imageUploaded = URL.createObjectURL(this.image)
            },
            Edit() {
                const id = this.$route.params.itemId;
                const dto = {
                    name: this.name,
                    price: this.price,
                    discountPer:this.discountPer,
                    quantity:this.quantity,
            }
            const dtoToBlob = new Blob([JSON.stringify(dto)], {
                type: 'application/json'
            })

            var formData = new FormData()

            formData.append('itemRequest', dtoToBlob)
            formData.append('image', this.image)
            axios
                .post(`/api/seller/item/${id}`, formData,{ withCredentials: true })
                .then((res) => {
                alert('수정 완료되었습니다.')
                console.log(res.data)
                router.push({path:"/dashboard"});
            })
        },
    },
    mounted(){
        const index = this.$route.params.itemId;
        axios.get(`/api/seller/item/${index}`).then((res)=>{
            console.log(res.data)
            this.name = res.data.name,
            this.imgPath = res.data.imgPath,
            this.price = res.data.price,
            this.discountPer = res.data.discountPer,
            this.quantity = res.data.quantity
        })
        }
}

</script>

<style scoped>
.card .img{
    display: inline-block;
    width: 100%;
    height: 250px;
    object-fit: contain;
    background-position: center;
}
</style>