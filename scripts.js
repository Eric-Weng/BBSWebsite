const selectElement = (s) => document.querySelector(s);
//Open menu
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
//Close menu
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});