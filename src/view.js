let options = {
  root: document.body,
  rootMargin: '50px 0px 0px 0px',
  threshold: 1.0
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('unblurred');
    } else {
      entry.target.classList.remove('unblurred');
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {

  let observer = new IntersectionObserver(callback, options)

  let target = document.querySelector('.blurred');

  observer.observe(target);
})