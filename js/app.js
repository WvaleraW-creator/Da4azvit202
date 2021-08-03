const year_month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

//data
let piople_data = [
    ["2176", "Борозинец Нина", "", "953195806"],
    ["2177", "РЕВА Марина.Е", "ул.Перекопская 193а.кв.48", "681599630"],
    ["2178", "Кнопленко Татьяна Иван", "ул. Гирского57 кв 11", "0993907326 .    22 02 83"],
    ["2179", "зв.Хоментовской   Юхименко", "ул.Сухарная 11", "661538889"],
    ["2180", "Полуфакин", "ул.Петренко 87", "46-71-31"],
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
    ["2196", "Пятничук Валера Вdd", "ул.Островского 4", "505345777"],
    ["2197", "Шаповалов Владимир Алек ;", "пер.Казацкий 5", "Юрий 0507515411"],
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
    ["2220", "Фурик Наталья Сергеевна", "ул. Рабочая .209 кв.77", "0502348553"],
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
    ["2176", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2177", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2178", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2179", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2180", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2181", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2182", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2183", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2184", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2185", "100",  "60", "60", "60", "60", "60", "60", "60", "60","60", "60", "80", "80"],
    ["2186", "100",   "60", "60", "60", "60", "60", "60", "60", "60","60", "60", "60", "60"],
    ["2187", "100",  "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2188", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2189", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2190", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2191", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2192", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2193", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2194", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2195", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2196", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2197", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80"],
    ["2198", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2200", "100", "60", "60", "60", "60", "60", "60", "60", "60", "", "", "", ""],
    ["2201", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2202", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2203", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2204", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60","60"],
    ["2205", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2206", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2207", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2208", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2209", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2210", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2211", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2212", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2213", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2214", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2214а", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2215", "100",  "60", "60", "60", "60", "60", "", "", "", "", "", "", ""],
    ["2216", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2217", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2218", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2219", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2220", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2221", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2222", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2223", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2224", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2225", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2226", "", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2227", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80"],
    ["2228", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "", ""],
    ["2229", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2230", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2231", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2232", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2233", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2234", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2235", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", ""],
    ["2236", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2237", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2238", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60"],
    ["2239", "100", "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"],
    ["2240", "100",  "60", "60", "60", "60", "60", "60", "60", "60", "60", "60", "80", "80"]
]//таблица платильщиков по взносам плюс уголь или другие взносы
let piople_pay21 = [
    ["2176", "215", "60", "60", "60", "80", "80", "80", "80", "80", "80", "", "", ""],
    ["2177", "215", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2178", "", "80", "80", "80", "80", "80", "80", "", "", "", "", "", ""],
    ["2179", "115", "80", "80", "80", "80", "80", "80", "80", "80", "80", "", "", ""],
    ["2180", "215", "60", "60", "60", "60", "60", "80", "80", "80", "80", "80", "80", "80"],
    ["2181", "115", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2182", "115", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2183", "215", "60", "60", "60", "60", "60", "80", "80", "80", "80", "80", "80", "80"],
    ["2184", "100", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80"],
    ["2185", "45", "80", "80", "80", "80", "80", "80", "", "", "", "", "", ""],
    ["2186", "215", "60", "60", "60", "60", "80", "80", "80", "80", "80", "80", "80", ""],
    ["2187", "45", "80", "80", "80", "", "", "", "", "", "", "", "", ""],
    ["2188", "45", "80", "80", "80", "", "", "", "", "", "", "", "", ""],
    ["2189", "70", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2190", "215", "60", "80", "80", "80", "80", "80", "", "", "", "", "", ""],
    ["2191", "115", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2192", "145", "80", "80", "80", "80", "80", "80", "80", "80", "80", "", "", ""],
    ["2193", "215", "80", "", "", "", "", "", "", "", "", "", "", ""],
    ["2194", "215", "60", "60", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2195", "", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2196", "45", "60", "60", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2197", "215", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2198", "215", "60", "60", "60", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2200", "45", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2201", "45", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "", ""],
    ["2202", "", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80"],
    ["2203", "215", "80", "80", "80", "80", "80", "80", "", "", "", "", "", ""],
    ["2204", "45", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2205", "215", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2206", "45", "60", "60", "60", "60", "80", "80", "80", "80", "80", "80", "", ""],
    ["2207", "115", "80", "", "", "", "", "", "", "", "", "", "", ""],
    ["2208", "45", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", ""],
    ["2209", "45", "80", "", "", "", "", "", "", "", "", "", "", ""],
    ["2210", "", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2211", "145", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80"],
    ["2212", "", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2213", "", "60", "60", "60", "", "", "", "", "", "", "", "", ""],
    ["2214",  "115", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2214а", "115","80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2215", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2216", "115", "60", "60", "60", "", "", "", "", "", "", "", "", ""],
    ["2217", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2218", "45", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2219", "115", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2220", "215", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2221", "45", "80", "80", "80", "80", "80", "80", "", "", "", "", "", ""],
    ["2222", "215", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2223", "115", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2224", "45", "80", "80", "80", "80", "80", "80", "80", "80", "", "", "", ""],
    ["2225", "115", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2226", "", "80", "80", "80", "", "", "", "", "", "", "", "", ""],
    ["2227", "45", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2228", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2229", "45", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "", ""],
    ["2230", "215", "60", "60", "60", "60", "80", "80", "", "", "", "", "", ""],
    ["2231", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2232", "45", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2233", "45", "80", "80", "80", "80", "80", "80", "80", "", "", "", "", ""],
    ["2234", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2235", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2236", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2237", "45", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80"],
    ["2238", "215", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80"],
    ["2239", "45", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2240", "45", "80", "80", "80", "80", "80", "80", "", "", "", "", "", ""]
]//таблица платильщиков по взносам плюс уголь 21 год
let piople_pay22 = [
    ["2176", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2177", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2178", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2179", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2180", "", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2181", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2182", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2183", "", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2184", "", "80", "80", "80", "80", "80", "", "", "", "", "", "", ""],
    ["2185", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2186", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2187", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2188", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2189", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2190", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2191", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2192", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2193", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2194", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2195", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2196", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2197", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2198", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2200", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2201", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2202", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2203", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2204", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2205", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2206", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2207", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2208", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2209", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2210", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2211", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2212", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2213", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2214", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2214а", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2215", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2216", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2217", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2218", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2219", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2220", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2221", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2222", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2223", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2224", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2225", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2226", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2227", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2228", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2229", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2230", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2231", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2232", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2233", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2234", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2235", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2236", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2237", "", "80", "80", "80", "80", "", "", "", "", "", "", "", ""],
    ["2238", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2239", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["2240", "", "", "", "", "", "", "", "", "", "", "", "", ""]
]//таблица платильщиков по взносам плюс уголь 22 год
let pay_for_month = [
    ['Зарплата сторож ', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 3000, 'Зарплата кассир', 200, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Зарплата кассир', 200, 'Запрвка Газ 45л', 455, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Зарплата кассир', 200, 'Премия охрана', 500, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Строй материалы ', 1440, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 2000, 'Строй материалы ', 520, 'Задолжность охранна', 1000, 'Задолжность за ремон охране', 1000, 'Уголь +доставка', 3030],
    ['Зарплата сторож ', 2000, 'Зарплата кассир за 2.5 месяца', 500, 'Строй материалы ', 360, 'Заправка Газ 84л', 1008, '', 0],
    ['Зарплата сторож', 3000, 'Шкаф в сторожку', 300, 'Часть на дрова и на бензин+масло', 1400, 'Зарплата кассир', 300, '', 0],
    ['Зарплата сторож+еда собакам', 3150, 'Зарплата кассир', 300, 'Оплата кровельных работ 10 (50грн метр)метров',500 , '', 0, '', 0],
    ['Зарплата сторож+еда собакам', 3150, 'Зарплата кассир', 300, 'Оплата кровельных работ 18 (50грн метр)метров', 900, 'Электро выключатели 4 шт', 36, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
]//тикущие расходы по месячно
let pay_for_month21 = [
    ['Зарплата сторож ', 0, 'Зарплата кассир', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир',0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, 'Запрвка Газ 45л', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, 'Премия охрана', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Строй материалы ', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Строй материалы ', 0, 'Задолжность охранна', 0, 'Задолжность за ремон охране', 0, 'Уголь +доставка', 0],
    ['Зарплата сторож ', 0, 'Зарплата кассир за 2.5 месяца', 0, 'Строй материалы ', 0, 'Заправка Газ 84л', 0, '', 0],
    ['Зарплата сторож', 0, 'Шкаф в сторожку', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
]//тикущие расходы по месячно21
let pay_for_month22 = [
    ['Зарплата сторож ', 0, 'Зарплата кассир', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир',0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, 'Запрвка Газ 45л', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Зарплата кассир', 0, 'Премия охрана', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Строй материалы ', 0, '', 0, '', 0, '', 0],
    ['Зарплата сторож', 0, 'Строй материалы ', 0, 'Задолжность охранна', 0, 'Задолжность за ремон охране', 0, 'Уголь +доставка', 0],
    ['Зарплата сторож ', 0, 'Зарплата кассир за 2.5 месяца', 0, 'Строй материалы ', 0, 'Заправка Газ 84л', 0, '', 0],
    ['Зарплата сторож', 0, 'Шкаф в сторожку', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
    ['Зарплата', 0, '', 0, '', 0, '', 0, '', 0],
]//тикущие расходы по месячно22
let pay_for_free = [
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
]//взносы
let pay_for_free21 = [
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
]//взносы 21
let pay_for_free22 = [
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
    ["",0],
]//взносы 22

let array_buf=[]
let state_string = document.getElementById('show')// див отображения
let state_bufer = "" //буфер отоброжения
let bufer = "" //буфер формирования данных
let now_month =""// текущий месяц
let now_year="" //год
let hed_table='<tr><td>Номер</td><td>Владелец дачи</td><td>Уголь</td>'//заголовок таблицы по оплате
let hed_table_pay = hed_table
let count_year=select.value // переменная выбраного года
let count_select_report=select_report.value //переменная выбраного отчета
let conter=0

const now = new Date();/*считываем системную дату и формируем в нужный формат*/
now_month=Number((now.getMonth()+1))
now_year=(now.getFullYear())


function piople_id(id) {
let piople=[]
    piople[0]=piople_data[id][0]
    piople[1]=piople_data[id][1]
    return piople
}
function show_state(state) {
    state_string.innerHTML = state
}//отображение данных в див
function Running_cost() {
    let summa=0
    now_month=Number((now.getMonth()+1))
    state_bufer = ''
    for (a = 0; a <=now_month - 1; a++) {
        state_bufer = state_bufer + '<h2>' + year_month[a] + '</h2>'
        state_bufer = state_bufer + '<table>'
        state_bufer = state_bufer + '<tr>'+'<td>'+'Статья затрат'+'</td>'+'<td>'+'Сумма грн.'+'</td>'+'</tr>'
        summa=0
        for (b = 0; b <= 8; b = b + 2) {
            state_bufer = state_bufer + '<tr>'
            if (pay_for_month[a][b] == '') {
            } else {
                state_bufer = state_bufer + '<td>' + pay_for_month[a][b] + '</td>' + '<td>' + pay_for_month[a][b + 1] + '</td>'
                state_bufer = state_bufer + '</tr>'
                summa = summa + pay_for_month[a][b + 1]
            }
        }
        state_bufer = state_bufer + '<td>' + 'Всего:' + '</td>' + '<td bgcolor="yellow">' + summa + '</td>'

        state_bufer = state_bufer + '</table>'
    }
    show_state(state_bufer)
    state_bufer = ''

}//Формирует и отображает список расходов по месячно на тикущий месяц
function List_report() {


   /*
    for (a = 0; a < piople_pay.length-1; a++) {
        for (b = 1; b <= 12; b++) {
    if (piople_pay[a][b]!="") { count_number=count_number+Number(piople_pay[a][b])}
        }
    }

    state_bufer=state_bufer+'<H2>Всего оплочено 20 год:'+count_number+' грн.</H2>>'

    for (a = 0; a < piople_pay21.length-1; a++) {
        for (b = 1; b <= 12; b++) {
            if (piople_pay21[a][b]!="") { count_number=count_number+Number(piople_pay21[a][b])}
        }
    }

    for (a = 0; a < piople_pay22.length-1; a++) {
        for (b = 1; b <= 12; b++) {
            if (piople_pay22[a][b]!="") { count_number=count_number+Number(piople_pay22[a][b])}
        }
    }

    for (a = 0; a < pay_for_month.length-1; a++) {
        for (b = 1; b <= 10; b=b+2) {

            if (pay_for_month[a][b]!=0) { count_zero=count_zero+Number(pay_for_month[a][b]); console.log(pay_for_month[a][b])}
        }
    }

    state_bufer=state_bufer+'<H2>Всего оплочено с 20 по 21 год:'+count_number+' грн.</H2>>'
    state_bufer=state_bufer+'<H2>Всего расходов с 20 по 21 год:'+count_zero+' грн.</H2>>'
    count_number=count_number-count_zero
    state_bufer=state_bufer+'<H2>Осталось:'+count_number+' грн.</H2>>'
*/

} //просчитывает все суммы по таблице и выводит общую сумму
function show_buf_table (array,head_table){
    state_bufer=''
    if (head_table!=''){state_bufer=state_bufer+'<h2>'+head_table+'</h2>'}

    state_bufer=state_bufer+'<table>'
    for(a=0;a<=array.length-1;a++) {
        state_bufer = state_bufer + '<tr>'
        for (b = 0; b <=array[0].length - 1; b++) {
            state_bufer = state_bufer +'<td>'+ array[a][b]+'</td>'
        }
        state_bufer = state_bufer + '</tr>'
    }
    state_bufer=state_bufer+'</table>'
show_state(state_bufer)
state_bufer=''
}//отображает готовую таблицу с заголовком
function sum_cells_choice(array,a1,b1) {
    let all_count=0
    if (b1==0){b1=array[0].length-1}
    for(a=a1;a<=b1;a++) {
        for (b = 0; b <= array.length - 1; b++) {
            all_count = all_count + Number(array[b][a])
        }
    }

    return all_count
}  //общая сумма указаного столбца массива а-начало если в=0 все столбцы
function select_by_if(array,tr,aa,rray2,bb) {
    let array_b=[]
    for (a=0;a<=array.length-1;a++){
        if (array==aa){

        }
    }


}//выборка данных по условию и формирование масива (массив столбец aa-условие ассив2 выборка данных bb )
function deptor_string(year,month) {
    
}
function select_count_year(count_year) {
    if (count_year == 2020) {
        array_buf = piople_pay
    }
    if (count_year == 2021) {
        array_buf = piople_pay21
    }
    if (count_year == 2022) {
        array_buf = piople_pay22
    }
    return array_buf
}


//функции меню
function List_piple() {show_buf_table(piople_data,'Список владельцев  Ст. <ОТДЫХ>')
}//список
function List_2019(){
    array_buf=[
    ['Номер дачи','Фамилия','Уголь','Уплочено по Месяц'],
    ['2217','Мирошников',0,8],
    ['2231','Лукьянченко',0,3],
    ['2234','Неизвестно',0,'нет проплат с 2014 года']
]
    show_buf_table(array_buf,'Должники 2019 год')
    array_buf=[]
}//должники 2019
function Pay_all() {

    now_month=Number((now.getMonth()+1))
    count_year=Number(select.value)//считуем выбор года пользователя
    array_buf=select_count_year(count_year)
    bufer = ''


    for (a = 0; a < year_month.length; a++)//формируем шапку таблицы по оплате с отметкой текущего месяца
    {
        if (a ==now_month - 1) {
            hed_table_pay = hed_table_pay + '<td bgcolor="yellow">'
        } else hed_table_pay = hed_table_pay + '<td>'
        hed_table_pay = hed_table_pay + year_month[a] + '</td>'
    }

    hed_table_pay=hed_table_pay+'</tr>'

    bufer = '<table>'
    bufer = bufer +hed_table_pay
    hed_table_pay=''


    if (now_year==count_year) {} else {now_month=-1}

    for (a = 0; a < array_buf.length; a++) {
        bufer = bufer + '<tr>'

        for (b = 0; b <= 13; b++)//формируем  таблицы по оплате
        {
            if (b == 1) {
                bufer = bufer + '<td>' + piople_data[a][1] + '</td>'
            }
            if (array_buf[a][b] == "") {
                if (b >now_month + 1) {
                    bufer = bufer + '<td bgcolor="white">0</td>'
                } else {
                    bufer = bufer + '<td bgcolor="red">0</td>'//если нет  оплаты красное поле
                }
            } else bufer = bufer + '<td bgcolor="green">' + array_buf[a][b] + '</td>'//если есть оплата зеленое поле
        }
        bufer = bufer + '</tr>'
    }
    bufer = bufer +'</table>'
    hed_table_pay = hed_table

    show_state(bufer)

}//Оплата по выбраномугоду
function bedtor_coal(year) {
    let cc=1
    array_buf=[]
    let zerro_array = []
    state_bufer=''
    count_year = Number(select.value)//считуем выбор года пользователя
    if (count_year !=now_year) {state_bufer='<h1>Выбраный год '+count_year+' оплат не было </h1>';show_state(state_bufer)} else {

        state_bufer = 'Задолжали по оплате за уголь   ' + count_year + '  год '
        zerro_array=[
            ['Номер','Владелец дачи'],

        ]

        array_buf=select_count_year(count_year)

        for(a=0;a<=array_buf.length-1;a++)
        {
            let buf_string_array=[]
            if (array_buf[a][1]==''){
                buf_string_array=piople_id(a)
                zerro_array.push([buf_string_array[0],buf_string_array[1]])
            }
        }

        show_buf_table(zerro_array,state_bufer)

        state_bufer=''
        array_buf=[]
    }




}//Отчет по углю
function debtor_pay() {
    let zerro_array = []
    let buf_string_array=[]
    array_buf=[]
    let count=0
    let count_all=0
    let count_sum=0
    count_year = Number(select.value)//считуем выбор года пользователя
    now_month=Number((now.getMonth()+1))
    state_bufer=''

    if (count_year>now_year) {
    state_bufer='<h1>Вы выбрали  '+count_year+' год в тикущем году нет должников  </h1>'
        show_state(state_bufer)
} else {
        zerro_array=[
           ['Номер','Владелец дачи','Задолжность месяцев','Сумма грн.'],
           ]
        array_buf=select_count_year(count_year)

        for(a=0;a<=array_buf.length-1;a++)
        {

            for (b=2;b<=array_buf[a].length-1 && b!=now_month+2;b++) {
                if (array_buf[a][b] == '') {

                    count=count+1
                }

            }
            if (count>0) {
                buf_string_array = piople_id(a)
                buf_string_array.push(count)
                zerro_array.push([buf_string_array[0], buf_string_array[1], buf_string_array[2],buf_string_array[2]=count*60])
            count_sum+=count*60
                count=0
            }

        }

    debugger

zerro_array.push([buf_string_array[0]='-', buf_string_array[1]='-', buf_string_array[2]='Всего :',buf_string_array[2]=count_sum])

    state_bufer='<h1>Вы выбрали  '+count_year+' год.  месяц '+year_month[now_month-1]+'</h1>'

        show_buf_table(zerro_array,state_bufer)

    }

}//отчет по должникам
function report() {
    let count=0
    count=sum_cells_choice(piople_pay,1,0)
    count=count+sum_cells_choice(piople_pay21,1,0)
    count=count+sum_cells_choice(piople_pay22,1,0)

    let count_zero=0
    for (a = 0; a < pay_for_month.length-1; a++) {
        for (b = 1; b <= 10; b=b+2) {

            if (pay_for_month[a][b]!=0) { count_zero=count_zero+Number(pay_for_month[a][b])}
        }
    }







    state_bufer='<h2>Оплата за все года '+count+' грн. </h2>'
    state_bufer+='<h2> Расходы за текущий год'+count_zero+' грн. </h2>'
    state_bufer+='<h2> Остаток суммы после ревизии '+17345+'грн. </h2>'
    count=count+17345

    count=count-count_zero
    state_bufer+='<h2> Остаток '+count+' грн. </h2>'
    count=Math.round(count/3200)
    state_bufer+='<h2> Денег хватит на '+count+' месяцев при расходе 3200 грн. </h2>'
    state_bufer+= '<div id="piechart_3d" style="width: 900px; height: 500px;"></div>'
    show_state(state_bufer)


    type="text/javascript"
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Сумма оплат за все года',     41460],
            ['Расходы за текущий год',      33013],
            ['Остаток суммы после ревизии',  17345],
            ['Остаток',25792]

        ]);

        let options = {
            title: 'График ',
            is3D: true,
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }




}
function Contributions() {

    state_bufer=[]
    state_bufer+='<h1> Остаток суммы после ревизии '+17345+'грн. </h1>'


    show_state(state_bufer)

state_bufer=[]

}


function count_bedtor() {

    if (select_report.value=="1"){bedtor_coal()}//уголь
    if (select_report.value=='2'){ debtor_pay()}//должники
    if (select_report.value=='3'){report()}//общий
} //селектор отчетов



function login() {



   let a= document.getElementById('login').value;
let b= document.getElementById('password').value;
   if (a=='1234' && b=='1234'){
       document.getElementById('modal').style.display = 'none';
       document.getElementById('2').disabled = true;
       document.getElementById('3').disabled = true;
       document.getElementById('4').disabled = true;
   }
    if (a=='1234' && b=='123456'){
        document.getElementById('modal').style.display = 'none';

    }

}


