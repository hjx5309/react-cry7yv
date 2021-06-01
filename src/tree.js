import React from 'react';
import { Tree } from 'antd';
const gData = [
  {
    title: '指标一',
    key: '0-0',
    children: [
      { title: '销售额', key: '0-0-0', isLeaf: true },
      { title: '活跃度', key: '0-0-1', isLeaf: true }
    ]
  }
];

export default class Left extends React.Component {
  state = {
    gData
  };
  setAllowDrop = () => {
    return false;
  };
  setDraggle = node => {
    return !node.children;
  };
  onDragStart = ({ event, node }) => {
    event.dataTransfer.setData('text', JSON.stringify(node));
  };
  render() {
    return (
      <Tree
        className="draggable-tree"
        allowDrop={this.setAllowDrop}
        draggable={this.setDraggle}
        blockNode
        onDrop={this.onDrop}
        onDragStart={this.onDragStart}
        treeData={this.state.gData}
      />
    );
  }
}
