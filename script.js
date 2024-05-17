var T_XO = [];
var T_Remlir = ["", "", "", "", "", "", "", "", ""];
var Var_Win = "";

var speech = new SpeechSynthesisUtterance();
function dire(nom) {
  speech.text = "Bravo" + nom + "a gagné !!!";
  speech.volume = 1;
  speech.lang = "fr-Fr";
  speechSynthesis.speak(speech);
}

function remplir(id) {
  if (
    document.getElementById("J1").value != "" &&
    document.getElementById("J2").value != ""
  ) {
    if (Var_Win == "") {
      if (T_XO.length == 0) {
        document.getElementById(id).value = "X";
        T_XO.push("X");
        let i = parseInt(id) - 1;
        T_Remlir[i] = "X";
      } else {
        if (document.getElementById(id).value == "") {
          let J = T_XO.length - 1;
          if (T_XO[J] == "X") {
            document.getElementById(id).value = "O";
            T_XO.push("O");
            let i = parseInt(id) - 1;
            T_Remlir[i] = "O";
          } else {
            document.getElementById(id).value = "X";
            T_XO.push("X");
            let i = parseInt(id) - 1;
            T_Remlir[i] = "X";
          }
        }
      }
      verefier(id);
    }
    if (Var_Win == "Win") {
      if (T_Remlir[id - 1] == "X") {
        document
          .getElementById("msg1")
          .setAttribute("style", " display: contents;");
        document
          .getElementById("J1")
          .setAttribute("style", "box-shadow: 10px 0px 65px 10px gold;");
        dire(document.getElementById("J1").value);
      }
      if (T_Remlir[id - 1] == "O") {
        document
          .getElementById("msg2")
          .setAttribute("style", " display: contents;");
        document
          .getElementById("J2")
          .setAttribute("style", "box-shadow: 10px 0px 65px 30px gold;");
        dire(document.getElementById("J2").value);
      }
      let btn = document.createElement("button");
      let a = document.createElement("a");
      a.setAttribute("href", "index.html");
      a.textContent = "Rejouer";
      btn.appendChild(a);
      document.getElementById("btnRejouer").appendChild(btn);
      const spanxElements = document.querySelectorAll(".spanx");

      spanxElements.forEach((element) => {
        element.removeAttribute("onclick");
      });
    }
    if (Var_Win == "" && T_XO.length == 9) {
      alert("Aucun a Gagné ☻☻☻☻");
      let btn = document.createElement("button");
      let a = document.createElement("a");
      a.setAttribute("href", "index.html");
      a.textContent = "Rejouer";
      btn.appendChild(a);
      document.getElementById("btnRejouer").appendChild(btn);
    }
  } else {
    alert("Nom Joueurs !!");
  }
}

function verefier(id) {
  if (id == "1") {
    if (T_Remlir[0] == T_Remlir[1] && T_Remlir[0] == T_Remlir[2])
      Var_Win = "Win";
    if (T_Remlir[0] == T_Remlir[3] && T_Remlir[0] == T_Remlir[6])
      Var_Win = "Win";
    if (T_Remlir[0] == T_Remlir[4] && T_Remlir[0] == T_Remlir[8])
      Var_Win = "Win";
  }
  if (id == "2") {
    if (T_Remlir[1] == T_Remlir[0] && T_Remlir[1] == T_Remlir[2])
      Var_Win = "Win";
    if (T_Remlir[1] == T_Remlir[4] && T_Remlir[1] == T_Remlir[7])
      Var_Win = "Win";
  }
  if (id == "3") {
    if (T_Remlir[2] == T_Remlir[1] && T_Remlir[2] == T_Remlir[0])
      Var_Win = "Win";
    if (T_Remlir[2] == T_Remlir[4] && T_Remlir[2] == T_Remlir[6])
      Var_Win = "Win";
    if (T_Remlir[2] == T_Remlir[5] && T_Remlir[2] == T_Remlir[8])
      Var_Win = "Win";
  }
  if (id == "4") {
    if (T_Remlir[3] == T_Remlir[0] && T_Remlir[3] == T_Remlir[6])
      Var_Win = "Win";
    if (T_Remlir[3] == T_Remlir[4] && T_Remlir[3] == T_Remlir[5])
      Var_Win = "Win";
  }
  if (id == "5") {
    if (T_Remlir[4] == T_Remlir[1] && T_Remlir[4] == T_Remlir[7])
      Var_Win = "Win";
    if (T_Remlir[4] == T_Remlir[3] && T_Remlir[4] == T_Remlir[5])
      Var_Win = "Win";
    if (T_Remlir[4] == T_Remlir[2] && T_Remlir[4] == T_Remlir[6])
      Var_Win = "Win";
    if (T_Remlir[4] == T_Remlir[0] && T_Remlir[4] == T_Remlir[8])
      Var_Win = "Win";
  }
  if (id == "6") {
    if (T_Remlir[5] == T_Remlir[2] && T_Remlir[5] == T_Remlir[8])
      Var_Win = "Win";
    if (T_Remlir[5] == T_Remlir[3] && T_Remlir[5] == T_Remlir[4])
      Var_Win = "Win";
  }
  if (id == "7") {
    if (T_Remlir[6] == T_Remlir[0] && T_Remlir[6] == T_Remlir[3])
      Var_Win = "Win";
    if (T_Remlir[6] == T_Remlir[7] && T_Remlir[6] == T_Remlir[8])
      Var_Win = "Win";
    if (T_Remlir[6] == T_Remlir[4] && T_Remlir[6] == T_Remlir[2])
      Var_Win = "Win";
  }
  if (id == "8") {
    if (T_Remlir[7] == T_Remlir[4] && T_Remlir[7] == T_Remlir[1])
      Var_Win = "Win";
    if (T_Remlir[7] == T_Remlir[6] && T_Remlir[7] == T_Remlir[8])
      Var_Win = "Win";
  }
  if (id == "9") {
    if (T_Remlir[8] == T_Remlir[2] && T_Remlir[8] == T_Remlir[5])
      Var_Win = "Win";
    if (T_Remlir[8] == T_Remlir[0] && T_Remlir[8] == T_Remlir[4])
      Var_Win = "Win";
    if (T_Remlir[8] == T_Remlir[6] && T_Remlir[8] == T_Remlir[7])
      Var_Win = "Win";
  }
}
