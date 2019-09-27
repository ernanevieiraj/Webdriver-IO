// const login = require('./login')
const ac = require('../keywords/customKeywords/accessModule')
const objectsLogin = require('../pages/global/login/telaLogin')
const getData = require('../keywords/customKeywords/getData')
const query = require('../keywords/queryFunctions/queryConnection')
const perm = require('../pages/specific/Perfil/PermissaoAtividades/permissaoAtividades')

describe('webdriver.io page', () => { 
    it('should have the right title', () => {
        let globalUrl = 'http://localhost:83/Account/Logon'

        browser.url(globalUrl)

        let login = getData.callReadFileLdx('login', 1, 2)

        let password = getData.callReadFileLdx('login', 2, 2)

        objectsLogin.inputUser().addValue(login)

        objectsLogin.inputPassword().addValue(password)

        objectsLogin.btnConfirmar().click()

        browser.pause(3000)

        ac.accessModule('cadastros', 'cadPerfis')

        for (let i = 1; i <= 5; i++) {
            if ((i == 1) || (i == 2) || (i == 5)) {

                let perfil = getData.callReadFileLdx('Perfil', i, 2)

                perm.procurarTelaPerfis().clearValue()

                perm.procurarTelaPerfis().addValue(perfil)
                
                browser.pause(1000)
                
                let resultado

                perm.buttonPermissaoAtividades().click()

                browser.pause(1000)

                perm.incluirTodos().click()

                perm.submitPermissaoAtividades().click()

                browser.pause(500)

                resultado = query.callQueryExecute(`SELECT COUNT(*) AS Modulos FROM TMPERMACTPROF PF INNER JOIN TPROFILE TP ON TP.CDPRFL = PF.CDPRFL WHERE TP.DSPRFL = '${perfil}'`, 'Modulos')

                console.log('resultado: ', resultado)

                if (resultado != 13) {
                    console.log('Erro! Resultado: ', resultado)
                    throw new Error("Erro! Resultado: ", resultado)
                }
            }
        }


    })
})
