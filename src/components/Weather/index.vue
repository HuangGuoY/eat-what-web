<template>
  <div class="container">
    <div class="weather-side">
      <div class="weather-gradient" />
      <div class="date-container">
        <h2 class="date-dayname">{{ nowDate }}</h2>
        <span class="date-day">{{ week }}</span>
        <i class="el-icon-location" />
        <span class="location">{{ todayWeatherData.province }} {{ todayWeatherData.city }}</span>
      </div>
      <div class="weather-container">
        <i :class="todayWeatherData.weather | iconFilter" style="font-size:48px" />
        <h1 class="weather-temp">{{ todayWeatherData.temperature }}℃</h1>
        <h3 class="weather-desc">{{ todayWeatherData.weather }}</h3>
      </div>
    </div>
    <div class="info-side">
      <div class="today-info-container">
        <div class="today-info">
          <div class="humidity"> <span class="title">相对湿度</span><span class="value">{{ todayWeatherData.humidity }}%</span>
            <div class="clear" />
          </div>
          <div class="wind">
            <span class="title">风向:{{ todayWeatherData.winddirection }}</span>
            <span class="value">{{ todayWeatherData.windpower }}级</span>
            <div class="clear" />
          </div>
        </div>
      </div>
      <div class="week-container">
        <ul class="week-list">
          <li v-for="(item, index) in futureWeatherData.casts" :key="index" :class="index === 0 ? 'active':''">
            <span class="day-name"><i :class="todayWeatherData.weather | iconFilter" style="font-size:24px" /></span>
            <span class="day-name">{{ dayName[index] }}</span>
            <span class="day-temp">{{ item.nighttemp }}~{{ item.daytemp }}°C</span>
          </li>
          <div class="clear" />
        </ul>
      </div>
      <div class="location-container">
        <button class="location-button" @click="dialogFormVisible = true"><i data-feather="map-pin" /><span>改变城市</span></button>
      </div>

      <el-dialog
        title="选择城市"
        :visible.sync="dialogFormVisible"
        width="30%"
        append-to-body
      >
        <el-form :model="form">
          <el-form-item label="活动区域">
            <el-select v-model="cityCode" placeholder="请选择城市">
              <el-option label="南宁" value="450100" />
              <el-option label="北京" value="110000" />
              <el-option label="上海" value="310000" />
              <el-option label="广州" value="440100" />
              <el-option label="杭州" value="330100" />
              <el-option label="重庆" value="500000" />
              <el-option label="西安" value="610100" />
              <el-option label="成都" value="510100" />
              <el-option label="南京" value="320100" />
              <el-option label="武汉" value="420100" />
              <el-option label="长沙" value="430100" />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="getData">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
moment.locale('zh-cn')

