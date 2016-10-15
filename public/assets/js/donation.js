$(document).ready(function () {
    $('#donateLink').click(function (event) {
        var userId = window.location.search.substring(1).split('=')[1],
        charity = $("select[name='charity']").val(),
        amt = $("input[name='amt']").val();

        $.post('/donation/donate', { userId: userId, charity: charity, amt: amt });
    });
})
