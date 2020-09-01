const year_month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
let piople_data = [
    ["2176", "Борозинец Нина", "", "953195806"],
    ["2177", "РЕВА Марина.Е", "ул.Перекопская 193а.кв.48", "681599630"],
    ["2178", "Кнопленко Татьяна Иван", "ул. Гирского57 кв 11", "0993907326 .    22 02 83"],
    ["2179", "зв.Хоментовской   Юхименко", "ул.Сухарная 11", "661538889"],
    ["2180", "другой", "ул.Петренко 87", "46-71-31"],
    ["2181", "Кожухова Света", "ул. Кулика1а кв.97", "677978517"],
    ["2182", "Шевченко Аза Борис", "ул.Вазова 3кв.25", "677612377"],
    ["2183", "Бокий Е.В.", "ул.Михайлова 28 кв.59", "956407182"],
    ["2184", "дзюнько", "", ""],
    ["2185", "Медвечук А.В.", "ул.Комарова 165", "Саша 0666582217 Лида0994061653"],
    ["2186", "Зайцева М.С.-Несущая", "ул. Сенявина 152кор.4 кв.68", "0660630516 Сергей 0506038482"],
    ["2187", "Березовский В.И.", "", "Валера 0952560638-667446372"],
    ["2188", "Шокун В.В.", "", "Звоните мужу 099 348 64 11	508581451"],
    ["2189", "Мельник А.М. Вален.Иванов", "ул.Кулика131а кв.34", "660663502"],
    ["2190", "Хоменко С.Б.", "ул. К.Маркса 103 кв.186", "506557619"],
    ["2191", "Забира Александр Александр", "ул. Филатова34 кв.15", "951651062-501713248"],
    ["2192", "Богданов Ярослав", "Калинина 20", "501950010"],
    ["2193", "Терещенко Надя", "Блюхера 177а", "953269475-990408529"],
    ["2194", "Шеенко Т.В Витя", "ул.Комарова 6-29 кв.5", "508695744"],
    ["2195", "Строева Т. А.Генадий Анатоль", "ул. Дорофеева 4а кв.122", "999718519"],
    ["2196", "Пятничук Валера В.", "ул.Островского 4", "505345777"],
    ["2197", "Шаповалов Владимир Алек", "пер.Казацкий 5", "Юрий 0507515411"],
    ["2198", "Северин Е.В.", "ул. Шенгеля 13 корп.3 кв.130", "Елена 0937421715"],
    ["2200", "Ляшенко И. И.", "п. Комышаны", "Таня 0505138787Игорь 0509803494"],
    ["2201", "Салий Аня", "ул. Карла Маркса 8 кв.6", "955102577"],
    ["2202", "Толкачев В.И.", "п.Камышаны ул.Пионерская 6", "506651682"],
    ["2203", "Козаченко Игорь Аня", "", "665979056"],
    ["2204", "Гараджий С.В.", "ул. Комкова 92 кв.83", " дочь 0503967042мать 0955721426отец 0660086957"],
    ["2205", "Пашкевич Екатерина Юрив", "Киндийское шоссе 30 кв.141", "668657382"],
    ["2206", "Нижник Н.П.", "ул. Перекопская 21кв.2", "54-02-04"],
    ["2207", "Сироченко И.Ю. Мехлин", "ул.Мира19 кв.73", "Юрий 0660761079Зоя 0992423083"],
    ["2208", "Шепель Т.К.", "ул. Кулика 3а кв.8", "Анжела 0507295990"],
    ["2209", "Сироченко -Катриченко", "ул. Нефтяников 65 кв.4", "992423083"],
    ["2210", "Калнауз О.А.", "ул. Шенгеля 2кв. 108", "956344554"],
    ["2211", "Лысенко Анатолий Анатольевич", "", "Анатолий 0508088730Надя 0958046028"],
    ["2212", "Жукова Л.Ф.", "ул. Дорофеева 6 кв.145", "Людмила 0508650146"],
    ["2213", "Шумихин В.П.", "ул. Кольцова 47 кв.5", "951035202"],
    ["2214", "Гриценко А. В.", "ул. Блюхера 54 кв.96", "507408382"],
    ["2214а", "Комплементова Т.В.", "ул.Дровника 180", "954684842"],
    ["2215", "Артющенко	", "", "0665647977 Наталья"],
    ["2216", "Альфёров К.Чехун В.", "ул. Фритаун 84 кв.65", "Виктор Сергеевич 0667902910"],
    ["2217", "Мирошников А.Н.", "ул. СВ.Кирила Мефодия 14а кв. 33", "Алексан Алекса 0958925262"],
    ["2218", "Малик Евгения О.", "ул. Мира 23 кв.64", "Женя 0662515816"],
    ["2219", "Хоментовская А.Ф.", "ул.Залогородняя 3а", "Аня 0661538889"],
    ["2220", "Стагний Наталья", "ул. Рабочая .209 кв.77", "0502748867 наташа"],
    ["2221", "Павленко А.И.", "ул. Ворошилова 23кв.51", "Оля 0689525382"],
    ["2222", "Остаплюк И.Л.", "ул.Ушакова 85 кв.18", "Игорь 0505876832Марина 0993684808"],
    ["2223", "Фесенко Т.Ф.", "ул.Дровника108", "95468442"],
    ["2224", "Копиевский В.И.", "ул. Блюхера 52 кв.8", "505876832-667647226-42-56-15"],
    ["2225", "Комплементова Т.В.", "", "954684842"],
    ["2226", "Бижко А.Г.", "ул. Лавренева12 кв..58", "505987527"],
    ["2227", "Вышинский Б.В.", "ул. Вазова 16кв.14", "Борис 0958120104 Оля 0954628292"],
    ["2228", "Рыбин В.А.", "ул. Будённого 16кв.41", "999664307"],
    ["2229", "Салий М.В.", "ул. К.Маркса 8 кв. 6", "Аня 0955102577"],
    ["2230", "Повод О.Н.", "ул. Смольного 132 кв.69", "Оксана 0502030898"],
    ["2231", "Лукьянченко О. В", "ул.Выдрыгана 6", "951864232"],
    ["2232", "Румянцева В.А.", "Дм.Ульянова 162", "Людмила Васильев 0501666805-999057289"],
    ["2233", "Салов И.Г.Вера Владимировна", "пер.Котельний 22", "996488577"],
    ["2234", "Неизвестная дача", "________", "_______"],
    ["2235", "Пижурина Людмила Ф.", "ул. Мира 34кв. 87", "Людмила 0509537673 Эдик 0951959223"],
    ["2236", "Косенко Е.В.", "ул. СВ.Кирила Мефодия 26 кв.32", "660656314"],
    ["2237", "Фирсова ", "ул.СВ.Кирила Мефодия 11а кв.123", "Николай 0958772805"],
    ["2238", "Толкачёв С.Г.", "с. Камышаны ул.Октябрская 10", "0956802056 Сергей"],
    ["2239", "Косенко Е.В.", "ул.СВ.Кирила Мефодия26 кв.32", "елена 0660656314"],
    ["2240", "Бондарева И.В", "ул.200лет Херсона 39 кв.32", "Инна Николаев 0664936395"]
]//список людей
let piople_pay = [
    ["2176", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", ""],
    ["2177", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2178", "100", "60", "60", "60", "60", "60", "60", "60", "", "", "", "", ""],
    ["2179", "", "60", "60", "60", "60", "60", "60", "60", "", "", "", "", ""],
    ["2180", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2181", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2182", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2183", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2184", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2185", "100",  "60", "60", "60", "60", "60", "60", "60", "60","", "", "", ""],
    ["2186", "100",   "60", "60", "60", "60", "60", "60", "60", "60","", "", "", ""],
    ["2187", "100",  "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2188", "100", "60", "", "", "", "", "", "", "", "", "", "", ""],
    ["2189", "", "60", "60", "", "", "", "", "", "", "", "", "", ""],
    ["2190", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2191", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2192", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2193", "100", "60", "60", "60", "60", "60", "60", "", "", "", "", "", ""],
    ["2194", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2195", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2196", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2197", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2198", "", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2200", "", "60", "60", "60", "", "", "", "", "", "", "", "", ""],
    ["2201", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2202", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2203", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2204", "100", "60", "60", "60", "60", "60", "60", "60", "", "", "", "",""],
    ["2205", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2206", "", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2207", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2208", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2209", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2210", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2211", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2212", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", ""],
    ["2213", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", ""],
    ["2214", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2214а", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2215", "100",  "60", "60", "60", "60", "60", "", "", "", "", "", "", ""],
    ["2216", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2217", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2218", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2219", "", "60", "60", "60", "60", "60", "60", "60", "", "", "", "", ""],
    ["2220", "100", "60", "60", "60", "60", "60", "60", "60", "", "", "", "", ""],
    ["2221", "100", "60", "60", "60", "60", "60", "60", "60", "", "", "", "", ""],
    ["2222", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2223", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2224", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2225", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2226", "", "60", "", "", "", "", "", "", "", "", "", "", ""],
    ["2227", "", "60", "60", "60", "60", "60", "", "", "", "", "", "", ""],
    ["2228", "", "60", "60", "", "", "", "", "", "", "", "", "", ""],
    ["2229", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2230", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", "", ""],
    ["2231", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2232", "", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2233", "100", "60", "60", "60", "60", "60", "60", "", "", "", "", "", ""],
    ["2234", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2235", "100", "60", "60", "60", "60", "60", "", "", "", "", "", "", ""],
    ["2236", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2237", "100", "60", "60", "60", "60", "60", "60", "", "", "", "", "", ""],
    ["2238", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2239", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2240", "100",  "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", ""]
]//таблица платильщиков по взносам плюс уголь
let pay_for_month = [
    ['Зарплата сторож ', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Зарплата кассир', 200, 'Запрвка Газ 45л', 455, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Зарплата кассир', 200, 'Премия охрана', 500, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Строй материалы ', 1440, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Строй материалы ', 520, 'Задолжность охранна', 1000, 'Задолжность за ремон охране', 1000, 'Уголь +доставка', 3030],
    ['Зарплата сторож ', 2000, 'Зарплата кассир за 2.5 месяца', 500, 'Строй материалы ', 360, 'Заправка Газ 84л', 1008, '', 0],
    ['Зарплата', 2000, 'Шнурки', 500, 'коза1', 500, 'коза2', 500, 'коза3', 500],
    ['Зарплата', 2000, 'Шнурки', 500, 'коза1', 500, 'коза2', 500, 'коза3', 500],
    ['Зарплата', 2000, 'Шнурки', 500, 'коза1', 500, 'коза2', 500, 'коза3', 500],
    ['Зарплата', 2000, 'Шнурки', 500, 'коза1', 500, 'коза2', 500, 'коза3', 500],
]//тикущие расходы по месячно
let pay_for_free = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]//взносы
let state_string = document.getElementById('show')// див отображения
let state_bufer = "" //буфер отоброжения
let bufer = "" //буфер формирования данных
let current_month = 8 // текущий месяц
let hed_table='<tr><td>Номер</td><td>Владелец дачи</td><td>Уголь</td>'//заголовок таблицы по оплате
let hed_table_pay = hed_table

let now = 0


now = new Date();/*считываем системную дату и формируем в нужный формат*/
current_month = ((now.getMonth()) + 1)


function show_state(state) {
    state_string.innerHTML = state
}//отображение данных

function Pay_all() {

    bufer = ''
    for (a = 0; a < year_month.length; a++)//формируем шапку таблицы по оплате с отметкой текущего месяца
    {
        if (a == current_month - 1) {
            hed_table_pay = hed_table_pay + '<td bgcolor="yellow">'
        } else hed_table_pay = hed_table_pay + '<td>'
        hed_table_pay = hed_table_pay + year_month[a] + '</td>'
    }

    hed_table_pay=hed_table_pay+'</tr>'

    bufer = '<table><thead>'
    bufer = bufer +hed_table_pay+'</thead>'
    hed_table_pay=''
    for (a = 0; a < piople_pay.length; a++) {
        bufer = bufer + '<tr>'

        for (b = 0; b <= 13; b++)//формируем  таблицы по оплате
        {
            if (b == 1) {
                bufer = bufer + '<td>' + piople_data[a][1] + '</td>'
            }
            if (piople_pay[a][b] == "") {
                if (b > current_month + 1) {
                    bufer = bufer + '<td bgcolor="white">0</td>'
                } else {
                    bufer = bufer + '<td bgcolor="red">0</td>'//если нет  оплаты красное поле
                }
            } else bufer = bufer + '<td bgcolor="green">' + piople_pay[a][b] + '</td>'//если есть оплата зеленое поле
        }
        bufer = bufer + '</tr>'
    }
    bufer = bufer +'</table>'
    hed_table_pay = hed_table

    show_state(bufer)
}//Отображает список всех оплативших

function List_piple() {
    state_bufer = ''
    state_bufer = '<table>'
    for (a = 0; a < piople_data.length; a++) {
        state_bufer = state_bufer + '<tr>' + '<td>' + piople_data[a][0] + '</td>' + '<td>' + piople_data[a][1] + '</td>' + '<td>' + piople_data[a][2] + '</td>' + '<td>' + piople_data[a][3] + '</td>' + '</tr>'
    }
    state_bufer = state_bufer + '</table>'


    show_state(state_bufer)
}//Отображает список владельцев двчи

function Running_cost() {
    state_bufer = ''
    for (a = 0; a <= current_month - 1; a++) {
        state_bufer = state_bufer + '<h2>' + year_month[a] + '</h2>'
        state_bufer = state_bufer + '<table>'
        state_bufer = state_bufer + '<tr>'+'<td>'+'Статья затрат'+'</td>'+'<td>'+'Сумма грн.'+'</td>'+'</tr>'
        now = 0
        for (b = 0; b <= 8; b = b + 2) {
            state_bufer = state_bufer + '<tr>'
            if (pay_for_month[a][b] == '') {
            } else {
                state_bufer = state_bufer + '<td>' + pay_for_month[a][b] + '</td>' + '<td>' + pay_for_month[a][b + 1] + '</td>'
                state_bufer = state_bufer + '</tr>'
                now = now + pay_for_month[a][b + 1]
            }
        }
        state_bufer = state_bufer + '<td>' + 'Всего:' + '</td>' + '<td bgcolor="yellow">' + now + '</td>'

        state_bufer = state_bufer + '</table>'
    }
    show_state(state_bufer)
    state_bufer = ''

}//Формирует и отображает список расходов по месячно на тикущий месяц

function List_report() {

    let count_number=0
    for (a = 0; a < piople_pay.length-1; a++) {
        for (b = 1; b <= 12; b++) {
if (piople_pay[a][b]!="") { count_number=count_number+Number(piople_pay[a][b])}
        }


    }

    state_bufer=count_number
    show_state(state_bufer)
}
Pay_all()







