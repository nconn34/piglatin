/*function pigLatin(word){
    const piggy = word.split("");
    piggy.forEach(function(element){
  if (element.charAt(0) === "a", "e" , "i" , "o" , "u"){
    result= word.concat("way");
    return result;
  } else if (word.charAt(0) != "a", "e" , "i" , "o" , "u"){
    result= "no";
    return result;
  }
})
};


const word = "away";
const pigPassage = pigLatin(word);
console.log(pigPassage);
*/
const array = ['a','e', 'i', 'o', 'u'];





function pigLatin(word){
  const array = ['a','e', 'i', 'o', 'u'];
  const way = "way";
  let piggy = "";
  let word2= word.toLowerCase();
  const ay = "ay";
  
  for (let i = 0; i< word2.length; i+=1){
    for (let v= 0; v< array.length; v+=1 ){
      if (word2[i] === array[v] && i === 0){
      piggy = word.concat(way);
      console.log("still no piggy");
			return piggy;
      break;

    } else if (word2[i] === array[v])
    {
    //there erethay
    	piggy = word.slice(i);
      piggy = piggy.concat(word.substring(0,i));
      piggy = piggy.concat(ay);
      return piggy;
    }
   }
  }
   return piggy;
}