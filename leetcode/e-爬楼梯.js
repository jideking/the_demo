// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n==1) {
        return 1;
    }
    if (n==2) {
        return 2;
    }
    
    var arr = new Array(n+1);
    arr[0]=0;
    arr[1]=1;
    arr[2]=2;
    for(var i=3;i<=n;i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n]
};

climbStairs(3)

var deleteDuplicates = function(head) {
    var gg = head;
    var val = []
    while(head && head.next) {
        if (head.val == head.next.val) {
            head.next = head.next.next;
        } 
        head = head.next;
    }
    return gg
}

deleteDuplicates(head)

var deleteDuplicates = function(head) {
    if(head === null) return head;
    if(head.next === null) return head;
    let res = head;
    let pre = head;
    let cur = head.next;
    while(cur){
        if(pre.val === cur.val){
            pre.next = cur.next;
        }else{
            pre = cur;
        }
        cur = cur.next;
    }
    return res;
};