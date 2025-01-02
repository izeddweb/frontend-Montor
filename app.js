//  set variable
const label = document.querySelector('label')
const input = document.querySelector('.input')
const btnSubmit = document.querySelector('.submit')
const form = document.getElementById('form')
const addedNotes = document.querySelector('.added-notes')
let arrayNotes = []
console.log(addedNotes);

class Note {
    constructor(note) {
        this.note = note
        this.complit = false
        this.noteNumber = arrayNotes.length
    }

    static addNotesToArray(arrayNotes) {
        const noteText = input.value
        const notes = new Note(noteText)
        arrayNotes.push(notes)
    }

    static clearFields(input) {
        input.value = ''
    }
    
}
class Store {
    constructor(parameters) {
    }
    static getNotes() {
        const dataNotes = JSON.parse(localStorage.getItem('notes') || [])
        arrayNotes = dataNotes
        console.log(dataNotes);
        
    }
    static setNotes(arrayNotes) {
        localStorage.setItem('notes', JSON.stringify(arrayNotes)
            
        )
    }
    static deleteNotes(arrayNotes) {
        
    }
}



//  set function
input.addEventListener('focus', animateText)
input.addEventListener('change', Note.clearFields(input))
btnSubmit.addEventListener('click', Note.addNotesToArray(arrayNotes))
form.addEventListener('submit', validation)




// animation for input
function animateText(e) {
    label.innerHTML = label.innerText =
        label.textContent.split('').map((ele, index) => {
            return `<span style='transition-delay:${index * 50}ms;'>${ele}</span>`
        }).join('');
}
function validation(event) {
    event.preventDefault()
    if (input.value === '') {
        event.preventDefault()
        // show msg function to fill the all fields

    } else {
        Note.addNotesToArray(arrayNotes)
        Note.clearFields(input)
        Store.setNotes(arrayNotes)
    }
    
    
}






















