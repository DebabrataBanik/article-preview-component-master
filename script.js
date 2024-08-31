const btn = document.querySelector('button');
const share_card = document.querySelector('.active-state__desktop-display');
const share_card_mobile = document.querySelector('.active-state__mobile-display');
const footer = document.querySelector('footer');
const share_btn = share_card_mobile.querySelector('button')

btn.addEventListener('click', function () {
  btn.classList.toggle('active')
  btn.querySelector('img').classList.toggle('active')
  share_card.classList.toggle('show')

  share_card_mobile.classList.toggle('show')
  footer.classList.toggle('hide')

})

share_btn.addEventListener('click', () => {
  footer.classList.remove('hide')
  share_card_mobile.classList.remove('show')
  share_card.classList.remove('show')
  btn.classList.remove('active')
  btn.querySelector('img').classList.remove('active')
})