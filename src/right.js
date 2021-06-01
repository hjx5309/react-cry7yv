import React from 'react';
import { Tag } from 'antd';
import onfire from './fire.js';
const Data = {
  销售额: ['成本', '销售人员', '季度'],
  活跃度: ['活跃时长', '活跃时段']
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
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
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
        {tagChild}
      </div>
    );
  }
}
