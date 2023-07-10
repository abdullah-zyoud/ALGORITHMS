// Create a new SLL method length() that returns number of nodes in that list.


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
    removeFront(){
         if(this.head == null) {
            return null;
         }
         this.head=this.head.next;
         return this.head;
     }
     contains(value) {
        let currentNode = this.head;
    
        while (currentNode !== null) {
          if (currentNode.data === value) {
            return true; 
          }
          currentNode = currentNode.next;
        }
    
        return false; 
      }

      length() {
        let count = 0;
        let currentNode = this.head;
    
        while (currentNode !== null) {
          count++;
          currentNode = currentNode.next;
        }
    
        return count;
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
// list.printLinklist();
console.log(list.length());
