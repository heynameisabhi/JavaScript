// function check() {
//     const input = document.getElementById('input');
//     alert('You entered: ' + input);
// }


function check(){
    const input = document.getElementById("input")
    const reversed = reveseString(input.value)
    if(input.value === reversed){
        alert('palindrome')

    }
    else{
        alert('not a palindrome')
    }
   
}
function reveseString(name){
    return name.split('').reverse().join('');

}
