function apriSchermReg() {
    $("#logRegChoose").addClass("d-none");

    $("#regist").removeClass("d-none");

}

function apriSchermLog() {
    $("#logRegChoose").addClass("d-none");

    $("#login").removeClass("d-none");
    
}

//java hibernate
function insUser() {
  let varNome = $("#username").val();
  let varPass = $("#password").val();

  let persona = {
      username: varNome,
      passw: varPass

  };
  console.log(varNome + varPass)
  $.ajax(
      {
          url: "http://localhost:8080/Utente/nuovo",
          type: "POST",
          data: JSON.stringify(persona),
          dataType: "json",
          contentType: "application/json",
          success: function(risultato){
              let contenuto = risultato.data;
          },
          error: function(errore) {
              console.log(errore)
          }
      }
  );
}

//php
function insUserPHP() {
    /*
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();

    }

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("risposta").innerHTML=xmlhttp.responseText;

        }
    }
    xmlhttp.open("GET","../api/connect.php?username=" + encodeURIComponent($("#userReg").val()) + "&password=" + encodeURIComponent($("#passwReg").val()), true);
    xmlhttp.send();
    */
    $.ajax({
        url:'localhost:8080/connect.php?username=' + $("#userReg").val() + '&password=' + $("#passwReg").val(),
        complete: function (response) {
            $('#output').html(response.responseText);
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        }
    });
    return false;
}

