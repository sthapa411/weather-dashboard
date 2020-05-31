// Getting user's current geocoordinates to display local weather forcast

function getLocation() {
    var l = document.getElementById("recent-search");
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      l.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
   lat = position.coords.latitude;
   lon =  position.coords.longitude;
   console.log(lat);
   console.log(lon);

   var apiKey = "6b8de7a084282aaf686c43378158492e"
   var uvWeatherURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
   var currentWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=6b8de7a084282aaf686c43378158492e";

   function currentWeather(){
    $.ajax({
        url: currentWeatherURL,
        method: "GET"
      }).then(function(currentResponse) {
        console.log(currentResponse);
        // Get values for main local weather section and append them to the display
        var currentCity = currentResponse.city.name;
        var currentDate = currentResponse.list[0].dt_txt;
        var localIcon = "https://openweathermap.org/img/w/" + currentResponse.list[0].weather[0].icon + ".png";
        var currentTemp = currentResponse.list[0].main.temp;
        var localHumid = currentResponse.list[0].main.humidity;
        var localWind = currentResponse.list[0].wind.speed;
        $("#local-area").prepend(currentCity);
        $("#local-date").prepend(currentDate);
        $("#local-icon").attr("src", localIcon);
        $("#local-temp").prepend(currentTemp);
        $("#local-humidity").prepend(localHumid);
        $("#local-wind").prepend(localWind);
        
         // Day 1
        var localDateOne = currentResponse.list[1].dt_txt;
        var localIconOne = "https://openweathermap.org/img/w/" + currentResponse.list[1].weather[0].icon + ".png";
        var localTempOne = currentResponse.list[1].main.temp;
        var localHumidOne = currentResponse.list[1].main.humidity;
        $("#local-date-one").prepend(localDateOne);
        $("#local-icon-one").attr("src", localIconOne);
        $("#local-temp-one").prepend(localTempOne); 
        $("#local-humidity-one").prepend(localHumidOne);
  
        // Day 2
        var localDateTwo = currentResponse.list[6].dt_txt;
        var localIconTwo = "https://openweathermap.org/img/w/" + currentResponse.list[6].weather[0].icon + ".png";
        var localTempTwo = currentResponse.list[6].main.temp;
        var localHumidTwo = currentResponse.list[6].main.humidity;
        $("#local-date-two").prepend(localDateTwo);
        $("#local-icon-two").attr("src", localIconTwo);
        $("#local-temp-two").prepend(localTempTwo); 
        $("#local-humidity-two").prepend(localHumidTwo);
  
        // Day 3
        var localDateThree = currentResponse.list[14].dt_txt;
        var localIconThree = "https://openweathermap.org/img/w/" + currentResponse.list[14].weather[0].icon + ".png";
        var localTempThree = currentResponse.list[14].main.temp;
        var localHumidThree = currentResponse.list[14].main.humidity;
        $("#local-date-three").prepend(localDateThree);
        $("#local-icon-three").attr("src", localIconThree);
        $("#local-temp-three").prepend(localTempThree); 
        $("#local-humidity-three").prepend(localHumidThree);
  
        // Day 4
        var localDateFour = currentResponse.list[22].dt_txt;
        var localIconFour = "https://openweathermap.org/img/w/" + currentResponse.list[22].weather[0].icon + ".png";
        var localTempFour = currentResponse.list[22].main.temp;
        var localHumidFour = currentResponse.list[22].main.humidity;
        $("#local-date-four").prepend(localDateFour);
        $("#local-icon-four").attr("src", localIconFour);
        $("#local-temp-four").prepend(localTempFour); 
        $("#local-humidity-four").prepend(localHumidFour);

        // Day 5
        var localDateFive = currentResponse.list[30].dt_txt;
        var localIconFive = "https://openweathermap.org/img/w/" + currentResponse.list[30].weather[0].icon + ".png";
        var localTempFive = currentResponse.list[30].main.temp;
        var localHumidFive = currentResponse.list[30].main.humidity;
        $("#local-date-five").prepend(localDateFive);
        $("#local-icon-five").attr("src", localIconFive);
        $("#local-temp-five").prepend(localTempFive); 
        $("#local-humidity-five").prepend(localHumidFive);
       });
   }

   //  UV value 
   
   function localUv(){
    $.ajax({
      url: uvWeatherURL,
      method: "GET"
      }).then(function(localUV) {
        console.log(localUV);
        var localUvItem = localUV.value;
        $("#local-uv").prepend(localUvItem);
      });
   }

   localUv();

   currentWeather();
  }
  getLocation();

  
  

  // Get 5 day forecast via city search
