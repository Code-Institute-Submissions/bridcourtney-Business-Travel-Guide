//Hiding site information when the page loads
$(document).ready(function(){
  $('#site-info-1').hide();
  $('#site-info-2').hide();
  $('#site-info-3').hide();
  $('#site-info-4').hide();
  $('#site-info-5').hide();
  $('#site-info-6').hide();
});

//Showing & Hiding site information on mouseover & mouseout
$(".image-1").mouseover(function() { 
 $("#site-info-1").show(); 
}); 
$(".image-1").mouseout(function() { 
 $("#site-info-1").hide(); 
});

$(".image-2").mouseover(function() { 
 $("#site-info-2").show(); 
}); 
$(".image-2").mouseout(function() { 
 $("#site-info-2").hide(); 
});
$(".image-3").mouseover(function() { 
 $("#site-info-3").show(); 
}); 
$(".image-3").mouseout(function() { 
 $("#site-info-3").hide(); 
});
$(".image-4").mouseover(function() { 
 $("#site-info-4").show(); 
}); 
$(".image-4").mouseout(function() { 
 $("#site-info-4").hide(); 
});

$(".image-5").mouseover(function() { 
 $("#site-info-5").show(); 
}); 
$(".image-5").mouseout(function() { 
 $("#site-info-5").hide(); 
});
$(".image-6").mouseover(function() { 
 $("#site-info-6").show(); 
}); 
$(".image-6").mouseout(function() { 
 $("#site-info-6").hide(); 
});