
    arr = [];

    for (var i = 1; i <= 100; i++) {
        arr.push(i);
    }

    function randomize(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    var hitval;

    function getNewHit() {
        hitval = Math.floor(Math.random() * 100);
        document.querySelector("#hit").textContent = hitval;
    }

    function makeBubble() {
        randomize(arr);
        clutter = "";
        for (var i = 1; i <= 200; i++) {
            var rnumber;
            if (i <= 99) {
                rnumber = arr[i];
                clutter += `<div class="bubble">${rnumber}</div>`;
            } else {
                rnumber = Math.floor(Math.random() * 100);
                clutter += `<div class="bubble">${rnumber}</div>`;
            }
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }

    var timer = 60;

    function runtimer() {
        setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timer").textContent = timer;
            } else {
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over.Your Score:${score}</h1>`;
                if(timer==0){
                    button.disabled=false;
                } 
                clearInterval(timer);
            }
        }, 1000);
    }

    var score = 0;

    function updateScore() {
        document.querySelector("#pbtm").addEventListener("click", function (event) {
            if (Number(event.target.textContent) === hitval) {
                score += 10;
            }
            document.querySelector("#score").textContent = score;
            getNewHit();
            makeBubble();
        });
    }

    getNewHit();
    makeBubble();
    runtimer();
    updateScore();

    // Re-enable the button after everything is done
// }


