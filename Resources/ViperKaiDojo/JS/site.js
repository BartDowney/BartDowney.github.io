"use strict";

/*
   Viper Kai Dojo Prototype Website
     
   Site Javascript File

   Author: Bart Downey
   Date: 05/13/2021
   
   Filename: site.js

*/

/* Alert Box for Owner Business Management Button */


/* Login Popup */

$(document).ready(function () {
  $("#login").click(function () {
    $("#popup").show("slow");
  });
});

$(document).ready(function () {
  $("#loginsubmit").click(function () {
    $("#popup").hide("slow");

    if (document.getElementById("password").value == "PASSWORD") {
      $(location).attr("href", dashboard());
    } else {
      $(location).attr("href", "#")
    }
  });
});

$(document).ready(function () {
  $("#logout").click(function () {
    $("#popup").hide("slow");

    $(location).attr("href", "../index.html")

  });
});

$(document).ready(function () {
  $("#loginsubmithome").click(function () {
    $("#popup").hide("slow");

    if (document.getElementById("password").value == "PASSWORD") {
      $(location).attr("href", dashboardhome());
    } else {
      $(location).attr("href", "#")
    }
  });
});


function dashboard() {
  var dashboard = document.getElementById("username").value;

  switch (dashboard) {

    case "john": dashboard = "ownerdashboard.html";
      break;

    case "John": dashboard = "ownerdashboard.html";
      break;

    case "JOHN": dashboard = "ownerdashboard.html";
      break;

    case "danny": dashboard = "instructordashboard.html";
      break;

    case "Danny": dashboard = "instructordashboard.html";
      break;

    case "DANNY": dashboard = "instructordashboard.html";
      break;

    case "eli": dashboard = "studentdashboard.html";
      break;

    case "Eli": dashboard = "studentdashboard.html";
      break;

    case "ELI": dashboard = "viperkstudentdashboardaistudents.html";
      break;

    default: dashboard = "../index.html";
      break;
  }

  return dashboard;
}

function dashboardhome() {
  var dashboard = document.getElementById("username").value;

  switch (dashboard) {

    case "john": dashboard = "HTML/ownerdashboard.html";
      break;

    case "John": dashboard = "HTML/ownerdashboard.html";
      break;

    case "JOHN": dashboard = "HTML/ownerdashboard.html";
      break;

    case "danny": dashboard = "HTML/instructordashboard.html";
      break;

    case "Danny": dashboard = "HTML/instructordashboard.html";
      break;

    case "DANNY": dashboard = "HTML/instructordashboard.html";
      break;

    case "eli": dashboard = "HTML/studentdashboard.html";
      break;

    case "Eli": dashboard = "HTML/studentdashboard.html";
      break;

    case "ELI": dashboard = "HTML/studentdashboard.html";
      break;

    default: dashboard = "index.html";
      break;
  }

  return dashboard;
}

/* Registration Confirm Popup */

$(document).ready(function () {
  $("#registrationconfirm").click(function () {
    $("#popupone").hide("slow");

    $(location).attr("href", "../index.html")
  });
});


/* Class Schedules Page Popups */

$(document).ready(function () {
  $("#basicclassone").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#basicclasstwo").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#intermediateclassone").click(function () {
    $("#popuptwo").show("slow");
  });
});

$(document).ready(function () {
  $("#intermediateclasstwo").click(function () {
    $("#popuptwo").show("slow");
  });
});

$(document).ready(function () {
  $("#advancedclass").click(function () {
    $("#popupthree").show("slow");
  });
});

$(document).ready(function () {
  $("#classcloseone").click(function () {
    $("#popupone").hide("slow");
  });
});

$(document).ready(function () {
  $("#classclosetwo").click(function () {
    $("#popuptwo").hide("slow");
  });
});

$(document).ready(function () {
  $("#classclosethree").click(function () {
    $("#popupthree").hide("slow");
  });
});


/* Owner Business Management Popup */

$(document).ready(function () {
  $("#business").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#businessclose").click(function () {
    $("#popupone").hide("slow");
  });
});


/* Add Student Popup */

$(document).ready(function () {
  $("#addstudent").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#addstudentconfirm").click(function () {
    $("#popupone").hide("slow");
    $("#popuptwo").show("slow");
  });
});

$(document).ready(function () {
  $("#addstudentconfirmagain").click(function () {
    $("#popuptwo").hide("slow");
  });
});


/* Current Student Page Popups */

$(document).ready(function () {
  $("#editstudentbutton").click(function () {
    $("#popupone").show("slow");
    $("#editstudentbutton").hide();
    $("#savechanges").show();
  });
});

$(document).ready(function () {
  $("#editstudentconfirm").click(function () {
    $("#popupone").hide("slow");
  });
});

$(document).ready(function () {
  $("#savechangesbutton").click(function () {
    $("#popuptwo").show("slow");
    $("#savechanges").hide();
    $("#editstudentbutton").show();
  });
});

