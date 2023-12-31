
const btnModal = document.querySelector('.btn_modal')
const cerrarModal = document.querySelector('.btn_cerrar_modal')
const myMododal = document.querySelector('.myModal')

const anadirLibro = document.querySelector('.add_book')
const mostrarLibro = document.querySelector('.card_book')
let contenedorLibro;

if(btnModal && cerrarModal && myMododal && anadirLibro && mostrarLibro){
    
    btnModal.addEventListener('click',()=>{ myMododal.style.display = 'block'; })

    cerrarModal.addEventListener('click',()=>{ myMododal.style.display = 'none' })

    anadirLibro.addEventListener('click',(e)=>{
        
        e.preventDefault()
        contenedorLibro = document.createElement('div')
        let titulo = document.querySelector('.titulo_book').value
        let autor = document.querySelector('.author_book').value
        let pages = document.querySelector('.pages_book').value

        let h2_titulo = document.createElement('h2')
        h2_titulo.textContent = `${titulo}`

        let p_autor = document.createElement('p')
        p_autor.textContent = `${autor}`

        let p_pages = document.createElement('p')
        p_pages.textContent = `${pages}`

        let form = document.createElement('form')
        
        let btn_remove = document.createElement('button')
        btn_remove.textContent = 'Remove book'
        btn_remove.classList.add(`btn_remove_book`)
        
        let label = document.createElement('label')
        label.textContent = "Already Read"

        form.appendChild(label)
        form.appendChild(btn_remove)
        
        contenedorLibro.appendChild(h2_titulo)
        contenedorLibro.appendChild(p_autor)
        contenedorLibro.appendChild(p_pages)
        contenedorLibro.appendChild(form)

        mostrarLibro.appendChild(contenedorLibro)
    
        btn_remove.addEventListener('click',(e)=>{
            e.preventDefault()
            contenedorLibro.remove()
        }) 
    })
}

