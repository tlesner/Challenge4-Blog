// TOD: Create a variable that selects the main element, and a variable that selects the back button element
const article = document.querySelector('article');
const main = document.querySelector('main');
const backButton = document.querySelector('#back');

// TOD: Create a function that builds an element and appends it to the DOM

function buildElement(blog) {

    const title = document.createElement('h2');
    const content = document.createElement('p');
    const username = document.createElement('blockquote');
    title.textContent = blog.title;
    content.textContent = blog.content;
    username.textContent = blog.username;
    article.append(title, content, username);
    main.append(article);
}
// TOD: Create a function that handles the case where there are no blog posts to display

function noPosts() {
     
    if (article && article.children.length === 0) {
    article.textContent = 'No Blog posts yet...';
    // article.appendChild(content);
   }
}
// TOD: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function. 

function renderBlogList() {
    const blogData = readLocalStorage();
    if (blogData.length === 0) {
        noPosts();
    } else {
        for (let i = 0; i < blogData.length; i++) {
            buildElement(blogData[i]);
        }
    }
}
// TOD: Call the `renderBlogList` function
renderBlogList();
// TOD: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function(event) {
    event.preventDefault();
    redirectPage("index.html");
});

// if (backButton) {
//     backButton.addEventListener('click', function() {
//         redirectURL("blog.html");
//     });
    
// }