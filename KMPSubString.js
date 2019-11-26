//
// Knuth-Morris-Pratt (KMP) Pattern Matching (Substring search):
//
// Changes string and pattern matching from an O(m*n) to O(m+n)
// by using prefix/suffix matching of the pattern to advance faster
// through the string without having to go back.
//

const findPrefixSuffixMatch = (pattern, length = 0) => {
  let len = 0;
  let i = 0;
  for (let j = i + 1; j < length; j++) {
    if (pattern[i] === pattern[j]) {
      len = i + 1;
      i++;
    }
  }
  return len;
};

const subStringMatch = (string, pattern) => {
  let p = 0;
  let i = 0;
  while (i < string.length) {
    let j = 0;
    while (string[i + j] === pattern[p]) {
      j++;
      p++;
      if (p === pattern.length) return i;
    }

    if (j > 1) {
      p = findPrefixSuffixMatch(pattern, p);
      i = i + j;
    } else {
      p = 0;
      i++;
    }
  }

  return -1;
};

const quickTest = (string, pattern) => {
  const position = subStringMatch(string, pattern);

  if (position >= 0) {
    console.log(
      `KMP Sub String Search(${string} with ${pattern}) found at ${position}`
    );
  } else {
    console.log(
      `KMP Sub String Search(${string} with pattern ${pattern}) not found!`
    );
  }
};

const subStringMatchTest = () => {
  const string = 'abcxabcdabxabcdabcdabcy';
  const pattern = 'abcdabcy';
  const string2 = 'adsgwadsxdsgwadsgz';
  const pattern2 = 'dsgwadsgz';
  // Fail:
  const string3 = 'asldfjilajwejflaksjjdlfijalawiejf';
  const pattern3 = '23r4k';
  const string4 = 'aslfjilajwe2laijsljlkfjiqojalvvnxlkj';
  const pattern4 = '2laijsl';

  quickTest(string, pattern);
  quickTest(string2, pattern2);
  quickTest(string3, pattern3);
  quickTest(string4, pattern4);
};

module.exports = { subStringMatch, subStringMatchTest };
