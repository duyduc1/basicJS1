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





// var myInfor = {
//     name : 'Duc',
//     age : 18,
//     adress : '18 hải châu 1' // lấy một phần tử bên trong
// }

// lấy address 
// var myKey = 'adress' // mykey sẽ tìm tới cái object chứa address 
// myInfor.email = "vuduyduc28042002@gmail.com" chèn thêm 1 trường nữa vào myinfo


// console.log(myInfor[myKey]);

// var emailKey = ' email' 

// var myInfor = {
//     name : " Đức ",
//     age : 18 ,
//     address : " Đống Đa , Hà Nội",
//     [emailKey] : "Vuduyduc28042002@gmail.com",
//     getName :function() { // dùng để trả về tên name trong myinfor
//             return this.name
//     }
// }
// ta có một biét emailkey bằng 'email' khi ta cho biến emailKey vào và truyền cho nó 
// mộ cái object thì nó sẽ so sánh với thằng email đã tạo ở trên => email => vuduyduc28042002@gmail.com
// delete myInfor.name // delete dùng để xoá đi một trường mà ta đã gắn vào myinfor
// console.log(typeof myInfor.getName());

// function User(firstName , middleName , lastName){
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;

//     this.getName = function(){
//         return `${this.firstName}${middleName}`
//     }

// }

// const auth = new User ('Vũ' , 'Duy' , 'Đức')
// const auth2 = new User('Lê' , 'Thanh' , 'Tâm')

// auth.title = 'Học lập trình tài f8'
// auth2.title = 'Học lập trình với Javascript'

// console.log(auth.getName());
// console.log(auth2.getName());

// đặt 3 biến firstName middleName và lastName bằng 3 biến trong const auth Vũ Duy Đức 
// và thêm một title nữa trong auth 




// function User(firstName , middleName , lastName){
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;

//     this.getName = function(){
//         return `${this.firstName}${middleName}`
//     }

// }


// User.prototype.className = 'f8'
// User.prototype.getClassName = function(){
//     return this.className
// }

// const auth = new User ('Vũ' , 'Duy' , 'Đức')
// const auth2 = new User('Lê' , 'Thanh' , 'Tâm')

// auth.title = 'Học lập trình tài f8'
// auth2.title = 'Học lập trình với Javascript'

// console.log(auth.className);
// console.log(auth2.getClassName());


// User.prototype sẽ chèn thêm một cột f8 vào trong object proto 


// var date = new Date();
// var year = date.getFullYear();
// var hours = date.getHours()




// console.log(`${date}/${year}/${hours}` );
// dùng để biết ngày tháng hiện tại
//getFullYear cho biết năm hiện tại là bao nhiêy

// var month = date.getMonth()

// console.log(month);

// var day = date.getDay();

// console.log(day);
// getMonth in ra năm hiện tại cùng với ngày tháng năm hiện tại


// var date = 9 // date bằng mấy thì sẽ log ra thứ đó
//rẻ nhánh if else
// if(date === 2 ) {
//     console.log("Nay là thứ 2 ");
// }else if(date === 3 ) {
//     console.log("Nay là thứ 3 ");
// }else if(date ===4 ) {
//     console.log('Nay là thứ 4');
// }else{
//     console.log('không biết');
// }



// var date = 2

// switch(date){
//     case 2 :
//         console.log('hôm nay là thú 2');
//         // break;
//     case 3 : 
//         console.log("Hôm nay là thứ 3 ");
//         // break;
//     case 4 : 
//         console.log("Hôm nay là thứ 4");
//         // break;
// }

//cấu trúc rẻ nhánh switch case



// toán tử 3 ngôi 

// const course = {
//     name : " Duy Đức ",
//     coins : 250
// }

// if(course.coins > 0 ){  course.coins gọi tới coins trong course và so sánh với điều kiện đã đặt 
//nếu điều kiện lớn hơn số đã cho thì sẽ in ra tiếp số tiền đã quy đinh trong coins
//     console.log(`${course.coins} coins`);
// }else{
//     console.log("không thấy trường hợp còn lại");
// }


