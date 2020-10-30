var twoSum = function(numbers, target) {
    var l = 0 , r = numbers.length - 1;
    while(l < r) {
        if (numbers[l] + numbers[r] === target) {
            return [++l, ++r]
        } else {
            numbers[l] + numbers[r] > target && r-- || l++
        }
    }
};

twoSum([2,5,13,25,40,50],30)