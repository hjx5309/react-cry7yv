import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '销售额',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '成本',
    age: 42,
    address: '西湖区湖底公园1号'
  }
];

const columns = [
  {
    title: '指标',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '数据',
    dataIndex: 'age',
    key: 'age'
  }
];

export default class MiddleTable extends React.Component {
  render() {
    return <Table dataSource={dataSource} columns={columns} />;
  }
}
