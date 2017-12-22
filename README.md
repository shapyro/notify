# notify
provide a way for users to find bands playing, where they are playing, and maybe some preview music

APIs
------
[Spotify](https://developer.spotify.com/web-api/)
[bandsintown](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0)
[googlemaps](https://developers.google.com/maps/documentation/geocoding/start)
[jambase](http://developer.jambase.com/)


# Overview

It all started with an idea to find shows, but there were many discussions on discovery of music and what data would be needed to satisfy a search for discovery. Notify ultimately became a website that generates a list of live shows in your city as a means of providing a way to experience new music primarilty through live shows. 

We were inspired by the universal craving for an easier way to get information about bands, venues and live shows. 

From Genre, to Event Date, to simply naming a band you want to see, the team had to figure this out by running different API requests to see what we could get, where even that held it's own barrier to entry by needing to successfully request and receive API access keys from various search partners.

We discovered many APIs, but one stood out to us with the most encompassing set of data, and satisfied a search request with just a city name, so we ran with Songkick.

I would like to see an Advanced search page to utilize every API that returns data for a specific band once a user clicks on a band name. Ultimately, the problem to solve is aggregating all data available, and parsing and filtering through the data to arrive at a singular location for everything searchable for a band, to include tour dates and song snippets for user discovery of live music. 

Another feature would be to successfully log user input and facilitate ratings for bands for all users to know what shows they MUST SEE TONIGHT! Because there is much to hear out there worth seeing, knowing, and sharing.

Oh, and we're working on a map thing, too. Could be handy to know where you're going :)

# Contributions:

The team and I worked on a little bit of everything.

- Songkick API Request and Response data
- Creating HTML to contain the data dynamicaly using jQuery
- Map Coordinate relay from Songkick to Google
- Login functionality

## Home page and giphy gifs courtesy of Jess V.
