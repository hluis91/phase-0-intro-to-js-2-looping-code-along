// Code your solutions in this file

function writeCards(names, event){
    let messages = [];
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    };
    return messages;
};

// function countDown(startNumber){
//     let numbers = []
//     for(let count = startNumber; count >= 0; count--){
//         console.log(numbers.push(count))
//     }
//     return numbers
// }

function countDown(startNumber){
    let count = startNumber
    while (count >= 0){
        console.log(count--);
    }
    return count;
}



