var deletePoll = function(code) { 
                console.log(code);

        $.post("/poll/delete/"+code, $.param({ id:code })).done(function(data) {
            console.log(data);
            //$('.result').html('<div class="text-danger pull-right">Poll updated</div>')
        });
 };
$(function() {

    $('form#createPoll').submit(function(event) {
        event.preventDefault();
        var title = $('input#title').val();
        var options = $('textarea#options').val();
        $.post('?', $.param({ options: options, title: title }), function(uid) {
            window.location.replace(window.location.origin + '/poll/get/' + uid);
        });
    });
    $('form#updatePoll').submit(function(event) {
        var action = (event.target.action);
        event.preventDefault();

        var title = $('input#title').val();
        var options = $('textarea#options').val();
        $.post(action, $.param({ options: options, title: title })).done(function(data) {
            $('.result').html('<div class="text-danger pull-right">Poll updated</div>')
        });
    });
    $('form#votePoll').submit(function(event) {
        var action = (event.target.action);
        event.preventDefault();
        var options = $('#options').val();

        $.post(action, $.param({ options: options })).done(function(data) {

            console.log(data);
            $('.result').html('<div class="text-danger pull-right">Poll updated</div>')
        }).then(function(data) {
            if ($('#myChart').length) {
                $('#myChart').empty();

                $.get("/poll/data/" + uid).done(function(data) {}).then(function(data) {
                    var myDoughnutChart = new Chart($('#myChart'), {
                        type: 'doughnut',
                        data: data,
                        options: {
                            responsive: true
                        }
                    });
                });
            }
        });
    });

    if ($('#myChart').length) {
        console.log(uid);
        $.get("/poll/data/" + uid).done(function(data) {
            console.log(data);
        }).then(function(data) {
            var myDoughnutChart = new Chart($('#myChart'), {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true
                }
            });
        });
    };


});