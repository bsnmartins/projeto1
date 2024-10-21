function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //troca img
  const img = document.querySelector("#profile img")

  //subs img
  if (html.classList.contains("light")) {

    //com light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem de uma pessoa olhando para o horizonte, usando óculos escuros e uma praia ao fundo"
    )
  } else {

    //sem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Imagem de uma pessoa olhando para o horizonte, usando óculos e uma praia ao fundo"
    )



  }
}