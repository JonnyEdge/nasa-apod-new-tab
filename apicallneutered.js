jQuery(document).ready(function($) {
  $.get({
    url: "https://api.nasa.gov/planetary/apod?api_key=", // Your own API key goes here
    
    success: function(result) {
      $('#image').attr('src', result.hdurl)
      $('#title').text(result.title)
      $('#blurb').text(result.explanation)
      $('img').fadeIn(500)
      $('#info').fadeIn(500)
      $('#attribution').fadeIn(500)
    },
    
    error: function(error) {
      console.log(error);
    }
  });
});
