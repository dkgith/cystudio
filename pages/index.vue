<template>
  <el-container>
    <el-backtop>
    </el-backtop>
    <el-header height="80px">
      <div class="navdiv">
        <a class="navdiv navlogo" alt="炽晔工作室">
          <img src="../static/images/logo.png" />
        </a>
        <span class="navdiv navspan">炽晔工作室</span>
        <div class="navdiv grid-content navmenu" id="home">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" router>首页</el-menu-item>
            <el-menu-item index="2" router>工作室简介</el-menu-item>
            <el-menu-item index="3" router>作品展示</el-menu-item>
            <el-menu-item index="4" router>联系我们</el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-carousel indicator-position="">
        <el-carousel-item v-for="item in items" :key="item.url">
          <!-- <h3>{{ item }}</h3> -->
          <!-- <img src="../static/1.png" /> -->
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
      <h1 class="hjg tl" id="main">工作室简介</h1>
      <div class="content"><span
          style="font-size: 16px; font-weight: bold;">炽晔工作室</span>致力于电力监控网站、物联网以及其他行业智能平台的定制研发。平台采用阿里云服务器，前后端分离的应用架构，方便扩展维护。通道可采用GPRS模块（包括2G/3G/4G/5G以及未来将实现的通讯模块）、网关、WiFi、
        LoRa、zigbee等，灵活方便配合设备通讯。并可使用手机APP，随时随地了解设备运行状态，调整相关参数，及时掌控现场情况，做到了然于胸，沉着应对。<br /><span
          style="font-size: 16px; font-weight: bold;">平台特点：</span>具有手动直接读取设备实时数据、配置参数、远程控制、信号获取等功能，并可执行定时任务进行数据的自动采集存储。<br /><span
          style="font-size: 16px; font-weight: bold;">承接范围：</span>前后端软件定制开发、手机APP开发、微信小程序开发
        、公司网站制作，PCB电路设计和制作、小批量电路板焊接，智能家居设计方案，3D产品模型效果图设计。</div>
      <h1 class="hjg tl" id="product">作品展示</h1>
      <div class="content">
        <el-tabs tab-position="right" :stretch="true">
          <!-- style="height: 350px;" -->
          <el-tab-pane label="作品一_电力平台">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <img src="../static/images/zp1.png" class="image" />
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="作品二_安卓APP">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <img src="../static/images/zp2.png" class="image" />
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="作品三_微信小程序">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <img src="../static/images/zp3.png" class="image" />
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="作品四_3D模型">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <img src="../static/images/zp4.png" class="image" />
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
    <el-footer id="footer" height="150px">
      <div>
        <!-- &#12288;&#12288;&#12288;-->
        <p>联系电话：17630063671&nbsp;联系邮箱：chen_chn@qq.com</p>
        <!-- <br /> -->
        <p>Copyright © cystudio All Rights Reserved.</p>
        <br />
        <br />
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    /* beforeCreate() {
      let count = 0;
      let imgs = [
        require("../static/images/1.png"),
        require("../static/images/2.png"),
        require("../static/images/3.png"),
        require("../static/images/4.png")
      ]

      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          count++;
        };
      }
    }, */
    mounted() {
      if (this.isMobile()) {
        //alert("Mobile");
        this.$router.replace('index_m');
      } else {
        //alert("PC");
        //this.$router.replace('/m_index');
      }

      window.addEventListener('scroll', this.handleScroll, true);
    },
    data() {
      return {
        activeIndex: '1',
        items: [{
          url: "https://z3.ax1x.com/2021/04/13/creH5q.png"/* require("../static/images/1.png") */
        }, {
          url: "https://z3.ax1x.com/2021/04/13/crngc8.png"/* require("../static/images/2.png") */
        }, {
          url: "https://z3.ax1x.com/2021/04/13/crnWng.png"/* require("../static/images/3.png") */
        }, {
          url: "https://z3.ax1x.com/2021/04/13/crn2jS.png"/* require("../static/images/4.png") */
        }]
      };
    },
    methods: {
      handleScroll() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //console.log(scrollTop);
        //console.log(window.pageYOffset);
        this.activeIndex = '0';
        //console.log(this.activeIndex);
      },
      isMobile() {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        return flag;
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch (key) {
          case "1":
            document.querySelector(".el-header").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            break;
          case "2":
            document.querySelector("#main").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            break;
          case "3":
            document.querySelector("#product").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            break;
          case "4":
            document.querySelector("#footer").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            break;
        }
        this.activeIndex = 'null';
        console.log(this.activeIndex);
      }
    }
  }
</script>

<style>
  .el-header

  /* ,
  .el-footer */
    {
    background-color: #ffffff;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
  }

  .navdiv {
    width: 100%;
    border-width: 0px;
    display: inline-block;
    vertical-align: middle;
    flex-wrap: nowrap;
  }

  .navspan {
    width: 15%;
    color: #666666;
    font-family: "微软雅黑", Gadget, sans-serif;
    /*PingFang SC*/
    font-size: 28px;
    font-weight: bold;
    /* margin: 0px 5px 0px; */
  }

  .navmenu {
    width: 30%;
    margin: 0 0 0 360px;
    /* justify-content:flex-end!important; */
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    padding: 0;
    /* line-height: 50px; */
    /* height: 2024px; */
  }

  .navlogo {
    margin-left: 20%;
    width: 60px;
    padding-top: 15px;
  }

  body {
    color: #4c4c4c;
    background-color: #FFFFFF;
  }

  body>.el-container {
    margin-bottom: 2.5rem;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }

  /* .el-row {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 0.25rem;
  } */

  .grid-content {
    border-radius: 0.25rem;
    min-height: 2.25rem;
  }

  .el-carousel__container {
    height: 600px;
  }

  /* .el-carousel__item h3 { */
  .el-carousel__item img {
    /* color: #475669; */
    background-color: #4c4c4c;
    font-size: 1.125rem;
    opacity: 0.75;
    line-height: 600px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #4c4c4c
      /* #99a9bf */
    ;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #4c4c4c
      /* #d3dce6 */
    ;
  }

  .hjg {
    padding-top: 1.875rem;
    padding-bottom: 15px;
    /* line-height: 80px; */
  }

  .tl {
    color: #666666;
  }

  .content {
    /* padding-top: 5px; */
    text-align: justify;
    text-justify: inter-ideograph;
    text-indent: 33px;
    color: #666666;
    line-height: 2;
    word-wrap: break-word;
    word-break: normal;
    margin: 0 20%;
  }

  .image {
    width: 100%;
    display: block;
    height: 350px;
  }

  .el-footer {
    text-align: center;
    padding: 0;
    border-width: 0;
    margin: 60px 0 0;
    background-color: #4c4c4c;
    color: #fff;
    font-size: 14px;
    line-height: 1.625rem;
  }

  .el-footer div {
    margin-top: 20px;
  }
</style>
