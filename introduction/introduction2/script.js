function toggleSubSyllabus(button) {
    const subSyllabus = button.parentElement.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (subSyllabus.classList.contains('hidden')) {
        subSyllabus.classList.remove('hidden');
        subSyllabus.style.display = 'block';
        subSyllabus.style.maxHeight = subSyllabus.scrollHeight + 'px';
        icon.textContent = '-'; // Change to minus icon
    } else {
        subSyllabus.classList.add('hidden');
        subSyllabus.style.maxHeight = 0;
        subSyllabus.style.display = 'none';
        icon.textContent = '+'; // Change to plus icon
    }
}
