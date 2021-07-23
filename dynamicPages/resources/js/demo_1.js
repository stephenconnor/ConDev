console.log('begin loading_2');
               $( "#test_1" ).load( "resources/html/demo_2.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $(this).html( msg + xhr.status + " " + xhr.statusText );
  }else{ 
            console.log("Status " + xhr.status + " - " + xhr.statusText);
            console.log('loaded txt file_2');
            };
});