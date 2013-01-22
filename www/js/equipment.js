// JavaScript Document

function getList(str) {
	$.getJSON("http://www.airhorndesign.com/dj-equipment/equipment-list.php?id="+str, function(data){ 
		$('.models').remove();
		
		for(var i=0;i<data.equipment.length;i++){
			document.getElementById(data.equipment[i].brand + '-list').innerHTML += 
			'<div data-role="collapsible" class="models"><h3>' + data.equipment[i].model + '</h3><div class="center-wrapper"><img class="model-images" src="images/' + data.equipment[i].image + '"/></div><div class="ui-block-solo hidden"><h3 class="price">Price: <span class="blue">$' + data.equipment[i].price + '</span></h3></div><div class="ui-block-solo hidden"><h3>Features:</h3><ul class="feature-list"><li>' + data.equipment[i].feat1 + '</li><li>' + data.equipment[i].feat2 + '</li><li>' + data.equipment[i].feat3 + '</li><li>' + data.equipment[i].feat4 + '</li></ul></div><div class="ui-grid-a"><div class="ui-block-a"><h3>Features:</h3><ul class="feature-list"><li>' + data.equipment[i].feat1 + '</li><li>' + data.equipment[i].feat2 + '</li><li>' + data.equipment[i].feat3 + '</li><li>' + data.equipment[i].feat4 + '</li></ul></div><div class="ui-block-b"><h3 class="price">Price: <span class="blue">$' + data.equipment[i].price + '</span></h3></div></div><div class="ui-block-solo"><p>' + data.equipment[i].description + '</p></div></div>';
		}
		
		
		$('.refresh').collapsibleset();
		$('.refresh').collapsibleset('refresh');

		
	});
}

$(document).bind("mobileinit",function(){
	$.mobile.defaultPageTransition = 'none';
	$.mobile.defaultDialogTransition = 'none';
});
