<template>
  <div>
    home
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout () {
      // 清空sessionStorage
      window.sessionStorage.clear()
      // 强制跳转到login页面
      this.$router.push('/login')
    }
  }
}
</script>
