// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};
*/

/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/


function writeCards(array, event) {
    let messageCollection = [];
    for (let i = 0; i < array.length; i++) {
        messageCollection.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messageCollection;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
};

//countDown(5);