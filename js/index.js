const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');


const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};





//tabs js

  // var instance = M.Tabs.init(el, options);

  // // Or with jQuery

  // $(document).ready(function(){
  //   $('.tabs').tabs();
  // });
  //tabs


$("#signup-password").on("focusout", function (e) {
    if ($(this).val() != $("confirm-password").val()) {
        $("#confirm-password").removeClass("valid").addClass("invalid");
    } else {
        $("#confirm-password").removeClass("invalid").addClass("valid");
    }
});

$("#confirm-password").on("keyup", function (e) {
    if ($("#signup-password").val() != $(this).val()) {
        $(this).removeClass("valid").addClass("invalid");
    } else {
        $(this).removeClass("invalid").addClass("valid");
    }
});

//getting location from user
    var x = document.querySelector('#demo');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "</br>Longitude: " + position.coords.longitude;
}

//need form show div on labtest select
 function ShowHideDiv() {
        var Need = document.getElementById("need");
        var Lab = document.getElementById("lab");
        var Test = document.getElementById("Test");
        Lab.style.display = Need.value == "9" ? "block" : "none";
        Test.style.display = Need.value == "9" ? "block" : "none";
    }





// $("#signup-password").on("focusout", function (e) {
//     if ($(this).val() != $("confirm-password").val()) {
//         $("#confirm-password").removeClass("valid").addClass("invalid");
//     } else {
//         $("#confirm-password").removeClass("invalid").addClass("valid");
//     }
// });
