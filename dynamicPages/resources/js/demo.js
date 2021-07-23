       console.log('begin loading_1');
               $( "#test" ).load("resources/html/demo_1.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $(this).html( msg + xhr.status + " " + xhr.statusText );
  }else{ 
            console.log("Status " + xhr.status + " - " + xhr.statusText);
            console.log('loaded txt file_1');
  };
            });