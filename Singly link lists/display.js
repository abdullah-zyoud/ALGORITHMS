// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"


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

    display(){
        var current =this.head;
        let string ="";
        while(current!=null){
            string += current.data+" "
            current=current.next;
        }
        return string ;
    }
}

var list = new LinkedList();
list.addFront(50);
list.addFront(20);
list.addFront(10);
list.addFront(80);
list.addFront(90);
console.log(list.display());





