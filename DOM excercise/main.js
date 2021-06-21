const num = document.getElementById('num');
const msg = document.getElementsByClassName('msg')[0];
const defval = document.getElementsByClassName('defaultValue')[0];
const buttons = document.getElementsByClassName('btn');

window.addEventListener('load', () => {
    num.value = parseInt(window.localStorage.getItem("activeNum"));
    let activeButtonValue = parseInt(localStorage.getItem("activeButton"));
    if (activeButtonValue) {
        for (let i = 0; i < buttons.length;i++){
            if (parseInt(buttons[i].value) === activeButtonValue){
                buttons[i].classList.add('active');
                break;
            }
        }
    } else{
        const defaultButton = document.getElementById('default')
        defaultButton.classList.add('active');
    }
})

    // let xyz = window.localStorage.getItem("activeButton");
    // xyz.classList.add('active');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",()=> {
        const activeButton = document.getElementsByClassName('active')[0];
        activeButton.classList.remove('active');
        buttons[i].classList.add('active'); 
        window.localStorage.setItem("activeButton", parseInt(buttons[i].value));
        console.log(activeButton.value);
        // if (buttons[i].value === parseInt(window.localStorage.getItem("activeButton"))){
        //     buttons[i].classList.add('active');
        // }
    })
}

function increment(){
    const activeButton = document.getElementsByClassName('active')[0];
    num.value = parseInt(num.value) + parseInt(activeButton.value);
    window.localStorage.setItem("activeNum", num.value);
    console.log(parseInt(activeButton.value))
}

function decrement() {
    const activeButton = document.getElementsByClassName('active')[0];
    const value = parseInt(num.value) - parseInt(activeButton.value);
    if (value < 0) {
        msg.innerHTML = 'Number should be greater than zero';
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 1000);
        num.value = 0;
    } else {
        num.value = value;
    }
    window.localStorage.setItem("activeNum", num.value);
}

// for (let i = 0; i < buttons.length; i++) {
//     if (buttons[i].value === parseInt(window.localStorage.getItem("activeButton"))){
//         buttons[i].classList.add('active');
//     }
// }

  


