let version;

const heightToPcVersion = 800;
const widthToPcVersion = 970;

//Айпи серверов академии
const serverIP = 'starland.lol';
let online = 'Онлайн: Загрузка...'
//Правила сервера 
//
//КАК УСТАНАВЛИВАТЬ НОВЫЕ ПРАВИЛА
//1. num. Номер
//2. name. Название
//3. sub. если true, то правило запишется как правило, а если false, запишется как глава
//4. desc. Само правило, описание правила. Если нету, пишите false
//5. warning. Дополнительная информация о правиле. Если нету, пишите false

const rules = [{
  num:0.1,
  name:'Подозрительные люди',
  sub:true,
  desc:'Мы можем банить людей, которые нам кажутся подозрительные',
  warning:false
  }, {
  num:0.2,
  name:'Уважение к администрации',
  sub:true,
  desc:'В случаи не уважения мы имеем права замутить.',
  warning:'Это не работает если действуют в юмористическом или дружеском стиле.'
  }, {
  num:1,
  name:'Общение',
  sub:false,
  desc:false,
  warning:false,
  img:'images/chat-icon.png'
}, {
  num:1.1,
  name:'Оскорбления и угрозы',
  sub:true,
  desc:'Оскорбления и угрозы в сторону участников, их близких и, в особенности, модерации и администрации проекта <u>запрещены.</u>',
  warning:'Но только если человеку действительно обидно'
}, {
  num:1.2,
  name:'Дискриминация',
  sub:true,
  desc:'Унижение и дискриминация человека или его близких и родных <u>запрещена.</u>',
  warning:false
}, {
  num:1.3,
  name:'Срачи',
  sub:true,
  desc:'Разжигание срачей и способствование их продвижения <u>запрещено.</u>',
  warning:false
}, {
  num:1.4,
  name:'Маты',
  sub:true,
  desc:'Частое употребление нецензурной лексики <u>запрещено.</u>',
  warning:false
}, {
  num:1.5,
  name:'Спам, флуд и оффтоп',
  sub:true,
  desc:'Спам и флуд запрещен везде кроме канала "Спам и Флуд". Оффтоп <u>нежелателен.</u>',
  warning:false
},{
  num:1.6,
  name:'NSFW и 18+',
  sub:true,
  desc:'NSFW, 18+ и морально-неэтический контент <u>запрещён.</u>',
  warning:false
}, {
  num:1.7,
  name:'Политика',
  sub:true,
  desc:'Обсуждение политики <u>не приветствуется.</u>',
  warning:false
}, {
  num:1.8,
  name:'Пинги',
  sub:true,
  desc:'Пинг без причины <u>нежелателен.</u>',
  warning:false
}, {
  num:2,
  name:'Прочее',
  sub:false,
  desc:false,
  warning:false,
  img:'images/other-icon.png'
}, {
  num:2.1,
  name:'Реклама',
  sub:true,
  desc:'Несогласованная с администрацией проекта реклама сторонних ресурсов, серверов и т.п полностью <u>запрещена.</u>',
  warning:false
}, {
  num:2.2,
  name:'Секретное слово',
  sub:true,
  desc:'Этот пункт создан исключительно ради заявки.',
  warning:'Если вы его читаете ради неё, то секретное слово <b>"СЛ"</b>'
}, {
  num:2.3,
  name:'Маска',
  sub:true,
  desc:'Маска, тоесть выдача себя за другого человека <u>запрещена.</u>',
  warning:'Это правило включает в себя смену аватарки на одинаковую другому человеку, ника и т.п.'
}, {
  num:2.4,
  name:'Согласие на рекламу',
  sub:true,
  desc:'Согласие на рекламу <u>запрещено.</u>',
  warning:'Зайдя на сервер рекламщика, у вас <b>остаётся выбор - остаться там или вернуться на StarLand.</b> В 1 случае вы получаете <b>бан навсегда.</b> Если вы остаётесь на StarLand, то просьба написать в тех-поддержку про человека, который кинул рекламу.'
}, {
  num:3,
  name:'Остальное',
  sub:false,
  desc:false,
  warning:false,
  img:'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'
}, {
  num:3.1,
  name:'Непрописанные моменты',
  sub:true,
  desc:'Все непрописанные моменты решаются через суд или на усмотрение администрации, при этом решение администрации при желании может быть оспорено на суде.',
  warning:false
}, {
  num:3.2,
  name:'Нацизм',
  sub:true,
  desc:'Шутки про Нацизм в большом количестве <u>запрещены</u>.',
  warning:false
}, {
  num:3.3,
  name:'Разглашение информации',
  sub:true,
  desc:'Разглашение конфиденциальной информации без разрешения самого человека <u>запрещено</u>',
  warning:false
}, {
  num:3.4,
  name:'Подстрекательство',
  sub:true,
  desc:'Подстрекательство к нарушению правил <u>запрещено.</u>',
  warning:false
}, {
  num:3.5,
  name:'Ложные тикеты',
  sub:true,
  desc:'Создание ложных тикетов <u>запрещено.</u>',
  warning:false
}, {
  num:3.6,
  name:'Наказания',
  sub:true,
  desc:'Все наказания выбираются на усмотрение администрации и модерации',
  warning:false
}, {
  num:4,
  name:'Майнкрафт',
  sub:false,
  desc:false,
  warning:false,
  img:'images/minecraft-icon.png'
}, {
  num:4.11,
  name:'Убийства и кража',
  sub:true,
  desc:'Убийства, кража и порча имущества <u>запрещена.</u>',
  warning:'За что либо из этого вам нужно возместить ущерб. При особо тяжких повреждениях возможен <u>суд</u> над виновниками "торжества".'
}, {
  num:4.12,
  name:'Гриферство',
  sub:true,
  desc:'Гриферство отличается от 3.11 размером повреждения. Наказание <u>намного серьёзнее.</u>',
  warning:false
}, {
  num:4.2,
  name:'Территории',
  sub:true,
  desc:'Можно самостоятельно присваивать любую свободную территорию за пределами спавна, если её площадь не превышает 2500 блоков, а длина - 100 блоков. Если вы хотите территорию больше, то сначало нужно поговорить с главой спавна или ада. Заходить на чужие территории можно, но ставить и ломать - <u>запрещено</u>, <b>это будет рассматриватся, как гриферство.</b>',
  warning: 'За нелегальное присваивание свободной территории будет её изъятие без возможности забрать ресурсы, также за каждые 5 блоков территории штраф в размере 1 алмаза.'
}, {
  num:4.3,
  name:'Чат в майнкрафте',
  sub:true,
  desc:'Правила чата в майнкрафте <b>соответствует</b> правилам чата дискорда.',
  warning:false
}, {
  num:4.4,
  name:'Читы и баги',
  sub:true,
  desc:'X-ray-моды и X-ray ресурспаки, а также любые читы запрещены. Дюпы предметов кроме *ковров и песка* <u>запрещены.</u>',
  warning:'Частое использование багов сервера и модов ради своего преимущества <u>запрещено.</u>'
}, {
  num:4.5,
  name:'Спавнрейт и фермы',
  sub:true,
  desc:'Запрещено выключать спавнрейт на сервере - строить лаг-машины или подобные строения.',
  warning:'Слишком огромные фермы снижающие тпс <u>нежелательны.</u>'
}, {
  num:4.6,
  name: 'Сторонние сервера',
  sub:true,
  desc:'Нельзя играть на сторонних проектах, которые не сотрудничают со StarLand. Если создатель сервера разрешит вам играть, то тогда можно.',
  warning:'В случае не послушания скорее всего бан'
}];

