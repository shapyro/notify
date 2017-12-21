
//  BrandonS work
//  user enters zip, date, and?
//  may need to get artwork from giphy or spotiFY or some other API
//  may need zip/city converter API

//  unused variables
var bandName = "Lettuce";
var beginDate = "2017-12-05";
var endDate = "2018-03-01";
var zip = "78753"


var cityName = "";
var songkickAPI = "pnFUa6ukavVrRL6g";
var songkickMetro = "";

$(document).ready(function(){

  $('#city-drpdn').click(function(){
    $('.showme').show();
  })
  //  Need DOM data input from user
  $('.form-group').on('click', '#submit', function(){
    // $('.showme').css("display",'none');
    $('.showme').hide();
    // $('#overlay').css("display", "none");
    $(".showlist").empty();
    cityName = $('#city-drpdn').val();
    $("#left").empty();
    $("#right").empty();

    // GIPHY API QUERY
    // API KEY A3PdxAJAU30VlFlFYSJb0ArONXqO3J52
    // SAMPLE QUERY: 
    var giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=A3PdxAJAU30VlFlFYSJb0ArONXqO3J52&tag=" + cityName + "&fmt=json";
    for (var i=0; i<10; i++) {
      $.get(giphyURL).done(function(response){
        var giphyImage = $("<img>");
        giphyImage.attr("id", "giphyImg");
        giphyImage.attr("src", response.data.fixed_width_downsampled_url);
        $("#left").append(giphyImage);
      });
    };
    for (var i=0; i<10; i++) {
      $.get(giphyURL).done(function(response){
        var giphyImage = $("<img>");
        giphyImage.attr("id", "giphyImg");
        giphyImage.attr("src", response.data.fixed_width_downsampled_url);
        $("#right").append(giphyImage);
      });  
    };


    // get city metro ID from SongKick
    var songkickLocationQuery = "https://api.songkick.com/api/3.0/search/locations.json?query=" + cityName + "&apikey=" + songkickAPI;

    $.get(songkickLocationQuery).done(function(songkickLocation) {
      songkickMetro = songkickLocation.resultsPage.results.location[0].metroArea.id;

      //  get event info for metro area from SongKick
      var songkickQuery = "https://api.songkick.com/api/3.0/metro_areas/" + songkickMetro + "/calendar.json?apikey=" + songkickAPI;

      $.get(songkickQuery).done(function(songkickData) {
        // songkickData... get some show info for a Metro Area
        for (var i = 0; i < 10; i++) {  
          var venueURL = songkickData.resultsPage.results.event[i].venue.uri;
          var artistImage = songkickData.resultsPage.results.event[i].performance["0"].artist.id;
          var latVar = songkickData.resultsPage.results.event[i].venue.lat;
          var lngVar = songkickData.resultsPage.results.event[i].venue.lng;

          $(".showlist").append(`
            <div class="showDiv">
            <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 ">
            <img class="bandPic" src="https://images.sk-static.com/images/media/profile_images/artists/ ${artistImage} /huge_avatar" /></div>
            <div class="col-lg-9 col-md-9 col-sm-12 bandInfo">
            <div class="row"> 
            <div class="col-lg-6 col-md-12 artist"> ${songkickData.resultsPage.results.event[i].performance["0"].artist.displayName}</div>
            <div class="col-lg-6 col-md-12 venue" id="locations location-${[i]}" latitude="${latVar}" longitude="${lngVar}">@ ${songkickData.resultsPage.results.event[i].venue.displayName}</div>
            </div>
            <div class="row"> 
            <div class="col-lg-12 col-md-12 col-sm-12 showDate"> ${songkickData.resultsPage.results.event[i].start.date}</div></div></div>
          `);

        } //end FOR loop

        $(".showDiv").hover(function(){
         $(this).css({
         'background-color': '#A398CF',
         'transition-duration': '0.3s'
         });
          }, function(){
          $(this).css({
         'background-color': '#00cecb',
         'transition-duration': '0.3s'
         });
         });

      });

    });

  })

    $('body').on('mouseenter mouseleave', '.venue', function(){
			var mapAPIKey = "AIzaSyDWRATTUjfzqHd8GWYoogCWb3uZyJkNK-4";
      var lat = parseFloat($(this).attr('latitude'));
      var lon = parseFloat($(this).attr('longitude'));
			console.log(lat);
			console.log(lon);
			var local = {
				lat: lat, 
				lng: lon 
			};
			console.log(local);
			function initMap() {
			       	var map = new google.maps.Map(document.getElementById("map"), {
			          zoom: 19,
			          center: local
			        });
			        var marker = new google.maps.Marker({
			          position: local,
			          map: map
			        });
			        $("#map").html(map);
			};
			initMap();
			});

})





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
