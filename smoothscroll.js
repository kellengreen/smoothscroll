function smoothScroll(x, y, duration, easing) {
    if (window.requestAnimationFrame) {

        duration = duration ? duration : 500;
        easing = easing ? easing : function(original, change, time, duration) {
            // cubic easing out
            time /= duration;
            time--;
            return change * (time * time * time + 1) + original;
        };

        var noEasing = function(original) {
                return original;
            },
            startTime = Date.now(),
            originalX = window.scrollX,
            originalY = window.scrollY,
            changeX = x - originalX,
            changeY = y - originalY,
            funcX = changeX ? easing : noEasing,
            funcY = changeY ? easing : noEasing;

        window.requestAnimationFrame(function step() {
            var diffTime = Date.now() - startTime;
            if (diffTime >= duration) {
                scrollTo(x, y);
            } else {
                scrollTo(funcX(originalX, changeX, diffTime, duration),
                         funcY(originalY, changeY, diffTime, duration));
                window.requestAnimationFrame(step);
            }
        });
    } else {
        scrollTo(x, y);
    }
}
