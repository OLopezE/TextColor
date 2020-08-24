window.onload = function(){
  inicio()
}

function ocultar(){
  document.getElementById("galeria").style.display = 'none'
  document.getElementById("principal").style.display = 'none'
  document.getElementById("contacto").style.display = 'none'
}

function inicio(){
  ocultar()
  document.getElementById("principal").style.display = 'block'
}

document.getElementById('btInicio').onclick = function(){
  inicio()

}

document.getElementById('btGaleria').onclick = function(){
  ocultar()
  document.getElementById("galeria").style.display = 'block'
}
document.getElementById('btContacto').onclick = function(){
  ocultar()
  document.getElementById("contacto").style.display = 'block'
}

