
$(document).ready(function () {  
    const dwn = $('#dwn')
    const dwnspd = $('#dwnspd')
    const agr = $('#agregation')
    const time = $('#time')
    const output = $('#output')
    
    function convertTime() {
        var minutes = parseInt(time).val(seconds)
        seconds = minutes * 60
        output.val(seconds);
    }
    
    $( "#time" ).on( "blur", function() {
        $( this ).val(function( i, val ) {
          return val.toUpperCase();
        });
      });
});