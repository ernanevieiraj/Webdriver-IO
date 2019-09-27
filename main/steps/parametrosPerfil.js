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

            let buscaPerfil = getData.callReadFileLdx('Perfil', 1, 4)
            let n_Parametros = getData.callReadFileLdx('Parametros_Perfil', 2, 4)
            let resultado
            perm.procurarTelaPerfis().clearValue()
            perm.procurarTelaPerfis().setValue(buscaPerfil)
            browser.pause(2000)
            perm.buttonParametrosAtividades.click()
            for (let i = 1; i <= n_Parametros; i++) {
                let buscaParam = getData.callReadFileLdx('Parametros_Perfil', i, 2)
                let campoParam = getData.callReadFileLdx('Parametros_Perfil', i, 1)
                perm.buscaParametrosAtividades.clearValue()
                perm.buscaParametrosAtividades.setValue(buscaParam)
                browser.pause(1500)
                perm.buttonEditarParametros().click()
                //Nessa condicao o parametro sempre recebera um valor inteiro.
                if (i <= 5) {
                    let Valor = getData.callReadFileLdx('Parametros_Perfil', i, 6)
                    perm.formParametrosPerfil().clearValue()
                    perm.formParametrosPerfil().setValue(Valor)
                    perm.buttonCancelarEdicao().click()
                    perm.buttonEditarParametros().click()
                    perm.formParametrosPerfil().clearValue()
                    perm.formParametrosPerfil().setValue(Valor)
                    perm.buttonConfirmarEdicao().click()
                    browser.wait(1500)
                    resultado = query.callQueryExecute(`SELECT PERM.DSVAL FROM TPARAMPROF PERM INNER JOIN TPROFILE PROF ON PROF.CDPRFL = PERM.CDPRFL WHERE PROF.DSPRFL = '${buscaPerfil}' AND PERM.CHPAR = '${campoParam}'`, 'DSVAL')
                    console.log(resultado)
                    if (resultado != Valor) {
                        throw new error('Erro')
                    }
                }
                //Nessa condicao o valor default do parametro sera nao, e mudaremos para sim.
                if ((i >= 6) && (i <= 17)) {
                    perm.containerEscolha().click()
                    perm.escolhaContainerSim.click()
                    perm.buttonCancelarEdicao.click()
                    perm.buttonEditarParametros().click()
                    perm.containerEscolha().click()
                    perm.escolhaContainerSim.click()
                    perm.buttonConfirmarEdicao
                    browser.pause(1500)
                    resultado = query.callQueryExecute(`SELECT PERM.DSVAL FROM TPARAMPROF PERM INNER JOIN TPROFILE PROF ON PROF.CDPRFL = PERM.CDPRFL WHERE PROF.DSPRFL = '${buscaPerfil}' AND PERM.CHPAR = '${campoParam}'`, 'DSVAL')
                    console.log(resultado)
                    if (await resultado != 1) {
                        throw new error('Erro')
                    }
        
                }
                //Nessa condicao o valor default do parametro sera sim, e mudaremos para nao.
                if ((i >= 18) && (i <= 19)) {
                    perm.containerEscolha().click()
                    perm.escolhaContainerNao().click()
                    perm.buttonCancelarEdicao().click()
                    perm.buttonEditarParametros().click()
                    perm.containerEscolha().click()
                    perm.escolhaContainerNao().click()
                    perm.buttonConfirmarEdicao().click()
                    browser.pause(1500)
                    resultado = await task.queryDatabase({ query: `SELECT PERM.DSVAL FROM TPARAMPROF PERM INNER JOIN TPROFILE PROF ON PROF.CDPRFL = PERM.CDPRFL WHERE PROF.DSPRFL = '${buscaPerfil}' AND PERM.CHPAR = '${campoParam}'`, campo: 'DSVAL' })
                    console.log(resultado)
                    if (await resultado != 0) {
                        throw new error('Erro')
                    }
                }
                //Nessa condicao, o parametro sera um checkbox que estara desmarcado, e nos o marcaremos.
                if (i >= 20) {
                    cy.get('#ProfileParametersList > tbody > tr > td:nth-child(2) > input').click()
                    cy.get('#ProfileParametersList > tbody > tr > td.text-center > button.btn.btn-sm.btn-red').click()
                    cy.get('.text-center > .btn').click()
                    cy.get('#ProfileParametersList > tbody > tr > td.text-center > button.btn.btn-sm.btn-green').click()
                    cy.wait(1500)
                    resultado = await task.queryDatabase({ query: `SELECT PERM.DSVAL FROM TPARAMPROF PERM INNER JOIN TPROFILE PROF ON PROF.CDPRFL = PERM.CDPRFL WHERE PROF.DSPRFL = '${buscaPerfil}' AND PERM.CHPAR = '${campoParam}'`, campo: 'DSVAL' })
                    console.log(resultado)
                    //await Access.accessModule('', 'cadPerfis')
                    if (await resultado != 1) {
                        throw new error('Erro')
                    }
                }
            }
        }


    })
})