// const prince = {
//     name : " Vegetable",
//     coins : 0
// }

// const reslut = prince.coins > 0 ? `${prince.coins} coins` : `Miễn phí`; // cách tương tự như if và else
// console.log(reslut);


// const prince = {
//     name : "Duy Đức",
//     age : 18
// }

// const result = prince.age > 0 ? `${prince.age} tuổi` : `Nhỏ hơn 18 tuổi`
// console.log(result);


// for(var i = 1 ; i <= 1000 ; i++){
//     console.log(i);
// } khởi đầu i sẽ bằng 1 và in ra đủ 1000 lần sẽ dừng lại


// var myArray = [
//     'Javascript',
//     'HTML',
//     'CSS',
//     'TypeScrpit'
// ]

// var arrayLength = myArray.length

// for( var i = 0 ; i <= arrayLength ; i++){
//     console.log(i);
// }

// sẽ tính tất cả các phần tử trong my array bắt đầu tính từ 0 vì i = 0 


// var myInfor = {
//     name : "Duy Đức",
//     age : 18 ,
//     month : 12
// }

// for( var key in myInfor ){
//     console.log(myInfor);
// } nó sẽ lấy những cái key là name age month in ra các key 

// var myInfor = [
//     'Javascript',
//     'PHP',
//     'Typescript',
//     'Golang'
// ]

// for(var key in myInfor) {
//     console.log(myInfor);
// }

// sẽ lấy số thứ tự của từng object

// vòng lặp while

// var myArray = [
//     'javascrpit',
//     'PHP',
//     'THML'
// ]


// var i = 1 

// while ( i <= myArray.length) {
//     console.log(myArray[i]);
//     i++
// }
// tương tự vồng lặp for whilte

// var myInfor = [
//     'javascript',
//     'Python',
//     'Golang'
// ] //// in ra từ object trong my infor

// var myInfor = 'Javascript' // in ra từ chữ trong object đã truyền vào
// for(var value of myInfor){
//     console.log(value);
// } 

// var myInfor = {
//     name : 'Duy ĐỨC',
//     age : 18
// }

// console.log(Object.keys(myInfor));
// in ra dữ liệu của myinfo mà không có key phía sau



// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// for(var i = 0 ; i < myArray.length ; i++){
//     for( var j = 0 ; j < myArray[i].length ; j++)
//     console.log(myArray[i][j]);
// }


// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// for( var i = 0 ; i < myArray.length ; i++){
//     for(var j = 0 ; j < myArray[i].length; j++)
//     console.log(myArray[i][j]);
// }

// for(var i = 100 ; i > 0 ; i++){
//     console.log(i);
// }

// for(var i = 0 ; i < 100 ; i += 5){
//     console.log(i);
// }


// var coures = [
//     {
//         id : 5 ,
//         name : 'javascript',
//         age : 20 
//     },
//     {
//         id : 6 ,
//         name : 'embedded',
//         age : 21
//     },
//     {
//         id : 7,
//         name : 'Golang',
//         age : 21
//     },
//     {
//         id : 8 , 
//         name : 'Java',
//         age : 12
//     }
// ]

// coures.forEach(function(coures , index){
//     console.log(coures , index);
// }) // in ra tung mobject duoc truyen vao (forEach) , idex them so thu tu cho tung object

// var isFree = coures.every(function(coures , index){ bang tat ca cac object (every)
//     return coures.age === 0
// }) //

// console.log(isFree);

var course = [
    {
        id: 3,
        name: ' Java',
        coin: 200,
    },
    {
        id: 4,
        name: 'PHP myadmin',
        coin: 300
    }
]

// course.forEach(function(coure){
//     console.log(coure);
// }) // in ra taast ca cac mang trong coure


// var coures = course.every(function(coure , index){
//     console.log(index);
//     return coure.id === 3 
// })

