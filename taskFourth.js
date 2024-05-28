const dataInput = document.querySelector("#inputText")
const code = "bars"
let actualCode = "";

const checker = () =>{
    if(code == actualCode){
        document.querySelector("#result").innerHTML = "Правильный код"
        document.querySelector("#result").style.cssText = 'visibility: visible;'
        actualCode = ""
    }else{
        document.querySelector("#result").innerHTML = "Неправильный код"
        document.querySelector("#result").style.cssText = 'visibility: visible;'
        dataInput.value = '';
        actualCode = ""
    }
}

const handle = (e) =>{
    actualCode += e.key
    dataInput.innerHTML = actualCode
    if(actualCode.length > 3){
        checker()
    }
}

document.addEventListener('keydown', handle);