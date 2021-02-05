const shareBtn = document.getElementById('share_btn');
const cardBottom = document.querySelector('.card-bottom');
const authorInfo = document.querySelector('.author-info');
const shareInfo = document.querySelector('.share-info');
const arrowDown = document.querySelector('.arrow-down');

let shareButtonPressed = false;
let counter = 0;

shareBtn.addEventListener('click', () => {
  shareButtonPressed = !shareButtonPressed;
  shareButtonActions();
});

window.addEventListener('resize', shareButtonActions);

function shareButtonActions() {
  let screenWidth = window.screen.width;

  if (shareButtonPressed) {
    showCommonElements();
    if (screenWidth >= 1440) {
      mobileHideShare();
      desktopShowShare();
    } else {
      mobileShowShare();
      desktopHideShare();
    }
  } else {
    hideCommonElements();
    if (screenWidth >= 1440) {
      desktopHideShare();
    } else {
      mobileHideShare();
    }
  }
}

function showCommonElements() {
  shareInfo.classList.remove('hide');
  shareBtn.classList.add('dark');
}
function hideCommonElements() {
  shareInfo.classList.add('hide');
  shareBtn.classList.remove('dark');
}

function desktopHideShare() {
  arrowDown.classList.add('hide');
  shareInfo.classList.remove('dark');
}
function desktopShowShare() {
  arrowDown.classList.remove('hide');
  shareInfo.classList.add('dark');
}

function mobileHideShare() {
  cardBottom.classList.remove('dark');
  authorInfo.classList.remove('hide');
}
function mobileShowShare() {
  cardBottom.classList.add('dark');
  authorInfo.classList.add('hide');
}
