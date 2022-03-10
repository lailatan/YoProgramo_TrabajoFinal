//window.onload = function(){
//    var boton = document.getElementById('boton-arriba');
//    if( window.scrollTop() > 0 ){
//      boton.style.display = 'none';
//    }
//}

$('document').ready(function(){

    //var boton = document.getElementById('boton');
        
    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);       
      });

    $('#boton-login').click(function(){
      var all = document.getElementsByClassName("boton-edicion");
      for (var i=0, max=all.length; i < max; i++) {
        all.item(i).style.display="inline-block";  
      }
      var all_reverse = document.getElementsByClassName("boton-edicion-reverse");
      for (var i=0, max=all_reverse.length; i < max; i++) {
        all_reverse.item(i).style.display="inline-block";  
      }
  });

    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});
