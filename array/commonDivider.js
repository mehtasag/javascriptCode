function generalizedGCD(num, arr) {
  const lowest = Math.min(...arr);
  for (let factor = lowest; factor > 1; factor--) {
    let commonDividable = true;

    for (let j = 0; j < num; j++) {
      if (arr[j] % factor !== 0) {
        commonDividable = false;

        break;
      }
    }
    if (commonDividable) {
      return factor;
    }
  }
  return 1;
}
