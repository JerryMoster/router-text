<template>
    <div id="Home">
      <h2>首页</h2>
      <ul>
        <li><router-link to="/course">课程中心</router-link> </li>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/mine">个人中心</router-link> </li>
      </ul>
      <router-view></router-view> 
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}
</style>
