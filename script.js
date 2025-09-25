/* Makes the clicked social link remove it's focus state when retunrning to page */
$(".btn").mouseup(function(){
  $(this).blur();
});

$(document).ready(function(){
  $("#arrowToAbout").delay(3000).fadeIn("slow");
});

/* Makes the first anchor jump 50 pixels up so the fixed navbar is ok -- changed by CSS a[id*="a-"]
window.addEventListener("hashchange", function() { scrollBy(0, -50) })*/
