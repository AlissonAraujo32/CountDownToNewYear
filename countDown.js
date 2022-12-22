let countDate = new Date('jan 1, 2023 00:00:00').getTime()

function newYear(){
    let now = new Date().getTime()
        gap = countDate - now

        let second = 1000
        let minute = second * 60
        let hour = minute * 60
        let day = hour * 24

        let days = Math.floor(gap / (day))
        let hours = Math.floor((gap % (day)) / (hour))
        let minutes = Math.floor((gap % (hour)) / (minute))
        let seconds = Math.floor((gap % (minute)) / (second))

        document.getElementById('day').innerText = days
        document.getElementById('hour').innerText = hours
        document.getElementById('minute').innerText = minutes
        document.getElementById('second').innerText = seconds
}

setInterval(function(){
    newYear()
},1000)