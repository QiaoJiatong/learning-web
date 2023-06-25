<template>
  <div class="hello">
    <p>{{ chengpin.title }}</p>
  </div>
</template>

<script>
// import axios from 'axios';
import querystring from 'querystring'

export default {
  name: 'HelloWorld',
  data() {
    return {
      chengpin: {}
    }
  },
  mounted() {
    // axios({
    //   method:"get",
    //   url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    // }).then(res =>{
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0]
    // })

    //post请求方式
    // axios({
    //   method:"post",
    //   url: "http://iwenwiki.com/api/blueberrypai/login.php",
    //   data: querystring.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw"
    //   })
    // }).then(res => {
    //   console.log(res.data);
    // })


    this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
      .then(res => {
        console.log(res.data);
      })

    this.$axios.post("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php", querystring.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    })).then(res => {
      console.log(res.data);
    })
  }

}
</script>

<style scoped></style>
