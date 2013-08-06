/**
 * Created with IntelliJ IDEA.
 * User: david
 * Date: 8/6/13
 * Time: 1:49 PM
 * To change this template use File | Settings | File Templates.
 */
var SAINT_PETE = new google.maps.LatLng(59.935838, 30.274715);

function initMap() {
    map = new google.maps.Map(document.getElementById("map_canvas"), {
        center: SAINT_PETE,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: 'white'
    });
}

$(function() {
    initMap();
});