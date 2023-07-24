class BTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  //     BST: Add
  // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with
  //  this value and connecting it at the appropriate place in the tree. Unless specified otherwise,
  //   BSTs can contain duplicate values.
  add(val) {
    const newNode = new BTNode(val);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (val < current.value) {
        if (current.left == null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  //       BST: Contains
  // Create a contains(val) method on BST that returns whether the tree contains a given value.
  //  Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
  contains(val) {
    let current = this.root;
    while (current) {
      if (val == current.value) {
        return true;
      } else if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  //       BST: Min
  // Create a min() method on the BST class that returns the smallest value found in the BST.

  min() {
    if (this.root == null) {
      return null;
    }

    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.value;
  }

  //       BST: Max
  // Create a max() BST method that returns the largest value contained in the binary search tree.
  max() {
    if (this.root == null) {
      return null;
    }

    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.value;
  }
  ///////////////////////////////////////////
  //       BST: Size
  // Write a size() method that returns the number of nodes (values) contained in the tree.

  size() {
    return this.countNodes(this.root);
  }

  countNodes(node) {
    if (node === null) {
      return 0;
    }

    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }
  ////////////////////////////////////////////////////
  // BST: Is Empty
  // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BST();
bst.add(5);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(4);
bst.add(6);
bst.add(8);
console.log(bst);
console.log(bst.contains(3));
console.log(bst.min());
console.log(bst.max());
console.log(bst.size());
console.log(bst.isEmpty());
