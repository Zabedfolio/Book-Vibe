import React, { useContext } from 'react';
import { BookContext } from '../../components/context/BookContext';
import { Link } from 'react-router';

const ListedReadList = () => {
    const { storedBooks } = useContext(BookContext);

    return (
        <div className="w-11/12 mx-auto py-10">
            {storedBooks.map((book, ind) => (
                <div key={ind} className="flex gap-6 bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
                    <div className="bg-gray-100 rounded-xl flex items-center justify-center p-4 w-32 h-36 shrink-0">
                        <img src={book.image} alt={book.bookName} className="h-full w-auto object-cover rounded" />
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{book.bookName}</h2>
                            <p className="text-sm text-gray-400 mb-2">By : {book.author}</p>

                            <div className="flex items-center gap-2 flex-wrap mb-2">
                                <span className="text-sm font-semibold text-gray-700">Tag</span>
                                {book.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">#{tag}</span>
                                ))}
                                <span className="text-xs text-gray-400 flex items-center gap-1 ml-4">📍 Year of Publishing: {book.yearOfPublishing}</span>
                            </div>

                            <div className="flex items-center gap-6 text-xs text-gray-500 mb-3">
                                <span>👥 Publisher: {book.publisher}</span>
                                <span>📄 Page {book.totalPages}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-xs px-4 py-1.5 rounded-full bg-blue-50 text-blue-500 font-medium">Category: {book.category}</span>
                            <span className="text-xs px-4 py-1.5 rounded-full bg-orange-50 text-orange-400 font-medium">Rating: {book.rating}</span>
                            <Link to={`/books/${book.bookId}`}>
                                <button className="text-xs px-5 py-1.5 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListedReadList;