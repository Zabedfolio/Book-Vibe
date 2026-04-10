import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishList] = useState([]);

    const handleMarkAsRead = (currentBooks) =>{
        // step1 : store book id or book object
        // step2: where to store
        // step3: array format
        // step4: if the book is already exist then show a alert
        // step5: if not then add the book in the array or collection

        // console.log(storedBooks)
        const isExistBook = storedBooks.find(book => book.bookId === currentBooks.bookId)
        if(isExistBook){
            toast.error('The book is already exist')
        } else{
            setStoredBooks([...storedBooks, currentBooks])
            toast.success(`${currentBooks.bookName} is added to list`)
            // console.log('Added:', currentBooks.bookName)
        }

    }


    const handleWishList = (currentBooks) =>{

        const isExistInReadList = storedBooks.find(book => book.bookId === currentBooks.bookId);

        if(isExistInReadList){
            toast.error("This is book is already in Read List");
            return;
        }

        // console.log(storedBooks)
        const isExistBook = wishlist.find(book => book.bookId === currentBooks.bookId)
        if(isExistBook){
            toast.error('The book is already exist')
        } else{
           setWishList([...wishlist, currentBooks])
            toast.success(`${currentBooks.bookName} is added to list`)
            // console.log('Added:', currentBooks.bookName)
        }

    }

    const data ={
        storedBooks, setStoredBooks, handleMarkAsRead, handleWishList ,wishlist, setWishList
    };

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;