import { useState } from 'react';
import "../styles/Books.css";


export const Books = ({ data }) => {
    const [fiction, setFiction] = useState(false);
    const [nonFiction, setNonFiction] = useState(false);
    const [children, setChildren] = useState(false);

    const fictionBooks = bookData.fiction;
    const nonFictionBooks = bookData['non-fiction'];
    const childrenBooks = bookData.children;

    
    return (
        
        <div>

            <h1>Book Store</h1>

            <div>
                {setFiction ? (
                    <button onClick={() => setFiction(!setFiction)}>Show fiction</button>
                ) : 
                <button onClick={() => setFiction(!setFiction)}>Hide fiction</button>
                }
            </div>

            <div>
                {setNonFiction ? (
                    <button onClick={() => setNonFiction(!setNonFiction)}>Show nonFiction</button>
                ) : 
                <button onClick={() => setNonFiction(!setNonFiction)}>Hide nonFiction</button>
                }
            </div>

            <div>
                {setChildren ? (
                    <button onClick={() => setChildren(!setChildren)}>Show children</button>
                ) : 
                <button onClick={() => setChildren(!setChildren)}>Hide children</button>
                }
            </div>

            {bookData.map((book) => {
                return (
                    <>
                        <h1>{bookData[genre]}</h1>
                        <ul key={book.title}>
                            <li>{book.title} - {book.author} (${book.price})</li>
                        </ul>
                    </>
                )
            }
            )}

            return (
                <button onClick={() => setGenre("fiction")}> "Toggle Fiction" </button>
                <button onClick={() => setchildren("children")}> "Toggle Children" </button>
                <button onClick={() => setnonfiction("non-fiction")}> "Toggle Non-fiction" </button>
                {genre !== null && <books genre={genre} />}
            )

        </div >
    )
}    
