import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../listedbooks/ListedReadList';
import ListedWishList from '../../listedbooks/ListedWishList';

const Books = () => {
    const { storedBooks, wishlist } = useContext(BookContext);

    return (
        <div className='w-11/12 mx-auto py-14'>
             <h1 className="text-3xl font-bold text-center bg-gray-100 rounded-xl py-8 mb-8">Books</h1>

            <style>{`
                .react-tabs__tab-list {
                    border: none;
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .react-tabs__tab {
                    border: 1.5px solid #e5e7eb;
                    border-radius: 999px;
                    padding: 8px 28px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #6b7280;
                    bottom: 0;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .react-tabs__tab:hover {
                    background: #f3f4f6;
                    color: #111827;
                }
                .react-tabs__tab--selected {
                    background: #22c55e !important;
                    border-color: #22c55e !important;
                    color: white !important;
                    border-radius: 999px !important;
                }
                .react-tabs__tab-panel {
                    border: none;
                }
            `}</style>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList />
                </TabPanel>
                <TabPanel>
                    <ListedWishList />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;