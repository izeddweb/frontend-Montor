//  set variable
const label = document.querySelector('label')
const input = document.getElementById('input')
const btnSubmit = document.querySelector('.submit')
const form = document.getElementById('form')
const addedNotes = document.querySelector('.added-notes')
const showMSG = document.querySelector('.show-MSG')


class Notes {
    constructor(note) {
        this.note = note
        this.complited = false
        this.trash = false
        this.taskNumber = arrayNotes.length + 1
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
        UI.clearDivTasks(addedNotes)
        for (const element of arrayNotes) {
            const div = document.createElement('div')
            div.className = 'task'
            div.innerHTML = `<i class="fas fa-circle"></i><p>${element.note}  </p> <i class="fas fa-trash"></i>`
            addedNotes.appendChild(div)
        }
    }
    static clearDivTasks(addedNotes) {
        addedNotes.innerHTML = '';
    }
    static showMSG() {
        let message
        input.value === '' ?
            message = ` Please enter a value ` :
            message = ` note added `;
        showMSG.innerHTML = ` ${message} `
    }


    static deleteMSG() {
        showMSG.innerHTML = ``
    }
}
const arrayNotes = Store.getNotes() || []
UI.drawUI(arrayNotes)

form.addEventListener('submit', validation)

function validation(event) {

    event.preventDefault()
    if (input.value === '') {
        event.preventDefault()
        //Show message


        // setTimeout(() => {
        //     UI.showMSG()
        //     setTimeout(() => {
        //         UI.deleteMSG()
        //     }, 3000);
        // }, 200);
        playMSG(input, showMSG)
    } else {
        const textNote = input.value
        playMSG(input, showMSG)
        Notes.createNotes(textNote)
        Notes.clearField()
        Store.setNotes(arrayNotes)
        UI.drawUI(arrayNotes)
    }
}


function playMSG(input, showMSG) {
    let message;
    input.value == '' ? message = ' Fill The Field' : message = ' Note Added Success';

    setTimeout(() => {
        showMSG.innerHTML = message
        showMSG.textContent == ' Fill The Field' ? showMSG.style.color = 'red' : showMSG.style.color = 'green';
        setTimeout(() => {
            UI.deleteMSG()
        }, 2000);
    }, 20);
}
