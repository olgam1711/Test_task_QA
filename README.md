## 1. Задача по написанию тест-кейсов
### Условие
Разработайте тест-кейсы для формы логина, которая содержит два поля ввода: "Username" и "Password", и кнопку "Login". 
Условия:
* Поле "Username" должно быть обязательным и должно принимать только email-адреса.
* Поле "Password" должно быть обязательным и должно содержать не менее 8 символов.
* Кнопка "Login" должна быть активна только при корректном заполнении обоих полей.

### Ожидаемый результат
Описание позитивных и негативных тест-кейсов.

### Решение
#### Позитивные тест-кейсы
1. Ввести в поле username корректный формат email-адреса.

*Ожидаемый результат: введенный адрес останется в поле. Если поле пароля тоже заполнено, то кнопка login станет активной.*

2. Ввести в поле password не менее 8 символов.
  
*Ожидаемый результат: сохраненный пароль останется в поле в виде звездочек. Если поле username тоже заполнено, то кнопка login станет активной.*

3. После корректного введения данных в username и password нажать кнопку login.

*Ожидаемый результат: выполнится вход в аккаунт, или появится сообщение, что username или password не подходит.*

#### Негативные тест-кейсы
1. Ввести в поле username некорректный формат email-адреса, набор букв / цифр / других символов.

*Ожидаемый результат: введенные данные останутся в поле, но появится сообщение, что username введен некорректно, а кнопка login останется неактивной.*

2. Ввести в поле password менее 8 символов.

*Ожидаемый результат: введенные данные останутся в поле, но появится сообщение, что password должен иметь не менее 8 символов, а кнопка login останется неактивной.*

3. Ввести username и password с ошибкой по очереди, потом вместе, включая варианты оставить одно поле пустым, а потом оба.

*Ожидаемый результат: при всех вариантах ввода с ошибкой или пустым полем кнопка login останется неактивной.*


## 2. Задача Playwright
### Условие
Написать тест, который открывает веб-страницу https://playwright.dev/, проверяет, что она существует, и что заголовок страницы соответствует ожидаемому значению.

### Ожидаемый результат
Тест, успешно проходящий проверку заголовка.

### Решение  
Тест находится в папке tests -> файл example.spec.js


## 3. Задача по теории вероятности
### Условие
Монету подбрасывают три раза. Какова вероятность того, что выпадет ровно два орла?

### Ожидаемый результат
Описание решения и ответ

### Решение
Создадим схему возможных вариантов, как может упасть монета после трех бросков. Посчитаем количество вариантов, которые соответствуют запросу “выпадет ровно два орла”. 
Полученное значение переведем в проценты.
Возможные варианты:
1. Орел - орел - орел 
2. Орел - орел - решка
3. Орел - решка - орел
4. Орел - решка - решка
5. Решка - орел - орел
6. Решка - орел - решка
7. Решка - решка - орел
8. Решка - решка - решка

Всего возможно восемь вариантов, из которых три (2, 3, 5) будут содержать ровно два орла.
Переведем 3/8 в проценты и получим 37,5% вероятность того, что выпадет ровно два орла.
