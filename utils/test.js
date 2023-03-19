console.log("Starting")


setTimeout( ()=> {
    console.log("2 Second timer")
}, 2000) 


console.log("Stopping")


array = ["Momina","Mustehsan","Muhammad","Hamza","Sohail"]
const lister = (array) => {
    for(i=0;i<array.length;i++){
        console.log(array[i])
    }
}

lister(array)