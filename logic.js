$(document).ready(function(){

var searches= []

$("#search-btn").on("click", function(event){
    event.preventDefault();
    var cityName= $("#search-text").val()
    $("#search-text").val("")
    searchWeather(cityName)
})
function searchWeather(search){
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=5daa520299ac74c142ce2d492d9e2ed7`,
        dataType: "json"
    }).then(function(data){
        if (searches.includes(search)){
            console.log("this has been included")
        } else{
            createBtn(search)
        }
        searches.push(search)
        
        $("#city-name").text(search+ " " +moment().format("dddd, MMMM Do YYYY"))
        $("#temp").text("Temperature: " +data.main.temp+ "° Fahrenheit")
        $("#humidity").text("Humidity: "+data.main.humidity+"%")
        $("#wind-speed").text("Wind: " +data.wind.speed+" mph")
        forecast(search)
        uvSearch(data.coord.lat, data.coord.lon)
    })
}

$(".history").on("click", "li", function(event){
    event.preventDefault()
    searchWeather($(this).text())
})

function createBtn(searchVal){
    
    var button = $("<button>").text(searchVal)
    var li = $("<li>").html(button)
    $("#button-list").prepend(li)
}

function uvSearch(lat, lon){
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/uvi?appid=5daa520299ac74c142ce2d492d9e2ed7&lat=${lat}&lon=${lon}`,
        dataType: "json"
    }).then(function(response){
        var btn= $("<span>").addClass("btn btn-sm").text(response.value)

        if (response.value > 7.99){
            btn.addClass("btn-danger")
        } else if(response.value <7.98 && response.value >6){
            btn.addClass("btn-warning")
        } else {
            btn.addClass("btn-success")
        }
        $("#uv").html(btn)
})}

function forecast(search){
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=5daa520299ac74c142ce2d492d9e2ed7`,
        dataType: "json"
    }).then(function(data){
        for(i=0; i<6; i++){
            
            $("#5day-forecast").text("5 Day Forecast")
            var forecastTemp = data.list[i].main.temp
            var forecastHumidity = data.list[i].main.humidity
            var weatherIcon = data.list[i].weather[0].icon
            var oneDayForward = new moment().add(1, 'day');
            var twoDayForward = new moment().add(2, 'day');
            var threeDayForward = new moment().add(3, 'day');
            var fourDayForward = new moment().add(4, 'day');
            var fiveDayForward = new moment().add(5, 'day');
            $("#todays-icon").attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
            $("#day1-date").text(oneDayForward.format('dddd MMMM DD'))
            $("#day2-date").text(twoDayForward.format('dddd MMMM DD'))
            $("#day3-date").text(threeDayForward.format('dddd MMMM DD'))
            $("#day4-date").text(fourDayForward.format('dddd MMMM DD'))
            $("#day5-date").text(fiveDayForward.format('dddd MMMM DD'))
            $(`#day${[i]}-icon`).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
            $(`#day${[i]}-temp`).text(`Temperature: ${forecastTemp}° Fahrenheit`)
            $(`#day${[i]}-humidity`).text(`Humidity: ${forecastHumidity}%`)
        }
    })
}})