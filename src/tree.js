import React from 'react';
import { Tree, Input } from 'antd';
const { Search } = Input;
const { TreeNode } = Tree;
const gData = [
  {
    title: '模块',
    key: '0-0',
    children: [
      { title: '销售额', key: '0-0-0', isLeaf: true },
      { title: '活跃度', key: '0-0-1', isLeaf: true },
      { title: '成本', key: '0-0-2', isLeaf: true }
    ]
  }
];
const tt = {
  '0-0-0': '销售额',
  '0-0-1': '活跃度',
  '0-0-2': '成本'
};

export default class Left extends React.Component {
  state = {
    gData,
    searchValue: '',
    autoExpandParent: true
  };
  setAllowDrop = () => {
    return false;
  };
  setDraggle = node => {
    console.log(node);
    return !node.children;
  };
  onChange = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({
      searchValue: value,
      autoExpandParent: true
    });
  };
  onDragStart = node => {
    console.log(node);
    node.event.dataTransfer.setData(
      'cccc',
      JSON.stringify({ title: tt[node.node.key] })
    );
  };
  render() {
    const { searchValue, autoExpandParent, gData } = this.state;
    const loop = data =>
      data.map(item => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{item.title}</span>
          );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key
        };
      });
    console.log(loop(gData));
    return (
      <>
        <Search
          style={{ marginBottom: 8 }}
          placeholder="Search"
          onChange={this.onChange}
        />
        <Tree
          className="draggable-tree"
          blockNode
          draggable
          defaultExpandAll
          autoExpandParent={autoExpandParent}
          onDragStart={this.onDragStart}
          treeData={loop(gData)}
        />
      </>
    );
  }
}
