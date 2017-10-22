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
                    title:"Vijaya Kumara Menon Hospital",
                    location:{lat:9.9526027,lng:76.3407021}
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
                    title:"LuLu Mall",
                    location:{lat:10.0270753,lng:76.3080901}
                 }
                 ];


var markers = [];

var initMap=function(){

 map=new google.maps.Map(document.getElementById('mapview'),{
        center:{
            lat: 9.980092899999999,
            lng:76.379904
        },
        zoom:12
    });

 for(var i=0;i<locations.length;i++){

   var position = locations[i].location;
   var title = locations[i].title;

   var marker = new google.maps.Marker({
     map: map,
     position: position,
     title: title,
     animation: google.maps.Animation.DROP,
     id: i
          });
   // markers.push(marker);
 }



};
ko.applyBindings();