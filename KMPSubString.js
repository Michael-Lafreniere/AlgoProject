//
// Knuth-Morris-Pratt (KMP) Pattern Matching (Substring search):
//
// Changes string and pattern matching from an O(m*n) to O(m+n)
// by using prefix/suffix matching of the pattern to advance faster
// through the string without having to go back.
//

const findPattern = substring => {
  let pattern = new Array(substring.length).fill(-1);
  let i = 1;
  let j = 0;
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return pattern;
};

const KMPSubStringExists = (string, substring) => {
  let pattern = findPattern(substring);
  let i = 0;
  let j = 0;
  while (i + substring.length - j <= string.length) {
    if (string[i] === substring[j]) {
      if (j === substring.length - 1) return true;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return false;
};

const quickTest = (string, substring) => {
  const exists = KMPSubStringExists(string, substring);

  if (exists) {
    console.log(
      `KMP Sub String Search(${string} with ${substring}) found in string`
    );
  } else {
    console.log(
      `KMP Sub String Search(${string} with pattern ${substring}) not found!`
    );
  }
};

const subStringMatchTest = () => {
  const string = 'abcxabcdabxabcdabcdabcy';
  const substring = 'abcdabcy';
  const string2 = 'adsgwadsxdsgwadsgz';
  const substring2 = 'dsgwadsgz';
  // Fail:
  const string3 = 'asldfjilajwejflaksjjdlfijalawiejf';
  const substring3 = '23r4k';
  // Pass:
  const string4 = 'aslfjilajwe2laijsljlkfjiqojalvvnxlkj';
  const substring4 = '2laijsl';
  const string5 = 'aaabaabacdedfaabaabaaa';
  const substring5 = 'aabaabaaa';

  quickTest(string, substring);
  quickTest(string2, substring2);
  quickTest(string3, substring3);
  quickTest(string4, substring4);
  quickTest(string5, substring5);
};

module.exports = { KMPSubStringExists, subStringMatchTest };
