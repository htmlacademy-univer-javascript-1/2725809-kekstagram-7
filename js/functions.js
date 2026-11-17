function checkLength(stroka, maxLen){
  if(String(stroka).length <= maxLen){
    return true;
  }
  return false;
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function checkPalindrome(stroka){
  stroka = stroka.replaceAll(' ', '').toLowerCase();
  let flag = true;
  for(let i=0; i < Math.floor(stroka.length/2); i++){
    if (stroka[i] !== stroka[stroka.length-1-i]){
      flag = false;
    }
  }
  return flag;
}
checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');
