# Projeto: Arvores Balanceadas - LeetCode

## Alunos  

| Matrícula  | Nome                      |
| ---------- | ------------------------- |
| 21/1061583 | Daniel Rodrigues da Rocha |
| 21/1061618 | Davi Rodrigues da Rocha   |

## Descrição do Projeto

Este projeto foi desenvolvido como parte da disciplina de **Estruturas de Dados e Algoritmos II (EDA2)**, com foco no estudo e implementação de diferentes algoritmos de Ordenação. O objetivo é demonstrar o domínio de técnicas fundamentais de ordenação através da resolução de problemas práticos da plataforma.

### Sobre o LeetCode

O [LeetCode](https://leetcode.com/) é uma plataforma online amplamente utilizada por programadores e estudantes de ciência da computação para praticar algoritmos e estruturas de dados. A plataforma oferece mais de 2.000 problemas categorizados por dificuldade (Fácil, Médio, Difícil) e por tópicos específicos como arrays, árvores, grafos, programação dinâmica, entre outros.

### Exercícios Selecionados

Para este projeto, foram selecionados **4 exercícios** que representam diferentes abordagens de árvore balanceada, sendo 2 categorizados como **Médio** e 2 como **Difícil**.

| Exercício                                                                                                     | Dificuldade | Método de Busca |
| ------------------------------------------------------------------------------------------------------------- | ----------- | --------------- |
| [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/description/) | Médio       | Árvore AVL      |
| [327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/description/) | Difícil | Árvore Red Black |

## Exercícios Desenvolvidos

### 1382. Balance a Binary Search Tree

**Conceito**:

O problema consiste em receber uma árvore binária de busca (BST) desbalanceada e transformá-la em uma árvore balanceada mantendo os mesmos valores. Uma árvore é considerada balanceada quando a diferença de altura entre as subárvores esquerda e direita de qualquer nó nunca é maior que 1.

**Ideia da Solução com Árvore AVL**:

A abordagem utilizada segue dois passos principais:
1. **Percurso In-Order**: Realiza um percurso in-order na árvore original para extrair todos os valores em ordem crescente (propriedade de uma BST).
2. **Construção Balanceada**: Utiliza o array ordenado para construir recursivamente uma nova árvore, sempre escolhendo o elemento do meio como raiz, garantindo que as subárvores esquerda e direita tenham tamanhos aproximadamente iguais.

Esta técnica garante que a árvore resultante seja completamente balanceada, seguindo os princípios de uma Árvore AVL, onde a diferença de altura entre subárvores nunca excede 1.

![Resultados do Exercicio 1382](./Assets/1382_BalanceABinarySearchTree.png)

### 327. Count of Range Sum

**Conceito**:

O problema solicita contar quantos intervalos contíguos de um array possuem soma dentro de um intervalo específico `[lower, upper]`. Para cada par de índices `i` e `j` (onde `i ≤ j`), precisamos verificar se a soma dos elementos entre `i` e `j` está dentro do intervalo permitido.

**Ideia da Solução com Árvore Red-Black**:

A solução utiliza o conceito de **somas de prefixo** combinado com uma **Árvore Red-Black** para otimizar as consultas:

1. **Somas de Prefixo**: Calculamos a soma acumulada até cada posição. A soma de um intervalo `[i, j]` pode ser obtida por `prefixSum[j] - prefixSum[i-1]`.

2. **Árvore Red-Black**: Mantém as somas de prefixo anteriores em uma estrutura balanceada que permite:
   - Inserções em O(log n)
   - Consultas de intervalo em O(log n)
   - Contagem de quantas somas anteriores satisfazem a condição `prefixSum[atual] - upper ≤ prefixSum[anterior] ≤ prefixSum[atual] - lower`

3. **Balanceamento Automático**: A Árvore Red-Black utiliza rotações e mudanças de cores para manter o balanceamento, garantindo que todas as operações sejam eficientes mesmo com inserções sequenciais.

A implementação inclui uma árvore Red-Black completa com todas as propriedades necessárias: nós coloridos (vermelho/preto), rotações (esquerda e direita), flip de cores, e contagem eficiente de elementos em intervalos.

**Desempenho**: A solução obteve **183ms** de tempo de execução, apresentando uma queda considerável em relação à média ideal de **163ms-166ms**. O intuito do exercício era demonstrar o uso de árvores balanceadas (Red-Black) para resolver problemas de contagem de intervalos, embora existam algoritmos mais otimizados como Merge Sort com contagem ou Árvores de Segmento que podem oferecer melhor desempenho na prática.

![Resultados do Exercicio 327](./Assets/327_CountOfRangeSum.png)

## Como Validar os Exercícios

Para verificar a corretude das implementações, siga estes passos:

### Passo 1: Acessar o LeetCode

1. Acesse [https://leetcode.com/](https://leetcode.com/)
2. Crie uma conta gratuita ou faça login

### Passo 2: Navegar para o Exercício

1. Digite o número do exercício na barra de busca (ex: "1382")
2. Ou acesse diretamente pelos links fornecidos na tabela acima
3. Clique no exercício desejado

### Passo 3: Submeter o Código

1. Selecione **JavaScript** como linguagem no dropdown
2. Copie o código da função correspondente do arquivo `.js` do projeto
3. Cole o código no editor do LeetCode
4. Clique em **"Run"** para testar com os exemplos fornecidos
5. Clique em **"Submit"** para validação completa contra todos os casos de teste

## Referências

1. **LeetCode Platform** - [https://leetcode.com/](https://leetcode.com/)
   - Plataforma principal utilizada para obtenção dos exercícios e validação das soluções
   - Fonte dos enunciados, que se encontram comantados nos arquivos de código.