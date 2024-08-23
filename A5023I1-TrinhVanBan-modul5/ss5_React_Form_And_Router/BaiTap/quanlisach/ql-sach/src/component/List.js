import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as booksList from "../sevice/BookSevice"
import {deleteBook} from "../sevice/BookSevice";

const List = () =>{
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    useEffect(() => {
        let  temp = booksList.getAllBooks();
        setBooks(temp);
    }, []);

    const handleDeleteBook = (id) =>{
        deleteBook(id);

        setBooks(booksList.getAllBooks);
    }
    const handleUpdateBook = (book) => {
        setEditingBook(book);
    };

    const handleSave = (e) => {
        e.preventDefault();
        booksList.updateBook(editingBook);
        setBooks(booksList.getAllBooks());
        setEditingBook(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingBook({ ...editingBook, [name]: value });
    };
    return(
        <>
            {editingBook && (
                <form onSubmit={handleSave}>
                    <h3>Edit Book</h3>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={editingBook.title}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={editingBook.quantity}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingBook(null)}>Cancel</button>
                </form>
            )}

            <table>
                <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
                {books.map((book) =>(
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button type="submit" onClick={() => handleUpdateBook()}>Edit</button>
                            <button type="submit" onClick={() => handleDeleteBook(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default List;