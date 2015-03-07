$(document).ready(function() {
  $('#submit').on('click', function(e) {
    e.preventDefault();
    var number = $('#query').val();
 
    if (number % 1 === 0) {
     FizzBuzz(number);
    } else {
      alert('Please enter a number only');
    }

  });
});
 
 var FizzBuzz = function (n) {
  for (var i = 1; i <= n; i++) {

    if (i % 15 === 0) {
      $('section').append('FizzBuzz');
    } else if (i % 3 === 0) {
      $('section').append('Fizz');
    } else if (i % 5 === 0) {
      $('section').append('Buzz');
    } else {
      $('section').append(i);
    }
      $('section').append('<br />');
  }
};