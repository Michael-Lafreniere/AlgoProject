//
//
// Depth-First Search:
//
//

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }
    return array;
  }
}

const depthFirstTest = () => {
  const test1 = new Node('A');
  test1.addChild('B').addChild('C');
  test1.children[0].addChild('D');

  const test2 = new Node('A');
  test2
    .addChild('B')
    .addChild('C')
    .addChild('D')
    .addChild('E');
  test2.children[1].addChild('F');

  let test = test2;

  const results = test.depthFirstSearch([]);

  console.log('Depth First Search results:', results);
};

//exports.Node = Node;

module.exports = { Node, depthFirstTest };
