//dentro de la funcion un bloque de codigo

const fruits = () =>{
    if(true){
        var  fruits1 = "apple";
        let fruits2 = 'banana';
        const fruits3 = 'sandia';
        console.log(fruits2);
    console.log(fruits3);
    }
    console.log(fruits1);
    
}
fruits();

//no pueden ser accedidos porque no estan dentro de bloq
//var ambito de funcion
//let y const ambito  de bloque

var x = 1
{
    var  x = 2
    console.log(x)
}
console.log(x)

//prioriza los bloques
//con var se trasmiten a variable local

const anotherfuction = () =>{
    for (let i = 0;i < 10; i++){
        setTimeout(() =>{
         console.log(i)
        },1000)
    }
}
anotherfuction();

//accede al ultimo valor valor 10



