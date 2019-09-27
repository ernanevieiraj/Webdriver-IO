
module.exports = {
    incluirTodos : function () {
        return variable = $(`(//span[@class='checkbox-material'])[1]`)
    },

    submitPermissaoAtividades : function () {
        return variable = $('#btn-conf-perms')
    },

    buttonPermissaoAtividades : function (){
        return variable = $(`//button[@class='btn btn-default btn-sm btn-perm-atv']`)
        //return variable = $('#ProfileTable > tbody > tr > td:nth-child(4) > button.btn.btn-default.btn-sm.btn-perm-atv')
    },

    procurarTelaPerfis : function () {
        return variable = $(`#ProfileTable_filter > label > input`)
    },

    buttonParametrosAtividades : function (){
        return variable = $('.btn-parameters > .glyphicon')
    },

    buscaParametrosAtividades : function (){
        return variable = $('label > .form-control')
    },
    
    buttonEditarParametros : function (){
        return variable = $('.text-center > .btn')
    },

    formParametrosPerfil : function(){
        return variable = $('#ProfileParametersList > tbody > tr > td:nth-child(2) > input')
    },

    buttonCancelarEdicao : function(){
        return variable = $('#ProfileParametersList > tbody > tr > td.text-center > button.btn.btn-sm.btn-red')
    },

    buttonConfirmarEdicao : function(){
        return variable = $('#ProfileParametersList > tbody > tr > td.text-center > button.btn.btn-sm.btn-green')
    },

    containerEscolha : function(){
        return variable = $('#ProfileParametersList > tbody > tr > td:nth-child(2) > div > a > div > b')
    },

    escolhaContainerSim : function (){
        return variable = $('#ProfileParametersList > tbody > tr > td:nth-child(2) > div > div > ul > li:nth-child(2)')
    },

    escolhaContainerNao : function(){
        return variable = $('#ProfileParametersList > tbody > tr > td:nth-child(2) > div > div > ul > li:nth-child(1)')
    }

};
