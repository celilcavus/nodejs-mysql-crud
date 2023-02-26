// console.log("hayatı ve yaşamayı seviyor ve değer veriyorum <33");

const model = require('../mysqlcrud/model/model');

// console.log(model.getAll());

console.log(model.getAll()); // tüm product tablosunu alır
console.log(model.getById(1)); // verilen id'ye göre product tablosundan veri alır
console.log(model.AddProduct());  // product tablosuna veri ekler
console.log(model.UpdateProduct(5)); // product tablosundan aldığı id'ye göre veri günceller
console.log(model.deleteGetById(5)); // product tablosundan aldığı id'ye göre veri Siler