let clock = document.getElementById('clock')

function hexoClock () {
    let time = new Date()
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()
    let s = time.getSeconds().toString()


    let fullTime = h + ":" + m + ':' + s 

    clock.innerHTML = fullTime

    if(h.length < 2) {
        h = '0' + h
    }
    if(m.length < 2) {
        m = '0' + m
    }
    if(s.length < 2) {
        s = '0' + s
    }
}
hexoClock()
setInterval(hexoClock, 1000)