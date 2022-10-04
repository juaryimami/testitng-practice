function stringLength(string) {
  if(string.length<1 || string.length >10){
    throw 'the string shoul be one or more and less than 10 characters!';
  }
    return string.length;
  }
  function reverseString(string){
    if(string.length<1 ){
      throw 'the string shoul be one or more characters!';
    }
    let rev=[];
    for(let i=0;i<string.length;i++){
      rev[i]=string.charAt[string.length-i-1];
    }
    return rev;
  }
  module.exports = stringLength,reverseString;