//在表單還沒有送到後端交換資料前，先驗證資料格式對不對
//總長度10,第一個英文字,第二個不是1就是2,除了英文後面都是數字,最後一碼有檢查碼
//進階:大陸身分證



//相依性要低 id在裡面做什麼事情，不管外面
//return  

// function checkTWID(id) {         //這個方法要判斷很多效率很慢
//     let ret = false;
//     let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (id.length == 10) {
//         let c1 = id.charAt(0);  //取出身分證第一個字
//         if(letters.indexOf(c1)>=0){   //如果-1就是沒有英文
//         }
//     }
//     return ret;
// }


//正規表示法
function checkTWID(id) {
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;
    let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";  //重新依照編號整理順序
    // let regex = /^09[0-9]{2}-[0-9]{6}$/;   //電話號碼
    //開頭為a-zA-Z    第二個12  第三個之後 12  出現八次 $結尾符號，不能再多了
    if (id.match(regex) != null) {   //match會回傳陣列 or null

        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        //document.write(n12);
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;     ///10就可以得到商跟餘數可以把兩個數字分開
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));   //取出每一個值
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;   // sum % 10 == 0  有沒有等於0，傳回true和false給ret

    }
    return ret;  //傳回呼叫的地方
}


function aaa(x,y){
    return x+2*y;
}

// //作法(步驟)
// function creatTWID() {
//     //自動產生合理的身分證，隨機
// }
// function creatTWIDByArea(area) {
//     //會指定地區
// }
// function creatTWIDByGender(gender) {
//     //會指定性別
// }
// function creatTWIDByAll(area, gender) {
//     //會指定全部
//     //先寫這個，其他用呼叫的...
// }