//Вики
//Почти то же самое, что и с правилами

const wiki = [{
  mainName:'Основное',
  num:1
},{
  mainName:false,
  num:1.1,
  name:'О сервере',
  text:'<b>Starland</b> — приватный сервер, в котором нельзя гриферить. Здесь проводятся ивенты, есть сюжет, строится спавн с магазинами. Чтобы попасть на StarLand нужно зайти в дискорд сервер и написать заявку. Если вас приняли, напишите ник в соответствующий канал и ждите когда вам напишет бот, что вас добавили в белый список. Далее скопируйте <b>IP</b> на сайте или в дискорде и заходите на сервер',
  
  warning:'На сервер можно зайти с <u>Minecraft Java Edition</u> так и с <u>Minecraft Bedrock Edition</u>',
}, {
  mainName:false,
  num:1.2,
  name:'Про дискорд',
  text:'Почти вся основная информация сервера есть в <u>дискорде</u>: чат майнкрафта, новости, заявки, жалобы, тех-поддержка и т.д.<br><br>В чате майнкрафта вы можете почитать чат майнкрафта или отправить сообщение тем, кто сейчас играет на сервере',
  
  warning:`<button class="discord-button" onclick="window.open('https://discord.com/invite/starland01')
          "><img class="discord-logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"> Наш Дискорд </button>`
}, {
  mainName:false,
  num:1.3,
  name: 'Администрация',
  text: `Справа — его ник, а то что в скобках — ник в дискорде<br><br>
         <b>Создатель</b> — Олад (oladyshec1234)<br><br>
         <b>Админы:</b><br>
         <b>1.</b> Mister Proper (Mr.DemetriuM#5634)<br>
         <b>2.</b> зонтик (zont1q)<br>
         <b>3.</b> Мистер Пропер (mr.demetrium)<br>
         <b>Тех-админы</b> (есть доступ к консоли)<br>
         <b>1.</b> Krit (krit4) (создатель сайта)<br>
         <b>2.</b> RedPush (redpush)<br>
         <b>Модераторы:</b> </b><br>
         <b>1.</b> RealNooB (realnoobi)<br>
         <b>2.</b> sa-sanya (rammstein_2)<br>
         <b>3.</b> Rublik (rubl1k7224)<br>
         <b>4.</b> Амогус (strongamogus)<br>
         <b>5.</b> Kitayozi (kitayozi)<br>
         <b>6.</b> Re11ay (re11ay)<br>
         <b>7.</b> Dectuz (dectuz)<br>
         <b>8.</b> Daxy (daxy4)<br>
         <b>9.</b> spideraboba2 (spideraboba2)<br>
         <b>10.</b> Akar (invainway)<br>
         <b>11.</b> зонтик (zont1q)<br>
         <b>12.</b> Vygas (mr_vygas)<br>
         <b>13.</b> quitz (quitz3)<br>
         <b>14.</b> Neskin (_neskin_)<br>
         <b>15.</b> Afontiy (slavikpro2011_)<br>
         <b>16.</b> MeganG (megange)<br>
         <b>17.</b> KoTNK (KoTNK1883)<br>
         <b>18.</b> Arbuzovich (kirill_arbuzovich)<br>
         <b>19.</b> Zhozhik (zhozhik8209)<br>
         <b>20.</b> LeMecene (berilium)<br>
         <b>21.</b> Daxy (daxy4)<br>
         <b>22.</b> Zaderav (zaderav)<br>
         <b>23.</b> staliker (nevil4120)<br>
         <b>24.</b> Меламори (melamori1336)<br>
         <b>25.</b> Liqueur (liqueur0)<br>
         <b>26.</b> Akar (invainway)<br>
         <b>27.</b> Lexus (lexus_xdt)<br>
         <b>28.</b> Eslide (eslide)<br>
         <b>29.</b> Fawn (fawnwalk9482183)<br>
         <b>30.</b> Ksen1z (ksen1z.)<br>
         <b>31.</b> Муфи (xxxmyfi)<br>
         `,
  warning:false,
}, {
  mainName:'Майнкрафт',
  num:2,
}, {
  mainName:false,
  num:2.1,
  name:'Сервер',
  text:'У нас есть 2 сервера — <b>Основной и Анархия</b>. В общем хост стоит около 5000 рублей. В них очень много плагинов, а ядро — <i>Folia</i>, которое создает много возможностей без больших лагов',
  warning:false,
}, {
  mainName:false,
  num:2.2,
  name:'Чат',
  text:'На сервере стоит плагин, который разделяет чат на локальный и глобальный.<br><br><b>Глобальный чат</b> — сообщения, которые видит весь сервер<br><br><b>Локальный чат</b> — Сообщения, которые видят только те игроки, которые находяться в радиусе 50 блоков от игрока, который отправил данное сообщение.',
  warning:'Чтобы отправить <u>глобальное сообщение</u>, перед сообщением напишите восклицательный знак. Например: <i>"!Привет всем"</i>.<br><br>Чтобы отправить <u>локальное сообщение</u>, ничего не пишите перед сообщением, например: <i>"Привет всем"</i>.<br><br>Также можно отправлять сообщения в соотвествующий чат, написав команду <u>"/global"</u> или <u>"/local"</u>. Последующие написанные вами сообщения будут отправлены в соответствующий чат',
}, {
  mainName:'Майнкрафт: Плагины и Моды',
  num:3,
}, {
  mainName:false,
  num:3.1,
  name:'Голосовой Чат',
  text:'<i>Только для Minecraft Java</i><br><br>На сервере стоит плагин <i>Simple Voice Chat</i>, который позволяет говорить на сервере. Для его установки необходимо установить Fabric или Forge. Далее скачивайте мод по кнопке внизу и переместите его в папку /.minecraft/mods. Чтобы говорить нажмите V. Подробную документацию смотрите по кнопке внизу.',
  warning:`<button class="voice-button" onclick="window.open('https://modrinth.com/plugin/simple-voice-chat/versions')
          "><img class="voice-logo" src="https://cdn.modrinth.com/data/9eGKb6K1/icon.png"> Simple Voice Chat</button>`,
}, {
  mainName:false,
  num:3.2,
  name:'Онлайн Карта',
  text:'На сервере стоит плагин <i>Dynmap</i>, который позволяет смотреть карту всего Майнкрафт мира в реальном времени на сайте. Сами сайты по ссылкам внизу (Академия и Основа)',
  warning:`<button class="dynmap-button" onclick="window.open('http://map.starland.lol')
          "><img class="dynmap-logo" src="https://symbl-world.akamaized.net/i/webp/9a/7011c67ec6bef4ee0078350e970eb4.webp"> map.starland.lol</button>`
}, {
  mainName:false,
  num:3.3,
  name:'Остальные плагины',
  text:'<b>Armor Stand Editor</b> — Плагин, с которым вы можете редактировать стойки для брони. Чтобы его использовать нажмите палкой на шифте на стойку для брони, а дальше можно самому разобраться.<br><br><b>Brewery</b> — плагин, с которым можно варить алкоголь. Документация снизу.',
  warning:`<button class="discord-button" onclick="window.open('https://github.com/DieReicheErethons/Brewery/wiki/Homepage')"><img class="voice-logo" src="https://cdn-icons-png.flaticon.com/512/1851/1851105.png"> Brewery </button>`,
}];

