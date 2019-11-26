//
// Linked List Construction
//
// Create a class for a doubly linked list.  The class should have a head and tail values which either point to null
// or to a linked list node.  Every node will have a value as well as next and prev which can also either point to null
// or to another linked list node.  The class should support setting the head and tail of the list.  Inserting nodes before
// and after other nodes as well as at certain positions.  Removing given nodes and removing nodes with specific values
// along with searching for nodes with values.  Only the searching function should return a value, specifically a boolean.
//

class linkNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (node === null) return;
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let node = this.head;
    let currentPos = 1;
    while (node !== null && currentPos++ != position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    if (this.head === null && this.tail === null) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      const toCheck = currentNode;
      currentNode = currentNode.next;
      if (toCheck.value === value) this.remove(toCheck);
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    if (this.head === null) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  printList() {
    if (this.head === null) return;
    let node = this.head;
    let list = [];
    while (node !== null) {
      list.push(node.value);
      node = node.next;
    }
    console.log(list);
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}

const removeNodes = (linkedList, nodes) => {
  for (let i = 0; i < nodes.length; i++) {
    linkedList.remove(nodes[i]);
  }
  if (linkedList.head === null && linkedList.tail === null)
    console.log('Empty -- Good.');
};

const expectedResults = (testNumber, linkedList, head, tail) => {
  if (
    linkedList.head.value === head.value &&
    linkedList.tail.value === tail.value
  ) {
    console.log('expectedResults(', testNumber, ') -- Success.');
  } else {
    console.log(
      'expectedResults(',
      testNumber,
      ') wanted:',
      head.value,
      'then',
      tail.value,
      'Got:',
      linkedList.head.value,
      'then',
      linkedList.tail.value,
      'instead. -- Failed.'
    );
  }
};

const linkedListTest = () => {
  const list = new LinkedList();
  const first = new linkNode(1);
  const second = new linkNode(2);
  const nodes = [first, second];

  list.setHead(first);
  list.setTail(second);
  expectedResults('1', list, first, second);
  removeNodes(list, nodes);
  list.setHead(first);
  list.insertAfter(first, second);
  expectedResults('2', list, first, second);
  removeNodes(list, nodes);
  list.setHead(first);
  list.insertBefore(first, second);
  expectedResults('3', list, second, first);
  removeNodes(list, nodes);
  list.insertAtPosition(1, first);
  list.insertAtPosition(2, second);
  expectedResults('4', list, first, second);
  removeNodes(list, nodes);
  list.insertAtPosition(2, first);
  list.insertAtPosition(1, second);
  expectedResults('5', list, second, first);
  //list.printList();
};

module.exports = { linkNode, LinkedList, linkedListTest };
