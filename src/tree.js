import React from 'react';
import { Tree  } from 'antd';
const gData = [
  {
    title: '指标一',
    key: '0-0',
    children: [
      { title: '销售额', key: '0-0-0', isLeaf: true },
      { title: '活跃度', key: '0-0-1', isLeaf: true },
    ],
  },
];

export default class Left extends React.Component  {
    state = {
    gData,

  };
    render() {
    return (
      <Tree
        className="draggable-tree"
        
        draggable
        blockNode
        onDrop={this.onDrop}
        treeData={this.state.gData}
      />
    );
  }
}