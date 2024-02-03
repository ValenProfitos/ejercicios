// For the inital approach to the challenge, I consider checking the letters using a 'for' loop.   Here are the pros and cons:

// Pros:
// Effciency: Using a 'for' loop can be more time-efficient for longer strings due to its favorable time complexity.
// Memory Efficiency: This method doesn't require creating arrays or sorting, leading to potential benefits in terms of memory usage

// Cons:
// Complexity: The downside is that this solution involves writing more code and requires iterating over the characters of both words.
// Readability: The increased code and character iteration might make the code less concise and potentially less readable for some developers.

function areAnagrams(word1, word2) {
    // Remove spaces and convert to lowercase for case-insensitive
    const cleanWord1 = word1.replace(/\s/g, "").toLowerCase();
    const cleanWord2 = word2.replace(/\s/g, "").toLowerCase();

    // Check if the lenghts of both words are the same
    if (cleanWord1.length !== cleanWord2.length) {
        console.log(`${word1} and ${word2} aren't anagrams`);
        return false;
    }

    // Initialize objects to store letter counts for each word
    const count1 = {};
    const count2 = {};

    // Count ocurrences of each letter in the first word
    for (let char of cleanWord1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    
    // Count ocurrences of each letter in the second word
    for (let char of cleanWord2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    // Compare the counts of each letter
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            console.log(`${word1} and ${word2} aren't anagrams`);
            return false;
        }
    }

    // If all counts are equal, the word are anagrams
    console.log(`${word1} and ${word2} are anagrams`);
    return true;
}

areAnagrams('leet', 'teel');
areAnagrams('hello', 'yellow');

// After checking out the solution provided by the creator of the challenge, I decided to create a version that closely resembles it. My goal is to practice more and come up with creative solution to future problems. Here are the pros and cons of this approach:

//Pros:
// Simplicity: The sorting solution is concise and straightforward. It leverages the built-in 'split', 'sort' and 'join' methods to compare the characters of the words.
// Readability: The code is easy to read and understand, making it suitable for cases where clarity and simplicity are essential.

//Cons:
// Efficiency: Sorting involves a computational cost, and the time complexity of sorting is O(n log n), where n is the length of the words. In most practical cases, this is not a significant issue for short words, but its worth considering for very long strings. 

function areAnagramsTwo(wordA, wordB) {
    // Remove spaces and convert to lowercase for case-insensitive
    const cleanedWordA = wordA.replace(/\s/g, '').toLowerCase();
    const cleanedWordB = wordB.replace(/\s/g, '').toLowerCase();

    // Check if the sorted characters of both words are the same
    const result = cleanedWordA.split('').sort().join('') === cleanedWordB.split('').sort().join('');

    // Print result
    if (result) {
        console.log(`${wordA} and ${wordB} are anagrams`);
    } else {
        console.log(`${wordA} and ${wordB} aren't anagrams`);
    }
}

areAnagramsTwo('nana', 'anna');
areAnagramsTwo('lock', 'luck');