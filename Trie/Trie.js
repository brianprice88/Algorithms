/*
Tries resemble trees in which each branch represents a word, with a node for each letter.
Parts of branches can represent common prefixes between words ('ban' in 'band' and 'banana'), then diverge when the words' letters diverge.
Operations begin by starting at the root node and tracing each letter of the word until we reach the end.
example Trie with 'band', 'banana', 'app', and 'apple':
             root
             |   |
             b   a
             |   |
             a   p
             |   |
             n   p
            | |   |
            a d   p
            |     |
            n     l
            |     |
            a     e
Thus a search for 'ban' the word will be false, but for 'ban' the prefix will be true.
Time complexity for a trie insertion/search is O(m), where m is the length of the word
*/

class Trie {
    constructor() {
        this.root = {}; // initialize Trie with empty root node
    }

    insert(word) {
        let node = this.root; // start with the root node
        for (let letter of word) { // for each letter in the word we're adding...
            if (!node[letter]) { // if the current node has no branch to that letter:
                node[letter] = {}; // then create a new branch for it
            }
            node = node[letter] // and as with a linked list pointer, move the current node marker to this node
        }
        node.isWord = true; // once there is a node for each letter of the word, give the last node an isWord property to represent a completed word
    }

    search(word) {
        let node = this.root; // similar to the insert, we start with the root node
        for (let letter of word) { // and check for each letter whether the current node branches to it
            if (!node[letter]) { // if any node doesn't have a branch to the next character, the full word isn't present and we can stop
                return false
            }
            node = node[letter] // otherwise keep moving the current node pointer to the next letter
        }
        return node.isWord === true; // if all letters in the word exist, we still must check that the word exists as a complete word ('ban' is not 'banana' or 'band')
    }

    startsWith(prefix) {
        let node = this.root;
        for (let letter of prefix) { // same approach as searching for a complete word
            if (!node[letter]) {
                return false
            }
            node = node[letter]
        }
        return true; // however now we don't need to check for a complete word existing, since 'ban' is the prefix of existing words 'banana' and 'band'
    }

}