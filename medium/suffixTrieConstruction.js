// 6/30/21
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // Time: O(n^2) | Space: O(n^2)
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; ++i) {
      this.insert(i, string);
    }
  }

  insert(idx, string) {
    let node = this.root;
    for (let i = idx; i < string.length; ++i) {
      if (!(string[i] in node)) {
        node[string[i]] = {};
      }
      node = node[string[i]];
    }
    node[this.endSymbol] = true;
  }

  // Time: O(n) | Space: O(1)
  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; ++i) {
      if (string[i] in node) {
        node = node[string[i]];
        continue;
      } else {
        return false;
      }
    }
    return "*" in node ? true : false;
  }
}

let s = new SuffixTrie("babc");
console.log(s.contains("bc"));
