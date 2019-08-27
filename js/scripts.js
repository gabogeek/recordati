$( document ).ready(function() {
  // Handler for .ready() called.
  $('.button-collapse').sideNav({
      menuWidth: 220, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  /*$(window).resize(function(){
	if ($(window).width() <= 784){	
		$('.button-collapse').sideNav('hide');
	}	
  });*/

   $('.modal').modal();

   /*$('#cerrar_modal1').modal('close');*/

   $('#on_menu_sec').mouseover(function(){
      $('.menu_secundario').show();
   });
   $('#on_menu_sec').mouseout(function(){
      $('.menu_secundario').hide();
   });

});