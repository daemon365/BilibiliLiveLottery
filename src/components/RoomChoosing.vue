<template>
  <div>
    <v-stepper-step step="1">进入直播间</v-stepper-step>
    <v-stepper-content step="1">
      <p class="display-1 text-center purple--text">请输入房间号</p>
      <v-text-field
              v-model="roomid"
              type="number"
              label="房间号"
              class="px-2"
              outlined
      ></v-text-field>
      <v-btn color="primary" @click="enterRoom(roomid)">进入房间</v-btn>
    </v-stepper-content>
  </div>
</template>

<script>
export default {
  name: "RoomChoosing",
  props: {
    enterRoom: Function
  },
  data: () => ({
      roomid: ''
  })
}
</script>
