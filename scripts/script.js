// Зададим б-дерево из примера на уроке
const numbers_tree = {
  value: 9,
  left: {
    value: 3,
    left: {
      value: 2,
      left: {
        value: 1,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
      },
    },
  },
  right: {
    value: 10,
    right: {
      value: 12,
      left: {
        value: 11,
      },
      right: {
        value: 14,
      },
    },
  },
};

// Функция прямого обхода б-дерева
let result = [];
const preorder_traveral = (node) => {
  if (node) {
    result.push(node.value);
    preorder_traveral(node.left);
    preorder_traveral(node.right);
  }
};

preorder_traveral(numbers_tree);
console.log(result);

// Функция симметричного обхода б-дерева
result = [];
const inorder_traversal = (node) => {
  if (node) {
    inorder_traversal(node.left);
    result.push(node.value);
    inorder_traversal(node.right);
  }
};

inorder_traversal(numbers_tree);
console.log(result);

// Функция обратного обхода б-дерева
result = [];
const postorder_traversal = (node) => {
  if (node) {
    postorder_traversal(node.left);
    postorder_traversal(node.right);
    result.push(node.value);
  }
};
postorder_traversal(numbers_tree);
console.log(result);

// Функция составления вариантов строк из элементов строки
result = [];
const string_permute = (string, current = "", result = []) => {
  if (string) {
    for (var i = 0; i < string.length; i++) {
      string_permute(
        string.slice(0, i) + string.slice(i + 1),
        current + string[i],
        result
      );
    }
  } else if (!result.includes(current)) {
    result.push(current);
  }
  return result;
};
console.log(string_permute("QWR"));
