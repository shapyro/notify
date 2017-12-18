
//  BrandonC work
var apiKey = "E-mail hopefully coming";
var buttonArray = [];
  
  //If we get freemusic archive API keys:
//  function displayBandInfo(){
//    var bandName = $(this).attr("data-name");
//    var queryURL = "https://freemusicarchive.org/api/trackSearch?q=" + bandName + "&limit=10";    
//    $.ajax({
//        url: queryURL,
//        method: "GET"
//      }).done(function(choice){
//        console.log(choice.data[0]);
//        for(i= 0; i<choice.data.length; i++){
//          $('#band').prepend("<img src=" + choice.data[i].images.original_still.url +" data state = 'still' style = 'height = 400px' class= 'gif'>");
//        }
//        })
//  }

	
	//If we get freemusic archive API keys:
// 	function displayBandInfo(){
// 		var bandName = $(this).attr("data-name");
// 		var queryURL = "https://freemusicarchive.org/api/trackSearch?q=" + bandName + "&limit=10";		
// 		$.ajax({
// 				url: queryURL,
// 				method: "GET"
// 			}).done(function(choice){
// 				console.log(choice.data[0]);
// 				for(i= 0; i<choice.data.length; i++){
// 					$('#band').prepend("<img src=" + choice.data[i].images.original_still.url +" data state = 'still' style = 'height = 400px' class= 'gif'>");
// 				}
// 				})
// 	}


//  BrandonS work
//  user enters zip, date, and?
//  may need to get artwork from giphy or spotiFY or some other API
//  may need zip/city converter API

//  unused variables
var bandName = "Lettuce";
var beginDate = "2017-12-05";
var endDate = "2018-03-01";
var zip = "78753"
//

var cityName = "";
var songkickAPI = "pnFUa6ukavVrRL6g";
var songkickMetro = "";

$(document).ready(function(){

  //  Need DOM data input from user
  $('.form-group').on('click', '#submit', function(){
    $('#overlay').css("display", "none");
    $(".showlist").empty();
    console.log("click!");
    cityName = $('#city-drpdn').val();
    console.log(cityName);

    // get city metro ID from SongKick
    var songkickLocationQuery = "https://api.songkick.com/api/3.0/search/locations.json?query=" + cityName + "&apikey=" + songkickAPI;

    $.get(songkickLocationQuery).done(function(songkickLocation) {
      songkickMetro = songkickLocation.resultsPage.results.location[0].metroArea.id;

      //  get event info for metro area from SongKick
      var songkickQuery = "https://api.songkick.com/api/3.0/metro_areas/" + songkickMetro + "/calendar.json?apikey=" + songkickAPI;

      $.get(songkickQuery).done(function(songkickData) {
        // songkickData... get some show info for a Metro Area
        for (var i = 0; i < 10; i++) {
          console.log(songkickData.resultsPage.results);
  
          var venueURL = songkickData.resultsPage.results.event[i].venue.uri;
          var artistImage = songkickData.resultsPage.results.event[i].performance["0"].artist.id;
          console.log(songkickData.resultsPage.results.event[i].performance[0].artist.displayName)
      
          var showDiv = $('<div>');
          showDiv.addClass('showDiv');
          showDiv.append('<img id="bandPic" src="https://images.sk-static.com/images/media/profile_images/artists/' + artistImage + '/huge_avatar" />');
          showDiv.append(
            `<div class="bandInfo">
              <div class="artist">${songkickData.resultsPage.results.event[i].performance["0"].artist.displayName}</div>
              <div class="venue">@ ${songkickData.resultsPage.results.event[i].venue.displayName}</div>
            </div>
            <div class="showDate">${songkickData.resultsPage.results.event[i].start.date}</div>
            `
          );
          showDiv.append('<a id="venueLink" href="' + venueURL + '">Go to Venue</a>' + "<br>");
          $(".showlist").append(showDiv);

        }

      });

    });

  })

})


    // Brandon C map addition (has to be in this function)

