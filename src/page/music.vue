<template>
<div id="app"> 
 <div class="app-music">
    <div class="mus clearfix">
     <!-- 头部 -->
      <header class="mus_hd">
        <h3>悦听</h3>
        <div class="mus_search">
          <input type="text" v-model="song" @keyup.enter="searchMusic" placeholder="输入你想听的歌曲名" />
        </div>
      </header>
      <!-- 中间内容 -->
      <section class="mus_bd">
        <!-- 左侧搜索结果列表 -->
        <ul class="song_list">
          <li v-for="item in musicList" :key="item">
          <a href="javascript:;" @click="playMusic(item.id)"></a>
          <b> {{item.name}} </b>
          <span v-if="item.mvid!=0" @click="playMv(item.mvid)"><i></i></span>
          </li>
        </ul>
        <!-- 中间胶片旋转 -->
        <div class="player_con" :class="{playing:isPlaying}">
          <img class="player_bar" src="../images/player_bar.png" alt=""> 
          <img class="disc autoRotate" src="../images/disc.png" alt=""> 
          <img class="cover autoRotate" :src="musicCover=='' ? '../images/cover.png' : musicCover " alt="">
        </div>
        <!-- 热门留言列表 -->
        <div class="comments">
         <h3>热门留言</h3> 
         <ul class="com_info">
           <li v-for="item in hotComments" :key="item">
            <img class="avatar" :src="item.user.avatarUrl" alt="">
            <div class="person"><b class="name"> {{ item.user.nickname }}</b>
                                <p class="content"> {{item.content}}</p>
            </div>
          </li>
         </ul>
        </div>
      </section>
     <!-- 下方播放控制 -->
      <div class="audio_con">
        <audio controls = "controls" @play = "play" @pause = "pause" :src="musicUrl" autoplay loop class="myaudio"></audio>
      </div>
      <!-- mv播放界面 -->
      <div class="video_con"  v-show ="isShow"  style="display:none">
        <video :src="mvUrl" controls="controls" class="myvideo"></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: "App",
        data() {
            return {
              // 搜索关键字
                song: "",
                // 歌曲列表
                musicList: [],
                // 歌曲url
                musicUrl : "",
                // 歌曲封面
                musicCover:"",
                // 热门评论
                hotComments:[],
                // 歌曲是否在播放
                isPlaying:false,
                // mv地址
                mvUrl:"",
                //遮罩层显示状态
                isShow : false,
            }
        },
        methods: {
          // 歌曲搜索
            searchMusic: function() {
              var that = this;
                this.axios.get("https://autumnfish.cn/search?keywords="+this.song).then(function(response) {
                  // console.log(response);
                  that.musicList = response.data.result.songs;
                }, function(err) {})
            },
            // 歌曲播放
            playMusic:function(musicId){
              var that = this;
              // 获取歌曲地址
              this.axios.get("https://autumnfish.cn/song/url?id="+ musicId).then(function(response){
                // console.log(response);
                that.musicUrl = response.data.data[0].url;
              },function(err){})

              //歌曲详情获取
              this.axios.get("https://autumnfish.cn/song/detail?ids="+ musicId).then(function(response){
                that.musicCover = response.data.songs[0].al.picUrl;
              },function(err){})
              // 歌曲评论获取
              this.axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function(response){
                // console.log(response);
                that.hotComments = response.data.hotComments;
              },function(err){})
            },
            playMv:function(mvid){
               var that= this;
              //  获取mv地址
              this.axios.get("https://autumnfish.cn/mv/url?id="+ mvid).then(function(response){
                // console.log(response);
                that.isShow = true;
                that.mvUrl = response.data.data.url;
              },function(err){})
            },
            hide:function(){
              this.isShow = false;
            },
            // 歌曲动画播放
            play:function(){
              this.isPlaying = true;
            },
            pause:function(){
              this.showVideo = false;
            },
            
      },
        
    };
</script>

<style>

</style>