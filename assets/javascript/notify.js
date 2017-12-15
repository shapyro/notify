
//  BrandonC work
// var requestedBand; 
// var genre;

// var queryURL = "http://showlistaustin.com/";
// function displayMovieInfo() {
// 	$.ajax({
//           url: queryURL,
//           method: "GET"
//     }).done(function(response) {
//           console.log(response);
//           $('#movies-view').append("<div></div>");
//           // Retrieves the Rating Data
//           $('#movies-view').append("<h1>" + response.Rated + "</h1>" + "<h1>" + response.Released + "</h1>"+ "<h1>" + response.Plot + "</h1>" + "<img src =" +response.Poster+">");
//       });
// }
// displayMovieInfo();


//  BrandonS work
//  user enters zip, date, and?
//  may need to get artwork from giphy or spotiFY or some other API
//  may need zip/city converter API

//  Need DOM data input from user
var bandName = "Lettuce";
//  Trim input?
var cityName = "Austin";
var beginDate = "2017-12-05";
var endDate = "2018-03-01";
var zip = "78753"
//  Need date input and can use moment.js to convert data and range

//  jamBase
var jamApiKey = "h6ggf6cq5fedwfpe2szchhrr";
var jamQuery = "http://api.jambase.com/events?zipCode=" + zip + "&page=1&api_key=" + jamApiKey + "&o=json";
var jamQuery2 = "http://api.jambase.com/artists?name=" + bandName + "&page=0&api_key=" + jamApiKey + "&o=json";


$.get(jamQuery).done(function(jamresponse) {
  console.log(jamresponse);
  //  need to store band, venue and date info
});

// $.get(jamQuery2).done(function(jamresponse2) {
//   console.log(jamresponse2.Artists);
//   //  need to store band, venue and date info
// });

//  Search for JUST A BAND
// var bitApiKey = "notify";
// bitBandQuery = "https://rest.bandsintown.com/artists/ghost%20wolves?app_id=notify" //came_from="+ bitApiKey

// //  get simple data from bandsintown
// $.get(bitBandQuery).done(function(bitBandResponse) {
//   console.log(bitBandResponse.name);
//   //  need to store band, venue and date info
// });

//  Find a band using 'notify' using band name and city name
var bitApiKey = "notify";
//  bandsintown API requires bandname apparently
//  bitEventQuery = "https://rest.bandsintown.com/artists/Ghost%20Wolves/events?app_id=notify&date=2017-12-05%2C2018-03-01" //came_from="+ bitApiKey
var bitEventQuery = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=notify&date=" + beginDate + "%2C" + endDate; //came_from="+ bitApiKey

//  get data from bandsintown
$.get(bitEventQuery).done(function(bitEventResponse) {
  console.log(bitEventResponse);
  // console.log(bitEventResponse.venue.city);
  for (i = 0; i < bitEventResponse.length; i++) {
    // console.log(bitEventResponse[i].venue.city);
    if (bitEventResponse[i].venue.city === cityName){
      console.log(bitEventResponse[i].venue.city);
      console.log(bitEventResponse[i].venue.name);
      console.log(bitEventResponse[i].venue.city);
      console.log(bitEventResponse[i].lineup);
      var info = bitEventResponse[i];
      console.log(info.lineup[0] + " @ " + info.venue.name + " (" + info.venue.city + ", " + info.venue.region + ")");
    }
  }
  //  need to store band, venue and date info
});
