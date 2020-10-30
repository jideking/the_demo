/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// 解题思路
// 循环32次，r每次左移一位，n每次右移一位，n & 1取得最右位的数，放入r
// 若r已经31位（如1011111111111111111110111111110），继续左移1位，最左侧的1移到符号位，含义变成-
// >>>0，利用>>>无符号右移时，会将符号位重新看作数，不真正位移
// 第32位的1不再代表-，-消失。代表数，多了2的32次方
// >>>0的结果 = 原来负数 + 2的32次方，负数变回无符号整数
// 代码

// var reverseBits = function(n, i = 32, r = 0) {
//     while (i--) r = (r << 1) + (n & 1), n >>= 1
//     return r >>> 0
// };

var reverseBits = function(n, i=32, r=0) {
    while(i--) r=(r<<1) + (n&1), n>>=1
    return r
};

var hammingWeight = function(n) {
    let sum = 0;
    while(n>0) {
        j = n.toString(2)
        console.log(j)
        if ((n&1)==1) sum+=1
        n >>>= 1
       
    }
    return sum;
};

hammingWeight(0111010110011)

    var hammingWeight = function(n) {
        let res = 0
        while(n){   // 每次去掉最低位的1 直到所有的1都去除
        res++ 
        n = n & (n - 1)
        console.log(n.toString(2))
        }
        return res
    };
    hammingWeight(0111010110011)

let h = function(n) {
    console.log(n)
    return parseInt(n.toString(2),2)
}
h(110)

[2,1,1,2]
var rob = function(nums) {
    let sum1=0;
    let sum2=0;
    for (let i=0;i<nums.length;i++) {
       i % 2 == 1 ? sum1+=nums[i]:sum2+=nums[i]
    }
    return Math.max(sum1,sum2)
};
rob([1,2,3,1])




