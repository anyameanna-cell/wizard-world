const formPin = document.querySelector('.login-pin')
const formTorch = document.querySelector('.login-pin-torch')
const form = document.querySelector('.login')
const formName = document.querySelector('.login-nickname')

let count = 1
let myNickname = 'Witch'
let myPin = 'wizardgang-123'

document.body.style.cursor = "url('./cursor.png') 0 0, auto";

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (formName.value == myNickname && formPin.value == myPin) {
        alert('Entering the magic portfolio...')
        form.setAttribute('action','./homePage.html')
        form.submit()
    } else {
        alert('Wrong portal!')
    }
})

formTorch.addEventListener('click',function(){
    count++
    if (count%2==0) {
        formPin.setAttribute('type','password')
        formTorch.setAttribute('src','./torch-off.png')
    } else {
        formPin.setAttribute('type','text')
        formTorch.setAttribute('src','./torch-on.gif')
    }
})
