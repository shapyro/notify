//  user enters zip, date, genre


var jamApiKey = "h6ggf6cq5fedwfpe2szchhrr";
var zip = "78753"
jamQuery = "http://api.jambase.com/events?zipCode=" + zip + "&page=1&api_key=" + jamApiKey + "&o=json"

$.get(jamQuery).done(function(jamresponse) {
  console.log(jamresponse);
  //  need to store band, venue and date info
});