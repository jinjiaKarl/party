function compare(property, sort = "asc") {
  // desc
  return function(a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return sort === 'asc' ? value1 - value2 : value2 - value1;
  };
}
