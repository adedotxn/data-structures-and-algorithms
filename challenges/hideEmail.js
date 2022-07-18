/*
    issue #257 --> rendevous with cassido

    Question : Given a string that has a valid email address, write a function to hide the
    first part of the email (before the @ sign), minus the first and last character.
    For extra credit, add a flag to hide the second part after the @ sign to your function excluding
    the first character and the domain extension.
*/

function hideEmail(email, hideFull = false) {
    if(!email.includes("@")) return console.log("input proper mail")

    const beforeAtSign = email.substring(0, email.indexOf("@"))
    const middleOfName =  beforeAtSign.substring(1, beforeAtSign.indexOf(beforeAtSign[beforeAtSign.length - 1]))
    const _hiddenEmail  = email.replace(middleOfName, "*".repeat(middleOfName.length))

    if (!hideFull) {
        const hiddenEmail = _hiddenEmail
        return hiddenEmail
    } else {
        const _domain = email.substring(email.indexOf("@")+1, email.indexOf("."))

        const hiddenEmail  = _hiddenEmail.replace(_domain, "*".repeat(_domain.length))
        return hiddenEmail
    }
}
console.log(hideEmail("phyf3script@gmail.com"))
console.log(hideEmail("phade075@gmail.com", true))










