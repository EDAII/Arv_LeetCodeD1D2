/*
QUESTÃO: 327. Count of Range Sum
LINK: https://leetcode.com/problems/count-of-range-sum/description/
TIPO DE PROBLEMA: ÁRVORE RED BLACK
DIFICULDADE: DIFÍCIL

Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.

Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j.

Example 1:

Input: nums = [-2,5,-1], lower = -2, upper = 2
Output: 3
Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.

Example 2:

Input: nums = [0], lower = 0, upper = 0
Output: 1

Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    -105 <= lower <= upper <= 105
    The answer is guaranteed to fit in a 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const RED = true;
  const BLACK = false;

  class RBNode {
    constructor(val) {
      this.val = val;
      this.color = RED;
      this.left = null;
      this.right = null;
      this.count = 1;
      this.size = 1;
    }
  }

  // DESENVOLVIMENTO DA ÁRVORE RED-BLACK PARA CONTAR INTERVALOS ---
  class RedBlackTree {
    constructor() {
      this.root = null;
    }

    isRed(node) {
      if (node === null) return false;
      return node.color === RED;
    }

    size(node) {
      if (node === null) return 0;
      return node.size;
    }

    rotateLeft(h) {
      const x = h.right;
      h.right = x.left;
      x.left = h;
      x.color = h.color;
      h.color = RED;
      x.size = h.size;
      h.size = h.count + this.size(h.left) + this.size(h.right);
      return x;
    }

    rotateRight(h) {
      const x = h.left;
      h.left = x.right;
      x.right = h;
      x.color = h.color;
      h.color = RED;
      x.size = h.size;
      h.size = h.count + this.size(h.left) + this.size(h.right);
      return x;
    }

    flipColors(h) {
      h.color = RED;
      h.left.color = BLACK;
      h.right.color = BLACK;
    }

    insert(val) {
      this.root = this._insert(this.root, val);
      this.root.color = BLACK;
    }

    _insert(node, val) {
      if (node === null) return new RBNode(val);

      if (val < node.val) {
        node.left = this._insert(node.left, val);
      } else if (val > node.val) {
        node.right = this._insert(node.right, val);
      } else {
        node.count++;
      }

      if (this.isRed(node.right) && !this.isRed(node.left)) {
        node = this.rotateLeft(node);
      }
      if (this.isRed(node.left) && this.isRed(node.left?.left)) {
        node = this.rotateRight(node);
      }
      if (this.isRed(node.left) && this.isRed(node.right)) {
        this.flipColors(node);
      }

      node.size = node.count + this.size(node.left) + this.size(node.right);
      return node;
    }

    countLessThan(val) {
      return this._countLessThan(this.root, val);
    }

    _countLessThan(node, val) {
      if (node === null) return 0;

      if (val <= node.val) {
        return this._countLessThan(node.left, val);
      } else {
        return (
          this.size(node.left) +
          node.count +
          this._countLessThan(node.right, val)
        );
      }
    }

    countLessOrEqual(val) {
      return this._countLessOrEqual(this.root, val);
    }

    _countLessOrEqual(node, val) {
      if (node === null) return 0;

      if (val < node.val) {
        return this._countLessOrEqual(node.left, val);
      } else {
        return (
          this.size(node.left) +
          node.count +
          this._countLessOrEqual(node.right, val)
        );
      }
    }

    countInRange(low, high) {
      return this.countLessOrEqual(high) - this.countLessThan(low);
    }
  }

  // PARTE PRINCIPAL DA FUNÇÃO ---
  const tree = new RedBlackTree();
  let count = 0;
  let prefixSum = 0;

  tree.insert(0);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    const low = prefixSum - upper;
    const high = prefixSum - lower;

    count += tree.countInRange(low, high);

    tree.insert(prefixSum);
  }

  return count;
};