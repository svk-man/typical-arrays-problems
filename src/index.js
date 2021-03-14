
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let min = array[0];
    array.forEach(element => {
      min = (min > element) ? element : min
    });

    return min;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let max = array[0];
    array.forEach(element => {
      max = (max < element) ? element : max
    });

    return max;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let sum = 0;
    array.forEach(element => {
      sum += element;
    });

    return sum / array.length;
  } else {
    return 0;
  }
}
