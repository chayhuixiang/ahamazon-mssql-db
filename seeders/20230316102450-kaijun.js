'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publications', [
      {
        PubID: 1,
        Publisher: "John's Publication",
        Year: 2022
      },
      {
        PubID: 2,
        Publisher: "SG education",
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
    // await queryInterface.bulkInsert('Price-Histories', [
    //   {
    //     StockID: 1,
    //     "Start-Date": "20210101",
    //     "End-Date": "20210531",
    //     Price: 20
    //   },
      // {
      //   StockID: 1,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 18
      // },
      // {
      //   StockID: 1,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 19
      // },
      // {
      //   StockID: 1,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 21
      // },
      // {
      //   StockID: 1,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 50
      // },
      // {
      //   StockID: 2,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 50
      // },
      // {
      //   StockID: 2,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 55
      // },
      // {
      //   StockID: 2,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 53
      // },
      // {
      //   StockID: 2,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 54
      // },
      // {
      //   StockID: 2,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 55
      // },
      // {
      //   StockID: 3,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 80
      // },
      // {
      //   StockID: 3,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 83
      // },
      // {
      //   StockID: 3,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 85
      // },
      // {
      //   StockID: 3,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 82
      // },
      // {
      //   StockID: 3,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 81
      // },
      // {
      //   StockID: 4,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 15
      // },
      // {
      //   StockID: 4,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 13
      // },
      // {
      //   StockID: 4,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 14
      // },
      // {
      //   StockID: 4,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 15
      // },
      // {
      //   StockID: 4,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 15
      // },
      // {
      //   StockID: 5,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 16
      // },
      // {
      //   StockID: 5,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 17
      // },
      // {
      //   StockID: 5,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 17
      // },
      // {
      //   StockID: 5,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 18
      // },
      // {
      //   StockID: 5,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 17
      // },
      // {
      //   StockID: 6,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 30
      // },
      // {
      //   StockID: 6,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 31
      // },
      // {
      //   StockID: 6,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 30
      // },
      // {
      //   StockID: 6,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 31
      // },
      // {
      //   StockID: 6,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 32
      // },
      // {
      //   StockID: 7,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 60
      // },
      // {
      //   StockID: 7,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 61
      // },
      // {
      //   StockID: 7,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 62
      // },
      // {
      //   StockID: 7,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 61
      // },
      // {
      //   StockID: 7,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 60
      // },
      // {
      //   StockID: 8,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 40
      // },
      // {
      //   StockID: 8,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 39
      // },
      // {
      //   StockID: 8,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 40
      // },
      // {
      //   StockID: 8,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 41
      // },
      // {
      //   StockID: 8,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 40
      // },
      // {
      //   StockID: 9,
      //   "Start-Date": "20210101",
      //   "End-Date": "20210531",
      //   Price: 75
      // },
      // {
      //   StockID: 9,
      //   "Start-Date": "20210601",
      //   "End-Date": "20211231",
      //   Price: 76
      // },
      // {
      //   StockID: 9,
      //   "Start-Date": "20220101",
      //   "End-Date": "20220531",
      //   Price: 77
      // },
      // {
      //   StockID: 75,
      //   "Start-Date": "20220601",
      //   "End-Date": "20221231",
      //   Price: 77
      // },
      // {
      //   StockID: 9,
      //   "Start-Date": "20230101",
      //   "End-Date": "20210531",
      //   Price: 74
      // },
    // ])

    // await queryInterface.bulkInsert('Orders', [
    //   {
    //     OrderID: 1,
    //     CustomerID: 1,
    //     "Date-Time": "2022-06-03T12:30:00.000",
    //     "Shipping-address": "3324 Millbrook Road"
    //   },
    // ])
//     1	1	2022-06-03 12:30:00	3324 Millbrook Road
// 2	6	2021-05-21 14:33:22	3909 Leverton Cove Road
// 3	2	2022-01-01 22:12:33	2415 Meadow Drive
// 4	4	2021-11-22 20:11:20	4289 Briarwood Drive
// 5	3	2023-03-02 23:22:59	3228 Old Dear Lane
// 6	5	2023-03-21 23:22:59	5143 Lower Manhatten Street
// 7	1	2023-03-25 23:22:59	312 Korea Town
// 8	3	2023-03-25 23:22:59	135 Chinatown Road
// 9	5	2023-03-28 23:00:59	1234 Upper Downtown Road
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Publications', null, {});
    await queryInterface.bulkDelete('Bookstores', null, {});
    await queryInterface.bulkDelete('Stocks-In-Bookstores', null, {});
    await queryInterface.bulkDelete('Price-Histories', null, {});
    await queryInterface.bulkDelete('Orders', null, {});

  }
};
