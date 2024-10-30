document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
        button.nextElementSibling.classList.toggle('notActive')
        button.nextElementSibling.classList.toggle('heightActive')
    }
});