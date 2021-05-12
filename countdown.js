const starting = document.getElementById('starting')
const count = document.getElementById('count')
const datePicker = document.getElementById('fecha')

function getDateCountdown() {
    count.style.display = 'none'
}

datePicker.addEventListener('change', (e) => {
    const newDate = e.target.value

    countdown(newDate, 'count', 'Your Countdown is over!')
    starting.style.display = 'none'
    count.style.display = ''
})

const getRemainTime = (deadline) => {
    let now = new Date();
    let remainTime = (new Date(deadline) - now + 1000) / 1000;
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));

    return { remainTime, remainSeconds, remainMinutes, remainHours, remainDays }
};

const countdown = (deadline, element, finalMessage) => {
    const elem = document.getElementById(element);

    const d = document.getElementById('days');
    const h = document.getElementById('hours');
    const m = document.getElementById('minutes');
    const s = document.getElementById('seconds');

    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        /* elem.innerHTML = `${time.remainDays}d:${time.remainHours}h:${time.remainMinutes}m:${time.remainSeconds}s` */
        d.innerHTML = time.remainDays
        h.innerHTML = time.remainHours
        m.innerHTML = time.remainMinutes
        s.innerHTML = time.remainSeconds

        if (time.remainTime <= 1) {
            clearInterval(timerUpdate)
            elem.innerHTML = finalMessage
            elem.className += ' finalized'
            console.log('Countdown Finalized!')
        }
    }, 1000)
}

//countdown('May 12 2021 20:00:00 GMT-0500', 'count', 'Countdown Finalized!')
