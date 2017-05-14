function initMap() {
        var aalesund = {lat: 62.4718416, lng: 6.149};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: aalesund
        });
        var marker = new google.maps.Marker({
          position: aalesund,
          map: map
    });
}