
module.exports = {
    menu : function (index) {
        return variable = $(`#menu > li:nth-child(${index})`)
    },

    subMenu : function (index) {
        return variable = $(`ul.in > li:nth-child(${index})`)
    }
};