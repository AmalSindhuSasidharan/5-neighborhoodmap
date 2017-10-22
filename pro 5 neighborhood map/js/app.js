
var initMap=function(){

 map=new google.maps.Map(document.getElementById('map'),{
        center:{
            lat:10.0725583,
            lng:76.37658170000002
        },
        zoom:13
    });



};
ko.applyBindings(new initMap());