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
    const middle =  beforeAtSign.substring(1, beforeAtSign.indexOf(beforeAtSign[beforeAtSign.length - 1]))
    if (!hideFull) {
        const hiddenEmail  = email.replace(middle, "*".repeat(middle.length))
        return hiddenEmail
    } else {
        const _hiddenMailName  = email.replace(middle, "*".repeat(middle.length))
        const _domain = email.substring(email.indexOf("@")+1, email.indexOf("."))

        const hiddenEmail  = _hiddenMailName.replace(_domain, "*".repeat(_domain.length))
        return hiddenEmail
    }
}
console.log(hideEmail("phade075@gmail.com"))
console.log(hideEmail("phyf3script@gmail.com", true))










