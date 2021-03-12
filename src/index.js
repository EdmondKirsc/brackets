module.exports = function check(str, bracketsConfig) {

  let result = [];
  let strArr = str.split(""); //разбиваем строку на массив из скобок
  if (strArr.length % 2 === 1) {
    return false;
  }
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ((strArr[i] == bracketsConfig[j][1] && result[result.length-1] == bracketsConfig[j][0]))  {
        result.pop();
      }
      else if (strArr[i] == bracketsConfig[j][0]) {
        result.push(strArr[i]);
      } 
    }
  }

  if (result.length == 0) {
    return true;
  } else {
    return false
  };
}












