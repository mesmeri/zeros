module.exports = function zeros(expression) {

  let inputArray = expression.split('*');
  let totalTwos = 0;
  let totalFives = 0;
  
  
  let counter = function (number, doubly) {
    let twos = 0;
    let fives = 0;

    let findDividers = function (number, div) {
        if (number % div !== 0) {
          return;
        }

        (div === 2) ? twos++ : fives++;

        findDividers((number / div), div);
    }

    for (let i = number; i > 0; i--) {

        findDividers(i, 2);
        findDividers(i, 5);
 
    if (doubly) {
        i--;
    }
  }

  return [twos, fives];
}
  
  for (let i = 0; i < inputArray.length; i++) {
  
      let item = inputArray[i];
      let isDoubly = (item.endsWith('!!')) ? true : false;
  
      let n = parseInt(item, 10);
      totalTwos +=  counter(n, isDoubly)[0];
      totalFives +=  counter(n, isDoubly)[1];
      
  
  }
  
  return (Math.min(totalTwos, totalFives));


}
