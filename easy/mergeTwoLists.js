/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 输入字符串的情况
/*var mergeTwoLists = function(l1, l2) {
    let arr1 = l1.split('->'),
        arr2 = l2.split('->');
    let result = [];
    while(arr1.length && arr2.length){
    	if(arr1[0] <= arr2[0]) {
    		result.push(arr1.shift());
    	}
    	else {
    		result.push(arr2.shift());
    	}
    	
    }
    result = result.concat(arr1,arr2)
    return result.join('->')
};*/

var mergeTwoLists = function(l1, l2) {
    let arr1 = [],
        arr2 = [];
    let result = [];
    while(l1!=null){
    	arr1.push(l1.val);
    	l1 = l1.next;
    }
    while(l2!=null){
    	arr2.push(l2.val);
    	l2 = l2.next;
    }
    while(arr1.length && arr2.length){
    	if(arr1[0] <= arr2[0]) {
    		result.push(arr1.shift());
    	}
    	else {
    		result.push(arr2.shift());
    	}
    	
    }
    result = result.concat(arr1,arr2)
    return result;
};

class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}
class List{
	constructor(){
		this.root = null;
		this.length = 0;
		this.last = null;
	}
	isEmpty(){
		return this.length === 0;
	}
	find(item){
		let currentNode = this.root;
		while(currentNode && currentNode.val != item){
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	add(newNode){
		if(this.root === null) this.root = new ListNode(newNode);
		if(this.last === null) this.last = this.root;
		else {
			this.last.next = new ListNode(newNode);
			this.last = this.last.next;
		}
	}
	toString(){
		let currentNode = this.root;
		let arr = [];
		while(currentNode){
			arr.push(currentNode.val);
			currentNode = currentNode.next;
		}
		return arr.join('->')
	}
}
let list = new List();
list.add('1');
list.add('2');
list.add('4');
console.log(list.toString())