let items =  document.querySelector('.items');
const URL = window.location;


function showEducation(event) {

  if (items.style.display === 'none') {
    items.style.display = 'inline';
  } else {
  items.style.display = 'none';
  }
  
}
document.querySelector('.arrow').addEventListener('click', showEducation);


function jump(event) {
  console.log(event)

  if (event.target.id === 'theyalow') {
    console.log('img#theyalow');
    console.log(URL);
    const url = 'http://'+URL.host + '/TheYalow/index.html';
    console.log(url);
    window.location.assign(url);
    
  }

  if (event.target.id === 'repair') {
    console.log('img#repair')
    const url = 'http://'+URL.host + '/repair-design-project/index.html';
    console.log(url);
    window.location.assign(url);
  }
  
}

document.querySelector('#theyalow').addEventListener('click', jump);

document.querySelector('#repair').addEventListener('click', jump);


/* host: "127.0.0.1:5500"
hostname: "127.0.0.1"
href: "http://127.0.0.1:5500/index.html"
origin: "http://127.0.0.1:5500"
pathname: "/index.html" */