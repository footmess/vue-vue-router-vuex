<template>
  <div>
      <div class="your_scores_container">
          <header class="yours_scores"><span class="score_num">{{score}}</span><span class="fengshu">分？ </span></header>
          <div class="result_tip">{{scoreTips}}</div>
      </div>
      <div class="share_button" @click="showCover"></div>
      <div class="share_code">
          <header class="share_header">阿斯顿法国菜，与欧派怕</header>
          <img src="/images/4-4.png" height="212" width="212" class="code_img" alt="">
      </div>
      <div class="share_cover" v-if="showHide" @click="showCover">
          <img src="/images/5-2.png" class="share_img" alt="">
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import M from 'minimatch'
export default {
    name:'score',
    data() {
        return {
            showHide: false,
            score: 0,
            scoreTips: '',
            rightAnswer: [2,7,12,13,18],
            scoreTipsArr: ['芝麻味梳打饼干','冰红茶','脉动','果粒橙','娃哈哈']
        }
    },
    computed: mapState(['answerid']),
    created() {
        this.computedScore()
        this.getScoreTiop()
        document.body.style.backgroundImage = 'url(/images/4-1.jpg)'
    },
    methods: {
        //计算分数
        computedScore() {
            this.answerid.forEach((item, index) =>{
                if(item == this.rightAnswer[index]) {
                    this.score += 20
                }
            })
        },
        //是否显示分享
        showCover() {
            this.showHide = !this.showHide
        },
        //根据分数显示提示
        getScoreTiop() {
            let index = Math.ceil(this.score/20) - 1
            this.scoreTips = this.scoreTipsArr[index]
        }
    }
}
</script>

<style lang="scss" scoped>
body{
    padding-top: 1.2rem;
    background-image: url(/images/4-1.jpg)
}
.your_scores_container {
    width: 9.7rem;
    height: 9.1rem;
    background: url(/images/4-2.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
    .yours_scores {
        position: absolute;
        width: 100%;
        text-indent: 3.3rem;
        top: 4.7rem;
        font-size: 1.4rem;
        font-weight: 900;
        -webkit-text-stroke: 0.05rem red;
        font-family: 'microsoft yahei';
        .score_num {
            font-family: 'Gill Sans', 'Gill Sans MT', 'sans-serif';
            color: green;
        }
        .fenshu {
            color: #a51d31;
        }
    }
    .result_tip{
        position: absolute;
        top: 7rem;
        width: 9rem;
        left: 0.6rem;
        color: #3e2415;
        font-size: 0.65rem;
        text-align: center;
    }
}
.share_button {
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background: url(/images/4-3.png) no-repeat 0.4rem 0;
    background-size: 5.825rem 100%;
}
.share_code {
    width: 5.3rem;
    margin: 1.5rem auto 0;
    .share_header {
        color: #664145;
        font-size: 0.475rem;
        font-family: 'microsoft yahei';
        width: 7rem;
        font-weight: 500;
    }
    .code_img {
        height: 5.3rem;
        width: 5.3rem;
        margin-top: 0.5rem;
    }
}
.share_cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background: url(/images/5-1.png) no-repeat;
    background: url(/images/5-1.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.92;
}
.share_img {
    width: 11.95rem;
    height: 10.975rem;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    margin-left: -5.975rem;
}
</style>