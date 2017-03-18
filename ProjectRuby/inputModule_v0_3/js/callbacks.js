//run code uplon pageload
window.onload = function () {
    var body = document.getElementById('body');

    console.log(body);

    if (body) {
        //attach callback to every keydown event
        body.onkeydown = function (e) {
            if (!e.metaKey) //to exclude windows(win), and command(mac) keys
            {
                e.preventDefault(); //stop keypress event propagation
            }

            //only register the first press, if user holds down a key, ignore the rest
            if (isNewKey(e.keyCode)) {
                addActiveKey(new Key(e.keyCode, keyCodes[e.keyCode], getTime(), null));
            }
        };

        //attach callback to every keyup event
        body.onkeyup = function (e) {
            if (!e.metaKey) //to exclude windows(win), and command(mac) keys
            {
                e.preventDefault(); //stop keypress event propagation
            }

            //key-release only happens once

            console.log("key released (raw object):");
            console.log(e.keyCode, keyCodes[e.keyCode]);

            //get the key that's just been released
            obj = findKey(activeKeys,e.keyCode)
            obj.finish = getTime();
            obj.calcDuration();

            //console.clear();
            console.log(activeKeys);

            drawChart();

            document.getElementById('outputJson').innerHTML = genOutput();
            


        };

    }

};