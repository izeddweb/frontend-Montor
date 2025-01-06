//  set variable
const label = document.querySelector('label')
const input = document.getElementById('input')
const btnSubmit = document.querySelector('.submit')
const form = document.getElementById('form')
const addedNotes = document.querySelector('.added-notes')


class Notes {
    constructor(note) {
        this.note = note
        this.complited = false
        this.trash = false
        this.taskNumber = arrayNotes.length +1
    }
    static createNotes(note) {
        const notes = new Notes(note)
        arrayNotes.push(notes)
    }
    static clearField() {
        input.value = ''
    }
}

class Store {
    static setNotes() {
        localStorage.setItem('notes', JSON.stringify(arrayNotes))
    }
    static getNotes() {
        const data = JSON.parse(localStorage.getItem('notes')) || []
        return data
    }
}

class UI {
    static drawUI(arrayNotes) {
        for (const element of arrayNotes) {
            const div = document.createElement('div')
            div.className = 'task'
            div.innerHTML = `<i class="far fa-circle"></i><p>${element.note}  </p> <i class="fas fa-trash"></i>`
            addedNotes.appendChild(div)
        }
    }
}

const arrayNotes = Store.getNotes() || []
UI.drawUI(arrayNotes)

form.addEventListener('submit',validation)

function validation(event) {
    
    event.preventDefault()
    if (input.value == '') {
        event.preventDefault()
    } else {
        const textNote = input.value
        Notes.createNotes(textNote)
        Notes.clearField()
        Store.setNotes(arrayNotes)
        Store.getNotes(arrayNotes)
        UI.drawUI(arrayNotes)
    }
}



















