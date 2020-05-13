// time complexity: O(1)

class Set {
    constructor() {
        this.storage = {}
    }

    add(value) {
        if (!this.storage[value]) {
            this.storage[value] = true;
        }
    }

    remove(value) {
        if (this.storage[value]) {
            delete this.storage[value]
        }
    }

    contains(value) {
        return this.storage[value] ? true : false
    }

    size() {
        return Object.keys(this.storage).length
    }

}