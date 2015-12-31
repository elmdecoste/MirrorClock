/**
 * Created by Beem on 12/23/15.
 */

$(document).ready(function(){
    getTime();
    getWeather();
    setInterval(getWeather, 60000);
    setInterval(getTime, 1000);
});

function getTime() {
    var date = new Date();
    var time = moment(date).format('hh mm').split(' ');
    $('#hour').html(time[0]);
    $('#min').html(time[1]);
}

function getWeather(){
    console.log("Getting Weather");;
    $.simpleWeather({
        location: 'Leander, TX',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            html = '<div><div><i class="icon-'+weather.code+'"></i></div><div><h3> '+weather.temp+'&deg;'+weather.units.temp+'</h3></div><div>';
            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}

