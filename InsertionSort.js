function insertionSort (items) {
  // Loop through each element

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array
  for (let i = 1; i < items.length; i++) {
    let currentItem = items[i];
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] > currentItem) {
        let temp = items[j];
        items[j] = currentItem;
        items[i] = temp;
      }
    }
  }
  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!
  return items;
}

module.exports = insertionSort;
