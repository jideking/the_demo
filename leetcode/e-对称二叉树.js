var isSymmetric = function(root, c) {
    return c = (l, r) => l === null && r === null || l && r && l.val === r.val && c(l.left, r.right) && c(r.left, l.right), !!c(root, root)
}

var isSymmetric = function(root) {
    let fun = (r1, r2) => {
        if(r1 === r2) return true;
        if(r1 && r2 && r1.val === r2.val) {
            return fun(r1.left, r2.right) && fun(r1.right, r2.left);
        }
        return false;
    }
    return root ? fun(root.left, root.right) : true;
};

// 迭代

var isSymmetric = function(root) {
    if (!root) return true;
    let stack = [root.left, root.right];
    while (stack.length) {
        let r1 = stack.pop();
        let r2  = stack.pop();
        if (r1 === r2) continue;
        if (r1 && r2 && r1.val === r2.val) {
            stack.push(r1.left, r2.right, r1.right, r2.left);
        } else {
            return false;
        }
    }
    return true;
};

var isSymmetric = function() {
    if (!root) {
        return true;
    }
    let stack = [];
    while(stack.length) {
        let r1 = stack.pop();
        let r2 = stack.pop();
        if (r1 ===r2) continue;
        if (r1 && r2 && r1.val === r2.val) {
            stack.push(r1.left,r2.right,r1.right,r2.left)
        } else {
            return false;
        }
    }
}

