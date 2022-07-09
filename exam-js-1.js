const array = [2, 4, 7, 5, 4, 3, 8];

const array_tmp = [];

const result = array.filter(function (item) {
  const indexOfJS = array_tmp.indexOf(item);
  if (indexOfJS === -1) {
    array_tmp.push(item);
    return true;
  } else {
    return false;
  }
});

console.log(result);
