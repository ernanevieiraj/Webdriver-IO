const objectsHome = require('../../pages/global/home/telaHome')

module.exports = {
    accessModule: function (menuIndex, subMenuIndex) {

        switch (menuIndex) {
            case 'menuAvatar':
                menuIndex = '1'
                break;
            case 'home':
                menuIndex = '2';
                break;
            case 'hierarquia':
                menuIndex = '3'
                break;
            case 'cadastros':
                menuIndex = '4';
                break;
            case 'atividades':
                menuIndex = '5'
                break;
            case 'capacitacaoAvaliacao':
                menuIndex = '6';
                break;
            case 'pdvs':
                menuIndex = '7'
                break;
            case 'workflow':
                menuIndex = '8';
                break;
            case 'carga':
                menuIndex = '9'
                break;
            case 'painelExecucaoAtividades':
                menuIndex = '10';
                break;
            case 'exportacao':
                menuIndex = '11'
                break;
            case 'coachingFeedback':
                menuIndex = '12';
                break;
            case 'auditoria':
                menuIndex = '13'
                break;
            case 'centralMensagens':
                menuIndex = '14';
                break;
            case 'gerenciamentoNotificacoes':
                menuIndex = '15'
                break;
            case 'logsSistema':
                menuIndex = '16';
                break;
        }
        switch (subMenuIndex) {
            case 'hierUnidade':
                subMenuIndex = '1'
                break;
            case 'hierAreas':
                subMenuIndex = '2';
                break;
            case 'hierRotas':
                subMenuIndex = '3'
                break;
            case 'hierVersoes':
                subMenuIndex = '4';
                break;
            case 'hierUsuarios':
                subMenuIndex = '5'
                break;
            case 'hierTiposEntidade':
                subMenuIndex = '6';
                break;
            case 'hierEntidadesHierarquicas':
                subMenuIndex = '7'
                break;
            case 'hierArvoreHierarquica':
                subMenuIndex = '8';
                break;
            case 'cadAbrangencias':
                subMenuIndex = '1'
                break;
            case 'cadAbrangenciasProdutos':
                subMenuIndex = '2';
                break;
            case 'cadAbrangenciasRotas':
                subMenuIndex = '3'
                break;
            case 'cadListasRespostas':
                subMenuIndex = '4';
                break;
            case 'cadConexoes':
                subMenuIndex = '5'
                break;
            case 'cadContratos':
                subMenuIndex = '6';
                break;
            case 'cadFeriados':
                subMenuIndex = '7'
                break;
            case 'cadArquivos':
                subMenuIndex = '8';
                break;
            case 'cadParametrosGlobais':
                subMenuIndex = '9'
                break;
            case 'cadMotivos':
                subMenuIndex = '10';
                break;
            case 'cadGrupoPDVs':
                subMenuIndex = '11'
                break;
            case 'cadPerfis':
                subMenuIndex = '12';
                break;
            case 'cadTags':
                subMenuIndex = '13'
                break;
            case 'cadListasDistribuicaoEmails':
                subMenuIndex = '14';
                break;
            case 'cadTurnos':
                subMenuIndex = '15'
                break;
            case 'workEscalasTrabalhos':
                subMenuIndex = '1';
                break;
            case 'workRoteirizacaoAreaLider':
                subMenuIndex = '2'
                break;
            case 'crgModeloTarefa':
                subMenuIndex = '1'
                break;
            case 'crgTarefaManual':
                subMenuIndex = '2'
                break;
            case 'crgAgendadorTarefas':
                subMenuIndex = '3'
                break;
            case 'crgConsoleCarga':
                subMenuIndex = '4'
                break;
            case 'crgConsoleProcessos':
                subMenuIndex = '5'
                break;
            case 'coachCadastro':
                subMenuIndex = '1'
                break;
            case 'coachQuestoes':
                subMenuIndex = '2'
                break;
        }

        if (((subMenuIndex != '') && (subMenuIndex != null)) && ((menuIndex != '') && (menuIndex != null))) {
            objectsHome.menu(menuIndex).click()
            objectsHome.subMenu(subMenuIndex).click()

        } else if (((menuIndex != '') && (menuIndex != null)) && (subMenuIndex == 'null') || (subMenuIndex == '')) {
            objectsHome.menu(menuIndex).click()
        }
        else {
            objectsHome.subMenu(subMenuIndex).click()
        }
    }
};