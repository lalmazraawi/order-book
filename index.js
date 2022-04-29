const reconcileOrder = (array, object) => {
  let existingBook = [...array]
  let incomingOrder = { ...object }
  let fulfilledArray = []
  let nonFulfilledArray = []

  if (existingBook.length === 0) {
    nonFulfilledArray.push(incomingOrder)

    return nonFulfilledArray
  }

  existingBook.forEach(existingBook => {
    if (buyAndSellMatch(existingBook, incomingOrder) && priceMatch(existingBook, incomingOrder)) {
      const fulfilledOrders = fulfillOrders(existingBook, incomingOrder)

      if (fulfilledOrders.quantity > 0) {
        fulfilledArray.push(fulfilledOrders)
      } else {
        //does nothing

      }
    } else {
      nonFulfilledArray.push(existingBook)
    }
  })

  if (incomingOrder.quantity > 0) {
    fulfilledArray.push(incomingOrder)
  }


 

  return [...nonFulfilledArray, ...fulfilledArray]
}

const buyAndSellMatch = (existingBook, incomingOrder) => {
  return existingBook.type !== incomingOrder.type
}
const priceMatch = (existingBook, incomingOrder) => {
  return existingBook.price === incomingOrder.price
}
const getOrderQuantity = (existingBook, incomingOrder) => {
  return Math.min(incomingOrder.quantity, existingBook.quantity)
}

const fulfillOrders = (existingBook, incomingOrder) => {
  const orderQuantity = getOrderQuantity(existingBook, incomingOrder)

  existingBook.quantity -= orderQuantity
  incomingOrder.quantity -= orderQuantity

return existingBook

}


module.exports = reconcileOrder