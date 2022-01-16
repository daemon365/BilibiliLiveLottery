<template>
  <div>
    <v-stepper-step step="4">
      开奖
    </v-stepper-step>
    <v-stepper-content step="4">
      <p class="display-1 text-center purple--text">中奖名单</p>
      <p class="headline text-center orange--text"
         v-for="uid in this.luckyDogs"
         :key="uid"
         @click="openUserSpace(uids[uid])">
        {{ unames[uids[uid]] }}({{ uids[uid] }})
      </p>
    </v-stepper-content>
  </div>
</template>

<script>
export default {
  name: "Result",
  methods: {
    openUserSpace: function (uid) {
      window.open('https://space.bilibili.com/' + uid);
    }
  },
  props: {
    luckyDogs: Array,
    uids: Array,
    unames: Object
  }
}
</script>
