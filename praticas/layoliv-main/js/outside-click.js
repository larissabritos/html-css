export default function handleClick(event) {
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this, ['click', 'touchstart'], () => {
    console.log('ativou')
  });
};

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    console.log('oiiiii');
    callback();
  }
}

