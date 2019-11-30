let items =  document.querySelector('.items');
const URL = window.location;

function showEducation(event) {
  console.log(items)

  if (items.style.display === 'none') {
    items.style.display = 'block';
  } else {
  items.style.display = 'none';
  }  
}
document.querySelector('.education').addEventListener('click', showEducation);


function jump(event) {
  console.log(event);
  if (event.target.id === 'theyalow') {
    const url = 'http://'+URL.host + '/yalow/index.html';
    window.location.assign(url);    
  }

  if (event.target.id === 'repair') {
    const url = 'http://'+URL.host + '/repair/index.html';
    window.location.assign(url);
  }
  
}
console.log(document.querySelector('.swiper-container'));
document.querySelector('.swiper-container').addEventListener('click', jump);