//  var mapAPIKey = "AIzaSyDWRATTUjfzqHd8GWYoogCWb3uZyJkNK-4";
//  var lat = parseFloat(songkickData.resultsPage.results.event[i].venue.lat);
//  var lon = parseFloat(songkickData.resultsPage.results.event[i].venue.lng);
//  console.log(lat);
//  console.log(lon);
//  var local = {
//    lat: lat, 
//    lng: lon 
//  };
//  console.log(local);
//  function initMap() {
//          var map = new google.maps.Map(document.getElementById("map"), {
//            zoom: 19,
//            center: local
//          });
//          var marker = new google.maps.Marker({
//            position: local,
//            map: map
//          });
//          $("#movies-view").append(map);
//          console.log("map: " + map);
//  };
//  initMap();

// 	var mapAPIKey = "AIzaSyDWRATTUjfzqHd8GWYoogCWb3uZyJkNK-4";
// 	var lat = parseFloat(songkickData.resultsPage.results.event[i].venue.lat);
// 	var lon = parseFloat(songkickData.resultsPage.results.event[i].venue.lng);
// 	console.log(lat);
// 	console.log(lon);
// 	var local = {
// 		lat: lat, 
// 		lng: lon 
// 	};
// 	console.log(local);
// 	function initMap() {
// 	       	var map = new google.maps.Map(document.getElementById("map"), {
// 	          zoom: 19,
// 	          center: local
// 	        });
// 	        var marker = new google.maps.Marker({
// 	          position: local,
// 	          map: map
// 	        });
// 	        $("#movies-view").append(map);
// 	        console.log("map: " + map);
// 	};
// 	initMap();


//  --------------------------------------------------------------
//  jamBase
// var jamApiKey = "h6ggf6cq5fedwfpe2szchhrr";
// var jamQuery = "http://api.jambase.com/events?zipCode=" + zip + "&page=1&api_key=" + jamApiKey + "&o=json";
// var jamQuery2 = "http://api.jambase.com/artists?name=" + bandName + "&page=0&api_key=" + jamApiKey + "&o=json";
// var zipQuery = "https://www.zipcodeapi.com/rest/IDaZkPalkusSje1nG8WziVpnG895ZLzEyq4N5BoxtCzYD9yEPeJJpbD6aBheyDPC/info.json/" + zip + "/radians";

// $.get(jamQuery).done(function(jamresponse) {
//   console.log(jamresponse);
//   //  need to store band, venue and date info
// });

// $.get(jamQuery2).done(function(jamresponse2) {
//   console.log(jamresponse2.Artists);
//   //  need to store band, venue and date info
// });

//  Search for JUST A BAND
// var bitApiKey = "notify";
// bitBandQuery = "https://rest.bandsintown.com/artists/ghost%20wolves?app_id=notify" //came_from="+ bitApiKey

// //  get simple data from bandsintown
//  get simple data from bandsintown
// $.get(bitBandQuery).done(function(bitBandResponse) {
//   console.log(bitBandResponse.name);
//   //  need to store band, venue and date info
// });

//  Find a band using 'notify' using band name and city name
// var bitApiKey = "notify";
//  bandsintown API requires bandname apparently
//  bitEventQuery = "https://rest.bandsintown.com/artists/Ghost%20Wolves/events?app_id=notify&date=2017-12-05%2C2018-03-01" //came_from="+ bitApiKey
// var bitEventQuery = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=notify&date=" + beginDate + "%2C" + endDate; //came_from="+ bitApiKey

//  get data from bandsintown
// $.get(bitEventQuery).done(function(bitEventResponse) {
//   console.log(bitEventResponse);
//   // console.log(bitEventResponse.venue.city);
//   for (i = 0; i < bitEventResponse.length; i++) {
//     // console.log(bitEventResponse[i].venue.city);
//     if (bitEventResponse[i].venue.city === cityName){

//       console.log(bitEventResponse[i].venue.city);
//       console.log(bitEventResponse[i].venue.name);
//       console.log(bitEventResponse[i].venue.city);
//       console.log(bitEventResponse[i].lineup);
//       var info = bitEventResponse[i];
//       console.log(info.lineup[0] + " @ " + info.venue.name + " (" + info.venue.city + ", " + info.venue.region + ")");
//     }
//   }
//   //  need to store band, venue and date info
// });


// zip code to city name
// $.get(zipQuery).done(function(zipResponse) {
//   console.log("here's some zip data!");
//   console.log(zipResponse);
// });
