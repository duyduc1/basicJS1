// var name = 'Vũ Duy Đức'

// console.log(name); //in ra tên
// alert(name) in ra thông báo là mãng đã truyền vào

// confirm('Đây là thông báo')

// prompt("Đây là thô?ng báo")// cho phép nhập thông báo
// setTimeout(function(){
//     console.log(name);
// },1000)

// setInterval(function(){
//     console.log("Đây là thông báo" + Math.random());
// },2000) in ra thông báo nhiều lần


// vid 2 
// var name = 'Vũ'
// var lastName = "Duy"
// var firstName = "Đức"

// var fullName = name + " " + lastName + " " + firstName;

// console.log(fullName);


// const a = 2 ; 
// const b = 3 ;

// if(a > 0 && b > 0 ){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// }


// vid 3 : toán tử học 

// var a = 8 ;
// a--;
// a--;


// console.log(a);


//vid 5 
// var a = 7 

// a += 2
// a -= 2
// a *= 2
// a /= 2
// console.log(a);



//vid 6 

// var FistName = 'Đức'
// var midName = 'Duy'
// var lastName = 'Vũ'

// console.log(FistName + " " + midName + " " + lastName);

// FistName += 'Duy'
// console.log(FistName);


// var a = 1 
// var b = 2 

// if(a > b ){
//             console.log("Điều kiện đúng");
// }else{
//             console.log("Điều kiện sai");
// } có thể so sánh tên nếu như cả hai biến tên trùng nhau

//vid 7 dữ liệu boolean (đúng hoặc sai)

// var a = 1 
// var b = 2

// var isSuccess = a > b 
// console.log(isSuccess);

// var isSuccess = 1 < 2 ;

// if(isSuccess){
//         console.log("Điều kiện đúng");
// }else{
//         console.log("Điều kiên sai");
// }


// toán tử logical

// var a = 1 
// var b = 2 
// var c = 3 

// if(a > 0 && b > 0  && c > 0){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// }

// if(a < 0 || b > 0  || c < 0){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// } // trường hợp này điều kiện vẫn đúng vì có || vẫn so sáng được b > 0 

// if(!(a<0)){
//     console.log("Điều kiện vẫn đúng");
// } Điều kiện vẫn đúng vì phủ định của a < 0 



//vid 9 
// các kiểu dữ liệu trong js Số : int , String : Mãng , Boolean : Đúng sai , Null : không có gì , Undifined : không tìm thấy , 



//vid10
// var a = 1 
// var b = "1"

// console.log(a  === b );



// var a = 1 
// var b = 2 

// var result = a < b && a < 0;
// console.log('reslut' , result);

// if(result){
//     console.log(' A < B ');
// }else{
//     console.log(' A > B');
// }



// var fullName = 'Duy Đức'

// console.log(fullName.length); đếm số kí tự của mãng

// var myString = 'Hoc JS voi f8 web'

// console.log(myString.indexOf('JS')); xem vị trí của mãng nằm ở số bao nhiêu 



// vide 15
// var age = 18;
// var pi = 3.14;

// var otherNumber = new Number(9)

// console.log(typeof otherNumber);

// var result = 20 ; 
// console.log( isNaN (result)); //isNan không hợp lệ

// console.log(typeof result.toString()); //resulut đang ở dạng string  typeoff kiểm tra result đang ở kiểu string vì đã gáng cho result thành kiểu string

// var PI = 3.14;

// console.log(PI.toFixed()); làm chẵn số  

// var languages = [
//     'Javascrift',
//     'PHP',
//     'Nextjs'
// ]


// console.log(languages); in ra mot mang 


// var languages = [
//     'javascript',
//     'php',
//     'java',
//     'C++'
// ]

// var languages2 = [
//     'index',
//     'css'
// ]

// console.log(languages.pop()); // trả về phần phử đã xoá ở cuối mãng


// console.log(languages.push('dark')); // chèn thêm một phần tử ở cuối mãng
// console.log(languages.shift()); làm mất đi phần tử đầu của mãng
// console.log(languages); 

// console.log(languages.unshift('Dart')) Cho phép chèn thêm một phần tử ở đầu 
// languages.splice('1') dùng để select tới vị trí của mãng
// console.log(languages.concat(languages2));// cộng hai mãng lại với nhau 
// console.log(languages);


// function showDialog() {
//     alert('Hello word')
// }

// showDialog()


// function write(message,message_2) {
//     console.log( message);
//     console.log( message_2);
// }

// write("Duc",'Test_2')


// function writeLog() {
//     var myString = ''
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writeLog('Log_1','Log_2','log_3') ta có param bằng log 1 log 2 log 3 biến mystring bằng cách khi mystring + param thì sẽ có kết quả 
// log1 - log2 - log3


// var isConfirm = confirm('Hello')

// console.log(isConfirm);


// function cong(a,b){
//     return a + b 
// }

// var result = cong(2,8)

// console.log(result); kết quả = 10 là vì ta có function cộng a và b a bằng 2 b = 8 thế nên lúc return a + b thì kết quả bằng 10


// function cong(a,b) {
//     return a + b 
// }

// const result = cong(4,2)
// console.log(result);