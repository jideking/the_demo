var rob = function(nums) {

    let h = function(nums, i){
        if (i == 0) {
            return nums[0]
        }
        if (i<0) return 0
       let sum1 = h(nums,i-2)+nums[i]
       let sum2 = h(nums,i-1)
       return Math.max(sum1,sum2)
    }
    return h(nums,nums.length-1)
}
rob([1,2,3,4])

// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    dp = new Array(nums.length+1)
    dp[0]=0;
    dp[1]=nums[1];
    for(var i=2;i<nums.length;i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    }

    return dp[nums.length -1]
}

var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);
    for (let i = 2; i < nums.length; i ++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
};

var isHappy = function(n) {
    while(n != 1) {
        if (n==16) return false
    n+=""
    let sum=0;
    n=n.split("")
   
    for (let i=0;i<n.length;i++) {
        sum+=Math.pow(n[i],2);
        
    }

    n = sum;
    if (n==1) return true;
    }
};

var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i = 0,n = nums.length;i<n;i++){
        if(map.has(nums[i]) && i-map.get(nums[i])<=k){
            return true
        }
        map.set(nums[i],i)
    }
    return false;
};
