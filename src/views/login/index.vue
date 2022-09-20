<template>
  <div>
    
    <div class="login-wrap">
      <h2>登录页</h2>
      <input type="text" name="account" v-model.trim="account" />
      <input
        type="password"
        name="password"
        v-model.trim="password"
        @keyup.enter="login"
      />
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import {login} from '../../api/index'

export default {
  data() {
    return{
      account: "",
      password: ""
    }
  },
  methods:{
    async login(){
      let data = await login(this.account)
      // 本地 vuex
      this.$store.commit('LOGIN_IN',data.token)
      this.$router.replace("/")
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>