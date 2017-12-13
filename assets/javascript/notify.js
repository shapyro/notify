
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
//  user enters zip, date, genre
var zip = "78753"

var jamApiKey = "h6ggf6cq5fedwfpe2szchhrr";

jamQuery = "http://api.jambase.com/events?zipCode=" + zip + "&page=1&api_key=" + jamApiKey + "&o=json"

$.get(jamQuery).done(function(jamresponse) {
  console.log(jamresponse);
  //  need to store band, venue and date info
});

var bitApiKey = "notify";
bitBandQuery = "https://rest.bandsintown.com/artists/ghost%20wolves?app_id=notify" //came_from="+ bitApiKey

$.get(bitBandQuery).done(function(bitBandResponse) {
  console.log(bitBandResponse);
  //  need to store band, venue and date info
});

var bitApiKey = "notify";
bitEventQuery = "https://rest.bandsintown.com/artists/Ghost%20Wolves/events?app_id=notify&date=2017-12-05%2C2018-03-01" //came_from="+ bitApiKey

$.get(bitEventQuery).done(function(bitEventResponse) {
  console.log(bitEventResponse);
  //  need to store band, venue and date info
});
