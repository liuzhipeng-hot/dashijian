$(function () {
    $("#denglu").on('click', function () {
        $(".dengye").hide()
        $('.zhuye').show()
    })
    $("#zhuce").on('click', function () {
        $(".dengye").show()
        $('.zhuye').hide()
    })
})