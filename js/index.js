function toggleAccordion(contentID, iconID, mainID) {
    const content = document.getElementById(contentID);
    const icon = document.getElementById(iconID);
    const main = document.getElementById(mainID);

    if(content.classList.contains('hidden')){
       
        content.classList.remove('hidden');
        main.style.height = '130px';
        icon.textContent = '×'; 
    } else {
        // Close the accordion
        content.classList.add('hidden');
        main.style.height = '80px'; 
        icon.textContent = '+';
    }
}