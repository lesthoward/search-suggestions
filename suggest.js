const suggestionsInput = document.querySelector('.suggestions__input');
const suggestionsWrapper = document.querySelector('.suggestions__autocomplete');
let contentSuggestion = []

suggestionsInput.addEventListener('input', (e) => {
    matchSuggestion (e.target.value)
    createHTMLContent ()
})

suggestionsWrapper.addEventListener('click', (e) => {
    // Cuando reemplzao el texto, quiero que borres el cajón donde se muestran las sugerencias. Por eso llamo la función y le coloco string vacío. Luego "createHTMLContent" para actualizar la vista.
    replaceText (e.target)
    matchSuggestion ('')
    createHTMLContent()
})

function matchSuggestion (userSearch) {
    // Si la búsqueda del usuario, su longitud es igual a string vacío, entonces no ejecutes el código.
    if (userSearch.length == '') return contentSuggestion = []
    const matchingSuggestion = suggestions.filter(suggest => {
        return suggest.toLowerCase().startsWith(userSearch.toLowerCase())
    })
    
    // Creo el HTML de cada uno de los elementos del arreglo para luego unirlos como string e introducir en HTML
    contentSuggestion = matchingSuggestion.map(suggestion => {
        return `<li class="suggestions__item" >${suggestion}</li>`
    })
}

function createHTMLContent () {
    // Si existe alguna sugerencia...
    if(contentSuggestion.length) {
        // Unas el arreglo en un string para luego insertarlo dentro del html
        const htmlSuggestions = contentSuggestion.join('')
        suggestionsWrapper.classList.add('suggestions__autocomplete--active')
        suggestionsWrapper.innerHTML = htmlSuggestions
    } else {
        // Si no existen sugerencias en el arreglo.
        contentSuggestion = []
        suggestionsWrapper.classList.remove('suggestions__autocomplete--active')
    }
}

function replaceText (element) {
    // 
    if (element.classList.contains('suggestions__item')) {
        suggestionsInput.value = element.textContent
    }
}
