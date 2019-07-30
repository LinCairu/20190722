// function creatAns(){
//     let num = Math.random().toString().slice(3);
//     console.log(num);
// }

//如果內容改變，修改得程式幅度不要太大，會比較好!

//參數與變數宣告的變數不同
// let n = 3;     好像等於
function creatAns(n=3) {
    let poker = [];
    for (let i = 0; i < 10; i++) poker[i] = i;
    for (let i = poker.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (i + 1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }
    let ret = "";
    for (let i = 0; i < n; i++) {
        ret += poker[i]
    }
    return ret;
}



//隔開寫可以專注於撰寫功能程式，減少干擾!
//寫扣要仔細，要多考慮多方的條件
//寫function就是要應用，

function checkAB(ans,gus){

    let a = 0, b = 0;
    for (let i=0; i<gus.length; i++){
        if(gus.charAt(i) == ans.charAt(i)){   //gus中的第i碼 == ans中的第i碼
            //a
            a++;
        }else if(ans.indexOf(gus.charAt(i)) >= 0){     //gus中的第i碼是否存在於a中
            //b
            b++;
        }
    }
    return `${a}A${b}B`

}