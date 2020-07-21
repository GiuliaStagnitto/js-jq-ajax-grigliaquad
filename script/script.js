function addClickListener(){

  var target = $('.quadrato');
  target.click(addRandomNumber);
}

function addRandomNumber(){

  var target = $(this);

  $.ajax({
    url:'https://flynn.boolean.careers/exercises/api/random/int',
    method:'GET',
    success: function (data, state){

      var success = data['success'];
      var value = data['response'];

      console.log(value);

      if (value <= 5) {
        target.addClass('giallo');
        target.append(value);
      } else {
        target.addClass('verde');
        target.append(value);
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
