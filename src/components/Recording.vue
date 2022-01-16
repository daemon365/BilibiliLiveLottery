<template>
  <div>
    <v-stepper-step step="2">
      记录参与观众
    </v-stepper-step>
    <v-stepper-content step="2">
      <p class="display-1 text-center purple--text">当前已有</p>
      <p class="display-2 text-center orange--text">{{ involvedInTotal }}</p>
      <p class="display-1 text-center purple--text">名观众参与</p>
      <v-btn color="primary" @click="stopRec">停止记录</v-btn>
      <v-btn text>返回</v-btn>
    </v-stepper-content>
  </div>
</template>

<script>
  export default {
    name: "Recording",
    props: {
      involvedInTotal: Number,
      stopRec: Function
    }
  }
</script>
