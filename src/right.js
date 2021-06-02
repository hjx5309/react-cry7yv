import React from 'react';
import { Tag, Button } from 'antd';
import onfire from './fire.js';
const Data = {
  销售额: ['成交时间', '销售人员', '季度'],
  活跃度: ['活跃时长', '活跃时段'],
  成本: ['销售人员', '商品成本'],
  销售额成本: ['成交时间', '销售人员', '季度', '商品成本'],
  成本销售额: ['成交时间', '销售人员', '季度', '商品成本']
};
export default class Right extends React.Component {
  state = {
    tags: []
  };
  componentDidMount() {
    let that = this;
    onfire.on('test_event', function(data) {
      console.log('哈哈哈');
      if (!data) {
        that.setState({ tags: [] });
      } else {
        that.setState({ tags: Data[data] });
      }
    });
  }
  componentWillUnmount() {
    onfire.clear();
  }
  forMap = tag => {
    const tagElem = <Tag>{tag}</Tag>;
    return (
      <div key={tag} style={{ marginBottom: '10px' }}>
        {tagElem}
      </div>
    );
  };
  render() {
    const { tags } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <div>
          维度:<Button type="primary">保存</Button>
        </div>
        {tagChild}
      </div>
    );
  }
}
