var requestedBand; 
var genre;

var queryURL = "http://showlistaustin.com/";
function displayMovieInfo() {
	$.ajax({
          url: queryURL,
          method: "GET"
    }).done(function(response) {
          console.log(response);
          $('#movies-view').append("<div></div>");
          // Retrieves the Rating Data
          $('#movies-view').append("<h1>" + response.Rated + "</h1>" + "<h1>" + response.Released + "</h1>"+ "<h1>" + response.Plot + "</h1>" + "<img src =" +response.Poster+">");
      });
}
displayMovieInfo();