$(document).ready(function () {
  $("#savechangesconfirm").click(function () {
    $("#popuptwo").hide("slow");
  });
});

$(document).ready(function () {
  $("#archivestudentbutton").click(function () {
    $("#popupthree").show("slow");
  });
});

$(document).ready(function () {
  $("#archivestudentconfirm").click(function () {
    $("#popupthree").hide("slow");
  });
});

$(document).ready(function () {
  $("#deletestudentbutton").click(function () {
    $("#popupfour").show("slow");
  });
});

$(document).ready(function () {
  $("#deletestudentconfirm").click(function () {
    $("#popupfour").hide("slow");
  });
});

$(document).ready(function () {
  $("#studentpaymentbutton").click(function () {
    $("#popupfive").show("slow");
  });
});

$(document).ready(function () {
  $("#studentpaymentconfirm").click(function () {
    $("#popupfive").hide("slow");
  });
});

$(document).ready(function () {
  $("#addcommentbutton").click(function () {
    $("#popupsix").show("slow");
  });
});

$(document).ready(function () {
  $("#addcommentconfirmone").click(function () {
    $("#popupsix").hide("slow");
    $("#popupseven").show("slow");
  });
});

$(document).ready(function () {
  $("#addcommentconfirmtwo").click(function () {
    $("#popupseven").hide("slow");
  });
});


/* Attendance Page Popups */

$(document).ready(function () {
  $(".nostudents").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#firstclass").click(function () {
    $("#popuptwo").show("slow");
  });
});

$(document).ready(function () {
  $("#secondclass").click(function () {
    $("#popupthree").show("slow");
  });
});

$(document).ready(function () {
  $("#thirdclass").click(function () {
    $("#popupfour").show("slow");
  });
});

$(document).ready(function () {
  $("#fourthclass").click(function () {
    $("#popupfive").show("slow");
  });
});

$(document).ready(function () {
  $("#fifthclass").click(function () {
    $("#popupsix").show("slow");
  });
});

$(document).ready(function () {
  $("#sixthclass").click(function () {
    $("#popupseven").show("slow");
  });
});

$(document).ready(function () {
  $(".attendanceconfirm").click(function () {
    $("#popupone").hide("slow");
    $("#popuptwo").hide("slow");
    $("#popupthree").hide("slow");
    $("#popupfour").hide("slow");
    $("#popupfive").hide("slow");
    $("#popupsix").hide("slow");
    $("#popupseven").hide("slow");
  });
});


/* My Classes Sign Up Button Popups */

$(document).ready(function () {
  $("#studentsignup").click(function () {
    $("#popupfour").show("slow");
  });
});

$(document).ready(function () {
  $("#confirmsignupone").click(function () {
    $("#popupfour").hide("slow");
    $("#popupfive").show("slow");
  });
});

$(document).ready(function () {
  $("#confirmsignuptwo").click(function () {
    $("#popupfive").hide("slow");
  });
});


/* Manage Classes Popups */

$(document).ready(function () {
  $("#addclass").click(function () {
    $("#popupone").show("slow");
  });
});

$(document).ready(function () {
  $("#addclassconfirm").click(function () {
    $("#popupone").hide("slow");
    $("#popuptwo").show("slow");
  });
});

$(document).ready(function () {
  $("#addclassconfirmagain").click(function () {
    $("#popuptwo").hide("slow");
  });
});

$(document).ready(function () {
  $("#editclass").click(function () {
    $("#popupthree").show("slow");
  });
});

$(document).ready(function () {
  $("#editclassconfirm").click(function () {
    $("#popupthree").hide("slow");
    $("#popupfour").show("slow");
  });
});

$(document).ready(function () {
  $("#editclassconfirmagain").click(function () {
    $("#popupfour").hide("slow");
  });
});

$(document).ready(function () {
  $("#deleteclassconfirm").click(function () {
    $("#popupthree").hide("slow");
    $("#popupfoura").show("slow");
  });
});

$(document).ready(function () {
  $("#deleteclassconfirmagain").click(function () {
    $("#popupfoura").hide("slow");
  });
});

$(document).ready(function () {
  $(".rollcallnostudents").click(function () {
    $("#popupfive").show("slow");
  });
});

$(document).ready(function () {
  $("#nostudentsclose").click(function () {
    $("#popupfive").hide("slow");
  });
});

$(document).ready(function () {
  $(".rollcallstudents").click(function () {
    $("#popupsix").show("slow");
  });
});

$(document).ready(function () {
  $("#rollcallconfirm").click(function () {
    $("#popupseven").show("slow");
  });
});

$(document).ready(function () {
  $("#credentialconfirm").click(function () {
    if (document.getElementById("username").value == "john" || document.getElementById("username").value == "John" || document.getElementById("username").value == "JOHN" || document.getElementById("username").value == "danny" || document.getElementById("username").value == "Danny" || document.getElementById("username").value == "DANNY") {
          $("#popupsix").hide("slow");
          $("#popupseven").hide("slow");
    } else {      
    $("#popupseven").hide("slow");
    }
  });
});





