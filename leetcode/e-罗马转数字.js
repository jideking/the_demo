// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 输入: "III"
// 输出: 3

var romanToInt = function(s) {
    let sum=0;
    for (let i =0;i<s.length;i++) {
        switch(s[i]) {
            case 'I': {
                
                if (s[i+1] && s[i+1] == "V") {
                    sum+=4;
                    i+=1;
                } else if(s[i+1] && s[i+1] == "X") {
                    sum+=9;
                    i+=1;
                }
                else {
                    sum+=1; 
                }
                break;}
            case 'V': {sum+=5; break;}
            case 'X':   {
                
                if (s[i+1] && s[i+1] == "L") {
                    sum+=40;
                    i+=1;
                } else if(s[i+1] && s[i+1] == "C") {
                    sum+=90;
                    i+=1;
                }
                else {
                    sum+=10; 
                }
                break;}
            case 'L':  {sum+=50; break;}
            case 'C':   {
                
                if (s[i+1] && s[i+1] == "D") {
                    sum+=400;
                    i+=1;
                } else if(s[i+1] && s[i+1] == "M") {
                    sum+=900;
                    i+=1;
                }
                else {
                    sum+=100; 
                }
                break;}
            case 'D':  {sum+=500; break;}
            case 'M':  {sum+=1000; break;}
        }
    }
    return sum;
};
romanToInt('III')