// console.log(coures); // set tat ca id xem cai nao khong bang 3 tra ve sai

// var coures = course.find(function(coure , index){
//     return coure.id === 3 ;
// })

// console.log(coures); in ra object bang 3 

// var coures = course.filter(function(coure , index){
//     return coure.id === 3 
// })

// console.log(coures); // in ra tat ca phan tu co id bang 3 


// ham map 

// function newHandle(course){
//     return {
//         id : 12 , 
//         name : 'vuduyduc',
//         coin : course.coin,
//         coinText : `Gia : ${course.coin}`
//     }
// }

// var myHandle = course.map(newHandle)
// console.log(myHandle); // return tra ve gi thi se long ra cai do 
// const text = `
// VCB
// Số dư TK VCB 0781000442711 +100,000 VND lúc 02-01-2024 11:10:22. Số dư 200,231 VND. Ref 0200970422010211102120240AW7698775.48790.111022.LE VAN CUONG chuyen khoan

// viettinbank 
// Thời gian: 31/12/2023 01:28|Tài khoản: 108877519311|Giao dịch: +56 VND|Số dư hiện tại: 653,956 VND|Nội dung: Tra lai TK

// BIDV
// 08:20 26/12/2023 Tài khoản thanh toán 5011066705. Số tiền: -6,000,000VND. Số dư cuối: 58,018VND Nội dung giao dịch: MB-TKThe :3800100123458686, tai CoopBank. ND DANG THI THUY LINH Chuyen tien-CTLNHIDO000006808024685-1/1-PMT-002

// MBbank
// TK 88xxx994|GD: +20,000VND 16/11/23 14:47 |SD:20,297VND|
// ND: DANG THI THUY LINH chuyen tien- Ma GD ACSP Ii528240

// VIB
// "Tài khoản ....7213, phát sinh  -30,000,000 đ vào lúc 11:50 02/01/2024. Số dư: 10,000,000đ"

// Le Thanh Tam
// TK 03xxx136|GD: -142,000VND 01/01/24 01:33|SD:4,660,921VND|ND: AP-CASHIN-0356883136-O4CIfa1mmu9h-b ank2wallet
// `;

// const regex = /(?:Số\sdu|Số\stiền|GD:)\s*([-+]?\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/g;
// let match;
// while ((match = regex.exec(text)) !== null) {
//   console.log("Số tiền giao dịch:", match[1]);
// }

// window.alert(5+6) //thông báo kết quả 
// alert(5+6)

// function myFunction() {
//     document.getElementById("demo").innerHTML = Date()
// }

// const car = ["BMW" , "Volvo" , "Merserdess"]

// car[0] = "Civic"

// car.push("Ford")

// document.getElementById("demo").innerHTML = car[0]

// Create an object:

// const car = {type : "Fiat" , model: "300" , color : "Red"}

// car.color = "white" // thay thế biến color red bằng white

// car.owner = "Duy Đức"

// document.getElementById("demo").innerHTML = "Car is your" + " " + car.owner


// try{
//     const car = {type : "String" , number : "500" , color : "Blue"}
//     car = {type : "String" , number : "500" , color : "Blue"}
// }catch(err){
//     document.getElementById("demo").innerHTML = err // in ra lỗi
// }

// let text1 = "Duc"
// let text2 = "A"
// let result = text1 < text2
// document.getElementById("demo").innerHTML = result

// let tex1 = "Duy Duc"
// tex1 += "Vũ" toán tử gán
// document.getElementById("demo").innerHTML = tex1

// let x = 5 + 5 
// let y = 5 + '5'
// let z = "hello" + 5 

// document.getElementById("demo").innerHTML = x + "<br>" + y + "<br>" + z  

// let x = 5 
// document.getElementById("demo").innerHTML = Math.pow(x,2) // lện bình phương

// let x = 5 
// let y = 5
// let z = 7

// document.getElementById("demo").innerHTML = (x==y) + "<br>" + (y==z)

// function myFunction(p1 , p2){
//     return p1 / p2
// }

