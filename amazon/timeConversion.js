const timeConversion = (input) => {
  let amPM = input.substring(input.length - 2);
  if (amPM === "PM") {
    var replace = parseInt(input.substring(0, 2));

    input = input.replace(
      input.substring(0, 2),
      replace < 12 ? replace + 12 : replace
    );

    return (input = input.substring(0, input.length - 2));
  } else {
    if (parseInt(input.substring(0, 2)) == 12) {
      input = input.replace(input.substring(0, 2), "00");
      return (input = input.substring(0, input.length - 2));
    } else {
      return (input = input.substring(0, input.length - 2));
    }
  }
};

console.log(timeConversion("07:02:00PM"));
