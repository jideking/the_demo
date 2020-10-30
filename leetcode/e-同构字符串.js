var isIsomorphic = function(s, t) {
   
   
    
    let ll = (s) => {
        let b =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let a = [];
        let c = [];
        let j = '';
        for (var i =0;i<s.length;i++) {
        
            if(c.indexOf(s[i]) == -1) {
                c.push(s[i])
                let k = b.shift()
                j+=k
                a.push(k)
                // a = [a,b]
            } else {
                 j += a[c.indexOf(s[i])]
            }
    
        }
        return j;
    }
    let ss = ll(s);
    let tt = ll(t);
    console.log(ss,tt)
    return ss == tt
    
};


let ll = (s) => {
    let b =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let a = [];
    let c = [];
    let j = '';
    for (var i =0;i<s.length;i++) {
    
        if(c.indexOf(s[i]) == -1) {
            c.push(s[i])
            let k = b.shift()
            j+=k
            a.push(k)
            // a = [a,b]
        } else {
             j += a[c.indexOf(s[i])]
        }

    }
    return j;
}

ll('egg')