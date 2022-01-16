<template>
  <div>
    <v-dialog v-model="goalLegal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">抽取人数过多</v-card-title>
        <v-card-text>所选抽取人数应小于参加观众人数</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="goal = 1">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-stepper-step step="3">
      抽奖
    </v-stepper-step>
    <v-stepper-content step="3">
      <p class="display-1 text-center purple--text">请选择人抽取人数</p>
      <v-text-field
              v-model="goal"
              type="number"
              label="抽取人数"
              class="px-2"
              outlined
      ></v-text-field>
      <v-btn color="primary" @click="this.doLottery">随机抽奖</v-btn>
    </v-stepper-content>
  </div>
</template>

<script>
  export default {
    name: "Lottery",
    data: () => ({
      goal: 1
    }),
    computed: {
      goalLegal: function () {
        return this.stepNow===3 && this.goal>=this.uids.length;
      }
    },
    methods: {
      randomNum: function (minNum, maxNum) {
        // https://www.cnblogs.com/starof/p/4988516.html
        switch (arguments.length) {
          case 1:
            return parseInt(Math.random() * minNum + 1, 10);
          case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          default:
            return 0;
        }
      },
      doLottery: function () {
        if (!this.goalLegal) {
          this.nextStep();
          let count = 0;
          let randomIndex = 0;
          while (count < this.goal){
            randomIndex = this.randomNum(0, this.uids.length-1);
            if (!this.luckyDogs.includes(randomIndex)) {
              this.luckyDogs.push(randomIndex);
              count ++;
            }
          }
        }
      }
    },
    props: {
      stepNow: Number,
      uids: Array,
      luckyDogs: Array,
      nextStep: Function
    }
  }
</script>
