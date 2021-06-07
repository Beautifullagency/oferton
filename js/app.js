
const body = document.querySelector('.body')

renderContenido()
window.onchange = function (event) { 
  if (event.state) { 
    console.log('cambio')
  // history changed because of pushState/replaceState 
  } else { 
  // history changed because of a page load 
  } 
} 


async function renderContenido(pathname) {
  const categoriasNav = await categoriasFetch()
  var pathname = window.location.pathname;
  /*SI ESTOY EN HOME */
  if (pathname === '/' || pathname === '/index.html') {
    await seccionesFetch(categoriasNav,true)
  } else {
    let id = pathname.split('-')
    id= `${id[1]}`
    const newCategoriasNav = []
    newCategoriasNav.push(categoriasNav[id-1])
    await seccionesFetch(newCategoriasNav,false)
  }
}
/*FUNCIONES*/
function seccionesFull() {
  const ul1 = document.querySelector('.footer-cat-1')
    const ul2 = document.querySelector('.footer-cat-2')
  window.history.pushState(null, `/categoria-${this.dataset.id}`, `/categoria-${this.dataset.id}`);
  body.innerHTML = ''
  ul1.innerHTML = ''
  ul2.innerHTML = ''
  renderContenido()
}
/*HEADER Y FOOTER */
function renderCategorias(cat) {
  for (i = 0; i < cat.length; i++) {
    /*CREA CATEGORIAS DE LA NAVBAR*/
    const item = document.createElement("div")
    const circle = document.createElement("div")
    const anchor = document.createElement("a")
    const itemCategoria = document.createElement("img")
    const itemTexto = document.createElement("h3")
    /*AGREGA PROPIEDADES*/
    item.className = 'item'
    circle.className = 'circle'
    anchor.dataset.id = `${cat[i].id}`
    anchor.className = `categoria-${cat[i].id}`
    anchor.onclick = seccionesFull
    itemCategoria.className = 'item-cat'
    itemCategoria.src = `./img/iconos/${cat[i].id}.png`
    itemCategoria.title = `${cat[i].nombre}`
    itemCategoria.alt = `${cat[i].nombre}`
    itemTexto.className = 'mo-13 item-text'
    itemTexto.textContent = `${cat[i].nombre}`
    /*APENDA ELEMENTOS AL NAVBAR */
    item.appendChild(circle)
    anchor.appendChild(itemCategoria)
    circle.appendChild(anchor)
    circle.appendChild(itemTexto)
    $('#owl2').owlCarousel('add', item).owlCarousel('update');
    /*FOOTER */
    const anchor2 = document.createElement("a")
    const ul1 = document.querySelector('.footer-cat-1')
    const ul2 = document.querySelector('.footer-cat-2')
    const li = document.createElement("li")
    li.className = 'foo-li mo-13'
    anchor2.className = 'mo-13'
    anchor2.textContent = `${cat[i].nombre}`
    anchor2.dataset.id = `${cat[i].id}`
    anchor2.onclick = seccionesFull
    /*EN DOS COLUMNAS */
    if (i < Math.round(cat.length / 2)) {
      ul1.appendChild(li)
      li.appendChild(anchor2)
    } else {
      ul2.appendChild(li)
      li.appendChild(anchor2)
    }
  }
}
/*BODY HOME */
function renderSecciones(cat, nombre) {
  /*CREA ELEMENTOS*/
  const seccionContainer = document.createElement("div")
  const header = document.createElement("div")
  const h3 = document.createElement("h3")
  const containerInner = document.createElement("div")
  const row1 = document.createElement("div")
  const row2 = document.createElement("div")
  const footer = document.createElement("div")
  const urlCategoria = document.createElement("a")
  /*AGREGA PROPIEDADES*/
  seccionContainer.className = 'seccion-container'
  h3.className = 'mo-24 color'
  h3.textContent = nombre
  containerInner.className = 'container-inner'
  row1.className = 'row-1 row'
  row2.className = 'row-2 row'
  urlCategoria.className = 'url-cat mo-16 color'
  urlCategoria.textContent = 'Ver todas las márcas'
  header.className = 'header-section'
  footer.className = 'footer-section'

  /*APENDA ELEMENTOS AL NAVBAR */
  body.appendChild(seccionContainer)
  seccionContainer.appendChild(header)
  header.appendChild(h3)
  seccionContainer.appendChild(containerInner)
  seccionContainer.appendChild(footer)
  footer.appendChild(urlCategoria)
  containerInner.appendChild(row1)
  containerInner.appendChild(row2)

  //console.log(cat)
  /*SEPARA EN DOS COLUMNAS LOS LOGOS*/
  for (i = 0; i < 4; i++) {
    /*CREA ELEMENTOS*/
    const col = document.createElement("col")
    const img = document.createElement("img")
    /*AGREGA PROPIEDADES*/
    col.className = 'col'
    img.className = 'img-col'
    img.src = `./img/logo-venex.png`

    row1.appendChild(col)
    col.appendChild(img)

    const categories = cat[i]
    //console.log(categories.logo)
    //const bufferImg = categories.logo
  }
  for (i = 4; i < 8; i++) {
    const col = document.createElement("col")
    const img = document.createElement("img")
    /*AGREGA PROPIEDADES*/
    col.className = 'col'
    img.className = 'img-col'
    img.src = `./img/logo-venex.png`

    row2.appendChild(col)
    col.appendChild(img)

    const categories = cat[i]
    //console.log(categories.logo)
    //const bufferImg = categories.logo
  }
}
/*BODY SECCION */
function renderSeccionesFull(cat, nombre) {
  console.log('renderSeccionesFull')
  /*CREA ELEMENTOS*/
  const seccionContainer = document.createElement("div")
  const header = document.createElement("div")
  const h3 = document.createElement("h3")
  const containerInner = document.createElement("div")
  const row1 = document.createElement("div")
  const row2 = document.createElement("div")
  const footer = document.createElement("div")
  /*AGREGA PROPIEDADES*/
  seccionContainer.className = 'seccion-container'
  h3.className = 'mo-24 color'
  h3.textContent = nombre
  containerInner.className = 'container-inner'
  row1.className = 'row-1 row'
  row2.className = 'row-2 row'
  header.className = 'header-section'
  footer.className = 'footer-section'

  /*APENDA ELEMENTOS A LA SECCION */
  body.appendChild(seccionContainer)
  seccionContainer.appendChild(header)
  header.appendChild(h3)
  seccionContainer.appendChild(containerInner)
  seccionContainer.appendChild(footer)
  containerInner.appendChild(row1)
  containerInner.appendChild(row2)
  /*SEPAR LOGOS*/
  
    /*CREA ELEMENTOS*/
    const col = document.createElement("col")
    const img = document.createElement("img")
    /*AGREGA PROPIEDADES*/
    col.className = 'col'
    img.className = 'img-col'
    img.src = `./img/logo-venex.png`

    row1.appendChild(col)
    col.appendChild(img)

    const categories = cat[i]
    //console.log(categories.logo)
    //const bufferImg = categories.logo
  
}
/*LLAMADOS AL SERVIDOR*/
async function categoriasFetch(params) {
  const categoriasNav = []
  await fetch('https://demo8759519.mockable.io/api/Empresa/categorias')
    .then(res => res.json())
    .then(res => {
      for (x = 1; x < res.resultado.length + 1; x++) {
        for (i = 0; i < res.resultado.length; i++) {
          //console.log(res.resultado[i])
          if (x === res.resultado[i].id) {
            categoriasNav.push(res.resultado[i])
          }
        }
      }
      renderCategorias(categoriasNav)
    })
    .catch(err => console.error(err))
  return categoriasNav
}
async function seccionesFetch(categoriasNav,estado ) {
  for (x = 0; x < categoriasNav.length; x++) {
    const nombre = categoriasNav[x].nombre
    const id = categoriasNav[x].id
    await fetch(`https://0cd09e99-ceda-4479-9523-54082fbea259.mock.pstmn.io/api/Empresa/empresas_x_categoria?idCategoria=${id}`)
      .then(res => res.json())
      .then(res => {
        if(estado){          
          renderSecciones(res, nombre)
        }else{
          renderSeccionesFull(res, nombre)
        }        
      })
      .catch(err => console.error(err))
  }
}



function getBase64Image(src, callback, outputFormat) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let dataURL;
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    ctx.drawImage(img, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };

  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}