export default {
  components: {

  },
  filters: {
    iconFilter(weather) {
      const iconMap = {
        '热': 'el-icon-sunrise',
        '晴': 'el-icon-sunny',
        '晴间多云': 'el-icon-cloudy-and-sunny',
        '阴': 'el-icon-cloudy',
        '多云': 'el-icon-cloudy-and-sunny',
        '大雨': 'el-icon-heavy-rain',
        '暴雨': 'el-icon-heavy-rain',
        '大暴雨': 'el-icon-heavy-rain',
        '特大暴雨': 'el-icon-heavy-rain',
        '雷阵雨': 'el-icon-lightning',
        '细雨': 'el-icon-light-rain',
        '毛毛雨': 'el-icon-light-rain',
        '小雨': 'el-icon-light-rain',
        '雨': 'el-icon-light-rain',
        '阵雨': 'el-icon-light-rain'
      }
      return iconMap[weather]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      appTitle: '天气',
      dataApi: '9e47592d08dcf15f38a91df0f11d7261',
      cityCode: '450100', // 城市编码
      dayName: ['今天', '明天', '后天', '大后天'],
      todayWeatherData: {
        province: '',
        city: '',
        adcode: '',
        weather: '',
        temperature: '',
        winddirection: '',
        windpower: '',
        humidity: ''
      },
      futureWeatherData: {
        casts: null
      },
      week: moment().format('dddd'),
      nowDate: moment().format('MMM/Do'),
      form: {
        name: ''
      },
      dialogFormVisible: false
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    search() {
      this.$emit('search', this.location)
      this.isSearching = false
    },
    // SEARCH A NEW CITY
    searchcity(city) {
      this.cityName = city
      var ctx = this
      ctx.getData()
    },
    getData() {
      var obj = this
      obj.dialogFormVisible = false
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=' +
        obj.cityCode + '&key=' + obj.dataApi)
        .then((response) => {
          if (response.data.status === '1') {
            obj.todayWeatherData = response.data.lives[0]
          } else {
            obj.appTitle = '天气信息获取失败'
          }
        })
        .catch((error) => {
          console.log(error)
        })
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&city=' +
        obj.cityCode + '&key=' + obj.dataApi)
        .then((response) => {
          if (response.data.status === '1') {
            obj.futureWeatherData = response.data.forecasts[0]
          } else {
            obj.appTitle = '天气信息获取失败'
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	line-height: 1.5em;
}

.clear {
	clear: both;
}

body {
	margin: 0;
	width: 100%;
	height: 100vh;
	font-family: 'Montserrat', sans-serif;
	background-color: #343d4b;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.container {
	border-radius: 25px;
	-webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
	background-color: #222831;
	color: #ffffff;
	height: 400px;
}

.weather-side {
	position: relative;
	height: 100%;
	border-radius: 25px;
	background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
	width: 300px;
	-webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	-webkit-transition: -webkit-transform 300ms ease;
	transition: -webkit-transform 300ms ease;
	-o-transition: transform 300ms ease;
	transition: transform 300ms ease;
	transition: transform 300ms ease, -webkit-transform 300ms ease;
	-webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
	transform: translateZ(0) scale(1.02) perspective(1000px);
	float: left;
}

.weather-side:hover {
	-webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
	transform: scale(1.1) perspective(1500px) rotateY(10deg);
}

.weather-gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
	border-radius: 25px;
	opacity: 0.8;
}

.date-container {
	position: absolute;
	top: 25px;
	left: 25px;
}

.date-dayname {
	margin: 0;
}

.date-day {
	display: block;
}

.location {
	display: inline-block;
	margin-top: 10px;
}

.weather-container {
	position: absolute;
	bottom: 25px;
	left: 25px;
}

.weather-temp {
	margin: 0;
	font-weight: 700;
	font-size: 4em;
}

.weather-desc {
	margin: 0;
}

.info-side {
	position: relative;
	float: left;
	height: 100%;
	padding-top: 25px;
}

.today-info {
	padding: 15px;
	margin: 0 25px 25px 25px;
/* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
	border-radius: 10px;
}

.today-info>div:not(:last-child) {
	margin: 0 0 10px 0;
}

.today-info>div .title {
	float: left;
	font-weight: 700;
}

.today-info>div .value {
	float: right;
}

.week-list {
	list-style-type: none;
	padding: 0;
	margin: 10px 30px;
	-webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
}

.week-list>li {
	float: left;
	padding: 20px;
	cursor: pointer;
	-webkit-transition: 200ms ease;
	-o-transition: 200ms ease;
	transition: 200ms ease;
	border-radius: 10px;
}

.week-list>li:hover {
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
	background: #fff;
	color: #222831;
	-webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2)
}

.week-list>li.active {
	background: #fff;
	color: #222831;
	border-radius: 10px;
}

.week-list>li .day-name {
	display: block;
	margin: 10px 0 0 0;
	text-align: center;
}

.week-list>li .day-temp {
	display: block;
	text-align: center;
	margin: 10px 0 0 0;
	font-weight: 700;
}

.location-container {
	padding: 50px 35px;
}

.location-button {
	outline: none;
	width: 100%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	border: none;
	border-radius: 25px;
	padding: 10px;
	font-family: 'Montserrat', sans-serif;
	background-image: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
	color: #ffffff;
	font-weight: 700;
	-webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	-webkit-transition: -webkit-transform 200ms ease;
	transition: -webkit-transform 200ms ease;
	-o-transition: transform 200ms ease;
	transition: transform 200ms ease;
	transition: transform 200ms ease, -webkit-transform 200ms ease;
}

.location-button:hover {
	-webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
   transform: scale(0.95);
}

.location-button .feather {
	height: 1em;
	width: auto;
	margin-right: 5px;
}
</style>
