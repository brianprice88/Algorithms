var mergeSort = function (array) {
    if (array.length === 1) {return array}
    var arr1 = array.slice(0, Math.floor(array.length / 2))
    var arr2 = array.slice(Math.floor(array.length / 2))
    var left = mergeSort(arr1);
    var right = mergeSort(arr2);
return merge(left, right)
}

var merge = function (arr1, arr2) {
    var list = [];
    var first = 0;
    var second = 0;
    while (arr1[first] && arr2[second]) {
      if (arr1[first] <= arr2[second]) {
        list.push(arr1[first]);
        first ++
      } else {
        list.push(arr2[second]);
        second ++
      }
    }
    if (arr1[first]) {list = list.concat(arr1.slice(first))}
    if (arr2[second]) { list = list.concat(arr2.slice(second))}
    return list;
}