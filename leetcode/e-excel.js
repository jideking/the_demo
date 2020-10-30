
//  1 -> A
//  2 -> B
//  3 -> C
//  ...
//  26 -> Z
//  27 -> AA
//  28 -> AB 
// 701/26  =26..25
// 1379/26 =26*2+1..1
// 26,26,1,1
52 AZ
1379 BA    A

1379 % 26 =1
1379/26 = 53
53%26 = 1
53/26 = 2

arr.push(n%26)
while(n<=26) {
    arr.push(n%26);
    n = n/26
}
var convertToTitle = function(n) {
    let arr = [];
    let j = n;
    while(n>26) {
        if (n%26!=0)
        arr.push(n%26);
        n = Math.floor(n/26)
        // 53
    }
    arr.unshift(n)
    console.log(arr)
    return arr.map(function(cur,index) {
        return String.fromCharCode(+cur+97-1)
    }).join('').toUpperCase()
};

var convertToTitle = function(n) {
    let res="";
    while(n>0){
        let temp = n%26;
        n = Math.floor(n/26);
        if(temp==0){
            temp=26;
            n--;
        }
        res = String.fromCharCode(temp+64)+res;
    }
    return  res; 
};
