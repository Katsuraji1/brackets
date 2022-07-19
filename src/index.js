module.exports = function check(str, bracketsConfig) {
 if (str.length%2){
  return false;
 }
 let stack_array=[];
 for (let i=0;i<str.length;i++){
  for (let j=0;j<bracketsConfig.length;j++){
    if (str[i]===bracketsConfig[j][1] && stack_array[stack_array.length-1]===bracketsConfig[j][0]){
      stack_array.pop();
    }
    else {
      if(str[i]===bracketsConfig[j][0]){
stack_array.push(str[i]);
      }
    }
  }
 }
 return stack_array.length ? false:true;
}