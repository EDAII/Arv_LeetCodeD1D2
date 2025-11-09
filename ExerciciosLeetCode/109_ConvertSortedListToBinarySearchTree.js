/*
QUESTÃO: 109. Convert Sorted List to Binary Search Tree
LINK: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
TIPO DE PROBLEMA: ÁRVORE AVL
DIFICULDADE: MÉDIO

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a binary search tree.

Example 1:

Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:

Input: head = []
Output: []

Constraints:
    The number of nodes in head is in the range [0, 2 * 104].
    -105 <= Node.val <= 105
    
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
    const valores = [];
    let noAtualDaLista = head;
    while (noAtualDaLista) {
        valores.push(noAtualDaLista.val);
        noAtualDaLista = noAtualDaLista.next;
    }

    if (valores.length === 0) {
        return null;
    }

    /**
     * @param {number} inicio
     * @param {number} fim
     * @return {TreeNode}
     */
    function construirArvoreDoArray(inicio, fim) {
        
        if (inicio > fim) {
            return null;
        }
        
        let indiceDoMeio = Math.floor((inicio + fim) / 2);

        let raiz = new TreeNode(valores[indiceDoMeio]);

        raiz.left = construirArvoreDoArray(inicio, indiceDoMeio - 1);

        raiz.right = construirArvoreDoArray(indiceDoMeio + 1, fim);

        return raiz;
    }

    return construirArvoreDoArray(0, valores.length - 1);
};