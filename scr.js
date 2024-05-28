function customReplace(originalString, valueToReplace, valueToReplaceWith) {
    let result = '';
    let i = 0;
    const originalLength = originalString.length;
    const replaceLength = valueToReplace.length;
    
    while (i < originalLength) {
        if (originalString.substring(i, i + replaceLength) === valueToReplace) {           
            result += valueToReplaceWith;
            i += replaceLength;
        } else {   
            result += originalString[i];            
            i++;
        }
    }
    
    return result;
}

const original = "Hello world! Hello everyone!";
const result = customReplace(original, "Hello", "Hi");
console.log(result); 

// 2*

function capitalizeWords(sentence) { 
  const words = sentence.split(' ');
  const capitalizedWords = words.map(word => word.toUpperCase());
  const capitalizedSentence = capitalizedWords.join(' ');
  return capitalizedSentence;
}

const sentence = "hello world! how are you?";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);

// 3*

function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const users = [
  { name: 'Lasha', age: 30 },
  { name: 'Saba', age: 20 }
];
const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);