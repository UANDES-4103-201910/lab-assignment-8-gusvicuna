// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
    $(".key").click(function(){
        console.log(this.innerHTML)
    });
});