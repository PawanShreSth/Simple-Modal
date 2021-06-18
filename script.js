const openBtn = document.querySelector('#open-modal-btn');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');
const closeBtn = modal.querySelector('#close-modal-btn');

openBtn.addEventListener('click', e => {
  overlay.classList.add('open');
  modal.classList.add('open');
});

closeBtn.addEventListener('click', e => {
  overlay.classList.remove('open');
  modal.classList.remove('open');
});

overlay.addEventListener('click', e => {
  overlay.classList.remove('open');
  modal.classList.remove('open');
});
