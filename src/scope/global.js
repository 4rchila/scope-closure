var hello ="hello";
var hello = 'hello +'
let world = 'world'
const helloworld0 = 'Hello world'
//no dentro de ningun bloque


//scope alcanze de las variables

const anotherfuction = () =>{
    console.log(hello)
    console.log(world)
    console.log(helloworld)
}

anotherfuction()

//let y const son valores unicos no pueden ser reasignados

const helloworld = () =>{
    globalvar = 'im global'
}

helloworld()
console.log(globalvar)
//mala practica

const anotherfuction1 = () =>{
    var localvar = globalvar = 'im global'
}

anotherfuction1()
console.log(locationbar)