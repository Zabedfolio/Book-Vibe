import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} key={book.bookId} className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden p-4">
                        <div className="bg-gray-100 flex items-center justify-center p-6 rounded-md">
                            <img src={book.image} alt={book.bookName} className="h-36 w-auto rounded" />
                        </div>
                        <div className="p-4">
                            <div className="flex gap-2 mb-3">
                                {book.tags.map((tag, ind) => (
                                    <span key={ind} className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">{tag}</span>
                                ))}
                            </div>
                            <p className="text-base font-medium text-gray-900 mb-1">{book.bookName}</p>
                            <p className="text-sm text-gray-500 mb-4">By : {book.author}</p>
                            <div className="border-t border-dashed border-gray-200 pt-3 flex items-center justify-between">
                                <span className="text-sm text-gray-500">{book.category}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-medium">{book.rating.toFixed(2)}</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
    );
};

export default BookCard;