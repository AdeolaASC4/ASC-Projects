//defining the funtion 
function hello(){ 
    console.log('hello world');
}

hello();//calling the funtion

function add(num1, num2){
    return (num1 + num2);
}
add(5,7)

var wholenumber;
function rand(number){
   wholenumber = Math.floor(Math.random() * number);
   return wholenumber;

}

console.log(rand(2000));