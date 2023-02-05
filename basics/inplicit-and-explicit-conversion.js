//Implicit conversion (conversition done automatically by javascript complier/engine)
100 == '100'; // true (100 == "100" -> "100" -> true)
 //exampul implicit conversion to a Number
 '25' + 15; // '2515'

 // implict conversion to a number
 23 * '2'; //  46
 23 - true; // 22 // true is converted into 1
 true - null; // 1
 false + undefined;  // NaN // undefined into NaN 



 //explicit exampul
 56 === '56' // fales
 String(56) === '56'  // then it become true why becaus we convent into both string



 //for number
 56 === '56'  // fales
56 ===Number(56);  // now it changed into number  and it become true
     //or
  56 === +(56);  //   even this is one option true



  // conversion to boolran explicitly
  Boolean('');// false
  Boolean(2) == true; // true
  
