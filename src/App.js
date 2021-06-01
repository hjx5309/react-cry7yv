import React from "react";
import "./style.css";
import { DatePicker } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
moment.locale('zh-cn');
const { RangePicker } = DatePicker;
const changeTime = (time)=>{
  // console.log(time)
   time.map(item=>{
     console.log(item.format("YYYY-ww"))
   })
 // console.log(time.format("YYYY-ww"))
}
export default function App() {

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <RangePicker picker="week" format='YYYY-MM-DD' onChange={changeTime}/>
    </div>
  );
}
