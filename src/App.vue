<template>
  <div id="page-container">
    <v-app>
      <v-app-bar
              app
              color="deep-purple accent-4"
              dense
              dark>
        BiliBili直播弹幕抽奖
      </v-app-bar>
      <v-content>
        <v-stepper v-model="currentStep" vertical>
          <room-choosing :enter-room="enterRoom"></room-choosing>
          <recording :involved-in-total="this.involvedUid.length"
                     :stop-rec="this.stopRecording">
          </recording>
          <lottery :step-now="this.currentStep"
                   :uids="this.involvedUid"
                   :lucky-dogs="this.luckyDogs"
                   :next-step="()=>{this.currentStep ++}">
          </lottery>
          <result :lucky-dogs="this.luckyDogs"
                  :uids="this.involvedUid"
                  :unames="this.involvedUname">
          </result>
        </v-stepper>
      </v-content>
    </v-app>
  </div>
</template>

<script>
document.title = 'BiliBili直播弹幕抽奖'

import connect from "./websocketClient/BiliLiveWs";
import RoomChoosing from "./components/RoomChoosing";
import Recording from "./components/Recording";
import Lottery from "./components/Lottery";
import Result from "./components/Result";

export default {
  name: 'App',
  components: {Result, Lottery, Recording, RoomChoosing },
  data: () => ({
    currentStep: 1,
    roomid: 0,
    recording: false,
    involvedUid: [], // 所有参与用户的uid
    involvedUname: {}, // 所有参与用户的用户名
    luckyDogs: []
  }),
  methods: {
    enterRoom: function (rid) {
      this.involvedUid = [];
      this.involvedUname = {};
      this.recording = true;
      this.roomid = parseInt(rid);
      this.connectWs();
      this.currentStep ++;
    },
    stopRecording: function () {
      this.recording = false;
      this.currentStep ++;
    },
    onDanmu: function (userInfo) {
      if (this.recording && !this.involvedUid.includes(userInfo[2][0])){
        this.involvedUid.push(userInfo[2][0].toString());
        this.involvedUname[userInfo[2][0]] = userInfo[2][1];
      }
    },
    connectWs: function () {
      connect(this.roomid, this.onDanmu);
    }
  }
}
</script>
