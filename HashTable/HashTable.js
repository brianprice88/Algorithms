// time complexity: O(1) for best case, O(n) worst case when potentially needing to look through a bucket with many tuples or re-size

class HashTable {
    constructor(limit) {
        this.limit = limit;
        this.storage = [];
        this.size = 0;
    }

    getHashIndex(string, max) {
        var hash = 0;
        for (var i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        return hash % max;
    }

    insert(key, value) {
        let index = this.getHashIndex(key, this.limit);
        if (!this.storage[index]) { this.storage[index] = [] } // create a bucket at the index if there isn't one
        let bucket = this.storage[index]
        for (var i = 0; i < bucket.length; i++) { // check the bucket's tuples
            if (bucket[i][0] === key) { // if the key already exists in this tuple, replace its value and exit
                bucket[i][1] = value;
                return
            }
        }
        bucket.push([key, value]) // otherwise add the tuple
        this.size++;

        if (this.size >= this.limit * .75) { // if number of tuples is 3/4 the limit, double the size
            this.resize(Math.round(this.limit * 2))
        }


    }

    retrieve(key) {
        let index = this.getHashIndex(key, this.limit);
        if (!this.storage[index]) { return null } // if no bucket at the index, clearly the key isn't there
        let bucket = this.storage[index]
        for (var i = 0; i < bucket.length; i++) { // check the bucket's tuples for the key
            if (bucket[i][0] === key) {
                return bucket[i][1]
            }
        }
        return null;

    }

    remove(key) {
        let index = this.getHashIndex(key, this.limit);
        if (!this.storage[index]) { return null };
        let bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) { // check the bucket's tuples for the key
            if (bucket[i][0] === key) {
                let value = bucket[i][1];
                bucket.splice(i, 1); // delete the tuple from this bucket
                this.size--;
                if (this.size <= this.limit * .25) { // if number of tuples is .25 the limit, halve the size
                    this.resize(Math.round(this.limit * .5))
                }
                return value;
            }
        }
        return null
    }

    resize(newSize) {
    let buckets = [];
    for (var i = 0; i < this.storage.length; i++) {
        if (!this.storage[i]){continue;} // if no bucket, continue
        for (var j = 0; j < this.storage[i].length; j++) {
            buckets.push(this.storage[i][j]) // add each tuple to buckets
        }
    }
    this.limit = newSize;
    this.size = 0;
    this.storage = [];

    for (var i = 0; i < buckets.length; i++) { // now re-insert each tuple
        this.insert(buckets[i][0], buckets[i][1])
    }

    }

}