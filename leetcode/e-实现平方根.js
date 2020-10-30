/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x===0 || x===1) return x;
    let left=1,right=(x>>1)+1,mid=1;
    while(left<=right) {
        mid = (left+right)>>1
        if (mid ** 2 > x) {
            right -= 1;
        } else if(mid ** 2 < x) {
            left += 1;
        } else {
            return mid
        }
    }
    return right;
}





var mySqrt = function(x) {
    /** 
     * 解法一 二分法 满足条件：有序、有界、可索引
     * 核心：x的平方根的取值范围[1, x / 2 + 1]
     * 
     */










    // 边界处理
    if (x === 0 || x === 1) return x

    // 定义变量 （构建二分左右边界）
    let left = 1, right = (x >> 1) + 1, mid = 1

    // 二分遍历
    while (left <= right) {
        mid = (left + right) >> 1

        if (mid ** 2 < x) { // 若小于x ➡️ 则左边界left 右移
            left = mid + 1
        } else if (mid ** 2 > x) { // 若大于x ⬅️ 则右边界 right 左移
            right = mid - 1
        } else { // 若相等则 直接返回mid
            return mid
        }
    }

    // 若没找到则将右边界作为最可能值返回
    return right
};
mySqrt(8)