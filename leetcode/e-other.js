var trailingZeroes = function(n) {
    let g = (n)=>{
        if (n==1) return 1;
        return g(n-1) * n;
    }
    let y = g(n)
    console.log(y)
    for(let i=10;;i=i*10) {
        if (y % i != 0) 
        return Math.log10(i)-1
    }
};
trailingZeroes(5)