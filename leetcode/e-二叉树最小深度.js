var minDepth = function(root) {
    if(!root) return 0; //空节点直接返回0
        let g = (node) => {
            if(!node) return Number.MAX_VALUE; 
            if(!node.left && !node.right) {
                return 1;
            }
            let left = g(node.left) 
            let right = g(node.right) 
            return Math.min(left,right) + 1
        }
      return g(root)
};




var minDepth = function(root) {
    if(!root) return 0; //空节点直接返回0
    let getMinHeight = r =>{
        if(!r) return Number.MAX_VALUE; 
        if(!r.left&&!r.right) return 1
        let left = getMinHeight(r.left); 
        let right = getMinHeight(r.right); 
        return Math.min(left,right) + 1; 
    }
    return getMinHeight(root);
};



node[index]?node[index].push(node.val):node[index]=node.val

let g = (node,index) => {
    node[index]?node[index] = 0:node[index]+=1;
    minDepth(node.left,index+1);
    minD
}
