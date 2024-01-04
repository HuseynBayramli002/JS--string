//! Task7.1
// function is_string(str){
//     if( typeof str== typeof ""){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }
// is_string('asasas')
// is_string(1212)


//! Task7.2
// function string_to_array(str){
//     str= str.split(" ")
//     console.log(str)
// }
// string_to_array("Robin Singh")


//! Task7.3
// function isPalindrome(str) {
//     let str2 = '';
//     for (i = str.length - 1; i >= 0; i--) {
//         str2 = str2 + str[i]
//     }
//     if (str == str2) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// isPalindrome("racecar")
// isPalindrome("apple")


//! Task7.4
// function removeCharacters(str, arr) {
//     str = str.split('')
//     for (i = 0; i < str.length; i++) {
//         if (arr.includes(str[i])) {
//             str[i] = '';
//         }
//     }
//     console.log(str.join('').toString())
// }

// removeCharacters("I am an example string", ["a", "x"])


//! Task7.5
// function startsWith(str, elem) {
//     let num = elem.length;
//     if (str.split('').splice(0, num).join('') == elem) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// startsWith('js string exercises', 'js')


//! Task7.6
// function repeat_string(str,num){
//     let str2=str;
//     for(i=1;i<num;i++){
//         str=str+str2;
//     }
//     console.log(str)
// }
// repeat_string('a', 4)


//! Task7.7
// function strip(str){
//     str=str.trim()
//     console.log(str)
// }
// strip(' w3resource')


//! Task7.8
// function alphabetize_string(str){
//     str=str.split('').sort()
//     console.log(str)
// }
// alphabetize_string('United States')


//! Task7.9
// function endsWith(str, elem) {
//     num = str.length - elem.length;
//     if (str.split('').slice(num, str.length).join('') == elem) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// endsWith('JS string exercises', 'exercises')