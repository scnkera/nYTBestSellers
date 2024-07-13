<html>
    <head>
        <title>Number list example</title>
    </head>
    <body>
        <p>Number list example! Look at the javascript console.</p>
        <div id="total"></div>
        <script>
            console.log('hello world!')
            const responsePromise = fetch('https://api.nytimes.com/svc/books/v3/lists', {
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
        </script>
    </body>
</html>