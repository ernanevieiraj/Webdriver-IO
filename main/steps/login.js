const assert = require('assert')
const getData = require('../keywords/customKeywords/getData')
const objectsLogin = require('../pages/global/login/telaLogin')
const customKeywords = require('../keywords/customKeywords/accessModule')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        let globalUrl = 'http://localhost:83/Account/Logon'

        browser.url(globalUrl)

        browser.pause(3000)

        let login = getData.callReadFileLdx('login', 1, 2)

        let password = getData.callReadFileLdx('login', 2, 2)

        objectsLogin.inputUser().addValue(login)

        objectsLogin.inputPassword().addValue(password)

        objectsLogin.btnConfirmar().click()

        browser.pause(4000)

        if (browser.getUrl() == globalUrl){
            throw "erro!"
        }

        customKeywords.accessModule('hierarquia','hierRotas')
    })
})
