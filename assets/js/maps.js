let map;
let places;
let infoWindow;
let markers = [];
let searchFor;
const MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 15,
            lng: 0
        },
        mapTypeControl: true,
        panControl: true,
        zoomControl: true,
        streetViewControl: true
    });
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("info-content")
    });

    places = new google.maps.places.PlacesService(map);

    //Reverse Geocode initiated onclick #submit---------------------------
    document.getElementById('submit').addEventListener('click', function() {
        clearResults();
        clearMarkers();
        //Reverse Geocode from Google Developer---------------------------
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        geocodeLatLng(geocoder, map, infowindow);
    });
}

function geocodeLatLng(geocoder, map, infowindow) {
    const input = document.getElementById("latlng").value;
    const latlngStr = input.split(",", 2);
    const latlng = {
        lat: parseFloat(latlngStr[0]),
        lng: parseFloat(latlngStr[1])
    };
    geocoder.geocode({
        location: latlng
    }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                map.setZoom(13);
                //center the latlng location on the map
                map.setCenter(latlng);
                const marker = new google.maps.Marker({
                    position: latlng,
                    map: map,

                });

            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

//Nearby place type search by click---------------------------
document.getElementById("hotel").addEventListener("click", function() {
    searchFor = ['lodging'];
    search();
    clearMarkers();
});

document.getElementById("food").addEventListener("click", function() {
    searchFor = ['restaurant', 'bar', 'cafe', 'meal_takeaway'];


    search();
    clearMarkers();

});

document.getElementById("sights").addEventListener("click", function() {
    searchFor = ['museum', 'bowling_alley'];

    search();
    clearMarkers();

});

// Search for place type in the selected city, within the viewport of the map.
function search() {
    const search = {
        bounds: map.getBounds(),
        types: searchFor
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each place type found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon
                });
                // If the user clicks a place type marker, show the details of that place type
                // in an info window.

                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

//END - Country choice is default to all in #country.  #country dropdown is hidden in index.html
function dropMarker(i) {
    return function() {
        markers[i].setMap(map);
    };
}

function addResult(result, i) {
    const results = document.getElementById("results");
    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    const markerIcon = MARKER_PATH + markerLetter + ".png";
    const tr = document.createElement("tr");
    tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";

    tr.onclick = function() {
        google.maps.event.trigger(markers[i], "click");
    };
    const iconTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");
    const name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
}

function clearResults() {
    const results = document.getElementById("results");

    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

// Get the place details for a place type. Show the information in an info window,
// anchored on the marker for the placetype that the user selected.
function showInfoWindow() {
    const marker = this;
    places.getDetails({
            placeId: marker.placeResult.place_id
        },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        }
    );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
        '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
        '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.vicinity;

    if (place.formatted_phone_number) {
        document.getElementById("iw-phone-row").style.display = "";
        document.getElementById("iw-phone").textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById("iw-phone-row").style.display = "none";
    }

    // Assign a five-star rating to the place type, using a black star ('&#10029;')
    // to indicate the rating the place type has earned, and a white star ('&#10025;')
    // for the rating points not achieved.
    if (place.rating) {
        let ratingHtml = "";

        for (let i = 0; i < 5; i++) {
            if (place.rating < i + 0.5) {
                ratingHtml += "&#10025;";
            } else {
                ratingHtml += "&#10029;";
            }
            document.getElementById("iw-rating-row").style.display = "";
            document.getElementById("iw-rating").innerHTML = ratingHtml;
        }
    } else {
        document.getElementById("iw-rating-row").style.display = "none";
    }

    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
        let fullUrl = place.website;
        let website = String(hostnameRegexp.exec(place.website));

        if (!website) {
            website = "http://" + place.website + "/";
            fullUrl = website;
        }
        document.getElementById("iw-website-row").style.display = "";
        document.getElementById("iw-website").textContent = website;
    } else {
        document.getElementById("iw-website-row").style.display = "none";
    }
}