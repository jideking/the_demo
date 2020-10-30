var hasPathSum = function(root, sum) {
    if (root) return false
    let g = (node,sum2) => {
        if (!node) {
            return 0;
        }
        g(node.left,sum2+node.val)
        g(node.right,sum2+node.val)
        return sum2+node.val
    }
    return (g(root,0) == sum)
};

const pathSum = (root, sum) => {
    let arr = [];
    if (root == null) return false;               
    if (root.left == null && root.right == null) { 
      return sum - root.val == 0;          
    }
    // return hasPathSum(root.left, sum - root.val) ||
    //   hasPathSum(root.right, sum - root.val);      
        let gg = []
        gg.push(root.val)
        if (pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val))   
            arr.push(gg)
        
        return  arr;
        
    
}