const share_btn = document.querySelector('.share-button');
const share_box = document.querySelector('.share-box');

share_btn.addEventListener('click', showShareBox );

function showShareBox() {
    share_box.classList.toggle('active');
    share_btn.classList.toggle('share-btn-active');
}

