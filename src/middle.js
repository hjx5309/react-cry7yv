import React from 'react';
import { Tag, message, Button, Modal } from 'antd';
import onfire from './fire.js';
import MiddleTable from './table';

const data1 = {
  销售额: '1',
  成本: '1',
  活跃度: '2'
};

export default class Middle extends React.Component {
  state = {
    tags: [],
    visible: false
  };
  onDrop = event => {
    let { tags } = this.state;
    // console.log(event.dataTransfer.getData('aaaa'));
    console.log(event.dataTransfer.getData('cccc'));
    var data = JSON.parse(event.dataTransfer.getData('cccc'));
    console.log(data.title);
    if (tags.length === 0) {
      tags.push(data.title);
      this.setState({ tags });
      onfire.fire('test_event', data.title);
    } else if (tags.length === 2) {
      //console.log(tags[0]);
      // if (data.title == tags[0]) {
      //   console.log('1', tags[0]);
      //   message.error('不能添加重复的指标');
      // } else {
      //   message.error('这两个指标无关联关系');
      // }
      if (data1[data.title] == 2) {
        message.error('指标无关联关系');
      } else {
        message.error('不能添加重复的指标');
      }
    } else if (tags.length === 1) {
      if (data.title == tags[0]) {
        message.error('不能添加重复的指标');
      } else if (data1[data.title] != data1[tags[0]]) {
        message.error('指标无关联关系');
      } else {
        tags.push(data.title);
        this.setState({ tags });
        onfire.fire('test_event', tags.join(''));
      }
    }
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
    onfire.fire('test_event', tags.join(''));
  };
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
      <div key={tag} style={{ marginBottom: '10px' }}>
        {tagElem}
      </div>
    );
  };
  render() {
    const { tags, visible } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <div
        style={{
          height: '100vh',
          borderLeft: '1px solid #000',
          borderRight: '1px solid #000'
        }}
        draggable="true"
        onDrop={this.onDrop}
      >
        <div>
          指标:
          <Button
            type="primary"
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            查看宽表
          </Button>
        </div>
        {tagChild}
        <Modal
          visible={visible}
          onOk={() => {
            this.setState({ visible: false });
          }}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <MiddleTable />
        </Modal>
      </div>
    );
  }
}
