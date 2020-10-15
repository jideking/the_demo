/**
 * @param {number[]} nums
 * @return {number}
 */

// 输入: [1,-2,-3,4,-1,2,1,-5,4]   [-2,-1]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:



var maxSubArray = function(nums) {
    let max=-999;
    let tmp = nums[0];
    for (let i=1;i<nums.length;i++) {
        if (tmp+nums[i] > tmp ) {
            tmp = tmp+nums[i];
        } else {
            tmp=nums[i];
        }
        if (tmp>max) {
            max = tmp;
        }
    }
    return max;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

var maxSubArray = function(nums) {
    let tmp = nums[0];
    let sum = 0;
    for (let i=0;i<nums.length;i++) {
        if(sum>0){
            sum+=nums[i]
        } else {
            sum = nums[i]
        }
        tmp = Math.max(sum,tmp)
    }
    return tmp;
};