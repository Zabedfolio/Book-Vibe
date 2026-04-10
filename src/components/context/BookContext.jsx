import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBooks) =>{
        // step1 : store book id or book object
        // step2: where to store
        // step3: array format
        // step4: if the book is already exist then show a alert
        // step5: if not then add the book in the array or collection

        // console.log(storedBooks)
        const isExistBook = storedBooks.find(book => book.bookId === currentBooks.bookId)
        if(isExistBook){
            alert('The book is already exist')
        } else{
            setStoredBooks([...storedBooks, currentBooks])
            // console.log('Added:', currentBooks.bookName)
        }

    }

    const data ={
        storedBooks, setStoredBooks, handleMarkAsRead,
    };

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;