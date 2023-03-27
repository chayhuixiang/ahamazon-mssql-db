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
      {
        StockID: 10,
        "Stock-Price": 30,
        "Stock-Qty": 200,
        PubID: 5,
        BookstoreID: 1,
      },
      {
        StockID: 11,
        "Stock-Price": 40,
        "Stock-Qty": 200,
        PubID: 8,
        BookstoreID: 1,
      }
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
        "End-Date": "20220731",
        Price: 21
      },
      {
        StockID: 1,
        "Start-Date": "20220801",
        "End-Date": "20220815",
        Price: 20
      },
      {
        StockID: 1,
        "Start-Date": "20220816",
        "End-Date": "20220831",
        Price: 22
      },
      {
        StockID: 1,
        "Start-Date": "20220901",
        "End-Date": "20221231",
        Price: 23
      },
      {
        StockID: 1,
        "Start-Date": "20230101",
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20220731",
        Price: 61
      },
      {
        StockID: 7,
        "Start-Date": "20220801",
        "End-Date": "20220815",
        Price: 63
      },
      {
        StockID: 7,
        "Start-Date": "20220816",
        "End-Date": "20220831",
        Price: 64
      },
      {
        StockID: 7,
        "Start-Date": "20220901",
        "End-Date": "20221231",
        Price: 62
      },
      {
        StockID: 7,
        "Start-Date": "20230101",
        "End-Date": "20230531",
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
        "End-Date": "20230531",
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
        "End-Date": "20230531",
        Price: 74
      },
      {
        StockID: 10,
        "Start-Date": "20210101",
        "End-Date": "20230601",
        Price: 30
      },
      {
        StockID: 11,
        "Start-Date": "20210101",
        "End-Date": "20230601",
        Price: 40
      }
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
      {
        CustomerID: 7,
        Name: "Zhen Yong"
      },
      {
        CustomerID: 8,
        Name: "Ming Jia"
      },
      {
        CustomerID: 9,
        Name: "Ivan Loke"
      },
      {
        CustomerID: 10,
        Name: "Jun Kai"
      }
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
        "Date-Time": "20230225 11:22:59 PM",
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
        "Date-Time": "20230401 11:00:59 PM",
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
      },
      {
        OrderID: 15,
        CustomerID: 6,
        "Date-Time": "20220719 11:00:00 AM",
        "Shipping-address": "3909 Leverton Cove Road"
      },
      {
        OrderID: 16,
        CustomerID: 7,
        "Date-Time": "20220801 10:30:00 AM",
        "Shipping-address": "6554 Maple Street"
      },
      {
        OrderID: 17,
        CustomerID: 8,
        "Date-Time": "20220725 09:00:00 AM",
        "Shipping-address": "6718 Smith Drive"
      },
      {
        OrderID: 18,
        CustomerID: 9,
        "Date-Time": "20220710 08:00:00 AM",
        "Shipping-address": "5421 White Hart Lane"
      },
      {
        OrderID: 19,
        CustomerID: 10,
        "Date-Time": "20220720 01:25:00 PM",
        "Shipping-address": "9282 Old Trafford"
      },
      {
        OrderID: 20,
        CustomerID: 9,
        "Date-Time": "20220802 02:05:00 PM",
        "Shipping-address": "5421 White Hart Lane"
      },
      {
        OrderID: 21,
        CustomerID: 6,
        "Date-Time": "20220803 04:30:00 PM",
        "Shipping-address": "3909 Leverton Cove Road"
      },
      {
        OrderID: 22,
        CustomerID: 8,
        "Date-Time": "20220725 10:00:00 AM",
        "Shipping-address": "6718 Smith Drive"
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
        "Item-Qty": 1,
        "Delivery-date": "20230313"
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
        "Item-Qty": 2,
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
        "Delivery-date": "20230501"
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
        "Item-Price": 20,
        "Item-Qty": 3,
        "Delivery-date": "20220820"
      },
      {
        ItemID: 17,
        StockID: 2,
        OrderID: 13,
        "Item-Price": 54,
        "Item-Qty": 5,
        "Delivery-date": "20220825"
      },
      {
        ItemID: 18,
        StockID: 3,
        OrderID: 14,
        "Item-Price": 82,
        "Item-Qty": 2,
        "Delivery-date": "20220821"
      },
      {
        ItemID: 19,
        StockID: 1,
        OrderID: 14,
        "Item-Price": 20,
        "Item-Qty": 1,
        "Delivery-date": "20220822"
      },
      {
        ItemID: 20,
        StockID: 1,
        OrderID: 13,
        "Item-Price": 22,
        "Item-Qty": 1,
        "Delivery-date": "20220825"
      },
      {
        ItemID: 21,
        StockID: 2,
        OrderID: 12,
        "Item-Price": 54,
        "Item-Qty": 1,
        "Delivery-date": "20220820"
      },
      {
        ItemID: 22,
        StockID: 7,
        OrderID: 15,
        "Item-Price": 61,
        "Item-Qty": 2,
        "Delivery-date": "20220801"
      },
      {
        ItemID: 23,
        StockID: 8,
        OrderID: 15,
        "Item-Price": 41,
        "Item-Qty": 1,
        "Delivery-date": "20220801"
      },
      {
        ItemID: 24,
        StockID: 7,
        OrderID: 16,
        "Item-Price": 63,
        "Item-Qty": 1,
        "Delivery-date": "20220810"
      },
      {
        ItemID: 25,
        StockID: 8,
        OrderID: 16,
        "Item-Price": 41,
        "Item-Qty": 2,
        "Delivery-date": "20220810"
      },
      {
        ItemID: 26,
        StockID: 7,
        OrderID: 17,
        "Item-Price": 61,
        "Item-Qty": 1,
        "Delivery-date": "20220805"
      },
      {
        ItemID: 27,
        StockID: 8,
        OrderID: 17,
        "Item-Price": 41,
        "Item-Qty": 1,
        "Delivery-date": "20220805"
      },
      {
        ItemID: 28,
        StockID: 7,
        OrderID: 18,
        "Item-Price": 61,
        "Item-Qty": 1,
        "Delivery-date": "20220802"
      },
      {
        ItemID: 29,
        StockID: 8,
        OrderID: 18,
        "Item-Price": 41,
        "Item-Qty": 1,
        "Delivery-date": "20220802"
      },
      {
        ItemID: 30,
        StockID: 1,
        OrderID: 19,
        "Item-Price": 21,
        "Item-Qty": 2,
        "Delivery-date": "20220805"
      },
      {
        ItemID: 31,
        StockID: 2,
        OrderID: 19,
        "Item-Price": 54,
        "Item-Qty": 2,
        "Delivery-date": "20220805"
      },
      {
        ItemID: 32,
        StockID: 1,
        OrderID: 20,
        "Item-Price": 20,
        "Item-Qty": 1,
        "Delivery-date": "20220819"
      },
      {
        ItemID: 33,
        StockID: 2,
        OrderID: 20,
        "Item-Price": 54,
        "Item-Qty": 1,
        "Delivery-date": "20220819"
      },
      {
        ItemID: 34,
        StockID: 1,
        OrderID: 21,
        "Item-Price": 20,
        "Item-Qty": 1,
        "Delivery-date": "20220820"
      },
      {
        ItemID: 35,
        StockID: 2,
        OrderID: 21,
        "Item-Price": 54,
        "Item-Qty": 1,
        "Delivery-date": "20220820"
      },
      {
        ItemID: 36,
        StockID: 7,
        OrderID: 22,
        "Item-Price": 61,
        "Item-Qty": 1,
        "Delivery-date": "20220802"
      },
      {
        ItemID: 37,
        StockID: 8,
        OrderID: 22,
        "Item-Price": 41,
        "Item-Qty": 1,
        "Delivery-date": "20220802"
      },
      {
        ItemID: 38,
        StockID: 10,
        OrderID: 20,
        "Item-Price": 30,
        "Item-Qty": 2,
        "Delivery-date": "20220819"
      },
      {
        ItemID: 39,
        StockID: 11,
        OrderID: 20,
        "Item-Price": 40,
        "Item-Qty": 2,
        "Delivery-date": "20220819"
      },
      {
        ItemID: 40,
        StockID: 10,
        OrderID: 21,
        "Item-Price": 30,
        "Item-Qty": 3,
        "Delivery-date": "20220820"
      }
    ]);
    
    await queryInterface.bulkInsert('Feedbacks', [
      {
        ItemID: 1,
        CustomerID: 1,
        Comment: "Interesting book. Would definitely recommend this book to anyone looking for an adventure!",
        "Date-time": "20220618",
        Rating: 4
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
        Rating: 3
      },
      {
        ItemID: 15,
        CustomerID: 1,
        Comment: "Title is good, but story is bad",
        "Date-time": "20220628",
        Rating: 2,
      },
      {
        ItemID: 16,
        CustomerID: 3,
        Comment: "Ending was outstanding. 100% would recommend.",
        "Date-time": "20220825",
        Rating: 5,
      },
      {
        ItemID: 17,
        CustomerID: 4,
        Comment: "Exciting take on the life of an NTU CS Student!",
        "Date-time": "20220828",
        Rating: 5,
      },
      {
        ItemID: 18,
        CustomerID: 5,
        Comment: "Wow! I managed to secure my dream job by reading this book! Thanks!",
        "Date-time": "20220829",
        Rating: 5
      },
      {
        ItemID: 19,
        CustomerID: 5,
        Comment: "What a twist at the end! Love it.",
        "Date-time": "20220829",
        Rating: 5,
      },
      {
        ItemID: 20,
        CustomerID: 4,
        "Date-time": "20220828",
        Comment: "Love the story. What a shame that it's the finale!",
        Rating: 5
      },
      {
        ItemID: 21,
        CustomerID: 3,
        Comment: "Interesting development! What a read.",
        "Date-time": "20220825",
        Rating: 5
      },
      {
        ItemID: 22,
        CustomerID: 6,
        Comment: "Unbelievable. Simply Amazing Book.",
        "Date-time": "20220810",
        Rating: 5
      },
      {
        ItemID: 23,
        CustomerID: 6,
        Comment: "How is this book not trending worldwide??",
        "Date-time": "20220810",
        Rating: 5
      },
      {
        ItemID: 24,
        CustomerID: 7,
        Comment: "I couldn't put this book down! The suspense and action had me on the edge of my seat from start to finish. A must-read for any Harry Potter fan!",
        "Date-time": "20220820",
        Rating: 5,
      },
      {
        ItemID: 25,
        CustomerID: 7,
        Comment: "As a CS student myself, I found this book to be relatable, informative, and highly entertaining.",
        "Date-time": "20220820",
        Rating: 5,
      },
      {
        ItemID: 26,
        CustomerID: 8,
        Comment: "If you haven't read this book yet, what are you waiting for? It's everything you could want in a finale and more!",
        "Date-time": "20220823",
        Rating: 5,
      },
      {
        ItemID: 27,
        CustomerID: 8,
        Comment: "An insightful and inspiring read. This book will give you a glimpse into the world of a CS student at NTU.",
        "Date-time": "20220823",
        Rating: 5
      },
      {
        ItemID: 28,
        CustomerID: 9,
        Comment: "I don't want to spoil anything, but the ending will leave you in awe. It's a must-read for all Harry Potter fans!",
        "Date-time": "20220815",
        Rating: 5
      },
      {
        ItemID: 29,
        CustomerID: 9,
        Comment: "The author's passion for CS is contagious. This book will inspire and motivate you to pursue your own passions.",
        "Date-time": "20220815",
        Rating: 5
      },
      {
        ItemID: 30,
        CustomerID: 10,
        Comment: "A stunning finale that ties up all loose ends and leaves you feeling completely satisfied.",
        "Date-time": "20220810",
        Rating: 5
      },
      {
        ItemID: 31,
        CustomerID: 10,
        Comment: "The book strikes a great balance between being informative and entertaining. I highly recommend it!",
        "Date-time": "20220809",
        Rating: 5
      },
      {
        ItemID: 32,
        CustomerID: 9,
        Comment: "Giving this book a high rating for the free gift.",
        "Date-time": "20220825",
        Rating: 5
      },
      {
        ItemID: 33,
        CustomerID: 9,
        Comment: "Giving this book a high rating for the free gift.",
        "Date-time": "20220825",
        Rating: 5
      },
      {
        ItemID: 34,
        CustomerID: 6,
        Comment: "Giving this book a high rating for the free gift.",
        "Date-time": "20220826",
        Rating: 5
      },
      {
        ItemID: 35,
        CustomerID: 9,
        Comment: "Giving this book a high rating for the free gift.",
        "Date-time": "20220826",
        Rating: 5
      },
      {
        ItemID: 36,
        CustomerID: 8,
        Comment: "My cousin found this book amazing!",
        "Date-time": "20220823",
        Rating: 5
      },
      {
        ItemID: 37,
        CustomerID: 8,
        Comment: "My cousin is now better at algorithms!",
        "Date-time": "20220823",
        Rating: 5
      }
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
        Date: "20230313",
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
        Date: "20230501",
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
        Date: "20220820",
        State: "delivered"
      },
      {
        ItemID: 17,
        Date: "20220825",
        State: "delivered"
      },
      {
        ItemID: 18,
        Date: "20220821",
        State: "delivered"
      },
      {
        ItemID: 19,
        Date: "20220822",
        State: "delivered",
      },
      {
        ItemID: 20,
        Date: "20220825",
        State: "delivered"
      },
      {
        ItemID: 21,
        Date: "20220820",
        State: "delivered"
      },
      {
        ItemID: 22,
        Date: "20220801",
        State: "delivered"
      },
      {
        ItemID: 23,
        Date: "20220801",
        State: "delivered"
      },
      {
        ItemID: 24,
        Date: "20220810",
        State: "delivered"
      },
      {
        ItemID: 25,
        Date: "20220810",
        State: "delivered"
      },
      {
        ItemID: 26,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 27,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 28,
        Date: "20220802",
        State: "delivered"
      },
      {
        ItemID: 29,
        Date: "20220802",
        State: "delivered"
      },
      {
        ItemID: 30,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 31,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 32,
        Date: "20220819",
        State: "delivered"
      },
      {
        ItemID: 33,
        Date: "20220819",
        State: "delivered"
      },
      {
        ItemID: 34,
        Date: "20220820",
        State: "delivered"
      },
      {
        ItemID: 35,
        Date: "20220820",
        State: "delivered"
      },
      {
        ItemID: 36,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 37,
        Date: "20220805",
        State: "delivered"
      },
      {
        ItemID: 38,
        Date: "20220819",
        State: "delivered"
      },
      {
        ItemID: 39,
        Date: "20220819",
        State: "delivered"
      },
      {
        ItemID: 40,
        Date: "20220820",
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
