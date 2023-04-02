function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=487ddf86d57d7a06357564af671f1106')
.then(response => response.json())
.then(data => {

   
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "temp").innerHTML = "temp:" + Number(data.list[i].main.temp- 296.76).toFixed(1)+ "°C";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Main").innerHTML = "Condition:" + String( data.list[i].weather[0].main);
    }
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "humidity").innerHTML = "Humidity:" + Number(data.list[i].main.humidity )+"%";
    }
   
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<7; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Delhi";
    GetInfo();
}


//Getting and displaying the text for the upcoming seven days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }