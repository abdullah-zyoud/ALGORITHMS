// Create method max() to return list’s largest val.
// Create min(node) to return list’s smallest val.
// Create average() to return average val.





class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
       let  new_node = new Node(val);
        if(! this.head){
            this.head=new_node;
            return this;

        }
        new_node.next=this.head;
        this.head=new_node;
        return this.head;
    }
    max() {
        if (this.head === null) {
          return null;  
        }
    
        let maxVal = this.head.data;
        let currentNode = this.head.next;
    
        while (currentNode !== null) {
          if (currentNode.data > maxVal) {
            maxVal = currentNode.data;
          }
          currentNode = currentNode.next;
        }
    
        return maxVal;
      }

      min() {
        if (this.head === null) {
          return null;  
        }
    
        let minVal = this.head.data;
        let currentNode = this.head.next;
    
        while (currentNode !== null) {
          if (currentNode.data < minVal) {
            minVal = currentNode.data;
          }
          currentNode = currentNode.next;
        }
    
        return minVal;
      }
      
      average() {
        if (this.head === null) {
          return null; 
        }
    
        let sum = 0;
        let count = 0;
        let currentNode = this.head;
    
        while (currentNode !== null) {
          sum += currentNode.data;
          count++;
          currentNode = currentNode.next;
        }
        return sum / count;
      }

    printLinklist(){
        var current =this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}


var list = new LinkedList();
list.addFront(50);
list.addFront(20);
list.addFront(10);
list.addFront(80);
list.addFront(90);
// console.log(list.printLinklist());
console.log(list.max());
console.log(list.min());
console.log(list.average());


