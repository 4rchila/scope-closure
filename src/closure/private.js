const person =() =>{
    var savename = "name";
    return {
        getname: () => {
            return savename;
        },
        setName: (name) =>{
            savename = name;
        },
    };
};

newPerson = person()
console.log(newPerson.getname())
newPerson.setName('German')
console.log(newPerson.getname())

//closure son para datos privados

