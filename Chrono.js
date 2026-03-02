 let time;
        let second = 0
        let minutes = 0
        let Heure=0
        function play() {
            
            time = setInterval(() => {
                second++
                document.getElementById('counter').innerText = `00:0${minutes}:0${second}`
                if (second === 60 ) {
                    second = 0
                    minutes++
                    document.getElementById('counter').innerText = `00:0${minutes}:0${second}`
                } else if (second >= 10 && second < 60) {
                    document.getElementById('counter').innerText = `00:0${minutes}:${second}`
                }else if(minutes>= 10){
                    document.getElementById('counter').innerText = `00:${minutes}:${second}`
                }
                if (minutes === 60 ) {
                    second = 0
                    minutes=0
                    Heure++
                    document.getElementById('counter').innerText = `0${Heure}:0${minutes}:0${second}`}
                
                }, 1000);

        }
        function Stop() {
            clearInterval(time);
        }
        function Rénitialiser() {
            second = 0
            minutes = 0
            clearInterval(time);
            document.getElementById('counter').innerText = `00:0${minutes}:0${second}`
        }