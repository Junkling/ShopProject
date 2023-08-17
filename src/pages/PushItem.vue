<template>
    <div class="PushItem">
        <div class="container">
            <main>
                <div class="py-5 text-center">
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">상품 추가</h4>
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
                        <!-- <hr class="my-4"> 
                        <hr class="my-4"> -->
                        <!-- <h4 class="mb-3">공개여부</h4> -->
                        <!-- <div class="my-3">
                            <div class="form-check"><input id="card" name="paymentMethod" type="radio"
                                    class="form-check-input" value="card" v-model="state.form.payment"><label class="form-check-label"
                                    for="card">공개</label></div>
                            <div class="form-check"><input id="bank" name="paymentMethod" type="radio"
                                    class="form-check-input" value="bank" v-model="state.form.payment"><label class="form-check-label"
                                    for="bank">비공개</label></div>
                        </div> -->
                            <hr class="my-4">
                        <button class="w-100 btn btn-primary btn-lg" @click="submitPost">등록하기</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div></template>

<script>
import axios from 'axios';
// import { reactive } from 'vue';
// import lib from '@/scripts/lib';
import router from '@/scripts/router';
import store from '@/scripts/store';
// import { instanceWithAuth } from '@/api/index';


export default {
  components: {},
  data() {
    return {
        name:"",
        price:0,
        discountPer:0,
        quantity:0,
        image:null,
        imageUploaded: null
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    upload() {
      this.image = this.$refs.image.files[0] // 사용자가 올린 이미지
      console.log(this.image)
      // URL.createObjectURL로 사용자가 올린 이미지를 URL로 만들어서 화면에 표시할 수 있게 한다. img 태그의 src값에 바인딩해준다
      this.imageUploaded = URL.createObjectURL(this.image)
    },
    submitPost() {
      // 원래 있던 dto랑 이미지를 UserFormData에 넣어서 axios로 보내야함

      // const vm = this
      const dto = {
        name: this.name,
        price: this.price,
        discountPer:this.discountPer,
        quantity:this.quantity,
      }
      // 먼저 dto를 blob으로 바꿈
      const dtoToBlob = new Blob([JSON.stringify(dto)], {
        type: 'application/json'
      })

      // FormData를 만듬
      var formData = new FormData()

      // blob으로 바꾼 dto랑 사용자가 입력한 이미지 formData에 append함
      formData.append('itemRequest', dtoToBlob)
      formData.append('image', this.image)
      // instanceWithAuth.post('api/seller/items', formData,{ withCredentials: true })
      //   .then((res) => {
      //     alert('생성 완료')
      //     console.log(res.data)
      //     router.push({path:"/"});
      //   })
      axios
        .post('api/seller/items', formData,{ withCredentials: true })
        .then((res) => {
          alert('생성 완료')
          console.log(res.data)
          router.push({path:"/"});
        })
    }
  }
}
</script>

<style scoped></style>