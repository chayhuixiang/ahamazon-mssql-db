'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Books', [
      {
        PubID: 1,
        Title: 'Harry Porter Finale',
      },
      {
        PubID: 2,
        Title: 'Chronicles of NTU CS student'
      },
      {
        PubID: 3,
        Title: 'Introduction to Data Structures and Algorithms'
      },
      {
        PubID: 4,
        Title: 'Why does an NUS CS student earn more?'
      }
    ]);

    await queryInterface.bulkInsert('Magazines',[
      {
        PubID: 5,
        Issue: 1,
        Title: 'Top Gear'
      },
      {
        PubID: 6,
        Issue: 2,
        Title: 'Top Gear'
      },
      {
        PubID: 7,
        Issue: 3,
        Title: 'Top Gear'
      },
      {
        PubID: 8,
        Issue: 1,
        Title: 'Leetcode Daily'
      },
      {
        PubID: 9,
        Issue: 2,
        Title: 'Leetcode Daily'
      },
      {
        PubID: 10,
        Issue: 3,
        Title: 'Leetcode Daily'
      },
      {
        PubID: 11,
        Issue: 1,
        Title: 'Time'
      },
      {
        PubID: 12,
        Issue: 2,
        Title: 'Time'
      },
      {
        PubID: 13,
        Issue: 3,
        Title: 'Time'
      },
    ]);

    await queryInterface.bulkInsert('Employees', [
      {
        EmployeeID: 1,
        Name: 'Lily Tan',
        Salary: 1500
      },
      {
        EmployeeID: 2,
        Name: 'Ivan Tan',
        Salary: 2500
      },
      {
        EmployeeID: 3,
        Name: 'Kai Jun',
        Salary: 3000
      }
    ]);

    await queryInterface.bulkInsert('Complaints', [
      {
        ComplaintID: 1,
        CustomerID: 2,
        'Filed-Date-Time': '20220204 12:30:00 PM',
        'Text': 'Delivery by bookstore was extremely slow!!'
      },
      {
        ComplaintID: 2,
        CustomerID: 4,
        'Filed-Date-Time': '20220102 09:30:00 PM',
        'Text': 'Water everywhere on the item!!'
      },
      {
        ComplaintID: 3,
        CustomerID: 3,
        'Filed-Date-Time': '20230324 08:00:00 AM',
        'Text': 'Item was received in torn condition!!'
      },
      {
        ComplaintID: 4,
        CustomerID: 3,
        'Filed-Date-Time': '20220401 09:30:00 AM',
        'Text': 'Bookstore have not gotten back to me about my previous complaint!!'
      },
      {
        ComplaintID: 5,
        CustomerID: 1,
        'Filed-Date-Time': '20220701 04:30:00 PM',
        'Text': 'Condition of item was subpar.'
      },
      {
        ComplaintID: 6,
        CustomerID: 5,
        'Filed-Date-Time': '20230410 09:00:00 PM',
        'Text': 'Where is my delivery??'
      },
      {
        ComplaintID: 7,
        CustomerID: 6,
        'Filed-Date-Time': '20210521 03:00:00 PM',
        'Text': 'Order Page extremely difficult to navigate. Who designed this page?'
      },
      {
        ComplaintID: 8,
        CustomerID: 2,
        'Filed-Date-Time': '20220204 01:30:00 PM',
        'Text': 'Service was extremely bad also. Expect better service next time.'
      }
    ]);

    await queryInterface.bulkInsert('Complaint-Statuses', [
      {
        ComplaintID: 1,
        Date: '2022-02-04',
        State: 'addressed'
      },
      {
        ComplaintID: 2,
        Date: '2022-01-31',
        State: 'addressed'
      },
      {
        ComplaintID: 3,
        Date: '2023-04-02',
        State: 'being handled'
      },
      {
        ComplaintID: 4,
        Date: '2023-04-01',
        State: 'pending'
      },
      {
        ComplaintID: 5,
        Date: '2022-07-08',
        State: 'addressed'
      },
      {
        ComplaintID: 6,
        Date: '2023-04-10',
        State: 'pending'
      },
      {
        ComplaintID: 7,
        Date: '2021-05-22',
        State: 'addressed'
      },
      {
        ComplaintID: 8,
        Date: '2022-02-04',
        State: 'addressed'
      }
    ]);

    await queryInterface.bulkInsert('Complaints-on-Orders', [
      {
        ComplaintID: 2,
        OrderID: 4
      },
      {
        ComplaintID: 3,
        OrderID: 5
      },
      {
        ComplaintID: 5,
        OrderID: 1
      },
    ]);

    await queryInterface.bulkInsert('Complaints-on-Bookstores', [
      {
        ComplaintID: 1,
        BookstoreID: 2
      },
      {
        ComplaintID: 4,
        BookstoreID: 1
      },
      {
        ComplaintID: 6,
        BookstoreID: 2
      },
      {
        ComplaintID: 7,
        BookstoreID: 2
      },
      {
        ComplaintID: 8,
        BookstoreID: 2
      },
    ]);

    await queryInterface.bulkInsert('Handleds', [
      {
        ComplaintID: 1,
        EmployeeID: 1,
        'Handled-Date-Time': '20220404 08:30:00 PM'
      },
      {
        ComplaintID: 2,
        EmployeeID: 1,
        'Handled-Date-Time': '20220210 12:00:00 PM'
      },
      {
        ComplaintID: 5,
        EmployeeID: 2,
        'Handled-Date-Time': '20220708 09:00:00 PM'
      },
      {
        ComplaintID: 7,
        EmployeeID: 3,
        'Handled-Date-Time': '20210522 12:00:00 PM'
      },
      {
        ComplaintID: 8,
        EmployeeID: 3,
        'Handled-Date-Time': '20220206 08:30:00 PM'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Handleds', null, {});
    await queryInterface.bulkDelete('Complaints-on-Bookstores', null, {});
    await queryInterface.bulkDelete('Complaints-on-Orders', null, {});
    await queryInterface.bulkDelete('Complaint-Statuses', null, {});
    await queryInterface.bulkDelete('Employees', null, {});
    await queryInterface.bulkDelete('Complaints', null, {});
    await queryInterface.bulkDelete('Magazines', null, {});
    await queryInterface.bulkDelete('Books', null, {});
  }
};
