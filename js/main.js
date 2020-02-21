$( document ).ready(function() {
 
let wrapper_slider = $('.wrapper_slider');
let href_class = $(' .one');
let hrefId_two = $('.two');
let hrefId_free = $('.free');

let block_one = $('#one');
let block_two = $('#two');
let block_free = $('#free');


href_class.click(function(event) {
	wrapper_slider.addClass(' active');
	block_one.addClass('active');
	block_two.removeClass('active');
	block_free.removeClass('active');


	
});
hrefId_two.click(function(event) {
	wrapper_slider.addClass(' active');
	block_one.removeClass('active');
	block_two.addClass('active');
	block_free.removeClass('active');
	
});
hrefId_free.click(function(event) {
	wrapper_slider.addClass(' active');
	block_one.removeClass('active');
	block_two.removeClass('active');
	block_free.addClass('active');
	
});
})