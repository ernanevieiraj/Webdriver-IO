const Excel = require('exceljs');

//--------------------READFILE------------------
  async function readFileLdx(nomeSheet, linha, coluna) {
    
  var workbook = new Excel.Workbook();  
  
  await workbook.xlsx.readFile("./main/data/dtGeral/sample.xlsx")
  
  var worksheet = workbook.getWorksheet(nomeSheet);
  
  var row = worksheet.getRow(linha).getCell(coluna).value.toString()

  console.log('Resultado readFileLdx ---> ', row)

  return row
}

function callReadFileLdx(nomeSheet, linha, coluna){
  let variable = browser.call(() => {
      return readFileLdx(nomeSheet, linha, coluna).then((valor) => {
          console.log('Valor de variable ->>', valor)
          return valor
      })
  })
  return variable
}

module.exports.callReadFileLdx = callReadFileLdx;