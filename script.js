console.log('hello world!')
const responsePromise = fetch(
    'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=4ac713c0-530a-488a-ad4b-1c01b4c7a8c3', 
    {
    method: 'GET'
});

responsePromise.then(response => {
    console.log(response);
    const responseBodyPromise = response.text();
    responseBodyPromise.then(body => {
        console.log(body);
        // 1. Parse the body into a javacript array
        const array = JSON.parse(body);
        console.log(array)
        // 2. Rank books
        // 3. Log it books by rank
        console.log(book_ranks)
        book_titles_list = document.getElementById("book_titles").innerHTML;

    })
});
let bootklistdiv = document.getElementById("book_list_names");

const makeAPICalls = asynce () => {
    const response await fetch (
        
    )
}