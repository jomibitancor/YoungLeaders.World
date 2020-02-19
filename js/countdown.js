const countdown = document.getElementById('countdown');

// VISION 2020 date
const vision_2020_date = new Date('April 7, 2020 09:30:00').getTime();

console.log(countdown)

const interval = setInterval(() => {
    const now = new Date().getTime(); // Get Today's Date
    const diff = vision_2020_date - now // Difference between launch and date now

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
    const secs = Math.floor((diff % (1000*60)) / (1000));

    countdown.innerHTML = `
        <div id="days">${days}</div>
        <span>|</span>
        <div id="hours">${hours}</div>
        <span>|</span>
        <div id="mins">${mins}</div>
        <span>|</span>
        <div id="secs">${secs}</div>
    `;

    if (diff < 0){
        clearInterval(interval);
        // countdown.innerHTML = ``
    }
}, 1000);