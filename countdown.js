const getRemainTime = (deadline) => {
    let now = new Date();
    let remainTime = (new Date(deadline) - now + 1000) / 1000;
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));

    return { remainTime, remainSeconds, remainMinutes, remainHours, remainDays }
};

const coundown = (deadline, element, finalMessage) => {
    const elem = document.getElementById(element);

    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        elem.innerHTML = `${time.remainDays}d:${time.remainHours}h:${time.remainMinutes}m:${time.remainSeconds}s`

        if (time.remainTime <= 1) {
            clearInterval(timerUpdate)
            elem.innerHTML = finalMessage
        }
    }, 1000)
}

coundown('May 10 2021 21:38:00 GMT-0500', 'count', 'Feliz Día!')
