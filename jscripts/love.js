        var offsetX = $("#loveHeart").width() / 2;
        var offsetY = $("#loveHeart").height() / 2 - 55;
        var together = new Date();
        together.setFullYear(2012, 8, 14);
        together.setHours(20);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);

        if (!document.createElement('canvas').getContext) {
            var msg = document.createElement("div");
            msg.id = "errorMsg";
            msg.innerHTML = "你的浏览器不支持HTML5<br/>请使用最新浏览器";
            document.body.appendChild(msg);
            $("#code").css("display", "none")
            $("#copyright").css("position", "absolute");
            $("#copyright").css("bottom", "10px");
            document.execCommand("stop");
        } else {
            setTimeout(function() {
                startHeartAnimation();
            }, 5000);

            timeElapse(together);
            setInterval(function() {
                timeElapse(together);
            }, 500);

            adjustCodePosition();
            $("#code").typewriter();
        }