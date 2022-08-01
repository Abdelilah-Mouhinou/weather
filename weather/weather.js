$(document).ready(function () {
    $("#submit-weather").click(function () {
      var city = $("#city").val();
      
      if (city != "") {
        $.ajax({
          url:
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric" +
            "&APPID=c600c195153b39e64f45363924535863",
            type: "GET",
            dateType: "jsonp",
            success: function(data){
                  var widget = show(data);
  
                  $("#show").html(widget);
                  $("#city").val('');
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("Please Enter a valid name!");
            }
        });
        $("#error").html("");
        // if ($("#show").html() == "") {
        //   alert("Enter a valid name");
        // }
      } else {
        $("#error").html("Field cannot be empty");
       
      }
    });

    $("#city").keyup(function(e) {
      var city = $("#city").val();
      if (e.keyCode == 13) {
      if (city != "") {
        $.ajax({
          url:
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric" +
            "&APPID=c600c195153b39e64f45363924535863",
            type: "GET",
            dateType: "jsonp",
            success: function(data){
                  var widget = show(data);
  
                  $("#show").html(widget);
                  $("#city").val('');
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("Please Enter a valid name!");
            }
        });
        $("#error").html("");
        // if ($("#show").html() == "") {
        //   alert("Enter a valid name");
        // }
      } else {
        $("#error").html("Field cannot be empty");
       
      }
    }
    });


  });


  function show(data){
      return "<p>"+ $("#city").val() +" : </p>"+ 
            "<h2>Weather: "+ data.weather[0].main +"</h2>" +
              "<h2>Description: "+ data.weather[0].description +"</h2>" +
              "<h2>Temperature: "+ data.main.temp +"</h2>" +
              "<h2>Humidity: "+ data.main.humidity +"</h2>" +
              "<h2>Wind speed: "+ data.wind.speed +"</h2>";
  };

  // function onchange(){
  //   // var city = $("#city").val();
  //   // var p = $("p").text();
  //   // if (city != p) {
  //   //   alert("enter a valid name")
  //   // }
  // }