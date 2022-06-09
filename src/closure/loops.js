
//teniamos el ultimo valor asignada a esta variable

const anotherfuction = () =>{
    for (let i = 0;i < 10; i++){
        setTimeout(() =>{
         console.log(i)
        },1000)
    }
}
anotherfuction();

//al utilizr let nos permitimos manejar un scope de tipo bloque dentro de esta iteracion y de esta forma tener solo el alcanze que va a recordar 

