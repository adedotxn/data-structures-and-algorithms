function ArrayStack(word) {
    const letters = []

    let reverseWord = ""

    //put the letters of the word into the stack 
    for(let i = 0; i < word.length ; i++) {
        letters.push(word[i])
        // console.log("letters", letters)
    }

    //pop off the stack in reverse order 
    for(let i = 0; i < word.length ; i++) {
        reverseWord += letters.pop();
        // console.log("rword", reverseWord)
        //you're essentially popping off from the back and adding/assigning it to the reverseWord variable
    }

    if(reverseWord === word) {
        console.log(word, "is a palindrome")
    } else {
        console.log(word, "is not a palindrome")
    }

}

ArrayStack("ashewo")
