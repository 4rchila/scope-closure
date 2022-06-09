const buildcount = (i) =>{
    let count = i;
    const displaycount = () =>{
        console.log(count++)
    }
    return displaycount
}
//utilizando cadenas del alcanze de donde se encuentra asignado

const mycount = buildcount(1)
mycount()
mycount()
mycount()

const myothercount = buildcount(10)
myothercount()
myothercount()
myothercount()

