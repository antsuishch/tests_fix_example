#language: ru

@feature @page_shutdown @ui
Функционал: Получение отключений

  @atest @positive
  Сценарий: Получение отключений - позитивная проверка
    Пусть пользователь перешел на страницу "shutdowns"
    Тогда отображается текст с надписью "Для отображения списка отключений введите адрес"
    Пусть пользователь вводит название улицы "Павлюхина"
    И пользователь вводит номер дома "100"
    И пользователь вводит номер квартиры "10"
    Тогда отображается таблица с отключениями
    И проверяем содержимое таблицы