var cities = [];
function citySearch() {

  $("#search-selected").css("display", "block");
  var cityinput = $("#search-field").val();
  console.log(cityinput);
  var value = $(this).data("name");
  var APIkey = "6b8de7a084282aaf686c43378158492e"
  var queryURL = "https://api.openweathermap.org/data/2.5/find?q=" + value + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response2) {
    console.log(response2);

    // value for search city section / append them to the display
    var selectCity = response2.list[0].name;
    var selectIcon = "https://openweathermap.org/img/w/" + response2.list[0].weather[0].icon + ".png";
    var selectTemp = response2.list[0].main.temp;
    var selectHumidity = response2.list[0].main.humidity;
    var selectWind = response2.list[0].wind.speed;
    $("#select-area").text(selectCity);
    $("#select-icon").attr("src", selectIcon);
    $("#select-temp").text(selectTemp);
    $("#select-humid").text(selectHumidity);
    $("#select-wind").text(selectWind);

   // Get values for search city 5 day forecast sections
   // Day 1
   var cityDateOne = response2.list[1].dt_txt;
   var cityIconOne = "https://openweathermap.org/img/w/" + response2.list[0].weather[0].icon + ".png";
   var cityTempOne = response2.list[0].main.temp;
   var cityHumidOne = response2.list[0].main.humidity;
   $("#city-icon-one").attr("src", cityIconOne);
   $("#city-temp-one").text(cityTempOne); 
   $("#city-humid-one").text(cityHumidOne);

   // Day 2
   var cityIconTwo = "https://openweathermap.org/img/w/" + response2.list[1].weather[0].icon + ".png";
   var cityTempTwo = response2.list[1].main.temp;
   var cityHumidTwo = response2.list[1].main.humidity;
   $("#city-icon-two").attr("src", cityIconTwo);
   $("#city-temp-two").text(cityTempTwo); 
   $("#city-humid-two").text(cityHumidTwo);

   // Day 3
   var cityIconThree = "https://openweathermap.org/img/w/" + response2.list[2].weather[0].icon + ".png";
   var cityTempThree = response2.list[2].main.temp;
   var cityHumidThree = response2.list[2].main.humidity;
   $("#city-icon-three").attr("src", cityIconThree);
   $("#city-temp-three").text(cityTempThree); 
   $("#city-humid-three").text(cityHumidThree);

   // Day 4
   var cityIconFour = "https://openweathermap.org/img/w/" + response2.list[3].weather[0].icon + ".png";
   var cityTempFour = response2.list[3].main.temp;
   var cityHumidFour = response2.list[3].main.humidity;
   $("#city-icon-four").attr("src", cityIconFour);
   $("#city-temp-four").text(cityTempFour); 
   $("#city-humid-four").text(cityHumidFour);

   // Block 5
   var cityIconFive = "https://openweathermap.org/img/w/" + response2.list[4].weather[0].icon + ".png";
   var cityTempFive = response2.list[4].main.temp;
   var cityHumidFive = response2.list[4].main.humidity;
   $("#city-icon-five").attr("src", cityIconFive);
   $("#city-temp-five").text(cityTempFive); 
   $("#city-humid-five").text(cityHumidFive);

  });

}

var retrieveHistory = localStorage.getItem("Search Result");
// This function determines is retriveHistory is null or already exists
if (retrieveHistory) {
  cities = retrieveHistory.split(",");
  renderButtons();
}

// Clear Search History Function
  $("#clear-history").click(function() {
    localStorage.clear();
    cities = [];
    $("button.city-name").remove();
  });


// Function for displaying recent searches
function renderButtons() {

  // Deleting the cities prior to adding new ones
  $("#recent-search").empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city-name");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);

    var history = localStorage.getItem("Search Result") || 0;
    localStorage.setItem("Search Result", cities);

    // Adding the button to the buttons-view 
    $("#recent-search").prepend(a);
  }
}

$("#search-button").on("click", function(event) {
  event.preventDefault();
  var city = $("#search-field").val().trim();
  var savedCity = $("#search-field").val().trim();
  cities.push(city);
  renderButtons();
});

// Adding a click event listener to all elements with a class of "city-name"
$(document).on("click", ".city-name", citySearch);

renderButtons();