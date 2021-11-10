var question = document.getElementsByClassName("question");
var answer = document.getElementsByClassName("answer");
var i;


$('.question').click(function(){

    
    $(this).toggleClass('active');
    $(this).next().toggleClass('show');

    if( $(this).hasClass('active') ){
      $(this).removeClass('active');
      $(this).next().removeClass('show');
    }
    else{
      $('this').removeClass('active');
      $('.answer').removeClass('show');
  
      $(this).toggleClass('active');
      $(this).next().addClass('show');
    }
  
  })



for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  }