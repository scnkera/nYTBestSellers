console.log('hello world!')
const responsePromise = fetch(
    'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=4ac713c0-530a-488a-ad4b-1c01b4c7a8c3', 
    {
    method: 'GET'
});

books.then((response) => {
    console.log(response);
    let promise2 = response.json();

    promise2.then((data) => {
        console.log(data);
        lists(data);
    });
});

const lists = (data) => {
    let output = ``;
    const lists = data.results.lists;
    for (const list of lists) {
        const listName = list.list_name;
        output += "<h2>" + listName + "</h2>";
        const books = list.books;

        for (const book of books) {
            const title = book.title;
            const author = book.author;
            output += "<h4>" + title + "by" + author + "</h4>";
        }
    }
    document.getElementById("book_list_names").innerHTML = output;
};