// let result = myFunction(4 , 2)
// document.getElementById("demo").innerHTML = result

// function myObject(fahasa){
//     return(5*2) / (fahasa - 20)
// }

// let ouput = myObject(78)
// document.getElementById("demo").innerHTML = ouput

// let text = "Ket qua" + " " + myOpject(55)
// document.getElementById("demo").innerHTML = text

// function myOpject(fahasa){
//     return(4*5) + fahasa
// }

// const person = {
//     fisrName : "Duy",
//     lastName : "Duc",
//     fullName : function(){
//         return this.fisrName + " " + this.lastName
//     }
// }

// console.log(person.fullName());

// var text = "HELLO WORLD"
// document.getElementById("demo").innerHTML = text.charAt(0)

// let name = "Helloworld"
// let text = name.at(2)

// document.getElementById("demo").innerHTML = text

// let text = "Apple , Banana , Kiwi"
// let part = text.slice(7,14)
// document.getElementById("demo").innerHTML = part

// let text = "Hello word"
// let reslut = text.repeat(3) // in ra nhieu lan tuy theo so luong repeat
// document.getElementById("demo").innerHTML = reslut

// let text = "Hello"
// const myArray = text.split("")
// text = "";
// for(var i = 0 ; i < myArray.length ; i++){
//     text += myArray[i] + "<br>"
//     document.getElementById("demo").innerHTML = text
// }

// let text1 = "Truyen vao mot 'mang' xem do la gi "
// let type = text1.indexOf("mang") // xem vị trí của mãng
// document.getElementById("demo").innerHTML = type

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const Arr = text.matchAll(/Cats/gi)

// document.getElementById("demo").innerHTML = Array.from(Arr)

// let text = `He's often called "Johnny"`;
// const text1 = text.matchAll(/often/gi)
// document.getElementById("demo").innerHTML = Array.from(text1)
// let text = `He's often called "Johnny"`;
// const text1 = text.matchAll(/He/gi)
// document.getElementById("demo").innerHTML = Array.from(text1)
// function myFunction() {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits

//     fruits.sort()
//     document.getElementById("demo2").innerHTML = fruits
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0]
// document.getElementById("demo").innerHTML = fruits

// fruits.reverse()
// document.getElementById("demo2").innerHTML = fruits // đảo ngược vị trí của object

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits

// fruits.sort() // xếp thứ tự lại mãng từ A -> z
// fruits.reverse() // Đảo ngược lại mãng
// document.getElementById("demo2").innerHTML = fruits

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points

// points.sort(function(a,b){return a - b })
// document.getElementById("demo2").innerHTML = points xếp thứ tự từ bé đến lớn

// function myFunction(a,b){
//     return a - b 
// }
// points.sort(myFunction)
// document.getElementById("demo2").innerHTML = points hàm xếp thứu tự từ bé đến lớn


// const points = [40,100,200,1,5,3]
// points[0]
// document.getElementById("demo").innerHTML = points

// points.sort(function(a,b){return b - a })
// document.getElementById("demo2").innerHTML = points // xếp thứu tự từ bé đến lớn

// function myFunction(a,b){
//     return b - a 
// }
// points.sort(myFunction)
// document.getElementById("demo2").innerHTML = points

// const points = [40,100,200,1,5,3]
// document.getElementById("demo").innerHTML = points

// function myFunction(){
//     points.sort(function(a,b){return a - b})
//     document.getElementById("demo").innerHTML = points // dùng để xem thứ tự từ bé đến lớn
// }

// function myFunction2(){
//     points.sort(function(a,b){return b - a})
//     document.getElementById("demo").innerHTML = points // xem thứ tự từ lớn đến bé
// }

// const points = [40,100,200,1,5,3]
// document.getElementById("demo").innerHTML = points

// function myFunction(){
//     points.sort(function(a,b){return 0.5 - Math.random()}) // hàm ramdon số ngẫu nhiên
//     document.getElementById("demo").innerHTML = points
// }