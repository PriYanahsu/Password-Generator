let inputSlider = document.querySelector("#inputSlider")
let sliderValue = document.querySelector("#sliderValue")

let passbox = document.querySelector("#passbox")
let lowercase = document.querySelector("#lowercase")
let uppercase = document.querySelector("#uppercase")
let numbers = document.querySelector("#numbers")
let Symbols = document.querySelector("#Symbols")
let genBtn = document.querySelector("#genBtn")
let copyIcon = document.querySelector("#copyIcon");


// showing input slider value
sliderValue.innerHTML = inputSlider.value
inputSlider.addEventListener("input", ()=>{
    sliderValue.innerHTML = inputSlider.value;
});


genBtn.addEventListener("click", ()=>{
    passbox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Allnum = "0123456789";
let AllSymbol = "~!#$%^&*";

// function generate password
function generatePassword(){
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerChars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? Allnum : "";
    allchars += Symbols.checked ? AllSymbol : "";

    // if(allChars == "" || allchars.length == 0){
    //     return  genPassword
    // }

    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allchars.charAt(parseInt(Math.random() * allchars.length ));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerHTML = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});