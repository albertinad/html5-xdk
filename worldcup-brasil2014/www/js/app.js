// app framework features configuration
$.ui.autoLaunch = false; 
$.feat.nativeTouchScroll = true;
$.ui.slideSideMenu = true;
$.ui.splitview = false;
$.ui.openLinksNewTab = false;

/**
 * Populales a list DOM object with stadiums information.
 */
function createStadiumsList(stadiums) {
    var stadiumsListPage = $('#stadiums-list');
    var listMarkup = $('<ul class="list"></ul>');
    var stadiumEntry = null;
    var stadium = null;
    
    for(var i = 0, len = stadiums.size(); i < len; i++) {
        stadium = stadiums.get(i);
        
        stadiumEntry = $('<li><a href="#stadium-detail/' + stadium.id + '">' + stadium.name + '</a></li>');
        
        listMarkup.append(stadiumEntry);
    }
    
    stadiumsListPage.append(listMarkup);
};

/**
 * Creates a map object and add a marker for each stadium.
 */
function addStadiumsToMap(stadiums) {
    var map = L.map('map').setView([-15.604017, -56.121633], 4);
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="">Intel XDK</a>'
    }).addTo(map);
    
    for(var i = 0, len = stadiums.size(); i < len; i++) {
        var stadium = stadiums.get(i);        
        L.marker([stadium.lat(), stadium.lng()]).addTo(map).bindPopup(stadium.name);
    }    
    
    $('#stadiums-map').bind('loadpanel', function() {
        map.invalidateSize(true);
    });
};

/**
 * Add the stadium information in the view (stadium detail panel).
 */
function populateStadiumDetail(stadium) {
    var detail = $('#detail-stadium');
    var title = $('#title');
    var image = $('#image');
    var matches = $('#matches');
    
    title.text(stadium.name);
    image.attr('src', stadium.image);
    matches.text(stadium.info);
};

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    //alert(states[networkState]);
    
    return (networkState !== Connection.UNKNOWN && networkState !== Connection.NONE);
}

$.ui.ready(function() {
    // app starts here 
    var stadiums = Worldcup.stadiums;
    
    $('#stadium-detail').bind('loadpanel', function(evt) {
        //url would be #stadium-detail/1
        var url=document.location.hash.replace("#" + evt.target.id + "/","");
        var params=url.split("/");
        var id = params[0] | 0;        
        var stadium = stadiums.getById(id);
        
        populateStadiumDetail(stadium);
    });
    
    createStadiumsList(stadiums);
    
    addStadiumsToMap(stadiums);
});


// lifecycle callbacks

function onDeviceReady() {
    $.ui.launch();
    
    intel.xdk.device.hideSplashScreen();
    
    navigator.notification.beep(2);
    navigator.notification.vibrate(2000);
    
    intel.xdk.notification.alert('Welcome!', 'Brasil 2014', 'Ok');
};

function onResume() {
    console.log('onResume');
};

function onPause() {
    console.log('onPause');
};

// intel xdk native bridge
/*document.addEventListener('intel.xdk.device.ready', function() {
    $.ui.launch();    
    intel.xdk.device.hideSplashScreen();
}, false);*/

// cordova
document.addEventListener('deviceready', onDeviceReady, false);

document.addEventListener('resume', onPause, false);

document.addEventListener('pause', onResume, false);

// web app not in a cordova - crosswalk context
document.addEventListener('DOMContentLoaded', function() {
    $.ui.launch();
}, false);

