let str = "([])"
let str2 = "([)]"
let str3 = "((()"
let str4 = "{[(([)])]}"
let str5 = "{[({[()]})]}"
function openCloseBrackets(str) {
    let s = str
    for (let i = 0; i < str.length; i++) {
        if (s.length == 0) {
            return true;
        }
        else if (s.includes("()")) { s = s.replace("()", "") }
        else if (s.includes("[]")) { s = s.replace("[]", "") }
        else if (s.includes("{}")) { s = s.replace("{}", "") }
        else {
            return false;
        }
    }
}

console.log(openCloseBrackets(str))
console.log(openCloseBrackets(str2))
console.log(openCloseBrackets(str3))
console.log(openCloseBrackets(str4))
console.log(openCloseBrackets(str5))