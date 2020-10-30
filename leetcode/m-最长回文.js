    var longestPalindrome = function(s) {
        let pre = 0,last = s.length-1;
        let z = {}
        let max = 0;
        for (let i=0;i<s.length;i++) {
            let last = s.length-1;
            pre = i;
            let count = 0;
            let pp = 0;
        
            for (let j=i; j<s.length;j++) {
                
                if (s[pre] == s[last]) {
                    pre += 1;
                    last -= 1;
                    count ++;
                    pp=1;
                    if (last <= pre) continue;
                    count++
                } else {
                    if(pp==0) {
                        last -= 1;
                    }
                    pre = i;
                    count = 0;
                    pp=0;
                }
                if (last < pre) continue;
            }
            if (max <count) {
                max = count;
                flag = i;
            }
        }
        console.log(z)
        let g = ''
        for (let k = flag;k<max+flag;k++){
            g+=s[k]
        }
        return g;
    };
    longestPalindrome('bacabb')