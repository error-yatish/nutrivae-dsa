/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let stringMap = new Map();
    stringMap.set(0, s[0]);
    let longestStart = 0;
    let longestEnd = 0;

    for (let i = 1; i < s.length; i++) {
        const lastKey = Math.max(...stringMap.keys());
        if (s[i] === stringMap.get(lastKey) || s[i] === stringMap.get(lastKey - 1)) {
            let longestStartCandidate = lastKey;
            if (s[i] === stringMap.get(lastKey - 1)) {
                stringMap.delete(lastKey - 1);
                longestStartCandidate = lastKey - 1;
            }
            stringMap.delete(lastKey);

            if (longestEnd - longestStart < i - longestStartCandidate) {
                longestStart = longestStartCandidate;
                longestEnd = i;
            }
        } else {
            stringMap.set(i, s[i]);
        }
    }

    return s.slice(longestStart, longestEnd + 1);
};

console.log(longestPalindrome("ccc"));

// bacbddbcabacacb ==> bacbddbcab
// bacadabcbad ==> dabcbad
