import React from 'react';
import './style.css';
import { DatePicker, Row, Col } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import Left from './tree';
import MIddle from './middle';
import Right from './right';
export default function App() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Left />
        </Col>
        <Col span={8}>
          <MIddle />
        </Col>
        <Col span={8}>
          <Right />
        </Col>
      </Row>
    </div>
  );
}
