function toggleAccordion(contentID, iconID, mainID) {
    const content = document.getElementById(contentID);
    const icon = document.getElementById(iconID);
    const main = document.getElementById(mainID);

    if(content.classList.contains('hidden')){
        // Open the accordion
        content.classList.remove('hidden');
        main.style.height = '130px';
        icon.textContent = '×'; // Using proper multiplication symbol
    } else {
        // Close the accordion
        content.classList.add('hidden');
        main.style.height = '80px'; // Reset to initial height
        icon.textContent = '+';
    }
}