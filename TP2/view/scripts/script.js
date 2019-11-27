var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'application/json';
    xhr.onload = function() {
        alert('a');
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

$(document).ready(function() {

    $(".queries-container").css("display", "block");

    $(".menu-queries").on('click', function(){
        $(".queries-container").css("display", "block");
        $(".myo-container").css("display", "none");
    });

    $(".menu-queries-own").on('click', function(){
        $(".myo-container").css("display", "block");
        $(".queries-container").css("display", "none");
        let height = $('body').height();
        $(".myo-container").css("height", (height - 80) + "px");
    });

    $(".button-submit").on('click', function(){
        let input = $("#myo-input").val();
        let url = 'http://localhost:5000/query/' + input;

        getJSON(url, function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                alert('Your query count: ' + data.query.count);
            }
        });

        /* var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, true ); // false for synchronous request
        xmlHttp.responseType = 'json';
        xmlHttp.onload = function() {
            var status = xmlHttp.status;
            if (status === 200) {
              callback(null, xmlHttp.response);
            } else {
              callback(status, xmlHttp.response);
            }
        };
        xmlHttp.send();
        console.log(xmlHttp); */

        /* $.getJSON(url, function(data) {
            console.log(data);
            //data is the JSON string
        }); */

        /* $.ajax({
            url: url,
            type: 'GET',
            //data: ,
            //dataType: ,
            success: function(result){
                alert("success");
                console.log(result);
                $(".body-container").append(JSON.stringify(result));
            },
            error: function(error){
                alert("error");
                console.log('error', error);
                $(".body-container").append(JSON.stringify(error));
            }
        }); */
    });

});