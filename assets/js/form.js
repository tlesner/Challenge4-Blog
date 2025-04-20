// TOD: Create a variable that selects the form element
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');
// TOD: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmit() {
    let username = document.querySelector("#username").value;
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    if (!username || title === "" || !content) {
        document.querySelector('#error').style.display = "block";
    }
    else {
        let blog = { username, title, content };
        storeLocalStorage(blog);
        redirectPage("blog.html");
    }
}

// TOD: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', function (event) {
    event.preventDefault();
    formSubmit();
}) 