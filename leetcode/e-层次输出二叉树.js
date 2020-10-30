var levelOrderBottom = function(root) {
    let arr = [];
    var getArr = (node, index) => {
        if(node) {
            arr[index]?arr[index].push(node.val):arr[index] = [node.val];
            getArr(node.left, index+1);
            getArr(node.right, index+1);
        }
    }
    getArr(root,0);
    return arr.reverse();
};