/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//  

// 示例：

// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出：[1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    var index;

    for (var x=0;x<n-1;x++) {
        for (var i = 0;i<m;i++) {
            if (nums1[i] > nums2[x]) {
                index = i;
                break;
            }
        }
        
        for (var j=nums1.length+1;j>index;j--) {
            nums1[j]=nums1[j-1]
        }
        nums1[index] = nums2[x]
    }
    return nums1;
};

var nums1 = [0,1,2,4,5]
num=3
var index;

for (var x=0;x<nums2.length;x++) {


for (var i = 0;i<nums1.length;i++) {
    if (nums1[i] > nums2[x]) {
        index = i;
        break;
    }
}

    for (var j=nums1.length+1;j>index;j--) {
        nums1[j]=nums1[j-1]
    }
    nums1[index] = nums2[x]
}