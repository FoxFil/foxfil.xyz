document.addEventListener("DOMContentLoaded", function() {
    const timelineRange = document.getElementById("timelineRange");
    const yearLabel = document.getElementById("yearLabel");
    const decadeInfo = document.getElementById("decadeInfo");

    const literatureData = {
        1800: {
            title: "1800-1810 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Иван Дмитриев — «Илья Муромец»", 
                        "Василий Жуковский — баллада «Людмила»",
                    ]
                },
                dates: [
                    "<b>Французская революция (1789-1799)</b> — Идеи свободы, равенства и братства, которые распространились по всей Европе, оказывая влияние на романтизм в литературе.",
                    "<b>Наполеоновские войны (1803–1815)</b> — формирование патриотических настроений в Европе и России, интерес к темам героизма, борьбы за независимость и внутренним изменениям человека.", 
                ],
                movements: ["В Европе расцветает <b>романтизм</b>, отражая стремление сосредоточиться на эмоциях и личной свободе.", "В России доминирует <b>классицизм</b>, однако <b>романтизм</b> начинает занимать значительное место в творчестве поэтов (например Жуковский).",],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Фридрих Шиллер — «Мария Стюарт»", 
                        "Уильям Вордсворт — «Прелюдия»",
                        "Гёте — «Фауст» (первая часть)"
                    ]
                },
            }
        },
        1810: {
            title: "1810-1820 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Василий Жуковский — баллада «Светлана»", 
                        "Александр Грибоедов — ранние сатирические пьесы и стихотворения (предвещают «Горе от Ума»)",
                        "Константин Батюшков — «Мои Пенаты»"
                    ]
                },
                dates: [
                    "<b>Отечественная война 1812 года</b> — сильнейшее влияние на русское общество и литературу. Тема национального самосознания и героизма после победы над Наполеоном становится центральной в творчестве многих писателей.", 
                    "<b>Конгресс в Вене (1815)</b> — перекройка границ Европы и попытка восстановления старого порядка после Наполеона вызвали политическое напряжение и новое осмысление свободы, власти и морали"
                ],
                movements: ["В России <b>романтизм</b> набирает обороты, его основными представителями становятся Жуковский и Батюшков.", "В Европе продолжается расцвет <b>романтизма</b>."],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Джордж Байрон — «Паломничество Чайльд-Гарольда»", 
                        "Фридрих Шлегель — «Об истории древней и новой литературы»",
                        "Перси Биши Шелли — «Королева Маб»"
                    ]
                },
            }
        },
        1820: {
            title: "1820-1830 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Александр Грибоедов — «Горе от ума»", 
                        "Александр Пушкин — «Евгений Онегин»",
                        "Николай Гоголь — «Вечера на хуторе близ Диканьки»",
                    ]
                },
                dates: [
                    "<b>Восстание декабристов (1825)</b> -  неудачная попытка реформирования России", 
                    "<b>Французская революция 1830 года</b> — восстание за свободу и права граждан в Европе, которое повлияло на европейских романтиков (например Гюго)"
                ],
                movements: ["В России продолжается расцвет <b>романтизма</b>, но также начинает появляться <b>реализм</b>.", "В Европе — расцвет <b>романтизма</b> с усилением социально-политической критики.",],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Генрих Гейне — «Книга песен»", 
                        "Виктор Гюго — «Ган Исландец»",
                    ]
                },
            }
        },
        1830: {
            title: "1830-1840 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Николай Гоголь — «Вечера на хуторе близ Диканьки», «Мёртвые души»",
                        "Александр Пушкин — завершение «Евгения Онегина», «Пиковая дама»",
                        "Михаил Лермонтов — «Герой нашего времени»"
                    ]
                },
                dates: [ 
                    "<b>Социальные и политические беспорядки в Европе</b> — подготовка к революции 1848 года, что привело к обострению социальной темы в литературе (Бальзак, Диккенс)."
                ],
                movements: ["В России — начинается переход от <b>романтизма</b> к <b>реализму</b>, который начал активно развиваться с произведений Гоголя.", "В Европе усиливаются социально-критические направления, которые приводят к появлению и активному развитию <b>реализма</b>."],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Стендаль — «Красное и чёрное»",
                        "Чарльз Диккенс — «Записки Пиквикского клуба»", 
                        "Виктор Гюго — «Собор Парижской Богоматери»",
                        "Оноре де Бальзак — «Человеческая комедия», «Отец Горио»",
                    ]
                },
            }
        },
        1840: {
            title: "1840-1850 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Николай Гоголь — «Мёртвые души», «Шинель»", 
                        "Михаил Лермонтов — «Герой нашего времени»",
                    ]
                },
                dates: [
                    "<b>Французская революция 1848 года</b> — сильное влияние на литературу в Европе, зарождение социального реализма и литературы протеста.", 
                ],
                movements: ["В России и в Европе — <b>реалистическое</b> время, произведения направленны на изображение социальной действительности, усиливаются сатирические и критические элементы в произведениях.",],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Генрих Гейне — политические стихи",
                        "Александра Дюма — «Граф Монте-Кристо», «Три мушкетёра»"
                    ]
                },
            }
        },
        1850: {
            title: "1850-1860 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Иван Тургенев — «Записки охотника»", 
                        "Александр Островский — «Гроза»"
                    ]
                },
                dates: [
                    "Открытие <b>железной дороги Москва — Санкт-Петербург</b> в 1851 году.",
                    "<b>Крымская война (1853–1856)</b> — поражение России подорвало имперский престиж и усилило настроение реформ, что нашло отражение в социальной критике в литературе, особенно у Тургенева и Островского.", 
                ],
                movements: ["В России еще больше развивается <b>реализм</b> - изображение социальных проблем и несправедливости (Тургенев, Островский)", "В Европе начинает развиваться <b>натурализм</b>. Появляется <b>символизм</b> (Бодлер).",],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Гюстав Флобер — «Мадам Бовари»", 
                        "Герман Мелвилл — «Моби Дик»",
                        "Шарль Бодлер — «Цветы зла»"
                    ]
                },
            }
        },
        1860: {
            title: "1860-1870 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Федор Достоевский — «Преступление и наказание», «Идиот»", 
                        "Лев Толстой — «Война и мир»",
                        "Иван Тургенев — «Отцы и дети»"
                    ]
                },
                dates: [
                    "<b>Отмена крепостного права в России (1861)</b> — это радикальное изменение в обществе, оно дало толчок к появлению произведений, посвященных социальной и личной свободе, правам человека и необходимости реформ (Достоевский, Толстой).", 
                    "<b>Объединение Италии (1861)</b> и <b>гражданская война в США (1861–1865)</b> — на Западе темы национальной идентичности и свободы стали ключевыми.",
                    "Открыта <b>первая линия Лондонского метрополитена</b> в 1863 г. (и первая в мире)"
                ],
                movements: ["В России продолжается расцвет <b>реализма</b>, темы поиска смысла жизни, борьбы добра и зла (Достоевский, Толстой)", "В Европе развивается <b>реализм</b> и <b>натурализм</b>, где важна социальная критика и детальное изображение среды и характера героев. Также появляется первый <b>абсурд</b> («Алиса в стране чудес»)"],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Льюис Кэрролл — «Алиса в стране чудес»", 
                        "Жюль Верн — «20 000 лье под водой»",
                        "Чарльз Диккенс — «Большие надежды»",
                        "Гюстав Флобер — «Саламбо»"
                    ]
                },
            }
        },
        1870: {
            title: "1870-1880 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Федор Достоевский — «Бесы», «Братья Карамазовы»", 
                        "Лев Толстой — «Анна Каренина»",
                    ]
                },
                dates: [
                    "<b>Коммуна Парижа (1871)</b> — темы социальной справедливости.",
                    "<b>Русско-турецкая война (1877–1878)</b> — подъем патриотизма в России.", 
                ],
                movements: ["В России <b>реализм</b> углубляется, развиваются философские размышления.", "В Европе процветает <b>натурализм</b> (Золя)"],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Марк Твен — «Приключения Тома Сойера»",
                        "Генрик Ибсен — «Кукольный дом»",
                        "Артюр Рембо — «Пьяный корабль», «Одно лето в аду»"
                    ]
                },
            }
        },
        1880: {
            title: "1880-1890 гг.",
            russian: {
                literature: {
                    namesWorks: [ 
                        "Антон Чехов — рассказы (1880-е)",
                        "Лев Толстой — «Воскресение»",

                    ]
                },
                dates: [
                    "<b>Индустриализация в России и Европе</b> — рост социального неравенства и влияние технологий на человека", 
                    "<b>Политическая реакция</b> в России после <b>убийства Александра II</b> и усилия по стабилизации государства",
                    "Постройка <b>Эйфелевой Башни</b> в 1887 г."
                ],
                movements: ["<b>Реализм</b> развивается дальше, но начинает зарождаться <b>модернизм</b> (Чехов)", "В Европе усиливается <b>символизм</b>, отходящий от <b>натурализма</b> и <b>реализма</b> к субъективным переживаниям."],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Генрик Ибсен — «Привидения»", 
                        "Фридрих Ницше — «Так говорил Заратустра»",
                        "Марк Твен — «Приключения Гекльберри Финна»"
                    ]
                },
            }
        },
        1890: {
            title: "1890-1900 гг.",
            russian: {
                literature: {
                    namesWorks: [
                        "Антон Чехов — «Чайка», «Дядя Ваня»", 
                        "Максим Горький — рассказы и повести, «Старуха Изергиль»",
                    ]
                },
                dates: [
                    "<b>Появление МХТ</b> (Московский Художественный Театр) имени Чехова в России.",
                    "<b>Колониальные войны</b> и борьба за влияние в мире — зарубежная литература все чаще отражает тему морального кризиса и борьбы за свободу личности."
                ],
                movements: ["Начало перехода к <b>модернизму</b>. Литература обращается к новым темам: кризису личности, бессмысленности существования (Чехов, Гамсун, Стриндберг)", "В Европе развивается <b>декаданс</b>."],
                parallel: [
                ]
            },
            foreign: {
                literature: {
                    namesWorks: [
                        "Оскар Уайльд — «Портрет Дориана Грея», «Саломея»", 
                        "Генрик Ибсен — «Строитель Сольнес»"
                    ]
                },
            }
        }
    };

    function updateDecadeInfo(year) {
        const decade = literatureData[year];
        yearLabel.textContent = year;
        
        if (decade) {
            let content = `<div class="subblock literature">
                                <h3>Литература:</h3>
                                <div class="section-title">Российская литература:</div>
                                <p>${decade.russian.literature.namesWorks.join('<br>')}</p>
                                <div class="section-title">Зарубежная литература:</div>
                                <p>${decade.foreign.literature.namesWorks.join('<br>')}</p>
                           </div>
                           <div class="subblock dates">
                                <h3>События:</h3>
                                <p>${decade.russian.dates.join('<br>')}</p>
                           </div>
                           <div class="subblock movements">
                                <h3>Литературные направления:</h3>
                                <p>${decade.russian.movements.join('<br>')}</p>
                           </div>`;
            decadeInfo.innerHTML = content;
        } else {
            decadeInfo.innerHTML = "<p>ёшкин крот что то пошло не так</p>";
        }
    }

    timelineRange.addEventListener("input", function() {
        const selectedYear = timelineRange.value;
        updateDecadeInfo(selectedYear);
    });

    updateDecadeInfo(1800);
});
