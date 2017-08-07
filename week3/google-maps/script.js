var area="New York";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x640&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDgrcvjZEcf9eiQqsnCdzGbKqHiYdFU_fE";

function changeArea(){
    area=document.getElementById("newArea").value;
    area=document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x640&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDgrcvjZEcf9eiQqsnCdzGbKqHiYdFU_fE";
}
