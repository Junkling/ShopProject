<template>    
    <body>
        <div class="form-sign-up w-100 m-auto">
		<h2>Sign Up</h2>
		<p>생성할 계정 정보를 입력해주세요</p>
		<hr>
        <div class="form-group">
            <input type="email" class="form-control" id="floatingInput" placeholder="Email *" @keyup.enter="submit()" v-model="state.form.email">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password *" @keyup.enter="submit()" v-model="state.form.password">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" id="floatingConfirmPassword" name="confirm_password" placeholder="Confirm Password *" @keyup.enter="submit()" v-model="state.form.confirmPassword">
        <div class="form-group">
            <input type="checkbox" v-model="state.form.role" true-value="ROLE_SELLER" false-value="ROLE_USER"> 판매자로 가입하기
        </div>        
		<div class="form-group">
            <button class="btn btn-primary w-100 py-2" @click="submit()">Sign in</button>
        </div>
        </div>
	<div class="hint-text">Already have an account? <a href="#">Login here</a></div>
</div>

</body>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/scripts/router'

export default {
    setup(){
        const state = reactive({
            form:{
                email: "",
                password: "",
                confirmPassword:"",
                role:""
            }
        })
        const submit = () =>{
            if(state.form.confirmPassword!=state.form.password){    
                router.push({path: '/signup'})
                window.alert("비밀번호 확인이 틀렸습니다..");
                return
            }

            axios.post("/api/account/signup", state.form).then(()=>{
                router.push({path: '/'})
                window.alert("회원 가입되었습니다.");
            }).catch(error=>{
                console.log(error)
                let cardList = new Array();
                cardList = error.response.data;
                window.alert(cardList);
            });
        }

        return {state, submit}
    }
}
</script>

<style scoped>
.form-sign-up {
    max-width: 330px;
    padding: 1rem;
}

.form-sign-up .form-floating:focus-within {
    z-index: 2;
}

.form-sign-up input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-sign-up input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.form-sign-up input[type="confirmPassword"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>