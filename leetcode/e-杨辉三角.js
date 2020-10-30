/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    // let arr2 = []
    for (var i=0;i<numRows;i++) {
        arr[i] = [];
        for (var j=0;j<=i;j++) {
            // [i][j]
            if (j == 0 || j == i) {
                arr[i][j] = 1;
            } else {
                arr[i].push(arr[i-1][j-1]+arr[i-1][j])
            }
        }
    }
    return arr[numRows];
};

generate(1)


var generate = function(numRows) {
    return new Array(Math.max(2, numRows) - 2).fill(0)
    .reduce(dp => dp.concat(
        
        [
            [1, 
        ...dp[dp.length - 1].reduce(   
            
            (p, v, i, ar)    =>  (i < ar.length - 1 && p.push(v + ar[i + 1]), p)
        
        , []) 
        ,1]
    ]
        
        
        ), [[1], [1,1]])
    .slice(0, numRows)
};

function (prev, curr, index, arr) {

}

[
    1[1]
    2[1,1]
    3[]
    4[]

]

          1               
        1   1
    1    2      1
1      3     3      1


             (0,0)
          (1,0)   (1,1)
        (2,0) (2,1) (2,2)
    (3,0) (3,1) (3,2) (3,3)
    0     1     2     3     4
    