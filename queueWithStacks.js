class Stack {
    constructor() {
        this.length = 0;
        this.storage = [];
    }

pop() {
  if (this.length) {
    const value = this.storage[this.length - 1]
    this.storage.splice(this.length - 1, 1)
    this.length --
    return value;
  }
}

push(value) {
  this.length++
  this.storage[this.length - 1] = value;
}

size() {
    return this.storage.length;
}

}

class Queue { // since a stack uses last-in first-out and a queue is first-in first-out:
    constructor() {
      this.inbox = new Stack();
      this.outbox = new Stack();
    }

enqueue(value) { // we add items to the 'inbox'
this.inbox.push(value)
}

dequeue() { // when we want to remove an item, we move all items in 'inbox' to 'outbox'
  if (this.outbox.size() === 0) {
    while (this.inbox.size() !== 0) {
        const value = this.inbox.pop();
        this.outbox.push(value)
    }
  }
  return this.outbox.pop(); // thus the first item removed from 'outbox' will have been at the bottom of the 'inbox' and first item enqueued
}

size() {
  return this.inbox.size() + this.outbox.size()
}

}