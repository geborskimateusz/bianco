let alcohols = [
    'WODKAA 🍸',
    "WINOO 🍷",
    "BIMBEREK 🥃",
    "PIWERKOO 🍺"
]

let getRandomAlko = () => alcohols[Math.floor(Math.random() * alcohols.length) + 0]

let showDesitny = (answer) => {

    if (answer) {

        let body = document.getElementsByTagName('body')[0];
        let yogi = document.getElementById("yogi");

      
        yogi.style.animation = 'rotate-scale-down 0.65s linear 3 both';

        setTimeout(function () {
            body.style.animation = 'fade-in ease 4s';
            body.style.animationIterationCount = '1';
            body.style.animationFillMode = 'forwards';
            document.getElementById("game-text").innerHTML = `
            <h4>
                Taak! Widze! <br> 
                Twoim przeznaczeniem jest ${getRandomAlko()}
            </h4>
            `    
        }, 1500);


    } else {
        document.getElementById("game-text").innerHTML = `
        <h4>
            Phi! <br> 
            Sam se wypije.. <br>
            Jak chcesz bawic sie dalej to odswiez strone.
        </h4>
        `
    }


}


let init = () => {
    document.getElementById("game-text").innerHTML = `
    <h4>
        Witaj Spragniony <br> 
        Szukasz odpowiedzi? Ja ja znam. <br> 
        Czy chcesz poznac swoje przeznaczenie? 
    </h4>
    <ul>
        <li>
            <button onclick="showDesitny(true)">Tak</button>
        </li>
        <li>
            <button onclick="showDesitny(false)">Nie</button>
        </li>
    </ul>
    `
}

window.onload = init






