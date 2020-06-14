<template>
  <div>
    <el-container>
      <el-header>
        <div class="tip">
          <span>使用的是</span>
          <el-link type="primary" href="https://dafrok.github.io/vue-baidu-map/#/">vue-baidu-map</el-link>
        </div>
      </el-header>
      <el-main>
        <baidu-map class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler">
          <!-- 比例尺 -->
          <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" />
          <!-- 缩放控件 -->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
          <!-- 文字 -->
          <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" />
          <bm-info-window :position="{ lng: 108.328802, lat: 22.818446 }" title="今天天气不错" :show="infoWindow.show" @close="infoWindowClose">
            <p v-text="infoWindow.contents" />
            <button @click="getIt">收到</button>
          </bm-info-window>
        </baidu-map>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 108.328802, lat: 22.818446 },
      zoom: 17,
      infoWindow: {
        show: true,
        contents: '小老弟不来尝尝美食吗？'
      }
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
    },
    infoWindowClose(e) {
      this.$notify({
        title: '',
        message: '只要998¥,超值自助餐带回家',
        type: 'success'
      })
      this.infoWindow.show = false
    },
    getIt() {
      this.$notify({
        title: '',
        message: '好的',
        type: 'success'
      })
    }
  }
}
</script>

<style>
.bm-view {
  width: 80%;
  height: 600px;
  margin-left: 10%;
}
.sel_city_input{
  position: relative;
  top: -3px;
  height: 22px;
}
#selCitySubmit{
  position: relative;
  top: -3px;
}
</style>
<style scoped>
.tip{
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
}
.tip span{
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
</style>
