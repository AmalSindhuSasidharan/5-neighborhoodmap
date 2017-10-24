var locations=[
                {
                    title:"Hill Palace Museum",
                    location:{lat:9.9526386,lng:76.3639139}
                 },
                 {
                    title:"Hindutemple Sree Poornathrayeesa temple",
                    location:{lat:9.9450109,lng:76.342111}
                 },
                 {
                    title:"RLV College of Fine Arts",
                    location:{lat:9.9422187,lng:76.3449798}
                 },
                 {
                    title:"Vegetarisches Sree Saravana Bhavan",
                    location:{lat:9.9533481,lng:76.3408252}
                 },
                 {
                    title:"Govt. Ayurveda Hospital",
                    location:{lat:9.9248246,lng:76.3586416}
                 },
                 {
                    title:"Vyttila Mobility Hub",
                    location:{lat:9.9686167,lng:76.3214095}
                 },
                 {
                    title:"State Bank Of India",
                    location:{lat:9.9518318,lng:76.3404544}
                 },
                 {
                    title:"Wonderla",
                    location:{lat:10.027077,lng:76.39163}
                 },
                 {
                    title:"LuLu Mall",
                    location:{lat:10.0270753,lng:76.3080901}
                 }

                 ];



    var markers = ko.observableArray();




var initMap=function(){



var largeInfowindow = new google.maps.InfoWindow();

// added map to page

 map=new google.maps.Map(document.getElementById('mapview'),{
        center:{
            lat: 9.980092899999999,
            lng:76.379904
        },
        zoom:12
});




// Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('0091ff');
        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFF24');
    // This function takes in a COLOR, and then creates a new marker
      // icon of that color. The icon will be 21 px wide by 34 high, have an origin
      // of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
};



 for(var i=0;i<locations.length;i++){
   var position = locations[i].location;
   var title = locations[i].title;

   var marker = new google.maps.Marker({
     map: map,
     position: position,
     title: title,
     animation: google.maps.Animation.DROP,
     icon: defaultIcon,
     id: i
          });
     markers.push(marker);

   // Create an onclick event to open the large infowindow at each marker and make it bounce .
        marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
        makeBounce(this);
        });
       // Two event listeners - one for mouseover, one for mouseout,
          // to change the colors back and forth.
        marker.addListener("mouseover",function(){
            this.setIcon(highlightedIcon);
        });
        marker.addListener("mouseout",function(){
            this.setIcon(defaultIcon);
        });
        // function called by list clicking
        marker.listClick(this){
        console.log("haaai just checking the link");
        };

}


        // bounce marker when click on it

function makeBounce(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){marker.setAnimation(null);},700);
  };


function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);

          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });


            }
};
















};
ko.applyBindings();