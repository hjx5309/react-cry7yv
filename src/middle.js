import React from 'react';
import { Tag, message } from 'antd';

export default class Middle extends React.Component {
  state = {
    tags: []
  };
  onDrop = event => {
    let { tags } = this.state;
    console.log(event.dataTransfer.getData('text'));
    // if (tags.length === 0) {
    //   console.log(event.dataTransfer.getData('text'));
    //   var data = JSON.parse(event.dataTransfer.getData('text'));
    //   console.log(data.title);
    // } else {
    //   if (data.title === tags) {
    //     message.error('不能添加重复的指标');
    //   } else {
    //     message.error('这两个指标无关联关系');
    //   }
    // }
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
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
          height: '100vh',
          borderLeft: '1px solid #000',
          borderRight: '1px solid #000'
        }}
        draggable
        onDrop={this.onDrop}
      >
        {tagChild}
      </div>
    );
  }
}
