function addClickListener(){

  var target = $('.quadrato');
  target.click(addRandomNumber);
}

function addRandomNumber(){

  $.ajax({
    url:'https://flynn.boolean.careers/exercises/api/random/int',
    method:'GET',
    success: function (data, state){


      var success = data['success'];
      var value = data['response'];

      console.log(value);

      if (value <= 5) {
        var quadrato = $('.quadrato');
        quadrato.addClass('giallo');
      } else {
        var quadrato = $('.quadrato');
        quadrato.addClass('verde');
      }
    },
    error: function ( request, state, error){
      console.log(request);
      console.log(state);
      console.log(error);
    }
  });
}

function init(){
  addClickListener();
}

$(document).ready(init);
