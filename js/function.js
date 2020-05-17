var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width() - 10;
var clientHeight = $(window).height() - 10;
$(function () {
    $("body").css("width", clientWidth).css("height", clientHeight);
    $loveHeart = $("#loveHeart");
    $garden = $("#garden");
    gardenCanvas = $garden[0];
    gardenCanvas.width = $("#loveHeart").width();
    gardenCanvas.height = $("#loveHeart").height();
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
    setInterval(function () { garden.render() }, Garden.options.growSpeed)

    $('#elapseClock').click(function(){
        location.href = ''
    })
});
$(window).resize(function () {
    var b = $(window).width();
    var a = $(window).height();
    if (b != clientWidth && a != clientHeight) {
        location.replace(location)
    }
});
function getHeartPoint(c) {
    var b = c / Math.PI;
    var a = 19.5 * (16 * Math.pow(Math.sin(b), 3));
    var d = -20 * (13 * Math.cos(b) - 5 * Math.cos(2 * b) - 2 * Math.cos(3 * b) - Math.cos(4 * b));
    return new Array(offsetX + a, offsetY + d)
}
function startHeartAnimation() {
    var c = 50; var d = 10; var b = new Array();
    var a = setInterval(function () {
        var h = getHeartPoint(d);
        var e = true;
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
            if (j < Garden.options.bloomRadius.max * 1.3) {
                e = false;
                break
            }
        }
        if (e) {
            b.push(h);
            garden.createRandomBloom(h[0], h[1])
        }
        if (d >= 30) {
            clearInterval(a);
            showMessages()
        } else {
            d += 0.2
        }
    }, c)
}
function timeElapse(c) {
    var e = Date();
    var f = (Date.parse(e) - Date.parse(c)) / 1000;
    var g = Math.floor(f / (3600 * 24));
    f = f % (3600 * 24);
    var b = Math.floor(f / 3600);
    if (b < 10) {
        b = "0" + b
    }
    f = f % 3600;
    var d = Math.floor(f / 60);
    if (d < 10) {
        d = "0" + d
    }
    f = f % 60;
    if (f < 10) {
        f = "0" + f
    }
    var a = '<span class="digit">' + g + '</span> 天 <span class="digit">' + b + '</span> 小时 <span class="digit">' + d + '</span> 分钟 <span class="digit">' + f + "</span> 秒";
    $("#elapseClock").html(a)
}
function showMessages() {
    $("#messages").fadeIn(1314, function () {
        showLoveU()
    })
}
function adjustWordsPosition() {
    $("#words").css("position", "absolute");
    $("#words").css("top", offsetY - 69);
    $("#words").css("left", offsetX - 100)
}
function showLoveU() {
    $("#loveu").fadeIn()
    // 根据日期不同, 显示情书弹窗
    year = new Date().getFullYear()
    month = new Date().getMonth() + 1
    day = new Date().getDate()
    $('#item').load('./letters/' + year + month + day + '.html', function (e) {
        if ($('#item').html()) {
            $('#item').popup({
                time: 1000,
                classAnimateShow: 'flipInX',
                classAnimateHide: 'hinge',
            });
        }
    })
}
