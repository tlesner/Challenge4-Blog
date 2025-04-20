
// TOD: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// const toggleButton = document.getElementById('toggle');
// function toggleDarkMode() {
  
// if (localStorage.getItem('dark') === 'enabled') {
//   localStorage.setItem('dark','disabled'); 
//   document.body.classList.remove('dark');
//   document.body.classList.add('light');    
//   } else {
//     localStorage.setItem('dark','enabled');
//     document.body.classList.add('dark');
//   document.body.classList.remove('light');
//   }
// }
// toggleButton.addEventListener('click',toggleDarkMode);

const lightdarkEl = document.querySelector("#toggle");

lightdarkEl.addEventListener('click', function () {
	let state = document.body.getAttribute('class');

	if (state === 'dark') {
		state = 'light';
		document.body.setAttribute('class', state);
		lightdarkEl.textContent = '☀️'
		document.documentElement.style.setProperty('--circle-color', '#ffb100'); //How we change :root variables in CSS

	}
	else if (state === 'light') {
		state = 'dark';
		document.body.setAttribute('class', state);
		lightdarkEl.textContent = '🌑';
		document.documentElement.style.setProperty('--circle-color', '#8570a5');

	}
})
 
// TOD: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogData = localStorage.getItem('blogData');
  if (blogData) {
    return JSON.parse(blogData);
  }
  return [];
}

// TOD: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogData) {
  const existingData = readLocalStorage ();
  existingData.push(blogData);
  localStorage.setItem('blogData', JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
