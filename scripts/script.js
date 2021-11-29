const optionDaily = document.getElementById('optiondaily')
const optionWeekly = document.getElementById('optionweekly')
const optionMonthly = document.getElementById('optionmonthly')

var active = ''

optionDaily.addEventListener('click', daily)
optionWeekly.addEventListener('click', weekly)
optionMonthly.addEventListener('click', monthly)

update()

setInterval(isActive, 300)

function update() {
    daily()
}

function daily() {
    active = 'daily'

    document.getElementById('worktime').innerText = data[0].timeframes.daily.current + isOneOrZero(data[0].timeframes.daily.current)
    document.getElementById('worklasttime').innerText = 'Last day - ' + data[0].timeframes.daily.previous + isOneOrZero(data[0].timeframes.daily.previous)

    document.getElementById('playtime').innerText = data[1].timeframes.daily.current + isOneOrZero(data[1].timeframes.daily.current)
    document.getElementById('playlasttime').innerText = 'Last day - ' + data[1].timeframes.daily.previous + isOneOrZero(data[1].timeframes.daily.previous)

    document.getElementById('studytime').innerText = data[2].timeframes.daily.current + isOneOrZero(data[2].timeframes.daily.current)
    document.getElementById('studylasttime').innerText = 'Last day - ' + data[2].timeframes.daily.previous + isOneOrZero(data[2].timeframes.daily.previous)

    document.getElementById('exercisetime').innerText = data[3].timeframes.daily.current + isOneOrZero(data[3].timeframes.daily.current)
    document.getElementById('exerciselasttime').innerText = 'Last day - ' + data[3].timeframes.daily.previous + isOneOrZero(data[3].timeframes.daily.previous)

    document.getElementById('socialtime').innerText = data[4].timeframes.daily.current + isOneOrZero(data[4].timeframes.daily.current)
    document.getElementById('sociallasttime').innerText = 'Last day - ' + data[4].timeframes.daily.previous + isOneOrZero(data[4].timeframes.daily.previous)

    document.getElementById('selfcaretime').innerText = data[5].timeframes.daily.current + isOneOrZero(data[5].timeframes.daily.current)
    document.getElementById('selfcarelasttime').innerText = 'Last day - ' + data[5].timeframes.daily.previous + isOneOrZero(data[5].timeframes.daily.previous)
}

function weekly() {
    active = 'weekly'

    document.getElementById('worktime').innerText = data[0].timeframes.weekly.current + isOneOrZero(data[0].timeframes.weekly.current)
    document.getElementById('worklasttime').innerText = 'Last week - ' + data[0].timeframes.weekly.previous + isOneOrZero(data[0].timeframes.weekly.previous)

    document.getElementById('playtime').innerText = data[1].timeframes.weekly.current + isOneOrZero(data[1].timeframes.weekly.current)
    document.getElementById('playlasttime').innerText = 'Last week - ' + data[1].timeframes.weekly.previous + isOneOrZero(data[1].timeframes.weekly.previous)

    document.getElementById('studytime').innerText = data[2].timeframes.weekly.current + isOneOrZero(data[2].timeframes.weekly.current)
    document.getElementById('studylasttime').innerText = 'Last week - ' + data[2].timeframes.weekly.previous + isOneOrZero(data[2].timeframes.weekly.previous)

    document.getElementById('exercisetime').innerText = data[3].timeframes.weekly.current + isOneOrZero(data[3].timeframes.weekly.current)
    document.getElementById('exerciselasttime').innerText = 'Last week - ' + data[3].timeframes.weekly.previous + isOneOrZero(data[3].timeframes.weekly.previous)

    document.getElementById('socialtime').innerText = data[4].timeframes.weekly.current + isOneOrZero(data[4].timeframes.weekly.current)
    document.getElementById('sociallasttime').innerText = 'Last week - ' + data[4].timeframes.weekly.previous + isOneOrZero(data[4].timeframes.weekly.previous)

    document.getElementById('selfcaretime').innerText = data[5].timeframes.weekly.current + isOneOrZero(data[5].timeframes.weekly.current)
    document.getElementById('selfcarelasttime').innerText = 'Last week - ' + data[5].timeframes.weekly.previous + isOneOrZero(data[5].timeframes.weekly.previous)
}

function monthly () {
    active = 'monthly'

    document.getElementById('worktime').innerText = data[0].timeframes.monthly.current + isOneOrZero(data[0].timeframes.monthly.current)
    document.getElementById('worklasttime').innerText = 'Last month - ' + data[0].timeframes.monthly.previous + isOneOrZero(data[0].timeframes.monthly.previous)

    document.getElementById('playtime').innerText = data[1].timeframes.monthly.current + isOneOrZero(data[1].timeframes.monthly.current)
    document.getElementById('playlasttime').innerText = 'Last month - ' + data[1].timeframes.monthly.previous + isOneOrZero(data[1].timeframes.monthly.previous)

    document.getElementById('studytime').innerText = data[2].timeframes.monthly.current + isOneOrZero(data[2].timeframes.monthly.current)
    document.getElementById('studylasttime').innerText = 'Last month - ' + data[2].timeframes.monthly.previous + isOneOrZero(data[2].timeframes.monthly.previous)

    document.getElementById('exercisetime').innerText = data[3].timeframes.monthly.current + isOneOrZero(data[3].timeframes.monthly.current)
    document.getElementById('exerciselasttime').innerText = 'Last month - ' + data[3].timeframes.monthly.previous + isOneOrZero(data[3].timeframes.monthly.previous)

    document.getElementById('socialtime').innerText = data[4].timeframes.monthly.current + isOneOrZero(data[4].timeframes.monthly.current)
    document.getElementById('sociallasttime').innerText = 'Last month - ' + data[4].timeframes.monthly.previous + isOneOrZero(data[4].timeframes.monthly.previous)

    document.getElementById('selfcaretime').innerText = data[5].timeframes.monthly.current + isOneOrZero(data[5].timeframes.monthly.current)
    document.getElementById('selfcarelasttime').innerText = 'Last month - ' + data[5].timeframes.monthly.previous + isOneOrZero(data[5].timeframes.monthly.previous)
}

function isOneOrZero(number) {
    if(number == 0 || number == 1)
        return 'hr'
    else
        return 'hrs'
}


function isActive() {
    if (active === 'daily') {
        optionDaily.classList.add('dashboard__person__option--active')
    } else {
        optionDaily.classList.remove('dashboard__person__option--active')
    }

    if (active === 'weekly') {
        optionWeekly.classList.add('dashboard__person__option--active')
    } else {
        optionWeekly.classList.remove('dashboard__person__option--active')
    }

    if (active === 'monthly') {
        optionMonthly.classList.add('dashboard__person__option--active')
    } else {
        optionMonthly.classList.remove('dashboard__person__option--active')
    }
}