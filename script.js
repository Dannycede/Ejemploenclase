function iniciarMap(){
    var coord = {lat:-2.1894128 ,lng: -79.8890662};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}