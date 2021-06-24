<template>

    <div id="app"> 
      <img alt="Vue logo" src="../img/logo.png" />
      <div class="search-city">
        <input type="text" placeholder="请输入要查询的城市" class="city" v-model="city" @keyup.enter="searchWeather" />
        <button class="search" cursor:pointer @click="searchWeather">搜索</button>
      </div>
      <div class="hotcity">
        <a href="javascript:;" v-for="city in hotCitys" :key="city" @click="changeCity(city)">
          {{ city }}
        </a>
      </div>
      <ul class="weather_list">
        <li class="weather_info"  v-for="item in weatherList"  :key="item">
          <div class="weather">
            <span> {{ item.wea }} </span>
          </div>
          <div class="temp">
            <b>  {{ item.tem2 }} </b> ~
            <b>  {{ item.tem1 }} </b>
          </div>
          <div class="date">
            <span>  {{ item.date + item.week }} </span>
          </div>
        </li>
      </ul>  
        <button class="music" @click="click" >听首歌吧~</button>
    </div>
  </template>

<script>
    /*
            请求地址:https://tianqiapi.com/api?version=v6&appid=76228964&appsecret=FEemrZ5f
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
            searchWeather: function() {
                // console.log('天气查询');
                // console.log(this.city);
                var that = this;
                this.axios.get('https://www.tianqiapi.com/api?version=v1&appid=21375891&appsecret=fTYv7v5E&city=%E7%A6%8F%E5%B7%9E&city=' + this.city)
                    .then(function(response) {
                        // console.log(response);
                        that.weatherList = response.data.data
                    })
                    .catch(function(err) {})
            },
            changeCity: function(city) {
                this.city = city;
                this.searchWeather();
            },
            click() {
                this.$router.push({
                    path: '/music'
                });
            }
            // 测试接口是否可用
            // cearchWeather: function () {
            //   this.$http
            //     .get( 'https://www.tianqiapi.com/api?version=v1&appid=21375891&appsecret=fTYv7v5E&city=%E7%A6%8F%E5%B7%9E&city='+this.city )
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

</style>