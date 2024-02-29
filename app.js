const nContainer = document.querySelector('.notes-container');
const buton = document.querySelector('.butn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    nContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage() {
    localStorage.setItem('notes', nContainer.innerHTML);
}

buton.addEventListener('click', () => {
    let input = document.createElement('p');
    let img = document.createElement('img');
    input.classList.add('input-box');
    input.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    nContainer.appendChild(input).appendChild(img);

})


nContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        // e.target.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})


document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})