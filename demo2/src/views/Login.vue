<template>
    <div>
        <div v-show="errorTip">错误信息提示</div>
        <input type="text" v-model="userName">
        <input type="text" v-model="userPassword">
        <button @click="login">登录</button>
    </div>
</template>

<style>

</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            userPassword: '',
            errorTip: true
        }
    },
    methods: {
        login() {
            axios.post('/user/login', {
                userName: this.userName,
                userPassword: this.userPassword
            }).then(response => {
                let res = response.data
                if (res.status == '0') {
                    this.errorTip = true
                } else {
                    this.errorTip = false
                }
            })
        }
    }
}
</script>
