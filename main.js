function getName() {
  // 第一步
  const str = college.replace(/\n/g, "-");
  const allArr = str.split("-").map(item => {
    return item.trim();
  });

  // 第二步
  // judge
  function getValueFromArr(arr, value, exclude) {
    const getValue = arr.filter(
      item => item.includes(value) && !exclude.some(v => item.includes(v))
    );
    const getLeftValue = arr.filter(
      item => !item.includes(value) || exclude.some(v => item.includes(v))
    );
    return {
      value: getValue,
      leftValue: getLeftValue
    };
  }
  // judge
  const all = {};
  let leftArr = [...allArr];
  for (var index in judge) {
    const { exclude, include } = judge[index];
    include.map(item => {
      var reslut = getValueFromArr(leftArr, item, exclude);
      leftArr = reslut.leftValue;

      if (all[index]) {
        all[index] = [...all[index], ...reslut.value];
      } else {
        all[index] = [...reslut.value];
      }
    });
  }
  console.log(all, leftArr);
  return {
    all,
    leftArr
  };
}
