/* var getJSON = function(url, callback) {
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
} */

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

    $(".query-header").on('click', function(){
        if(this.id == "query1"){
            if($(".result1").css("display") == "none"){
                $(".result1").show(800);
            } else {
                $(".result1").hide(800);
            }
        } else if(this.id == "query2"){
            if($(".result2").css("display") == "none"){
                $(".result2").show(800);
            } else {
                $(".result2").hide(800);
            }
        } else if(this.id == "query3"){
            if($(".result3").css("display") == "none"){
                $(".result3").show(800);
            } else {
                $(".result3").hide(800);
            }
        } else if(this.id == "query4"){
            if($(".result4").css("display") == "none"){
                $(".result4").show(800);
            } else {
                $(".result4").hide(800);
            }
        } else if(this.id == "query5"){
            if($(".result5").css("display") == "none"){
                $(".result5").show(800);
            } else {
                $(".result5").hide(800);
            }
        } else if(this.id == "query6"){
            if($(".result6").css("display") == "none"){
                $(".result6").show(800);
            } else {
                $(".result6").hide(800);
            }
        } else if(this.id == "query7"){
            if($(".result7").css("display") == "none"){
                $(".result7").show(800);
            } else {
                $(".result7").hide(800);
            }
        } else if(this.id == "query8"){
            if($(".result8").css("display") == "none"){
                $(".result8").show(800);
            } else {
                $(".result8").hide(800);
            }
        } else if(this.id == "query9"){
            if($(".result9").css("display") == "none"){
                $(".result9").show(800);
            } else {
                $(".result9").hide(800);
            }
        } else if(this.id == "query10"){
            if($(".result10").css("display") == "none"){
                $(".result10").show(800);
            } else {
                $(".result10").hide(800);
            }
        } else if(this.id == "query11"){
            if($(".result11").css("display") == "none"){
                $(".result11").show(800);
            } else {
                $(".result11").hide(800);
            }
        } else if(this.id == "query12"){
            if($(".result12").css("display") == "none"){
                $(".result12").show(800);
            } else {
                $(".result12").hide(800);
            }
        }

    });

    $(".button-submit").on('click', function(){
        let input = $("#myo-input").val();
        let url = 'http://localhost:5000/query/' + input;

        /* getJSON(url, function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                alert('Your query count: ' + data.query.count);
            }
        }); */

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