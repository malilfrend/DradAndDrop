const mainhtml = document.querySelector('.main')
const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
const addNewTaskBtn = document.querySelector('.btn')
const addTaskBtn = document.querySelector('.add_btn')
const modalWindow = document.querySelector('.modal-window')

// modalWindow.classList.add('modal_hide')

addNewTaskBtn.addEventListener('click', openModalWindow)

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let newTask = document.querySelector('.input').value
    insertNewTask(newTask)
})

for (const item of items) {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
}

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function openModalWindow () {
    modalWindow.classList.remove('modal_hide')
    modalWindow.classList.add('modal_flex')
}

function insertNewTask (newTask) {
    const startColumn = document.querySelector('.start')
    startColumn.insertAdjacentHTML('afterend', 
    `<div class="item" draggable="true">${newTask}</div>`
    )
}

function dragstart (event) {
    event.target.classList.add('hold', 'key')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend (event) {
    event.target.classList.remove('hold', 'hide', 'key')
}

function dragover (event) {
    event.preventDefault()
}

function dragenter (event) {
    if (event.target.classList.contains('placeholder')) {
        event.target.classList.add('hovered')
    }
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
    if (event.target.classList.contains('placeholder')) {
        event.target.before(document.querySelector('.key'))
        event.target.classList.remove('hovered')
    }
}