function filterCategoryFunc (...items){
    let result = [];
    // a function that generates a unique id
    // loop through the items
    for (let name of items) {
      // create an object with the item and a unique id
      let object = {name};
      // push the object to the result array
      result.push(object);
    }
    console.log(result)
    // Define a function that returns a comparison function
function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // If the property doesn't exist on either object, do nothing
        return 0;
      }
      // Convert the values to lowercase strings
      const varA = a[key].toLowerCase();
      const varB = b[key].toLowerCase();
  
      // Compare the values using localeCompare
      let comparison = varA.localeCompare(varB);
  
      // Reverse the order if needed
      return ((order === 'desc') ? (comparison * -1) : comparison);
    };
  }
  
  // Define an array of objects with name property

  
  // Sort the array by name in ascending order and remove duplicates
  let data = result.sort(compareValues('name')).filter((item, index, array) => {
    // Keep only the first occurrence of each name
    return index === 0 || item.name !== array[index - 1].name;
  });
  // Log the sorted and filtered array
  console.log(data)
}

export default filterCategoryFunc
