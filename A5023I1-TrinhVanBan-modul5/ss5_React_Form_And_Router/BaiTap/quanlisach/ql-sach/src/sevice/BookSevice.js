let books =[
    {
        id: 1,
        title: "Book1",
        quantity: 6
    },
    {
        id: 2,
        title: "Book2",
        quantity: 7
    }
]
export const saveBook = (value) =>{
    books.push(value);
}
export const deleteBook = (id) =>{
    books = books.filter(book => book.id !== id);
}
export const updateBook = (updatedBook) =>{
    books = books.map(book => (book.id === updatedBook.id ? updatedBook : book));
}
export const getAllBooks = () => books;