const progress = document.getElementById('progress-line');

//preloader progress
function setProgress(int) {
    progress.style.width = `${int}%`
};

//show hide
//access
function showAccess() {
    document.querySelector('.screen-access').classList.remove('hidden');
};
function hideAccess() {
    document.querySelector('.screen-access').classList.add('hidden');
}
//preloader
function showPreloader() {
    document.querySelector('.preloader').classList.remove('hidden');
};
function hidePreloader() {
    document.querySelector('.preloader').classList.add('hidden');
}
//main
function showMain() {
    document.querySelector('.main').classList.remove('hidden');
};
function hideMain() {
    document.querySelector('.main').classList.add('hidden');
}

//web-link
function showWebLink() {
    document.querySelector('.web-link').classList.remove('hidden');
};
function hideWebLink() {
    document.querySelector('.web-link').classList.add('hidden');
}
// bank help
function showHelp() {
    document.querySelector('.desc-help').classList.remove('hidden');
};
function hideHelp() {
    document.querySelector('.desc-help').classList.add('hidden');
    showWebLink();
}



//link action
function clickWeb() {
    window.location = 'https://google.com'
}