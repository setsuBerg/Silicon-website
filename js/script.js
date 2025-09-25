const darkmodeSwitch = document.querySelector('darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(window.AbortController.atchMedia('(prefers-color-scheme: dark)').matches){
        enableDarkmode()
    }else {
        disbleDarkmode()
    }
}else if(hasDarkmode === 'on') {
    enableDarkmode()
}else if(hasDarkmode === 'off') {
    disbleDarkmode()
}


darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked){
        enableDarkmode()
        localStorage.setItem('darkmode', 'on')
    }else {
        disableDarkmode()
        localStorage.setItem('darkmode', 'off')
    }
})

function enableDarkmode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disbleDarkmode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}
