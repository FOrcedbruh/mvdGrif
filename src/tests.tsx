import CategoryItemType from "./types/Test"

const tests: Array<CategoryItemType> = [
    {
        id: 0,
        title: 'Веб-технологии',
        complexity: 'Легкий',
        body: [
            {
                head: "Что такое фишинг?",
                variants: ["Вид морской ловли рыбы", "Метод атаки, при котором злоумышленник притворяется легитимной организацией для обмана пользователей", "Метод шифрования данных", "Технология для ускорения работы интернет-соединения"],
                correct: 1
            },
            {
                head: "Что такое двухфакторная аутентификация (2FA)?",
                variants: ["Метод атаки на сетевую безопасность", "Метод шифрования сообщений", "Метод проверки подлинности пользователя, который использует два разных фактора", "Метод скрытия данных в веб-браузере"],
                correct: 2
            },
            {
                head: " Какой из следующих паролей является наиболее безопасным?",
                variants: ["password123", "qwerty", "Tr0ub4dor&3", "abc123"],
                correct: 2
            },
            {
                head: "Какой из следующих способов обмена информацией по интернету является наиболее безопасным?",
                variants: ["HTTP", "HTTPS", "FTP", "Telnet"],
                correct: 1
            },
            {
                head: "Что такое файрвол (firewall) в компьютерной безопасности?",
                variants: ["Устройство для пожаротушения в офисе", "Программное или аппаратное средство, предназначенное для контроля и фильтрации сетевого трафика", "Имя сети Wi-Fi", "Стратегия защиты от морских пиратов"],
                correct: 1
            }
        ]
    },
    {
        id: 1,
        title: 'Форензика',
        complexity: 'Легкий',
        body: [
            {
                head: 'Что изучает форензика?',
                variants: ["Человеческое поведение", "Причины природных бедствий", "Улики и следы преступлений", " Причины транспортных происшествий"],
                correct: 2
            },
            {
                head: 'Что изучает криминалистика?',
                variants: [" Виды растений", "Улики на месте преступления", "Историю искусства", "Человеческую психологию"],
                correct: 1
            },
            {
                head: 'Что включает в себя баллистика?',
                variants: ["Изучение биологических образцов", " Анализ рукописи", "Изучение огнестрельного оружия и пуль", "Исследование химических реакций"],
                correct: 2
            },
            {
                head: 'Какую информацию предоставляет дактилоскопия?',
                variants: ["Анализ крови", "Информацию о погоде", " Данные о отпечатках пальцев", "Информацию о дорожных знаках"],
                correct: 2
            }, 
            {
                head: 'Какую роль играет ДНК-анализ в форензике?',
                variants: ["Анализ уголовной статистики", "Идентификация личности по генетическим данным", "Изучение маркетинговых тенденций", "Анализ звуковых волн"],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: 'Крипто-технологии',
        complexity: 'Очень сложный',
        body: [
            {
                head: 'Что такое "жесткий/жесткий форк" в контексте криптовалют?',
                variants: ["Алгоритм шифрования блокчейна", "Новая версия программного обеспечения, несовместимая с предыдущей", " Метод добычи новых монет", "Криптовалютная биржа"],
                correct: 1
            },
            {
                head: 'Какие криптовалюты используют алгоритм "Proof of Stake"?',
                variants: ["Bitcoin и Ethereum", "Litecoin и Ripple", "Cardano и Polkadot", "Dogecoin и Monero"],
                correct: 2
            },
            {
                head: 'Что такое "смарт-контракт" в блокчейне?',
                variants: ["Криптовалютный кошелек", "Код, выполняющий условия при определенных событиях", "Биржевой курс криптовалюты", "Секретный ключ шифрования"],
                correct: 1
            },
            {
                head: 'Что представляет собой публичный ключ в криптографии?',
                variants: [" Ключ для расшифровки сообщений", "Ключ для подписи транзакций", "Ключ для анонимного доступа к сети", "Ключ для генерации новых блоков"],
                correct: 1  
            }, 
            {
                head: 'Что такое "холодное хранение" криптовалюты?',
                variants: ["Способ добычи новых монет", " Хранение криптовалюты оффлайн для безопасности", "Технология шифрования блокчейна", "Метод торговли на бирже"],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        title: 'Информационная безопасность',
        complexity: 'Сложный',
        body: [
            {
                head: 'Какая из перечисленных ниже является основной целью социальной инженерии?',
                variants: ['защита данных', 'Взлом системы посредством вредоносного кода', 'Манипулирование людьми для получения конфиденциальной информации', 'Установка антивирусного ПО'],
                correct: 2
            },
            {
                head: 'Что представляет собой атака "фишинг"?',
                variants: ['Внедрение вредоносного программного обеспечения в систему', 'Отправка ложных электронных сообщений с целью обмана пользователей', 'Навязывание поддельных сертификатов для доступа к сети'],
                correct: 1
            },
            {
                head: 'Какая технология помогает защитить данные от несанкционированного доступа, шифруя их в процессе передачи?',
                variants: [' VPN (виртуальная частная сеть)', 'DNS (система доменных имен)', 'HTTP (протокол передачи гипертекста)', 'SSL (уровень защищенных сокетов)'],
                correct: 0
            },
            {
                head: 'Что такое "брутфорс" атака?',
                variants: ['Атака, использующая программы-трояны для взлома системы', 'Попытка перебора паролей методом проб и ошибок', 'Метод внедрения вирусов через электронную почту', 'Атака на защищенные сети через открытые порты'],
                correct: 1
            },
            {
                head: 'Какая из следующих мер защиты является основной в защите от вредоносного ПО?',
                variants: ['Файрвол', 'Антивирусное программное обеспечение', ' Аппаратный ключ', 'Программа зашифрованного хранения данных'],
                correct: 1
            },
            {
                head: 'Что означает "бэкдор" в контексте информационной безопасности?',
                variants: ['Защищенный доступ к сети', 'Задняя дверь для несанкционированного доступа к системе', 'Метод шифрования данных', 'Резервное хранилище данных'],
                correct: 1
            },
            {
                head: 'Какую из перечисленных практик следует использовать для создания безопасного пароля?',
                variants: ['Использование простых последовательностей цифр или букв', 'Использование длинных фраз или предложений', ' Использование одного и того же пароля для всех аккаунтов', ' Использование даты рождения или имен близких'],
                correct: 2
            },
            {
                head: 'Какой вид атаки связан с множественными попытками входа в систему, используя различные комбинации паролей?',
                variants: ['Денайл-оф-сервис (DoS)', 'DDoS (распределенный денайл-оф-сервис)', 'Брутфорс атака', 'Фишинг'],
                correct: 2
            },
            {
                head: 'Что такое "шпионское ПО"?',
                variants: ['Программы, созданные для усиления защиты данных', 'Программы, незаметно собирающие информацию о пользователях', 'Программы, позволяющие шифровать личные файлы', 'Программы, созданные для удаления вирусов'],
                correct: 2
            },
            {
                head: 'Какова основная цель многофакторной аутентификации?',
                variants: ['Упростить процесс входа в систему без необходимости пароля', 'Предоставить только один способ аутентификации', ' Обеспечить дополнительный уровень безопасности, используя несколько форм идентификации', 'Защитить данные от удаленного доступа'],
                correct: 2
            }
        ]
    }
]


export { tests };