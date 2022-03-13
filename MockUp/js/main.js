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
      var valor= (all.item(0).style.display=="inline-block"?"none":"inline-block");
      
      for (var i=0, max=all.length; i < max; i++) {
        all.item(i).style.display=valor;  
      }
      var all_fill = document.getElementsByClassName("boton-edicion-fill");
      for (var i=0, max=all_fill.length; i < max; i++) {
        all_fill.item(i).style.display=valor;  
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
