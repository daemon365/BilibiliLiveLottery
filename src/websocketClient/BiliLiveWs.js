import {LiveWS} from "bilibili-live-ws";

function connect(roomid, danmuCllback,text) {
  const live = new LiveWS(roomid);
  
  live.on('DANMU_MSG', (data) => {
    console.log("data",data);
    if (text == '') {
      danmuCllback(data['info'][2])
    } else {
      if (data["info"][1] == text) {
        danmuCllback(data['info'][2])
      }
    }
  })
}

export default connect;