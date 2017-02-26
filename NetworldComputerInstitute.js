$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      console.log(this.hash);
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})


// window.onload = function(){
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var contact_number = document.getElementById('contact_numbers').value;
//   var area = document.getElementById('areas').value;
//   var maritial_status = document.getElementById('maritial_statuss').value;
//   var gender = document.getElementById('genders').value;
//   var qualification = document.getElementById('qualificationID').value;
//   var age = document.getElementById('ages').value;
//   var reference = document.getElementById('references').value;
//   var comments = document.getElementById('commentss').value;
//   var course = [];
//   $.each($("input[name='courses']:checked"), function(){            
//     course.push($(this).val());
//   });
//   //alert(name+","+email+","+contact_number+","+area+","+maritial_status+","+gender+","+qualification+","+age+","+course.join(", ")+","+reference+","+comments);

//   function sendBtn() {
//     $.ajax({
//       type: 'POST',
//       url: 'https://mandrillapp.com/api/1.0/messages/send.json',
//       data: {
//         'key': 'wSlGMf84RCMpTnenk1VXjQ',
//         'message': {
//           'from_email': 'langhi.sun27@gmail.com',
//           'to': [
//               {
//                 'email': 'langhi.sun27@gmail.com'
//               }
//             ],
//           'autotext': 'true',
//           'subject': 'networldcomputers.com',
//           'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//         }
//       }
//     }).done(function(response) {
//       console.log(response); // if you're into that sorta thing
//     });
//   }
// }

  //console.log(msg);
  // $.ajax({
  //   type: 'POST',
  //     url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  //     data: {
  //       'key': 'wSlGMf84RCMpTnenk1VXjQ',
  //       'message': {
  //         'from_email': 'langhi.sun27@gmail.com',
  //         'to': [
  //             {
  //               'email': 'langhi.sun27@gmail.com'
  //             }
  //           ],
  //         'autotext': 'true',
  //         'subject': 'networldcomputers.com',
  //         'html': msg
  //       }
  //     }
  // });
  // return false;



// $('#sendBtn').click(function() {
  // emailjs.init("user_RtRYlt3QW3BNPYqNivHHT");




  // var service_id = 'mandrillSunil';
  // var template_params = {
  //   reply_email: 'langhi.sun27@gmail.com',
  //   message: msg
  // };

  // emailjs.send(service_id,template_params)
  // .then(
  //   function(response) {
  //     console.log("SUCCESS", response);
  //   }, 
  //   function(error) {
  //     console.log("FAILED", error);
  //   }
  // );





window.onload = function(){
  document.getElementById('sendBtn').onclick = function(e){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact_number = document.getElementById('contact_numbers').value;
    var area = document.getElementById('areas').value;
    var maritial_status = document.getElementById('maritial_statuss').value;
    var gender = document.getElementById('genders').value;
    var qualification = document.getElementById('qualificationID').value;
    var age = document.getElementById('ages').value;
    var reference = document.getElementById('references').value;
    var comments = document.getElementById('commentss').value;
    var course = [];
    $.each($("input[name='courses']:checked"), function(){            
      course.push($(this).val());
    });
    var msg = name+","+email+","+contact_number+","+area+","+maritial_status+","+gender+","+qualification+","+age+","+course.join(", ")+","+reference+","+comments;
    alert(msg);

    // var service_id = 'gmailSunil111';
    // var template_id = 'networldcomputers';
    emailjs.send("gmailSunil111", "networldcomputers", {});

  }
}


