/* 
    You need atleast a head node and tail node for a LinkedList to work.

    Yu need to create a class object with a constructor function adding in parameters. 
    
    
    If you don't want to use classes, you can build a linkedList up with functions.
    You can forgo the consturctor if you add methods via prototype. 
*/
"use strict"; // use strict mode if using class 

class LinkedList {
    constructor(head, tail) { 
         this.head = null;
         this.tail = null;
    }
    addTohead(value) {
        var newNode = new Node(value, this.head, null);
        if (this.head) this.head.prev = newNode; // if this.head is present, make this.head.prev a reference to a new Node instance
        else this.tail = newNode; // if this.head is false, make this.tail a reference to a new Node instance
        this.head = newNode;
    }
    testMethod() {
        console.log("test")
    }
    addToTail(value){ // add a node to the end of our linkedlist
        var newNode = new Node(value, null, this.tail);
        //account for whether the linkedlist is empty.
        if(this.tail) this.tail.next = newNode;
        // if is false and the list is empty, make the newNode the head
        else this.head = newNode;
        this.tail = newNode // make the newly add node the tail
    }
    
    removeHead(){
        if (!this.head) return null; //check to see if head is empty
        let val = this.head.value; // make a temp variable to make copy of head node value
        this.head = this.head.next; // change head node to value of next node down the list
        if(this.head) this.head.prev = null; // check to see if head exists, if it does, 
        // change this.head.prev to null(this is the head now, 
        // so there is no prev to refer to)
        else this.tail = null;
        return val; //return val of original node we are removing
    }

    removeTail(){
        if(!this.tail) return null;
        let val = this.tail.value; // copy of tail value
        this.tail = this.tail.prev; // assign his.tail to previos node in list
        if(this.tail) this.tail.next = null; //make sure the node after our tail is null, to signify it's the end the list
        else this.head = null;
        return val;
    }

    search(searchValue){
        let count = 0;
        let currentNode = this.head;
        
        // while loop t iterate through the linked list
        // put a boolean inside the while(). As long as it true, the code will loop
        while(currentNode){
            if(currentNode.value === searchValue){
                return count
            } else {
                count++
            }
            currentNode = currentNode.next; // our current Node needs to update itself at the end of every loop

        }
        return null;
    }

    indexOf(searchValue){
        let newArr = []; // create a empty array
        let currentNode = this.head //keep track of your currentNode you are looking at
        let count = 0; // this will represent out index
        // need to create a loop, 
        while(currentNode){
            if (currentNode.value === searchValue) { // keep track of our searchvalue,
                newArr.push(count) // and push the index number into a empty array 
                count++ // increase th count by one
            } else {
                count++
            }
           currentNode = currentNode.next;
        }
        return newArr;
    }

    displayFullList(){
        let LinkedListArray = []; // create an empty string
        let currentNode = this.head; // keep track of your currentNode you are looking at
        //let count = 0; // this will represent our index number

        while(currentNode) { //while current node is true, run this loop
            LinkedListArray.push(currentNode.value);// push the value of each node into the empty array
            currentNode = currentNode.next;   
        }
        return LinkedListArray
    }
}

/* 
    Node sort of lives inside of the LinkedList data Structure
*/

class Node{
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;


    }
}
    

// this is the first node. The head node. It's value is 100, 
// the next node is node2, and the prev node is null, becuase it doesn't exist yet
var node1 = new Node(100, 'node2', null); 



var ll = new LinkedList();


//ll.addTohead(100); //just add one Node to our LinkedList
/*head: Node { value: 100, next: null, prev: null },
  tail: Node { value: 100, next: null, prev: null } }
  
  As the only node in the list, it is both the head and the tail node
  */

//ll.addTohead(200); // Adding 200 will make this the new head of our node,
// and push 100 to tail
/*LinkedList {
  head:
   Node {
     value: 200,
     head: Node { value: 100, head: null, prev: [Circular] },
     prev: null },
  tail:
   Node {
     value: 100,
     head: null,
     prev: Node { value: 200, head: [Circular], prev: null } } }
 */
//ll.addTohead(300); // Adding 300 will this the head of the linkedlist, and knock the next two nodes down
/*
LinkedList {
    head: Node {
        value: 300,
        head: Node {
            value: 200,
            head: [Object],
            prev: [Circular]
        },
        prev: null
    },
    tail: Node {
        value: 100,
        head: null,
        prev: Node {
            value: 200,
            head: [Circular],
            prev: [Object]
        }
    }
}
*/

// We see our head, which is 300, and our tail which is 100. 
// We don't see 200, which is in the middle, becuase that isn't defined 
// in our linkedList objectt

//ll.addToTail(50); // add new value to the end of the linked list


ll.addTohead(1000)
ll.addTohead(2000)

console.log(ll)

// ll.removeHead();

console.log(ll.removeHead())
ll.addToTail(3000)
ll.addToTail(4000)

console.log(ll.removeTail())

console.log(ll)


let myLL = new LinkedList();

myLL.addTohead(123);
myLL.addTohead(70);
myLL.addTohead('hello');
myLL.addToTail(70);
myLL.addTohead('world');
myLL.addTohead(20);

// console.log(myLL.search(1))
console.log(myLL)
console.log(myLL.indexOf(70))
console.log(myLL.displayFullList());