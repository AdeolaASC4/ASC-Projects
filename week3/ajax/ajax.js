//id
//c896b1ed

//key
//16199c2ef150b9850a6465ac92d25b80

var id = "c896b1ed";
var key ="16199c2ef150b9850a6465ac92d25b80";
var foodURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&"+
              "appId="+id+"&appKey="+key;

$.ajax({
    url: foodURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2> This "+ name + " has "+cals+" kcal!!!!</h2>");
    }
});