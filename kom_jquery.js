

  $(document).ready(function () {
    // Excercise 2
    // $("input[name!='color']").siblings().append(' goon');

    // Excercise 3
    //$("input[name|='p']").attr('value','spass');

    //Excercise 4
    //$('p').before().prepend('fun ');

    //Excercise 5
    // $('<div>Total Fun </div>').insertBefore('p');

    // Excercise 6
    // $("div").children().css('background-color','yellow');

    //Excercise 7

    // $('<p id="fun">').insertBefore('input');
    // $('input').css('padding','1em');
    // $('#fun').css({'padding' : '1em','background-color': 'red',
    //  'box-shadow' : '2px 2px 20px red'});
    //
    // $('input').blur(function () {
    //   $('#fun').text('You blurred me!');
    //   $('#fun').slideUp();
    //
    // })
    // $('input').focus(function(){
    //   $('#fun').slideDown();
    //
    // })

    // Excercise 8

    $('div').click( function(){
      let color = $(this).attr('style').split(':');
      $('p').text('That div is ' + color[1]);
      $('p').fadeIn(200);
      $('p').fadeOut(1000);

  })



  });
