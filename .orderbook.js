// const reconsileOrder = (existingBook, incomingOrder) => {
//     let updatedBook = reconcileOrder(existingBook, incomingOrder)
//     let existingBook = []
//     let incomingOrder = { type: 'sell', quantity: 10, price: 6150 }
//     //if there is an incoming order and the array is at 0, take incoming order and 
//     //add to array/orderbook
//     for (let i = 0; i < existingBook.length; i++) {
//         const currentBook = existingBook [i]
//         if (i===0) 
//     //push incoming order into array/book
//         incomingOrder.push (updatedBook)
    
//         //return existing book with incoming order in arrray 
//         return existingBook
        
//       if typers are 
        
//     }
//     }
const reconsileOrder = (array, object) => {
let existingBook =[...array]
let incomingOrder = {...object}

if(existingBook.length === 0){
  nonFullfiledArray.push(incomingOrder)

  return nonFulfilledArray
}

existingBook.forEach(existingBook => {
  if(transactionMatch (existingBook, incomingOrder) && priceMatch( existingBook, incomingOrder)){
    const fulfilledOrders = fulfillOrders(existingBook, incomingOrder)

    if (fulfulledOrders.quantity >0){
      fulfilledArray.push (fulfilledOrders)
    }
  }else { 

  }
  }
)

let fulfilledArray = []
let nonFulfilledArray = []

return [...nonFulfilledArray, ...fulfilledArray]

}

const transactionMatch = (existingBook, incomingOrder) =>{
  return existingBook.type !== incomingOrder.type

}
  const priceMatch = (existingBook, incomingOrder) =>{
    return existingBook.price === incomingOrder.price

  }







    module.export (reconsileOrder)

    // write a function that takes a book and a new order
    reconcileOrder=(existingBook, incomingOrder)

// if the book is empty just move the new order into the book and return it

// look at each order in the book
  // check if the types are different AND the prices are the same
    // if they are: we fulfill the order, we need to remove the order that was fully fulfilled

    // if they arent, we move on to the next order

// if the new order has some qty left, add it to the end of the book..

// return the book