'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publications', [
      {
        PubID: 1,
        Publisher: "Nanyang Publisher Company",
        Year: 2022
      },
      {
        PubID: 2,
        Publisher: "Nanyang Publisher Company",
        Year: 2020
      },
      {
        PubID: 3,
        Publisher: "LYR",
        Year: 1978
      },
      {
        PubID: 4,
        Publisher: "MOE statistics",
        Year: 2021
      },
      {
        PubID: 5,
        Publisher: "Intermediate Media Company",
        Year: 1990
      },
      {
        PubID: 6,
        Publisher: "Intermediate Media Company",
        Year: 1993
      },
      {
        PubID: 7,
        Publisher: "Intermediate Media Company",
        Year: 1995
      },
      {
        PubID: 8,
        Publisher: "GC Book Company",
        Year: 2015
      },
      {
        PubID: 9,
        Publisher: "GC Book Company",
        Year: 2018
      },
      {
        PubID: 10,
        Publisher: "GC Book Company",
        Year: 2023
      },
      {
        PubID: 11,
        Publisher: "Time Inc.",
        Year: 2017
      },
      {
        PubID: 12,
        Publisher: "Time Inc.",
        Year: 2018
      }
    ])

    await queryInterface.bulkInsert('Bookstores', [
      {
        BookstoreID: 1,
        Name: "Tom's Family Bookstore",
      },
      {
        BookstoreID: 2,
        Name: "Economic Bookstore",
      },
      {
        BookstoreID: 3,
        Name: "The First Bookstore",
      },
      {
        BookstoreID: 4,
        Name: "Your neighbourhood Bookstore",
      },
      {
        BookstoreID: 5,
        Name: "The Trusted Bookstore",
      },
      {
        BookstoreID: 6,
        Name: "Popular Bookstore",
      },
    ])

    await queryInterface.bulkInsert('Stocks-In-Bookstores', [
      {
        StockID: 1,
        'Stock-Price': 21,
        'Stock-Qty': 100,
        PubID: 1,
        BookstoreID: 1,
      },
      {
        StockID: 2,
        "Stock-Price": 55,
        "Stock-Qty": 250,
        PubID: 2,
        BookstoreID: 1,
      },
      {
        StockID: 3,
        "Stock-Price": 81,
        "Stock-Qty": 450,
        PubID: 3,
        BookstoreID: 1,
      },
      {
        StockID: 4,
        "Stock-Price": 15,
        "Stock-Qty": 360,
        PubID: 4,
        BookstoreID: 1,
      },
      {
        StockID: 5,
        "Stock-Price": 17,
        "Stock-Qty": 100,
        PubID: 3,
        BookstoreID: 2,
      },
      {
        StockID: 6,
        "Stock-Price": 32,
        "Stock-Qty": 250,
        PubID: 4,
        BookstoreID: 2,
      },
      {
        StockID: 7,
        "Stock-Price": 60,
        "Stock-Qty": 180,
        PubID: 1,
        BookstoreID: 3,
      },
      {
        StockID: 8,
        "Stock-Price": 40,
        "Stock-Qty": 70,
        PubID: 2,
        BookstoreID: 3,
      },
      {
        StockID: 9,
        "Stock-Price": 74,
        "Stock-Qty": 110,
        PubID: 2,
        BookstoreID: 4,
      },
    ])

    await queryInterface.bulkInsert('Price-Histories', [
      {
        StockID: 1,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 20
      },
      {
        StockID: 1,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 18
      },
      {
        StockID: 1,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 19
      },
      {
        StockID: 1,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 21
      },
      {
        StockID: 1,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 50
      },
      {
        StockID: 2,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 50
      },
      {
        StockID: 2,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 55
      },
      {
        StockID: 2,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 53
      },
      {
        StockID: 2,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 54
      },
      {
        StockID: 2,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 55
      },
      {
        StockID: 3,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 80
      },
      {
        StockID: 3,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 83
      },
      {
        StockID: 3,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 85
      },
      {
        StockID: 3,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 82
      },
      {
        StockID: 3,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 81
      },
      {
        StockID: 4,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 15
      },
      {
        StockID: 4,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 13
      },
      {
        StockID: 4,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 14
      },
      {
        StockID: 4,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 15
      },
      {
        StockID: 4,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 15
      },
      {
        StockID: 5,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 16
      },
      {
        StockID: 5,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 17
      },
      {
        StockID: 5,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 17
      },
      {
        StockID: 5,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 18
      },
      {
        StockID: 5,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 17
      },
      {
        StockID: 6,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 30
      },
      {
        StockID: 6,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 31
      },
      {
        StockID: 6,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 30
      },
      {
        StockID: 6,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 31
      },
      {
        StockID: 6,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 32
      },
      {
        StockID: 7,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 60
      },
      {
        StockID: 7,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 61
      },
      {
        StockID: 7,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 62
      },
      {
        StockID: 7,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 61
      },
      {
        StockID: 7,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 60
      },
      {
        StockID: 8,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 40
      },
      {
        StockID: 8,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 39
      },
      {
        StockID: 8,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 40
      },
      {
        StockID: 8,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 41
      },
      {
        StockID: 8,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 40
      },
      {
        StockID: 9,
        "Start-Date": "20210101",
        "End-Date": "20210531",
        Price: 75
      },
      {
        StockID: 9,
        "Start-Date": "20210601",
        "End-Date": "20211231",
        Price: 76
      },
      {
        StockID: 9,
        "Start-Date": "20220101",
        "End-Date": "20220531",
        Price: 77
      },
      {
        StockID: 75,
        "Start-Date": "20220601",
        "End-Date": "20221231",
        Price: 77
      },
      {
        StockID: 9,
        "Start-Date": "20230101",
        "End-Date": "20210531",
        Price: 74
      },
    ])

    await queryInterface.bulkInsert('Customers', [
      {
        CustomerID: 1,
        Name: "Hui Xiang"
      },
      {
        CustomerID: 2,
        Name: "Joe"
      },
      {
        CustomerID: 3,
        Name: "Zhen Yu"
      },
      {
        CustomerID: 4,
        Name: "Alex"
      },
      {
        CustomerID: 5,
        Name: "Ian"
      },
      {
        CustomerID: 6,
        Name: "Mingyang"
      },
    ]);

    await queryInterface.bulkInsert('Orders', [
      {
        OrderID: 1,
        CustomerID: 1,
        "Date-Time": "20220603 12:30:00 PM",
        "Shipping-address": "3324 Millbrook Road"
      },
      {
        OrderID: 2,
        CustomerID: 6,
        "Date-Time": "20210521 14:33:22 PM",
        "Shipping-address": "3909 Leverton Cove Road"
      },
      {
        OrderID: 3,
        CustomerID: 2,
        "Date-Time": "20220101 10:12:33 PM",
        "Shipping-address": "2415 Meadow Drive"
      },
      {
        OrderID: 4,
        CustomerID: 4,
        "Date-Time": "20211122 08:11:20 PM",
        "Shipping-address": "4289 Briarwood Drive"
      },
      {
        OrderID: 5,
        CustomerID: 3,
        "Date-Time": "20230302 11:22:59 PM",
        "Shipping-address": "3228 Old Dear Lane"
      },
      {
        OrderID: 6,
        CustomerID: 5,
        "Date-Time": "20230321 11:22:59 PM",
        "Shipping-address": "5143 Lower Manhatten Street"
      },
      {
        OrderID: 7,
        CustomerID: 1,
        "Date-Time": "20230325 11:22:59 PM",
        "Shipping-address": "312 Korea Town"
      },
      {
        OrderID: 8,
        CustomerID: 3,
        "Date-Time": "20230325 11:22:59 PM",
        "Shipping-address": "135 Chinatown Road"
      },
      {
        OrderID: 9,
        CustomerID: 5,
        "Date-Time": "20230328 11:00:59 PM",
        "Shipping-address": "1234 Upper Downtown Road"
      },
      {
        OrderID: 10,
        CustomerID: 2,
        "Date-Time": "20220625 07:00:00 AM",
        "Shipping-address": "2415 Meadow Drive"
      },
      {
        OrderID: 11,
        CustomerID: 1,
        "Date-Time": "20220620 07:00:00 AM",
        "Shipping-address": "2234 Brooklyn Road"
      },
      {
        OrderID: 12,
        CustomerID: 3,
        "Date-Time": "20220801 03:00:00 PM",
        "Shipping-address": "3228 Old Dear Lane"
      },
      {
        OrderID: 13,
        CustomerID: 4,
        "Date-Time": "20220820 03:00:00 PM",
        "Shipping-address": "4289 Briarwood Drive"
      },
      {
        OrderID: 14,
        CustomerID: 5,
        "Date-Time": "20220815 03:00:00 PM",
        "Shipping-address": "5143 Lower Manhatten Street"
      }
    ]);

    await queryInterface.bulkInsert('Items-In-Orders', [
      {
        ItemID: 1,
        StockID: 2,
        OrderID: 1,
        "Item-Price": 54, 
        "Item-Qty": 2,
        "Delivery-date": "20220616"
      },
      {
        ItemID: 2,
        StockID: 4,
        OrderID: 1,
        "Item-Price": 15, 
        "Item-Qty": 4,
        "Delivery-date": "20220620"
      },
      {
        ItemID: 3,
        StockID: 5,
        OrderID: 2,
        "Item-Price": 17, 
        "Item-Qty": 1,
        "Delivery-date": "20210610"
      },
      {
        ItemID: 4,
        StockID: 6,
        OrderID: 3,
        "Item-Price": 30, 
        "Item-Qty": 3,
        "Delivery-date": "20220201"
      },
      {
        ItemID: 5,
        StockID: 3,
        OrderID: 4,
        "Item-Price": 83, 
        "Item-Qty": 1,
        "Delivery-date": "20211231"
      },
      {
        ItemID: 6,
        StockID: 1,
        OrderID: 5,
        "Item-Price": 21, 
        "Item-Qty": 2,
        "Delivery-date": "20230323"
      },
      {
        ItemID: 7,
        StockID: 5,
        OrderID: 6,
        "Item-Price": 17,
        "Item-Qty": 4,
        "Delivery-date": "20230410"
      },
      {
        ItemID: 8,
        StockID: 7,
        OrderID: 7,
        "Item-Price": 60,
        "Item-Qty": 3,
        "Delivery-date": "20230418"
      },
      {
        ItemID: 9,
        StockID: 8,
        OrderID: 7,
        "Item-Price": 40,
        "Item-Qty": 5,
        "Delivery-date": "20230420"
      },
      {
        ItemID: 10,
        StockID: 9,
        OrderID: 8,
        "Item-Price": 74,
        "Item-Qty": 2,
        "Delivery-date": "20230423"
      },
      {
        ItemID: 11,
        StockID: 5,
        OrderID: 8,
        "Item-Price": 17,
        "Item-Qty": 2,
        "Delivery-date": "20230416"
      },
      {
        ItemID: 12,
        StockID: 1,
        OrderID: 9,
        "Item-Price": 21,
        "Item-Qty": 3,
        "Delivery-date": "20230425"
      },
      {
        ItemID: 13,
        StockID: 2,
        OrderID: 9,
        "Item-Price": 55,
        "Item-Qty": 1,
        "Delivery-date": "20230425"
      },
      {
        ItemID: 14,
        StockID: 1,
        OrderID: 10,
        "Item-Price": 21,
        "Item-Qty": 1,
        "Delivery-date": "20220718"
      },
      {
        ItemID: 15,
        StockID: 4,
        OrderID: 11,
        "Item-Price": 15,
        "Item-Qty": 1,
        "Delivery-date": "20220621"
      },
      {
        ItemID: 16,
        StockID: 1,
        OrderID: 12,
        "Item-Price": 21,
        "Item-Qty": 3,
        "Delivery-date": "20220901"
      },
      {
        ItemID: 17,
        StockID: 2,
        OrderID: 13,
        "Item-Price": 54,
        "Item-Qty": 5,
        "Delivery-date": "20220912"
      },
      {
        ItemID: 18,
        StockID: 3,
        OrderID: 14,
        "Item-Price": 82,
        "Item-Qty": 2,
        "Delivery-date": "20220910"
      },
    ]);
    
    await queryInterface.bulkInsert('Feedbacks', [
      {
        ItemID: 1,
        CustomerID: 1,
        Comment: "Interesting book. Would definitely recommend this book to anyone looking for an adventure!",
        "Date-time": "20220618",
        Rating: 5
      },
      {
        ItemID: 2,
        CustomerID: 1,
        Comment: "The best book I have read this year!",
        "Date-time": "20220622",
        Rating: 5
      },
      {
        ItemID: 3,
        CustomerID: 2,
        Comment: "An easy read. Suitable for beginners",
        "Date-time": "20210612",
        Rating: 4
      },
      {
        ItemID: 4,
        CustomerID: 2,
        Comment: "A waste of my time. There are just too many plot holes",
        "Date-time": "20220203",
        Rating: 1
      },
      {
        ItemID: 5,
        CustomerID: 4,
        Comment: "Messy plot and a terrible ending",
        "Date-time": "20220101",
        Rating: 1
      },
      {
        ItemID: 6,
        CustomerID: 3,
        Comment: "Love the book. Will definitely revisit again in the future",
        "Date-time": "20230325",
        Rating: 5
      },
      {
        ItemID: 15,
        CustomerID: 1,
        Comment: "Title is good, but story is bad",
        "Date-time": "20220628",
        Rating: 2,
      },
    ]);

    await queryInterface.bulkInsert('Item-Statuses', [
      {
        ItemID: 1,
        Date: "20220616",
        State: "delivered"
      },
      {
        ItemID: 2,
        Date: "20220620",
        State: "returned"
      },
      {
        ItemID: 3,
        Date: "20210610",
        State: "delivered"
      },
      {
        ItemID: 4,
        Date: "20220201",
        State: "returned"
      },
      {
        ItemID: 5,
        Date: "20211231",
        State: "delivered"
      },
      {
        ItemID: 6,
        Date: "20230323",
        State: "delivered"
      },
      {
        ItemID: 7,
        Date: "20230410",
        State: "shipped"
      },
      {
        ItemID: 8,
        Date: "20230418",
        State: "shipped"
      },
      {
        ItemID: 9,
        Date: "20230420",
        State: "being processed"
      },
      {
        ItemID: 10,
        Date: "20230423",
        State: "being processed"
      },
      {
        ItemID: 11,
        Date: "20230416",
        State: "shipped"
      },
      {
        ItemID: 12,
        Date: "20230425",
        State: "being processed"
      },
      {
        ItemID: 13,
        Date: "20230425",
        State: "being processed"
      },
      {
        ItemID: 14,
        Date: "20220718",
        State: "delivered"
      },
      {
        ItemID: 15,
        Date: "20220621",
        State: "delivered",
      },
      {
        ItemID: 16,
        Date: "20220901",
        State: "delivered"
      },
      {
        ItemID: 17,
        Date: "20220912",
        State: "delivered"
      },
      {
        ItemID: 18,
        Date: "20220910",
        State: "delivered"
      },
    ]);
  },
  

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Item-Statuses', null, {});
    await queryInterface.bulkDelete('Feedbacks', null, {});
    await queryInterface.bulkDelete('Items-In-Orders', null, {});
    await queryInterface.bulkDelete('Stocks-In-Bookstores', null, {});
    await queryInterface.bulkDelete('Publications', null, {});
    await queryInterface.bulkDelete('Bookstores', null, {});
    await queryInterface.bulkDelete('Price-Histories', null, {});
    await queryInterface.bulkDelete('Orders', null, {});
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
