document.querySelectorAll('#syllabus > div > button').forEach(button => {
    button.onclick = () => {
        if(button.nextElementSibling.style.display == 'flex'){
            button.nextElementSibling.style.display = 'none';
            console.log(button.nextElementSibling.style.display)
        }
        else{
            button.nextElementSibling.style.display = 'flex';
            console.log(button.nextElementSibling.style.display)
        }
    }
})