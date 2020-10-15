// var isPalindrome = function(x) {
//     let y= x+"";
//     x=(x+"").split("");
//     let a = x.reverse();
//     for (let i=0;i<x.length;i++) {
//         if (y[i]!=a[i]) return false
//     }
//     return true
// };
// isPalindrome(121)


function isPalindrome(x) {
    let left = 0;
    let right = 1;
    let sum=x;
    while(sum>=1) {
        sum/=10;
        left++;
    }
    let getNum = (_x, n) =>{
        return Math.floor(_x%Math.pow(10,n)/Math.pow(10,n-1));
    }
    while(left>right) {
        if (getNum(x,left) != getNum(x,right)) {
            return false
        }
        left--;
        right++;
    }
    return true
}
isPalindrome(-121)
7654321
6543210

