// let div1 = ['1st block', '2nd block', '3rd block', '4th block', '5th block', '6th block', '7th block', '8th block', '9th block', '10th block']
// for (let task1 of div1) {
//     document.write(`<div>${task1}</div>`)
// }

// let div2 = [
//     {misc:'1.1', misc2:'1.2'},
//     {misc:'2.1', misc2:'2.2'},
//     {misc:'3.1', misc2:'3.2'},
//     {misc:'4.1', misc2:'4.2'},
//     {misc:'5.1', misc2:'5.2'},
//     {misc:'6.1', misc2:'6.2'},
//     {misc:'7.1', misc2:'7.2'},
//     {misc:'8.1', misc2:'8.2'},
//     {misc:'9.1', misc2:'9.2'},
//     {misc:'10.1', misc2:'10.2'},
// ]
// for (let task2 of div2) {
//     document.write(`<div>${task2.misc2}</div>`)
// }

// let div3 = [
//     ['1st block'],
//     ['2nd block'],
//     ['3rd block'],
//     ['4th block'],
//     ['5th block'],
//     ['6th block'],
//     ['7th block'],
//     ['8th block'],
//     ['9th block'],
//     ['10th block'],
//     ['11th block'],
//     ['12th block'],
//     ['13th block'],
//     ['14th block'],
//     ['15th block'],
//     ['16th block'],
//     ['17th block'],
//     ['18th block'],
//     ['19th block'],
//     ['20th block'],
// ]
// let task3 = 0;
// while  (task3<div3.length){
//     document.write(`<h1>${div3[task3]}</h1>`)
//     task3++;
// }

// let div4 = [
//         {text:'1st block', number: 35},
//         {text:'2nd block', number: 53},
//         {text:'3rd block', number: 357},
//         {text:'4th block', number: 8},
//         {text:'5th block', number: 98},
//         {text:'6th block', number: 13},
//         {text:'7th block', number: 45},
//         {text:'8th block', number: 64},
//         {text:'9th block', number: 15},
//         {text:'10th block', number: 6},
//         {text:'11th block', number: 9},
//         {text:'12th block', number: 305},
//         {text:'13th block', number: 315},
//         {text:'14th block', number: 44},
//         {text:'15th block', number: 3535},
//         {text:'16th block', number: 356},
//         {text:'17th block', number: 365},
//         {text:'18th block', number: 3665},
//         {text:'19th block', number: 356},
//         {text:'20th block', number: 35124},
// ]
//
// let task4 = 0;
//         while  (task4<div4.length){
//         let keydiv4 = div4 [task4];
//         document.write(`<h1>${keydiv4.text} ${keydiv4.number} </h1>`)
//     task4++;
// } // Глянув в готовий код завдання, бо не міг правильно записати keydiv4 щоб коректно відображалися об*єкти.

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write (`<ul>`)
// for (let arr of listOfItems){
//     if (arr.length < listOfItems.length) {
//         document.write(`<li>
//         Language - ${arr}
//         </li>`);
//     }
// }
// document.write (`</ul>`)

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (user1 of users){
//     // if (user1.age > 30)
//     // if (user1.status === true)
//     if (user1.status === false)
//     {
//         document.write (`<li>
//             name - ${user1.name};
//             age - ${user1.age};
//             status - ${user1.status};
//             </li>`)
//     }
// }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту