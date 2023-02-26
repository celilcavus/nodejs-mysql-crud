const conn = require('../database');



class sql{

   static getAll(){
       conn.query('SELECT * FROM product',(err,res)=>{
         console.log(res);
       });
   }

   static AddProduct(){
      conn.query('INSERT INTO product (name,price,imageUrl,description) values ("samsung s7",3000,"telefon.jpg","kullanışlı telefon")',(err,res)=>{
        console.log(res);
      });
  }

  static UpdateProduct(id){
   conn.query('Update product set name="iphone 13 pro" , price = 15000, imageUrl = "iphone13.jpg",description = "çok güzel telefon" where id = 5',(err,res)=>{
      if (res) {
       console.log("güncelleme başarılı");  
      }
      else{
         console.log("güncelleme başarısız");
      }
   })
  }

   static getById(id){
      conn.query(`SELECT * FROM product where id =${id}`,(err,res)=>{
         if (res) {
            console.log(res);
         }
         else{
            console.log("Aradığınız id'de değer yok");
         }
      });
   }

   static deleteGetById(id){
      conn.query(`DELETE FROM product where id = ${id}`,(err,res)=>{
         if (res) {
            console.log("işlem başarılı");
         }
         else{
            console.log("işlem başarısız");
         }
      });
      
   }
  
}


module.exports = sql;