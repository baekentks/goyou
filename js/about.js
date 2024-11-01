var introduceBtn = $('li.introduce > a');
var mapBtn = $('li.map > a');
var introduceBox = $('div.about');
var mapBox = $('div.map');

console.log(introduceBtn);
console.log(mapBtn);
console.log(introduceBox);
console.log(mapBox);

 introduceBtn.on('click',function(){
	introduceBox.addClass('on');
	mapBox.removeClass('on');
 }); 
 mapBtn.on('click',function(){
	mapBox.addClass('on');
	introduceBox.removeClass('on');
 });