var map = null;

function boot() {
    Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: getMap });
}

// Load up Bing Map and initialize map properties and geo location
// This happens on start-up
function getMap() {
    map = new Microsoft.Maps.Map($gel("bingMap"), {
        credentials: getKey(),
        customizeOverlays: true,
        enableClickableLogo: true,
        enableSearchLogo: false,
        showDashboard: true,
        showBreadcrumb: true,
        showCopyright: true,
        showMapTypeSelector: false,
        zoom: 7,
        labelOverlay: Microsoft.Maps.LabelOverlay.hidden
    });

    map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.road });

    window.onresize = resizeWin;
    resizeWin();

    setGeoLocation();
}

// Set/reset the map based on the user's geo location
function setGeoLocation() {
    // Check for geo location support
    if (navigator.geolocation) {
        // Use method getCurrentPosition to get coordinates
        navigator.geolocation.getCurrentPosition(function (position) {
            // Access appropriate coordinates
            map.setView({ zoom: 15, center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude) });
        });
    }
    else {
        // Set to centre of North America
        map.setView({ zoom: 4, center: new Microsoft.Maps.Location(47.23591995239258, -93.52752685546875) });
    }
}

// Event handler entry point to load all pins
function loadPins() {
    callServer("LoadPinSetData", "");
}

// Main AJAX entry point
function callServer(requestMethod, clientRequest) {
    var pageMethod = "default.aspx/" + requestMethod;

    $.ajax({
        url: pageMethod,   // Current Page, Method  
        data: JSON.stringify({ request: clientRequest }), // parameter map as JSON  
        type: "POST", // data has to be POSTed  
        contentType: "application/json", // posting JSON content      
        dataType: "JSON",  // type of data is JSON (must be upper case!)  
        timeout: 600000,    // AJAX timeout  
        success: function (result) {
            ajaxCallback(result.d);
        },
        error: function (xhr, status) {
            alert(status + " - " + xhr.responseText);
        }
    });
}

// Callback function from jQuery AJAX
// handles a single callback
function ajaxCallback(serverResponse) {
    if (serverResponse)
        finishLoadPins(serverResponse);
}

// Take all the pin location data and add pins to the map
function finishLoadPins(pinData) {
    var locArray = [];
    var rows = pinData.split("~");

    for (var i = 0; i < rows.length; i++) {
        var shop = rows[i].split("|");

        var latLong = new Microsoft.Maps.Location(parseFloat(shop[1]), parseFloat(shop[2]));
        currentPin = createMapPin(latLong, shop[0]);
        locArray.push(latLong);
    }

    var bestview = Microsoft.Maps.LocationRect.fromLocations(locArray);
    map.setView({ bounds: bestview });
}

// Function creates a single pin and returns a reference to the pin
function createMapPin(latLong, shopName) {
    var pinImg = "/imagespins/pinimg.png";

    var pin = new Microsoft.Maps.Pushpin(latLong, {
        icon: pinImg,
        anchor: new Microsoft.Maps.Point(8, 8),
        draggable: true,
        width: 48,
        height: 48
    });

    pin.title = shopName;
    pin.newProp = "\n\nLondon, Ontario\n";

    // Add handlers for the pushpin events
    Microsoft.Maps.Events.addHandler(pin, "mousedown", displayEventInfo);
    Microsoft.Maps.Events.addHandler(pin, "dragend", endDragHandler);
    map.entities.push(pin);

    return pin;
}

// Event handler fires when the pin drag operation is finished
function endDragHandler(e) {
    var loc = e.entity.getLocation();
    var endLat = loc.latitude.toFixed(4);
    var endLong = loc.longitude.toFixed(4);

    e.entity.setOptions({ icon: "/imagespins/pinimg.png" });

    alert(e.entity.title + " " + e.entity.newProp + " " + endLat + " " + endLong);
}

// Event handler fires when user clicks a pin
function displayEventInfo(e) {
    if (e.targetType == "pushpin") {

    }
}

// Event handler sets the geo location for the user
function manualLocation() {
    var geoLocationProvider = new Microsoft.Maps.GeoLocationProvider(map);
    geoLocationProvider.getCurrentPosition();
}

// Removes all the pins from the map
function clearMap() {
    for (var i = map.entities.getLength() - 1; i >= 0; i--) {
        var pushpin = map.entities.get(i);
        if (pushpin instanceof Microsoft.Maps.Pushpin)
            map.entities.removeAt(i);
    }
}

// THE STUFF BELOW AFFECTS THE SIZING AND FORMAT OF THE LEFT FRAME
/////////////////////////////////////////////////////////////////////
// Entry for resize event handlers both portrait and landscape
function resizeWin() {
    if (window.innerHeight >= window.innerWidth)
        resizeWinPortrait();
    else
        resizeWinLandScape();
}

// Resize the window when the device or screen is in portrait
function resizeWinPortrait() {
    var mapSize = 0.6;
    $gel("bingMap").style.height = (window.innerHeight * mapSize) + "px";
    $gel("bingMap").style.width = (window.innerWidth - 22) + "px";
    $gel("bingMap").style.top = "-10px";

    $gel("fContainer").style.left = "0px";
    $gel("fContainer").style.top = (window.innerHeight * mapSize) + "px";

    return;
}

// Resize the window when the device or screen is in landscape
function resizeWinLandScape() {
    var mapSize = 0.45;
    var bingWidth = window.innerWidth * mapSize;

    $gel("bingMap").style.width = bingWidth + "px";
    $gel("bingMap").style.top = "-10px";
    $gel("bingMap").style.height = window.innerHeight + "px";

    $gel("fContainer").style.top = "4px";
    $gel("fContainer").style.left = bingWidth - 5 + "px";
    $gel("fContainer").style.right = "2px";
    $gel("fContainer").style.height = window.innerHeight + "px";

    return;
}

// document.getElementById shortcut, reduces code size
function $gel(docElem) {
    return document.getElementById(docElem);
}