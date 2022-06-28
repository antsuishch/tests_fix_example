const { Shutdown } = inject();

Given(/^пользователь перешел на страницу "([^"]*)"$/, (path) => {
    Shutdown.action.openPage(path);
});

Given(/^пользователь вводит название улицы "([^"]*)"$/, (text) => {
    Shutdown.action.street(text);
});

Given(/^пользователь вводит номер дома "([^"]*)"$/, (text) => {
    Shutdown.action.house(text);
});

Given(/^пользователь вводит номер квартиры "([^"]*)"$/, (text) => {
    Shutdown.action.flat(text);
});

Given(/^отображается текст с надписью "([^"]*)"$/, (text) => {
    Shutdown.action.textCheck(text);
});

Given(/^отображается таблица с отключениями$/,  () => {
    Shutdown.action.tableCheck();
});

Given(/^проверяем содержимое таблицы$/,  () => {
     Shutdown.action.tableDataCheck();
});