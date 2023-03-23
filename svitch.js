function light1() {
  document.getElementById('butondark').style.backgroundColor = 'black';
  document.getElementById('butonlight').style.backgroundColor = 'var(--myorange)';
  document.getElementById('butondark').style.borderWidth = '0px';
  document.getElementById('butonlight').style.borderWidth = '2px';
  document.getElementById('butonlight').style.borderRadius = '20px';
  document.getElementById('butonlight').style.borderColor = 'var(--myorange2)';
  //document.getElementById('butonlight').style.color = 'Black';
  //document.getElementById('butondark').style.color = 'white';
  document.body.style.color = 'Black';
  document.body.style.backgroundColor = 'white';
  document.body.style.setProperty("--codebg", "lightGray")
  document.body.style.setProperty("--codeborder", "black")
  document.body.style.setProperty("--linkcolor", "blue")
}


function dark1() {
  document.getElementById('butondark').style.backgroundColor = 'var(--myorange)';
  document.getElementById('butonlight').style.backgroundColor = 'Black';
  document.getElementById('butondark').style.borderWidth = '2px';
  document.getElementById('butonlight').style.borderWidth = '0px';
  document.getElementById('butonlight').style.borderRadius = '20px';
  //document.getElementById('butonlight').style.borderColor = 'Black';
  //document.getElementById('butonlight').style.color = 'white';
//  document.getElementById('butondark').style.color = 'Black';
  document.body.style.backgroundColor = '#0b172a';
  document.body.style.color = 'white';
  document.body.style.setProperty("--codebg", "#07101e")
  document.body.style.setProperty("--codeborder", "Cyan")
  document.body.style.setProperty("--linkcolor", "Cyan")

}
function lighti() {
  document.getElementById('butondark').style.backgroundColor = 'black';
  document.getElementById('butonlight').style.backgroundColor = '#d65813';
  document.getElementById('butondark').style.borderWidth = '0px';
  document.getElementById('butonlight').style.borderWidth = '2px';
  document.getElementById('butonlight').style.borderRadius = '20px';
  document.getElementById('butonlight').style.borderColor = 'var(--myorange2)';
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'Black';
  document.body.style.borderColor = 'Black';
  document.body.style.setProperty("--codebg", "lightGray");
  document.body.style.setProperty("--codeborder", "black");
  document.body.style.setProperty("--linkcolor", "blue");

}

function darki() {
  document.getElementById('butonlight').style.backgroundColor = 'black';
  document.getElementById('butondark').style.backgroundColor = '#d65813';
  document.getElementById('butonlight').style.borderWidth = '0px';
  document.getElementById('butondark').style.borderWidth = '2px';
  document.body.style.backgroundColor = '#0b172a';
  document.body.style.color = 'white';
  document.body.style.borderColor = 'Cyan';
  document.body.style.setProperty("--codebg", "#07101e");
  document.body.style.setProperty("--codeborder", "Cyan");
  document.body.style.setProperty("--linkcolor", "Cyan");

}
