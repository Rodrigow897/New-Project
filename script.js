function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*
  if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */
  // o classList.toggle faz exatamente essa logica de codigo
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //pegar a tag img
  //substituir a img
  //se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a img normal
}
