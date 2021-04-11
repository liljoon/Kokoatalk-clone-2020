const CLOCK_JS = document.querySelector(".status-bar .status-bar__column:nth-child(2) span");

function gettime(){
    const date = new Date();
    CLOCK_JS.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
}

function init(){
    setInterval(gettime,100)
}

init();