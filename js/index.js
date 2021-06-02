
const body = document.querySelector('.body')
renderFetch()






/*FUNCIONES*/
function renderCategorias(cat) {
  for (i = 0; i < cat.length; i++) {
    /*CREA CATEGORIAS DE LA NAVBAR*/
    const item = document.createElement("div")
    const circle = document.createElement("div")
    const itemCategoria = document.createElement("img")
    const itemTexto = document.createElement("h3")
    /*AGREGA PROPIEDADES*/
    item.className = 'item'
    circle.className = 'circle'
    itemCategoria.className = 'item-cat'
    itemCategoria.src = `./img/iconos/${cat[i].id}.png`
    itemTexto.className = 'mo-13 item-text'
    itemTexto.textContent = `${cat[i].nombre}`
    /*APENDA ELEMENTOS AL NAVBAR */
    item.appendChild(circle)
    circle.appendChild(itemCategoria)
    circle.appendChild(itemTexto)
    $('#owl2').owlCarousel('add', item).owlCarousel('update');
  }
}
function renderSecciones(cat, nombre ) {
 // console.log(nombre)

  
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
    urlCategoria.className = 'url-cat mo-16'
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
    const bufferImg = categories.logo  
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
    const bufferImg = categories.logo   
  }
}
/*
     itemCategoria.src = `./img/iconos/${cat[i].id}.png`
     itemTexto.className = 'mo-13 item-text'
     itemTexto.textContent = `${cat[i].nombre}`*/
/*LLAMADOS AL SERVIDOR*/
async function renderFetch(params) {
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
  console.log(categoriasNav)
  for (x = 0; x < categoriasNav.length; x++) {
    const nombre = categoriasNav[x].nombre
    const id = categoriasNav[x].id

    console.log(nombre, id , x)

    await fetch(`https://0cd09e99-ceda-4479-9523-54082fbea259.mock.pstmn.io/api/Empresa/empresas_x_categoria?idCategoria=${id}`)
      .then(res => res.json())
      .then(res => {
       // console.log(res)
        renderSecciones(res,nombre)
        
        
        
      })
      .catch(err => console.error(err)) 
  }
}
async function seccionfetch(id, nombre) {
  await fetch(`https://0cd09e99-ceda-4479-9523-54082fbea259.mock.pstmn.io/api/Empresa/empresas_x_categoria?idCategoria=${id}`)
      .then(res => res.json())
      .then(res => {
       // console.log(res)
        renderSecciones(res,nombre)  
      })
      .catch(err => console.error(err)) 
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










$("#owl1").owlCarousel({
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  items: 1,
  loop: true,
  autoHeight: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 0,
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      margin: 0,
      items: 1,
      nav: false,
      dots: true,
    },
    1024: {
      margin: 0,
      items: 1,
      nav: false,
      loop: true,
      dots: true,
    },
  },
})
$("#owl2").owlCarousel({
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  items: 1,
  loop: true,
  autoHeight: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 10,
      items: 4,
      nav: false,
      dots: false,
    },
    600: {
      margin: 0,
      items: 7,
      nav: false,
      dots: false,
    },
    1024: {
      margin: 0,
      items: 11,
      nav: true,
      loop: false,
      dots: false,
    },
  },
})