const questions = [{
  name:'Как попасть на сервер?',
  num: 1,
  text: `<b>1.</b> Зайдите в наш <a class="s" href="https://discord.com/invite/starland01">дискорд</a><br><br>
  <b>2.</b>  Отправьте заявку<br><br>
  <b>3.</b> Напишите свой майнкрафт ник в канал <u>"Ники Игроков"</u> и ждите когда вам напишет <b>бот SL</b><br><br>
  <b>4.</b> <u><a onclick="
  toHome();
  },1000)
  
">Скопируйте IP</a></u> и играйте!<br><br>`,
  warning: '<u>Не пишите</u> свой ник в канал "Ники Игроков" много раз, и не надо писать с какой версией вы играете',
}, {
  name:'Какие моды нужно установить?',
  num:2,
  text:`На сервере вы можете играть и без модов или на Bedrock Edition, но вот <b>рекомендуемые моды:</b><br><br>
  <b>Simple Voice Chat</b> (Смотрите в Вики),<br> <b>Litematica</b>,<br> <b>Command Macros</b> (чтобы логиниться за 1 клик),<br><b> Sodium </b>(Оптимизация),<br> <b>Iris </b>(Шейдеры)<br><br>
   `,
  warning:`Также есть запрещенные моды (если какого-то мода нету в списке, это не значит что его можно использовать):<br><br>
  Любые <b>читы</b><br>
  <b>Авто-тотем</b><br>
  <b>Свободная камера</b> (можно только Modrinth Edition если для скринов)<br>
  <b>X-Ray</b> моды и текстур паки`
}, {
  name:'Когда будет следующий сезон?',
  num:3,
  text:'Сейчас на сервере <b>межсезонье</b>, которое началось <i>10 марта 2024 года</i>, а новый сезон будет в <i>конце мая 2024 года</i>',
  warning:'2 сезон будет длиться <i>8-12 месяцев</i>'
}, {
  name:'Какое будет межсезонье?',
  num:4,
  text:'Межсезонье будет очень особенным, а каким вы можете проголосовать перед его началом.',
  warning:'Варианты межсезонья не будут раскрываться перед голосованием'
}, {
  name:'Сколько существует сервер?',
  num:5,
  text:'Всего сервер существует <u>около 2-х лет</u>.',
  warning:'Даты важных событий сервера:<br> • 0 сезон OladShield, <i>8 мая 2022 года</i><br> • 1 сезон OladShield, <i>20 июня 2022 года</i><br> • 2 сезон OladShield, <i>середина сентября 2022 года</i><br>• 3 сезон OladShield, <i>2 января 2023 года</i><br>• 1 сезон StarLand, <i>10 июля 2023 года</i><br>• 1 сезон StarLand Academy, <i>30 сентября 2023 года</i><br><br>Будущие события:<br><br>• 2 сезон StarLand, <i>май 2024 года</i><br>• 2 сезон StarLand Academy, <i>май 2024 года</i>'
}, {
  name:'Правда, что <b>StarLand</b> - бывший <b>OladShield</b>?',
  num:6,
  text:'Это правда',
  warning:'В конце 3-его сезона OladShield вместо того, чтобы начать 4 сезон OladShield, начался 1 сезон StarLand'
}, {
  name:'Сколько вы уже потратили на сервер?',
  num:7,
  text:'Создатель сервера (Олад) потратил уже <b>127.000</b> рублей на сервер',
  warning:''
}, {
  name:'Как пользоваться голосовым чатом?',
  num:8,
  text:'На нашем сервере есть возможность говорить с Java и Bedrock. Для Java нужно просто <u><a onclick="toWiki();">скачать плагин</a></u>, а для Bedrock нужно сделать немного больше действий:<br><br><b>1.</b> Зайдите в голосовой канал "Voice1" или "Voice2" в дискорде<br><b>2.</b> Зайдите на сервер в майнкрафте и напишите команду <b>/dvc start</b><br><b>3.</b> Далее к вам в голосовой канал зайдёт бот.',
  warning:'Готово! Теперь вы слышите всех других игроков, у которых установлен Simple Voice Chat на Java, или кто тоже зашёл в голосовой канал для Bedrock в небольшом радиусе'
}, {
  name:'Я не могу зайти на сервер, что делать?',
  num:9,
  text:'Скорее всего вы неправильно написали IP сервера, или его недавно изменили.<br><br> Проверьте, чтобы IP сервера и порт был написан через двоеточие, например "n1.minwix.net:25010" (Если на Java), а если на Bedrock, проверьте чтобы "n1.minwix.net" был написан в строке посередине, а порт (5 цифр) в строке снизу. ',
  warning:'Или вас ещё не добавили в белый список (white list; список игроков, которые могут зайти на сервер). Проверьте ещё раз, правильно ли вы написали свой ник в канал "Ники Игроков"'
}, {
  name:'Я теперь не могу зайти на сервер, хотя раньше мог, что делать?',
  num:10,
  text:'• Вас могли забанить, если при входе написано что вас забанили.<br>• Вас выкинуло с белого списка (white list; список игроков, которые могут зайти на сервер). Напишите в тех-поддержку, если при входе написано что вас нет в белом списке.<br>• Был изменён IP или Порт сервера. Проверьте это в дискорде или на сайте сервера',
  warning:''
}, {
  name:'У меня в канале "вайт-лист-белый-список" не отображаются сообщения, это нормально?',
  num:11,
  text:'Да, сообщения скрыты, чтобы с вашего аккаунта не могли зайти раньше вас, если вы ещё не зарегестрированы',
  warning:''
},  {
  name: 'У меня лагает на сервере, что делать?',
  num:12,
  text:`Если вы на телефоне (Bedrock Edition):<br> 1. Уменьшите количество прогружаемых чанков на минимум.<br> 2. Установите следующие текстур паки:<br>
          <button class="discord-button" onclick="window.open('https://mcpedl.com/particle-disabler-pack-1/')
          ">Отключение частиц</button>`,
  warning:`Если вы на Java:<br>
    Установите моды (Если установить все, FPS повыситься в несколько раз):<br>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/sodium')
          ">Sodium</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/sodium-extra')
          ">Sodium Extra</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/reeses-sodium-options')
          ">Reeses Sodium Options</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/modernfix')
          ">Modernfix</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/lithium')
          ">Lithium</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/starlight')
          ">StarLight</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/lazydfu')
          ">LazyDFU</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/krypton')
          ">Krypton</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/immediatelyfast')
          ">ImmediatelyFast</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/indium')
          ">Indium</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/forcecloseworldloadingscreen')
          ">ForceCloseWorldLoadingScreen</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/ferrite-core')
          ">FerritCore</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/krypton')
          ">MemoryLeak Fix</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/entityculling')
          ">EntityCulling</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/c2me-fabric')
          ">c2me</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/ebe')
          ">Enchanced Block Enteties</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/bobby')
          ">Bobby</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/nvidium')
          ">Nvidium (нужна видеокарта от Nvidia)</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/dynamic-fps')
          ">Dynamic FPS</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/iris')
          ">Iris</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/vmp-fabric')
          ">Very Many Players</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/yacl')
          ">Yet Another Config Lib</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/badoptimizations')
          ">BadOptimization</button>
    <button class="discord-button" onclick="window.open('https://modrinth.com/mod/threadtweak')
          ">ThreadTweak</button>`
}];
