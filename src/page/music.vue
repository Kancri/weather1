<template>
  <div id="app-music">
    <div class="mus clearfix">
     <!-- 头部 -->
      <header class="mus_hd">
        <h3>悦听</h3>
        <div class="mus_search">
          <input type="text" placeholder="输入你想听的歌曲名" />
        </div>
      </header>
      <!-- 中间内容 -->
      <section class="mus_bd">
        <!-- 左侧搜索结果列表 -->
        <ul class="song_list">
          <li>
          <a href=""></a>
          <b> 雨花石 </b>
          <span><i></i></span>
          </li>
        </ul>
        <!-- 中间胶片旋转 -->
        <div class="player_con">
          <img class="player_bar" src="../images/player_bar.png" alt=""> 
          <img class="cover" src="../images/cover.png" alt="">
          <img class="disc" src="../images/disc.png" alt="">
        </div>
        <!-- 热门留言列表 -->
        <div class="comments">
         <h3>热门留言</h3> 
         <ul class="com_info">
           <li>
            <img class="avatar" src="../images/person.png" alt="">
            <div class="person"><b class="name"> 镜子浮云</b>
                                <p class="content"> 这是一段评论内容，这是一段评论内容，
         这是一段评论内容，，，</p>
            </div>
          </li>
         </ul>
        </div>
      </section>
     <!-- 下方播放控制 -->
      <div class="audio_con">
        <audio controls = "controls" autoplay loop class="myaudio"></audio>
      </div>
      <!-- mv播放界面 -->
      <div class="video_con" style="display:none;" >
        <video src="" controls="controls" class="myvideo"></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "#app-music",
    };
</script>

<style>

</style>