
//////////////////////////////////////////////////////           СЕЗОННОЕ МЕНЮ           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_special_menu = {
    "Блюдо":{
        "dish_1": {
        "photo": "image/seasonal_menu/dish/salad-indeika.jpg",
        "name_dish": "Салат с индейкой <br>и медовым соусом ",
        "description_dish": "Индейка, сельдерей, томат, огурец, айсберг, руккола, орех кедровый, заправка медовая, соус бальзамик",
        "sum_dish": "490.-",
        "gramm_dish": "240г",
        "like" : 14,
        },
        "dish_2": {
            "photo": "image/seasonal_menu/dish/salad-feta.jpg",
            "name_dish": "Салат Греция с соусом фета",
            "description_dish": "Айсберг, шпинат, петрушка, томаты черри, огурец, фета, лимон",
            "sum_dish": "350.-",
            "gramm_dish": "200г",
            "like" : 4,
        },
        "dish_3": {
            "photo": "image/seasonal_menu/dish/cold-soup.jpg",
            "name_dish": "Холодный суп Сальморехо с прошутто и яйцом пашот",
            "description_dish": "Прошутто, пармезан, яйцо пашот, томат, огурец, базилик, сухарики",
            "sum_dish": "580.-",
            "gramm_dish": "360г",
            "like" : 12,
        },
    },
    "Напитки":{
        "drink_1":{
            "photo": "image/seasonal_menu/drink/bambl.jpg",
            "name_dish": "Бамбл блю",
            "description_dish": "",
            "sum_dish": "420.-",
            "gramm_dish": "450мл",
            "like" : 15,
        },
        "drink_2":{
            "photo": "image/seasonal_menu/drink/pina_kolada.jpg",
            "name_dish": "Пина колада",
            "description_dish": "",
            "sum_dish": "280.-",
            "gramm_dish": "350мл",
            "like" : 21,
        },
        "drink_3":{
            "photo": "image/seasonal_menu/drink/shalo.jpg",
            "name_dish": "Жало",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "450мл",
            "like" : 13,
        },
        "drink_4":{
            "photo": "image/seasonal_menu/drink/lavanda.jpg",
            "name_dish": "Лавандовый лимонад",
            "description_dish": "",
            "sum_dish": "280.-",
            "gramm_dish": "350мл",
            "like" : 19,
        },
        "drink_5":{
            "photo": "image/seasonal_menu/drink/bazilik.jpg",
            "name_dish": "Лимонад клубника-базилик",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "450мл",
            "like" : 30,
        },
        "drink_6":{
            "photo": "image/seasonal_menu/drink/milksheik_banan.jpg",
            "name_dish": "Милкшейк клубника-банан",
            "description_dish": "",
            "sum_dish": "350.-",
            "gramm_dish": "450мл",
            "like" : 9,
        },
        "drink_7":{
            "photo": "image/seasonal_menu/drink/ice_late_persik.jpg",
            "name_dish": "Айс-латте персик",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "450мл",
            "like" : 20,
        },
        "drink_8":{
            "photo": "image/seasonal_menu/drink/malachit.jpg",
            "name_dish": "Малахит",
            "description_dish": "",
            "sum_dish": "280.-",
            "gramm_dish": "350мл",
            "like" : 42,
        }
    }
};
//////////////////////////////////////////////////////           ОСНОВНОЕ МЕНЮ          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_hot_dish = {
    "Завтраки": {
        "dish_1": {
            "photo": "image/menu/IMG_7363_jpg.jpg",
            "name_dish": "Балийский завтрак <br>с лососем",
            "description_dish": "Лосось, глазунья, томат черри, чиабатта, авокадо паста, крем-чиз",
            "sum_dish": "820.-",
            "gramm_dish": "350",
            "like" : 72,
        },
        "dish_2": {
            "photo": "image/menu/IMG_7444_jpg.jpg",
            "name_dish": "Стейк-завтрак",
            "description_dish": "Говяжья вырезка, глазунья, картофель бэби, томаты черри, руккола, чиабатта, брусничный соус",
            "sum_dish": "840.-",
            "gramm_dish": "400",
            "like" : 56,
        },
        "dish_3": {
            "photo": "image/menu/IMG_7142.jpg",
            "name_dish": "Баварский завтрак <br>с беконом и колбаской",
            "description_dish": "Колбаска братвурст, бекон, глазунья, картофель бэби, чиабатта, микс салатов, брусничный соус, кетчуп",
            "sum_dish": "590.-",
            "gramm_dish": "450",
            "like" : 92,
        },
        "dish_4": {
            "photo": "image/menu/9EEEE49A-E7F2-4780-BF3A-6BFA9690BA60.jpg",
            "name_dish": "Яйцо бенедикт с лососем на нежной бриоши",
            "description_dish": "Лосось, бриошь, яйцо пашот, шпинат, соус голландез",
            "sum_dish": "670.-",
            "gramm_dish": "240",
            "like" : 32,
        },
        "dish_5": {
            "photo": "image/menu/CD97B82F-DDB8-41CF-9D51-77E49356B686.jpg",
            "name_dish": "Шакшука со спелыми томатами и яйцом пашот",
            "description_dish": "Томаты, яйца пашот, болгарский перец, лук, чеснок, кинза, сметана, пряности, чиабатта ",
            "sum_dish": "490.-",
            "gramm_dish": "450",
            "like" : 51,
        },
        "dish_6": {
            "photo": "image/menu/omlet.jpg",
            "name_dish": "Омлет/скрембл с миксом салатов <br>и томатом",
            "description_dish": "Добавки по желанию:<br><br>"+"<p>Бекон/Колбаска/Пастрами из индейки/Стейк/Лосось</p>",
            "sum_dish": "590.-",
            "gramm_dish": "450",
            "like" : 39,
        },
    },
    "Каши":{
        "dish_7": {
            "photo": "image/menu/kasha-ris.jpg",
            "name_dish": "Каша рисовая с манго",
            "description_dish": "Добавки по желанию:<br><br>" + "<p>Голубика/Яблоко/Манго/Банан/Орехи/Мёд/Вишнёвое варенье/Малиновый соус/Нутелла/Сливочное масло<p>",
            "sum_dish": "270.-",
            "gramm_dish": "220",
            "like" : 35,
        },
        "dish_8": {
            "photo": "image/menu/kasha-manka.jpg",
            "name_dish": "Манная каша",
            "description_dish": "Добавки по желанию:<br><br>" + "<p>Голубика/Яблоко/Манго/Банан/Орехи/Мёд/Вишнёвое варенье/Малиновый соус/Нутелла/Сливочное масло<p>",
            "sum_dish": "170.-",
            "gramm_dish": "200",
            "like" : 32,
        },
        "dish_9": {
            "photo": "image/menu/kasha-ovsanka.jpg",
            "name_dish": "Каша овсяная",
            "description_dish": "Добавки по желанию:<br><br>" + "<p>Голубика/Яблоко/Манго/Банан/Орехи/Мёд/Вишнёвое варенье/Малиновый соус/Нутелла/Сливочное масло<p>",
            "sum_dish": "170.-",
            "gramm_dish": "200",
            "like" : 26,
        },
    },
    "Стартеры":{
        "dish_10": {
            "photo": "image/menu/avocado-tost.jpg",
            "name_dish": "Авокадо тост с яйцом пашот и лососем",
            "description_dish": "Лосось, яйцо пашот, чиабатта, авокадо паста, руккола ",
            "sum_dish": "700.-",
            "gramm_dish": "215",
            "like" : 24,
        },
        "dish_11": {
            "photo": "image/menu/brusketa-indeika.jpg",
            "name_dish": "Брускетта с пастрами из индейки",
            "description_dish": "Пастрами из индейки, перец печеный, чиабатта, руккола",
            "sum_dish": "400.-",
            "gramm_dish": "200",
            "like" : 12,
        },
        "dish_12": {
            "photo": "image/menu/brusketa-tomat.jpg",
            "name_dish": "Брускетта с авокадо и вялеными томатами",
            "description_dish": "Вяленые томаты, перец печеный, чиабатта, авокадо паста, крем-чиз, салат руккола",
            "sum_dish": "460.-",
            "gramm_dish": "200",
            "like" : 45,
        },
        "dish_13": {
            "photo": "image/menu/tost-tomat.jpg",
            "name_dish": "Сэндвич с индейкой, вялеными томатами и брусничным соусом",
            "description_dish": "Пастрами из индейки, вяленые томаты, хлеб тостовый, микс салатов, соус брусничный",
            "sum_dish": "590.-",
            "gramm_dish": "450",
            "like" : 32,
        },
        "dish_14": {
            "photo": "image/menu/tost-mozzarela.jpg",
            "name_dish": "Сэндвич с беконом <br>и сулугуни",
            "description_dish": "Бекон, сыр сулугуни, перец печеный, шпинат, крем-чиз, хлеб тостовый",
            "sum_dish": "480.-",
            "gramm_dish": "280",
            "like" : 19,
        },
        "dish_15": {
            "photo": "image/menu/cruasan-losos.jpg",
            "name_dish": "Круассан с хрустящим салатом, крем-чизом <br>и лососем",
            "description_dish": "Лосось, огурец, айсберг, руккола, крем-чиз, круассан",
            "sum_dish": "650.-",
            "gramm_dish": "195",
            "like" : 64,
        },
        "dish_16": {
            "photo": "image/menu/cruasan-indeika.jpg",
            "name_dish": "Круассан с томатной сальсой и пастрами <br>из индейки",
            "description_dish": "Пастрами из индейки, томатная сальса, микс салатов, круассан",
            "sum_dish": "420.-",
            "gramm_dish": "220",
            "like" : 47,
        },
    },
    "Вафли":{
        "dish_27": {
            "photo": "image/menu/waffle-eggs.jpg",
            "name_dish": "Томатная вафля бенедикт с беконом",
            "description_dish": "Бекон, яйцо пашот, шпинат, томатная паста",
            "sum_dish": "600.-",
            "gramm_dish": "350",
            "like" : 34,
        },
        "dish_218": {
            "photo": "image/menu/waffle-perets.jpg",
            "name_dish": "Вафля с индейкой, печеным перцем и грибным соусом",
            "description_dish": "Индейка, грибной соус, пармезан, печеный перец, шпинат",
            "sum_dish": "580.-",
            "gramm_dish": "350",
            "like" : 41,
        },
    },
    "Крем-супы":{
        "dish_19": {
            "photo": "image/menu/soup-shampion.jpg",
            "name_dish": "Крем-суп с белыми грибами",
            "description_dish": "Белые грибы, картофель, морковь, лук, сливки ",
            "sum_dish": "310.-",
            "gramm_dish": "320",
            "like" : 42,
        },
        "dish_20": {
            "photo": "image/menu/soup-chees.jpg",
            "name_dish": "Сырный крем-суп",
            "description_dish": "Сыр пармезан, картофель, морковь, чеснок, лук, сливки, сухарики",
            "sum_dish": "310.-",
            "gramm_dish": "320",
            "like" : 27,
        },
    },
    "Основные блюда": {
        "dish_21": {
            "photo": "image/menu/dranik-tartar.jpg",
            "name_dish": "Драник с тартаром <br>из лосося",
            "description_dish": "Драник, лосось, яйцо пашот, руккола, соус тайский ",
            "sum_dish": "700.-",
            "gramm_dish": "270",
            "like" : 20,
        },
        "dish_22": {
            "photo": "image/menu/dranik-eggs.jpg",
            "name_dish": "Драник с воздушным яйцом",
            "description_dish": "Драник, бекон, воздушное яйцо, грибной соус, руккола",
            "sum_dish": "520.-",
            "gramm_dish": "265",
            "like" : 15,
        },
        "dish_23": {
            "photo": "image/menu/oladi-chukini.jpg",
            "name_dish": "Оладьи из цукини с грибным соусом",
            "description_dish": "Оладьи из цукини, грибной соус, томаты черри, руккола",
            "sum_dish": "390.-",
            "gramm_dish": "225",
            "like" : 51,
        },
        "dish_24": {
            "photo": "image/menu/befstroganov.jpg",
            "name_dish": "Бефстроганов с жареным картофелем",
            "description_dish": "Говяжья вырезка, картофель бэби, грибы шампиньоны, лук репчатый, сметана, сливки ",
            "sum_dish": "610.-",
            "gramm_dish": "310",
            "like" : 29,
        },
        "dish_25": {
            "photo": "image/menu/karbonara.jpg",
            "name_dish": "Паста карбонара с прошутто",
            "description_dish": "Спагетти, бекон, сыр пармезан, прошутто, яйцо, чеснок, черный перец",
            "sum_dish": "650.-",
            "gramm_dish": "290",
            "like" : 60,
        },
    },
};
//////////////////////////////////////////////////////           ХОЛОДНЫЕ БЛЮДА           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_сold_dish = {
    "dish_1": {
        "photo": "",
        "name_dish": "",
        "description_dish": "",
        "sum_dish": "",
        "gramm_dish": "",
        "like" : 0,
    }
}
//////////////////////////////////////////////////////           ДЕССЕРТЫ          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_dessert = {
    "Сырники" : {
        "dish_1": {
            "photo":"image/menu/cherry cheesecakes.jpg",
            "name_dish": "Сырники творожные с заварным кремом и домашним вишнёвым вареньем",
            "description_dish": "Сырники, домашнее вишневое варенье, заварной крем",
            "sum_dish": "400.-",
            "gramm_dish": "250",
            "like" : 63,
        },
        "dish_2": {
            "photo":"image/menu/syirniki-chees.jpg",
            "name_dish": "Сырники с сулугуни и свежей зеленью",
            "description_dish": "Сырники, сыр сулугуни, сметана, микс салатов, томаты черри",
            "sum_dish": "470.-",
            "gramm_dish": "260",
            "like" : 72,
        },
    },
    "Панкейки": {
        "dish_3": {
            "photo":"image/menu/pankeiki-rikkota.jpg",
            "name_dish": "Панкейки с рикоттой и домашним вишнёвым вареньем",
            "description_dish": "Панкейки, рикотта, вишневое варенье, крем-чиз",
            "sum_dish": "460.-",
            "gramm_dish": "240",
            "like" : 58,
        },
        "dish_4": {
            "photo":"image/menu/pankeiki-cherry.jpg",
            "name_dish": "Панкейки с домашним вишнёвым вареньем и нутеллой",
            "description_dish": "Панкейки, вишневое варенье, нутелла",
            "sum_dish": "460.-",
            "gramm_dish": "240",
            "like" : 45,
        },
    },
    "Вафли":{
        "dish_5": {
            "photo":"image/menu/cold-waffle.jpg",
            "name_dish": "Сливочно-лимонная вафля с холодной ягодой",
            "description_dish": "Холодные ягоды, крем-чиз, сгущенка, цитрусовый сироп, малиновый соус",
            "sum_dish": "500.-",
            "gramm_dish": "250",
            "like" : 33,
        },
        "dish_6": {
            "photo":"image/menu/waffles-apple.jpg",
            "name_dish": "Вафля штрудель с мороженым",
            "description_dish": "Яблочный штрудель, мороженое, цитрусовый сироп",
            "sum_dish": "500.-",
            "gramm_dish": "300",
            "like" : 12,
        },
    },
};
//////////////////////////////////////////////////////           НАПИТКИ           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_drinks = {
    "Милкшейки":{
        "drink_1": {
            "photo":"image/drinks/basic/milksheik_coffee.jpg",
            "name_dish": "Милкшейк кофейный",
            "description_dish": "",
            "sum_dish": "350.-",
            "gramm_dish": "450",
            "like" : 24,
        },
        "drink_2": {
            "photo":"image/drinks/basic/milksheik_banan_cook.jpg",
            "name_dish": "Милкшейк<br>Банан + печенье",
            "description_dish": "",
            "sum_dish": "350.-",
            "gramm_dish": "450",
            "like" : 20,
        },
        "drink_3": {
            "photo":"image/drinks/basic/milksheik_malina_white_chocolate.jpg",
            "name_dish": "Милкшейк<br>Малина + белый шоколад",
            "description_dish": "",
            "sum_dish": "350.-",
            "gramm_dish": "450",
            "like" : 7,
        },
    },
    "Смузи":{
        "drink_4": {
            "photo":"image/drinks/basic/smuzi_malina_blueberry.jpg",
            "name_dish": "Смузи<br>Малина, черника, банан",
            "description_dish": "",
            "sum_dish": "380.-",
            "gramm_dish": "450",
            "like" : 43,
        },
        "drink_5": {
            "photo":"image/drinks/basic/smuzi_bazilic_shpinat.jpg",
            "name_dish": "Смузи<br>Базилик, шпинат, банан, ананас",
            "description_dish": "",
            "sum_dish": "380.-",
            "gramm_dish": "450",
            "like" : 31,
        },
        "drink_6": {
            "photo":"image/drinks/basic/smuzi_banan_ananas.jpg",
            "name_dish": "Смузи<br>Манго, ананас, апельсин",
            "description_dish": "",
            "sum_dish": "380.-",
            "gramm_dish": "450",
            "like" : 35,
        },
    },
    "Авторские напитки":{
        "drink_7": {
            "photo":"image/drinks/basic/sold_iriska.jpg",
            "name_dish": "Солёная ириска",
            "description_dish": "",
            "sum_dish": "290.-",
            "gramm_dish": "350",
            "like" : 29,
        },
        "drink_8": {
            "photo":"image/drinks/basic/white_mokko.jpg",
            "name_dish": "Белый мокко",
            "description_dish": "",
            "sum_dish": "290.-",
            "gramm_dish": "350",
            "like" : 12,
        },
        
    },
    "Холодные напитки":{
        "drink_9": {
            "photo":"image/drinks/basic/bambl.jpg",
            "name_dish": "Бамбл кофе",
            "description_dish": "",
            "sum_dish": "420.-",
            "gramm_dish": "400",
            "like" : 9,
        },
        
        "drink_10": {
            "photo":"image/drinks/basic/espresso_tonik.jpg",
            "name_dish": "Эспрессо тоник",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "400",
            "like" : 19,
        },
        "drink_11": {
            "photo":"image/drinks/basic/mango_matcha_tonic.jpg",
            "name_dish": "Манго-матча тоник",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "400",
            "like" : 34,
        },
        "drink_12": {
            "photo":"image/drinks/basic/ice_latte.jpg",
            "name_dish": "Айс-латте малина",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "400",
            "like" : 46,
        },
        "drink_13": {
            "photo":"image/drinks/basic/frappuchino.jpg",
            "name_dish": "Фраппучино нутелла",
            "description_dish": "",
            "sum_dish": "300.-",
            "gramm_dish": "400",
            "like" : 39,
        },
    },
    "Не кофе":{
        "drink_14": {
            "photo":"image/drinks/basic/cacao.jpg",
            "name_dish": "Какао",
            "description_dish": "",
            "sum_dish": "200/230/250",
            "gramm_dish": "250/350/450",
            "like" : 11,
        },
        "drink_15": {
            "photo":"image/drinks/basic/matcha_latte.jpg",
            "name_dish": "Матча латте",
            "description_dish": "",
            "sum_dish": "250/270/290",
            "gramm_dish": "250/350/450",
            "like" : 22,
        },
        "drink_16": {
            "photo":"image/drinks/basic/hot_chocolate.jpg",
            "name_dish": "Горячий шоколад",
            "description_dish": "",
            "sum_dish": "350.-",
            "gramm_dish": "350",
            "like" : 41,
        },
    },
};
//////////////////////////////////////////////////////           КОФЕ / ЧАЙ           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_tea ={
    "tea_1":{
        "name":"Чай имбирный цитрус",
        "ml":"500",
        "money":"300",
    },
    "tea_2":{
        "name":"Чай облепиха-ананас",
        "ml":"500",
        "money":"300",
    },
    "tea_3":{
        "name":"Чай пряная ягода",
        "ml":"500",
        "money":"300",
    },
    "tea_4":{
        "name":"Классические",
        "ml":"500",
        "money":"150",
    },
    
};
const data_coffee ={
    "cofffe_1":{
        "name":"Эспрессо",
        "ml":"40",
        "money":"130",
    },
    "coffee_2":{
        "name":"Американо",
        "ml":"250/350",
        "money":"130",
    },
    "coffee_3":{
        "name":"Американо цитрус",
        "ml":"250/350",
        "money":"150/160",
    },
    "coffee_4":{
        "name":"Капучино",
        "ml":"200/350/450",
        "money":"180/220/250",
    },
    "coffee_5":{
        "name":"Латте",
        "ml":"250/350/450",
        "money":"180/220/250",
    },
    "coffee_6":{
        "name":"Айс-латте",
        "ml":"400",
        "money":"250",
    },
    "coffee_7":{
        "name":"Флэт уайт",
        "ml":"200",
        "money":"220",
    },
    "coffee_8":{
        "name":"Банановый раф",
        "ml":"350/450",
        "money":"270/300",
    },
    "coffee_9":{
        "name":"Ванильний раф",
        "ml":"350/450",
        "money":"270/300",
    },
    "coffee_10":{
        "name":"Цветочный раф",
        "ml":"350/450",
        "money":"270/300",
    },
    "coffee_11":{
        "name":"Фисташковый раф",
        "ml":"350/450",
        "money":"270/300",
    },
};
//////////////////////////////////////////////////////             ДОБАВКИ               \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const data_supplements ={
    "Мясные":{
        "Бекон":"100р/40г",
        "Колбаска":"150р/60г",
        "Пастрами из индейки":"150р/70г",
        "Стейк":"280р/80г",
        "Лосось":"280р/50г",
    },
    "Не сладкие соусы":{
        "Брусничный":"70р/40г",
        "Грибной":"70р/40г",
        "Кетчуп":"50р/40г",
        "Авокадо паста":"100р/40г",
        "Крем-чиз":"80р/40г",
    },
    "Сладкие соусы":{
        "Вишневое варенье":"50р/40г",
        "Малиновый соус":"50р/40г",
        "Заварной крем":"50р/40г",
        "Нуттела":"80р/40г",
    },
    "Хлеб":{
        "Тостовый":"50р",
        "Чиабатта":"50р",
        "Круассан":"140р",
    }
};
const data = [data_hot_dish, data_dessert, data_special_menu, data_drinks, data_tea, data_coffee, data_supplements];