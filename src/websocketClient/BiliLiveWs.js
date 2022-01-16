import {LiveWS} from "bilibili-live-ws";

function connect(roomid, danmuCllback) {
  const live = new LiveWS(roomid);
  
  live.on('DANMU_MSG', (data) => {
    // console.log("data",data);
    danmuCllback(data['info'][2])
  })
}

export default connect;