// 1) Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node. 
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// 2)Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

// 3)Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

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

// console.log(list.addFront(10));
list.printLinklist();
// console.log(list.addFront(10));

// list.removeFront();
// list.printLinklist();
// list.removeFront();
// list.removeFront();

// list.printLinklist();
// console.log(list.printLinklist());



