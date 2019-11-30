let items =  document.querySelector('.items');
const URL = window.location;

function showEducation(event) {
  if (items.style.display === 'none') {
    items.style.display = 'block';
  } else {
  items.style.display = 'none';
  }  
}
document.querySelector('.education').addEventListener('click', showEducation);

function jump(event) {
  if (event.target.id === 'theyalow') {
    const url = 'https://babtsoualiaksandr.github.io/theyalow/';
    window.location.assign(url);    
  }
  if (event.target.id === 'repair') {
    const url = 'https://babtsoualiaksandr.github.io/repair-design-project/';
    window.location.assign(url);
  }  
}

document.querySelector('.swiper-container').addEventListener('click', jump);
