    var removeDuplicates = function(nums) {
        for (var i=0; i<nums.length;i++) {
            for (var j=i+1; j<nums.length;j++) {
                if (nums[i] == nums[j]) {
                    nums.splice(i+1,1);
                    i-=1;
                    j-=1;
                }
            }
        }
        return nums;
    };
    removeDuplicates([0,0,1,1,1,2,2,3,3,4])

    var removeElement = function(nums, val) {
        for (var i=0;i<nums.length;i++) {
            if (nums[i] == val) {
                nums.splice(i,1);
                i-=1;
            }
        }
        return nums.length
    };
    removeElement([2,2,3,3,2],3)