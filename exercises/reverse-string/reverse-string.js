//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
    if (string === '') {
       return string;
      }
  // This is how to reverse a string with js methods. 
      // const newString = string
      //   .split('')
      //   .reverse() => reverse can be called on an array
      //   .join('');

      // This is how to reverse a string for an interview! :)
      let newString = '';
      for(let i = string.length -1; i >= 0; i --) {
        newString += string[i];
      }
    
                          
      return newString;
};
  



