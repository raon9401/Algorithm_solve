class Node {
  constructor(value) {
    this.value = value; // 저장된 데이터
    this.next = null; // 다음 노드의 위치
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // 연결 리스트 끝에 데이터 추가 : O(n)
  addLast(value) {
    const node = new Node(value);

    if (this.root) {
      let currentNode = this.root;

      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    } else {
      this.root = node;
    }

    this.size++;
  }

  // 연결 리스트 끝에 데이터 삭제 : O(n)
  removeLast() {
    let currentNode = this.root;
    let target;
    if (currentNode && currentNode.next) {
      while (currentNode && currentNode.next && currentNode.next.next) {
        currentNode = currentNode.next;
      }
      target = currentNode.next;
      currentNode.next = null;
    } else {
      this.root = null;
      target = currentNode;
    }

    this.size--;
    return target.value;
  }

  // 연결 리스트 처음에 데이터 추가 : O(1)
  addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  // 연결 리스트 처음에 데이터 삭제 : O(1)
  removeFirst() {
    const target = this.root;

    if (target) {
      this.root = target.next;
      return target.value;
    }
  }

  // 연결 리스트에서 검색 : O(n)
  contains(value) {
    let currentNode = this.root;
    let i = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return i;
      }

      currentNode = currentNode.next;
      i++;
    }
  }

  add(value, index = 0) {
    if (index === 0) {
      return this.addFirst(value);
    }
  }

  remove(index = 0) {
    if (index === 0) {
      return this.removeFirst();
    }
  }
}

let linkedList = new LinkedList();
linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);

console.log(linkedList.root);
