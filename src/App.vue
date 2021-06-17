<template>
  <div id="app">
    <img alt="Vue logo" src="./img/logo.png" />
    <div class="search-city">
      <input
        type="text"
        value="请输入要查询的城市"
        class="city"
        v-model="city"
        @keyup.enter="searchWeather"
      />
      <button class="search" @click="searchWeather">搜索</button>
    </div>
    <div class="hotcity">
      <a
        href="javascript:;"
        v-for="city in hotCitys"
        :key="city"
        @click="changeCity(city)"
      >
        {{ city }}
      </a>
    </div>

    <ul class="weather_list">
      <li class="weather_info" v-for="item in weatherList" :key="item">
        <div class="weather">
          <span> {{ item.wea }} </span>
        </div>
        <div class="temp">
          <b>  {{ item.tem2 }} </b> ~
          <b>  {{ item.tem1 }} </b>
        </div>
        <div class="date">
          <span>  {{ item.day }} </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherList: [],
      hotCitys: ["北京", "上海", "广州", "深圳"],
    };
  },
  methods: {
    searchWeather:function(){
      // console.log('天气查询');
      // console.log(this.city);
      var that = this;
      this.axios.get('https://www.tianqiapi.com/api?city='+this.city)
      .then(function(response){
        that.response = response.data
      })
      .catch(function(err){})
    },
    changeCity:function(city){
      this.city = city;
      this.searchWeather();
    },
    // weather: function () {
    //   this.$http
    //     .get( 'https://www.tianqiapi.com/api?version=v1&appid=21375891&appsecret=fTYv7v5E&city=中山' )
    //     .then((response) => {
    //       console.log("成功");
    //     })
    //     .catch((err) => {
    //       console.log("失败");
    //     });
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
body {
  box-sizing: border-box;
}
.search-city {
  width: 640px;
  height: 40px;
  margin: 24px auto;
}
.city {
  float: left;
  width: 539px;
  height: 40px;
  border: 1px solid #27a4c8;
  border-right: 0;
  outline: 0;
  text-indent: 16px;
  padding: 0;
}
.search {
  float: left;
  width: 100px;
  height: 42px;
  background-color: #27a4c8;
  color: #fff;
  font-size: 20px;
  border: 0;
}
.weather_list {
  margin-top: 50px;
  text-align: center;
}
.weather_info:nth-child(5) {
  background: none;
}
.weather_info {
  display: inline-block;
  width: 160px;
  height: 200px;
  list-style: none;
  padding: 0 16px;
  background: url(./img/line.png) right center no-repeat;
  background-size: 1px 130px;
}
.weather {
  font-size: 30px;
  color: #ff8138;
  font-weight: 700;
  line-height: 80px;
}
.temp {
  margin: 10px 0 30px 0;
  color: #ff8138;
  font-weight: 400;
}
.hotcity {
  width: 640px;
  margin: 0 auto;
}
.hotcity a {
  float: left;
  color: #2c3e50;
  font-size: 16px;
  text-decoration: none;
  padding-right: 10px;
}
.hotcity a:hover {
  color: #27a4c8;
}
</style>
