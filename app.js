const mainhtml = document.querySelector('.main')
const placeholders = document.querySelectorAll('.placeholder')
const openModalWindowForNewTask = document.querySelector('.btn')
const addTaskBtn = document.querySelector('.add_btn')
const modalWindow = document.querySelector('.modal-window')
const newTaskInput = document.querySelector('.input')
const closeModalWindow = document.querySelector('.close_btn')
let items

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

openModalWindowForNewTask.addEventListener('click', openModalWindow)

makeAddEventListenersForItems()

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    insertNewTask(newTaskInput.value)
    newTaskInput.value = ''
})

closeModalWindow.addEventListener('click', closeModalWindowFunc)



function makeAddEventListenersForItems (items) {
    items = document.querySelectorAll('.item')
    for (const item of items) {
        item.addEventListener('dragstart', dragstart)
        item.addEventListener('dragend', dragend)
    }
}

function openModalWindow () {
    modalWindow.classList.remove('modal_hide')
    modalWindow.classList.add('modal_flex')
}

function closeModalWindowFunc () {
    modalWindow.classList.remove('modal_flex')
    modalWindow.classList.add('modal_hide')
}

function insertNewTask (newTask) {
    const startColumn = document.querySelector('.start')
    startColumn.insertAdjacentHTML('afterend', 
        `<div class="item" draggable="true">${newTask}</div>`
    )
    makeAddEventListenersForItems()
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