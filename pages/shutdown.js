const {I} = inject();

const locators = {
    street: {name: 'street'},
    house: {name: 'house'},
    flat: {name: 'flat'},
    checkText: {css: '.MuiTypography-subtitle1'},
    containerTable: {id: 'shutdowns__table'}
}


const action = {
    openPage: (path) => {
        I.amOnPage(path);
    },
    street: (text) => {
        I.appendField(locators.street, text)
        I.click({text: text})
    },
    house: (text) => {
        I.appendField(locators.house, text)
        I.click({text: text})
    },
    flat: (text) => {
        I.appendField(locators.flat, text)
        I.click({text: text})
    },
    textCheck: (text) => {I.see(text, locators.checkText)},
    tableCheck: () => {I.seeElement(locators.containerTable)},
    tableDataCheck: () => {I.see('Тип\tСтатус\tС\tПо\n' +
        'Объявления управляющей организации\tПрошедшее\t8 июня 2020 г., 0:00\t9 июня 2020 г., 0:00\n' +
        'Объявления управляющей организации\tПрошедшее\t13 апр. 2020 г., 0:00\t20 апр. 2020 г., 23:45\n' +
        'Объявления управляющей организации\tПрошедшее\t21 февр. 2020 г., 0:00\t15 мар. 2020 г., 23:45\n' +
        'Объявления управляющей организации\tПрошедшее\t29 авг. 2019 г., 0:00\t11 сент. 2019 г., 23:00\n' +
        'Отключение горячего водоснабжения\tПрошедшее\t28 июля 2017 г., 8:30\t28 июля 2017 г., 17:00', locators.containerTable)}
}



module.exports = {
    locators,
    action
}
