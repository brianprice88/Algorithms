// Given a single input string, write a function that produces all possible anagrams
//  of a string and outputs them as an array.

var allAnagrams = function (string) {
	var results = new Set()
	var anagram = function (current, remaining) {
		if (remaining.length === 0) {
			results.add(current)
		} else {
			for (var i = 0; i < remaining.length; i++) {
				anagram(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1))
			}
		}
	}
	anagram('', string)
	return Array.from(results);
}

// Given a string S and a string P, find all start indices of P's anagrams in S
// example given S "cbaebabacd" and P "abc", anagrams are "cba" and "bac" which start at indexes 0 and 6


var findAnagrams = function (S, P) {
	let PFreqs = {};
	let PUniqueLetters = 0;

	for (var letter of P) { // create an object to hold the frequency of each letter in P, and also keep track of the number of P's unique letters
		if (PFreqs[letter] === undefined) { // e.g. in 'abc', {a:1, b:2, c:3} with unique letter count of 3
			PUniqueLetters++;
			PFreqs[letter] = 1;
		} else {
			PFreqs[letter]++;
		}
	}

	let start = 0;
	let end = 0;
	let results = [];

	while (end < S.length) { //move first pointer through S
		let char = S[end];
		if (PFreqs[char] !== undefined) { // if this character in S is also in P, deduct 1 from that character's frequency count
			PFreqs[char]--;
			if (PFreqs[char] === 0) { // and now if the current window has found all occurrences of char in P, subtract that char from P's unique letters remaining 
				PUniqueLetters--
			}
		}

		end++; // move pointer to next index so most recent char will be included in current window

		while (PUniqueLetters === 0) { // now if the current window has found all of P's unique letters (and thus also all occurrences of each letter):
			if (end - start === P.length) { // if current window is same length as P, add start index to results since it's an anagram
				results.push(start);
			}
			if (PFreqs[S[start]] !== undefined) { // if character at start index appears in P, we re-add it to letters remaining count (if it's currently at 0 in frequency count) and add 1 to its frequency coutn
				if (PFreqs[S[start]] === 0) { PUniqueLetters++ };
				PFreqs[S[start]]++;
			}
			start++; // reduce the window by increasing the start index pointer
		}

	}
	return results
}