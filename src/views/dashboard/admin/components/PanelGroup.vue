<template>
  <div>
    <el-row :gutter="40" class="panel-group">
      <el-col v-for="(charpeter,index) in charpeters" :key="index" :xs="16" :sm="16" :lg="8" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('workbook/charpeter1')">
          <div class="card-panel-top-wrapper">
            <div class="card-panel-icon-wrapper icon-people">
              <img :src="charpeter.url" class="card-panel-imgicon"/>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                charpeter {{ charpeter.index }}
              </div>
              <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
            </div>
          </div>
          <div class="card-panel-progress">
            <ProgressBar :rest="charpeter.rest" :total="charpeter.total" :barwidth="80" :bgcolor="charpeter.progressbgcolor" class="card-panel-progressbar" />
            <div class="card-panel-progresstext">
              {{ charpeter.rest }}/{{ charpeter.total }}
            </div>
          </div>
          <div class="card-panel-deadline">
            <div class="card-panel-deadline-text">
              Deadline:
            </div>
            <div :style="{ color:charpeter.color }" class="card-panel-deadline-date">
              {{ charpeter.date }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import ProgressBar from './ProgressBar'
import { Charpeters } from '../mock.js'

export default {
  props: {
    charpeters: {
      type: Array,
      default: () => Charpeters
    }
  },
  components: {
    ProgressBar,
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$router.push(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 200px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-radius: 10%;
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-top-wrapper{
      position: absolute;
      top:10px;
      .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      }

      .card-panel-icon {
      float: left;
      font-size: 48px;
      }
      .card-panel-imgicon{
        float:left;
        width:60px;
        height:60px;
      }

      .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 20px;
      margin-left: 0px;

        .card-panel-text {
          line-height: 30px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 20px;
          margin-bottom: 12px;
          margin-left: 40px;
        }
        .card-panel-num {
          font-size: 20px;
          margin-left: 40px;
        }
      }
    }
    .card-panel-progress {
      position: absolute;
      bottom:30px;
      width:100%;
        .card-panel-progressbar {
          float:left;
          width:50%;
          margin: 20px;
        }
        .card-panel-progresstext {
          margin: 20px;
        }
    }
    .card-panel-deadline {
      position:absolute;
      bottom:15px;
      width:70%;
        .card-panel-deadline-text{
          float:left;
          font-size:12px;
          margin:10px;
          margin-left:20px;
        }
        .card-panel-deadline-date{
          float:right;
          margin: 10px;
          margin-left:20px;
        }

    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
