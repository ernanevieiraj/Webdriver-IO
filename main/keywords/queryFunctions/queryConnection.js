const connStr = "Colocar o banco aqui";

console.log(connStr)

const sql = require("mssql");

async function queryExecute(querys, campo) {
   try {
            sql.close()
            console.log('queryFunctions querys => ', querys)
            let pool = await sql.connect(connStr)
            let result1 = await pool.request()
            .query(querys)
            let z = JSON.parse(JSON.stringify(await result1.recordset[0]))
            sql.close()
            console.log('queryFunctions result1 => ', z[campo])
            return z[campo]
         } catch (err) {
      console.error('error -> ', err)
      sql.close()
   }
}

function callQueryExecute(querys, campo){
   let variable = browser.call(() => {
       return queryExecute(querys, campo).then((valor) => {
           console.log('Valor de variable ->>', valor)
           return valor
       })
   })
   return variable
 }

module.exports.callQueryExecute = callQueryExecute;