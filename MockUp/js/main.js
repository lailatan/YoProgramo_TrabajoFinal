window.onload = function(){
    var barraCarga = document.getElementById('barra-carga');
    
    barraCarga.style.visibility = 'hidden';
    barraCarga.style.display = 'none';
}
$('document').ready(function(){

    var boton = document.getElementById('boton');
        
    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});