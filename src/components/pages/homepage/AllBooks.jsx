import React, { use } from 'react';
import BookCard from '../../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);

    return (
        <div className="w-11/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book, ind) => (
                    <BookCard key={ind} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;