<template>
    <div id="Mine">
      <h2>个人中心</h2>
      <p>姓名：{{name}}</p>
      <p>性别：{{sex}}</p>
      <p>年龄：{{age}}</p>
    </div>
</template>

<script>
export default {
  name: 'Mine',
  props:['name', 'sex', 'age'],
  data() {
    return {

    }
  },
  components: {

  },
  computed: {

  },
  created() {
    console.log(this.$route)
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

</style>
