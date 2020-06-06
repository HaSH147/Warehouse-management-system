export const donutChartData = [
  { 'ProductType': 'Huile de table', 'percentSold': 24 },
  { 'ProductType': 'Savons corporels', 'percentSold': 13 },
  { 'ProductType': 'Savons de ménage', 'percentSold': 16.5 },
  { 'ProductType': 'Huile d olives', 'percentSold': 16.5 },
  { 'ProductType': 'Condiments', 'percentSold': 20 },
  { 'ProductType': 'Other', 'percentSold': 10 }
];
export const barChartQ4Months = ['October', 'November', 'December'];
export const barChartMonthlyPercentages = [
  { name: 'Product147', data: [14, 16.25, 17] },
  { name: 'Product111', data: [9.55, 10, 8.55] },
  { name: 'Product560', data: [12, 14.05, 14] },
];
export const gridData = [
  {
    "ProductID": 147,
    "ProductName": "Product147",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "300",
    "UnitPrice": 17,
    "UnitsInStock": 220,
    "UnitsOnOrder": 123,
    "ReorderLevel": 10,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Huile de table",
      "Description": ""
    },
    "FirstOrderedOn": new Date(1996, 8, 20)
  },
  {
    "ProductID": 111,
    "ProductName": "Product111",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "400",
    "UnitPrice": 8.55,
    "UnitsInStock": 310,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Condiments",
      "Description": ""
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
  },
 {
    "ProductID": 560,
    "ProductName": "Product560",
    "SupplierID": 2,
    "CategoryID": 4,
    "QuantityPerUnit": "800",
     "UnitPrice": 14,
     "UnitsInStock": 423,
     "UnitsOnOrder": 0,
     "ReorderLevel": 0,
     "Category": {
      "CategoryID": 2,
      "CategoryName": "Savons corporels",
     "Description": ""
    },
     "FirstOrderedOn": new Date(1996, 7, 17)
  },
 ]
  