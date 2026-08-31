const readingTests = [

    {
        id: 1,
        title: "IELTS Reading Practice Test 1",

        passages: [
            {
                title: "Passage 1 — The Benefits of Learning a New Language",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Learning a new language can provide many benefits for
                    young people. It can improve communication skills and
                    allow learners to communicate with people from different
                    countries.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Regular practice is important when learning a language.
                    Students who practise frequently are more likely to
                    remember new words and expressions.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    Another important benefit is a better understanding of
                    other cultures. Language and culture are closely connected.
                    </p>

                    <p><strong>Paragraph D</strong></p>
                    <p>
                    Language skills can also be useful when travelling.
                    A traveller who can communicate in another language may
                    find it easier to ask for directions and communicate with
                    local people.
                    </p>
                `
            },

            {
                title: "Passage 2 — Technology and Teenagers",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Technology is now an important part of everyday life for
                    many teenagers. Students use computers, tablets and
                    smartphones for education, communication and entertainment.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    One advantage of technology is that students can find
                    information quickly. Online libraries and educational
                    websites give learners access to large amounts of
                    information.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    However, technology can sometimes distract students.
                    Social media, games and entertainment websites may take
                    attention away from school work.
                    </p>

                    <p><strong>Paragraph D</strong></p>
                    <p>
                    For these reasons, students should learn to use
                    technology responsibly and balance screen time with
                    other activities.
                    </p>
                `
            },

            {
                title: "Passage 3 — Green Cities of the Future",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Cities around the world are growing rapidly. As populations
                    increase, governments need to consider how cities can
                    remain comfortable, healthy and environmentally friendly.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Public transportation can reduce the number of private
                    cars on roads. Buses, trains and cycling routes can help
                    reduce traffic and pollution.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    Green spaces are also important. Parks and gardens can
                    provide places for exercise and relaxation.
                    </p>

                    <p><strong>Paragraph D</strong></p>
                    <p>
                    Future cities may combine technology, public
                    transportation, green spaces and renewable energy.
                    </p>
                `
            }
        ],

        questions: [
            {
                number: 1,
                type: "mc",
                question: "What is one benefit of learning another language?",
                options: [
                    "Better communication",
                    "Less exercise",
                    "More television",
                    "Fewer opportunities"
                ],
                answer: "Better communication"
            },

            {
                number: 2,
                type: "mc",
                question: "How do language skills usually develop?",
                options: [
                    "Immediately",
                    "Gradually",
                    "Without practice",
                    "Only through travel"
                ],
                answer: "Gradually"
            },

            {
                number: 3,
                type: "tf",
                question: "Language and culture are closely connected.",
                answer: "TRUE"
            },

            {
                number: 4,
                type: "tf",
                question: "Learning another language is always easy.",
                answer: "FALSE"
            },

            {
                number: 5,
                type: "mc",
                question: "What may employers value?",
                options: [
                    "Workers who can communicate internationally",
                    "Workers who never travel",
                    "Workers who avoid colleagues",
                    "Workers who dislike technology"
                ],
                answer: "Workers who can communicate internationally"
            },

            {
                number: 6,
                type: "text",
                question: "Regular practice can help learners remember new ______.",
                answer: "words"
            },

            {
                number: 7,
                type: "mc",
                question: "Which technology is mentioned?",
                options: [
                    "Mobile applications",
                    "Television only",
                    "Radio only",
                    "Printed newspapers"
                ],
                answer: "Mobile applications"
            },

            {
                number: 8,
                type: "tf",
                question: "Making mistakes is a normal part of learning.",
                answer: "TRUE"
            },

            {
                number: 9,
                type: "mc",
                question: "What can language learning help people understand?",
                options: [
                    "Different cultures",
                    "Only mathematics",
                    "Weather forecasts",
                    "Traffic laws"
                ],
                answer: "Different cultures"
            },

            {
                number: 10,
                type: "text",
                question: "Employers may value workers who communicate with international customers and ______.",
                answer: "colleagues"
            }

            // Questions 11–40 will be added to this test.
        ]
    },

    /*
    =====================================================
    TEST 2
    =====================================================
    */

    {
        id: 2,
        title: "IELTS Reading Practice Test 2",

        passages: [
            {
                title: "Passage 1 — Healthy Study Habits",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Effective study requires planning, concentration and
                    regular breaks. Students often learn more successfully
                    when they organise their time.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    A quiet study environment can help learners concentrate
                    and complete their work efficiently.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    Sleep and healthy daily routines can also support
                    learning and concentration.
                    </p>
                `
            },

            {
                title: "Passage 2 — Museums and Young People",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Museums allow visitors to learn about history, science
                    and culture.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Many museums now use interactive displays to make
                    exhibitions more interesting for younger visitors.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    Educational visits can encourage students to explore
                    subjects beyond the classroom.
                    </p>
                `
            },

            {
                title: "Passage 3 — Saving Water",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Fresh water is an important resource for people,
                    agriculture and industry.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Careful management can help communities reduce
                    unnecessary water use.
                    </p>

                    <p><strong>Paragraph C</strong></p>
                    <p>
                    Simple actions such as repairing leaks can save
                    significant amounts of water.
                    </p>
                `
            }
        ],

        questions: [
            // We will add Questions 1–40 here.
        ]
    },

    /*
    =====================================================
    TEST 3
    =====================================================
    */

    {
        id: 3,
        title: "IELTS Reading Practice Test 3",

        passages: [
            {
                title: "Passage 1 — Young Entrepreneurs",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Some teenagers are interested in starting small
                    businesses. Entrepreneurship can help young people
                    develop planning and problem-solving skills.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Young entrepreneurs may sell products online or provide
                    services within their communities.
                    </p>
                `
            },

            {
                title: "Passage 2 — Wildlife Conservation",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Wildlife conservation protects animals and the
                    environments in which they live.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    National parks can provide protected areas for many
                    species.
                    </p>
                `
            },

            {
                title: "Passage 3 — Modern Transport",
                text: `
                    <p><strong>Paragraph A</strong></p>
                    <p>
                    Transport allows people to travel to school, work and
                    other places.
                    </p>

                    <p><strong>Paragraph B</strong></p>
                    <p>
                    Public transportation can carry many people while
                    reducing the number of vehicles on roads.
                    </p>
                `
            }
        ],

        questions: [
            // Questions 1–40 will be added here.
        ]
    },

    /*
    =====================================================
    TESTS 4–25
    =====================================================
    */

    {
        id: 4,
        title: "IELTS Reading Practice Test 4",
        passages: [],
        questions: []
    },

    {
        id: 5,
        title: "IELTS Reading Practice Test 5",
        passages: [],
        questions: []
    },

    {
        id: 6,
        title: "IELTS Reading Practice Test 6",
        passages: [],
        questions: []
    },

    {
        id: 7,
        title: "IELTS Reading Practice Test 7",
        passages: [],
        questions: []
    },

    {
        id: 8,
        title: "IELTS Reading Practice Test 8",
        passages: [],
        questions: []
    },

    {
        id: 9,
        title: "IELTS Reading Practice Test 9",
        passages: [],
        questions: []
    },

    {
        id: 10,
        title: "IELTS Reading Practice Test 10",
        passages: [],
        questions: []
    },

    {
        id: 11,
        title: "IELTS Reading Practice Test 11",
        passages: [],
        questions: []
    },

    {
        id: 12,
        title: "IELTS Reading Practice Test 12",
        passages: [],
        questions: []
    },

    {
        id: 13,
        title: "IELTS Reading Practice Test 13",
        passages: [],
        questions: []
    },

    {
        id: 14,
        title: "IELTS Reading Practice Test 14",
        passages: [],
        questions: []
    },

    {
        id: 15,
        title: "IELTS Reading Practice Test 15",
        passages: [],
        questions: []
    },

    {
        id: 16,
        title: "IELTS Reading Practice Test 16",
        passages: [],
        questions: []
    },

    {
        id: 17,
        title: "IELTS Reading Practice Test 17",
        passages: [],
        questions: []
    },

    {
        id: 18,
        title: "IELTS Reading Practice Test 18",
        passages: [],
        questions: []
    },

    {
        id: 19,
        title: "IELTS Reading Practice Test 19",
        passages: [],
        questions: []
    },

    {
        id: 20,
        title: "IELTS Reading Practice Test 20",
        passages: [],
        questions: []
    },

    {
        id: 21,
        title: "IELTS Reading Practice Test 21",
        passages: [],
        questions: []
    },

    {
        id: 22,
        title: "IELTS Reading Practice Test 22",
        passages: [],
        questions: []
    },

    {
        id: 23,
        title: "IELTS Reading Practice Test 23",
        passages: [],
        questions: []
    },

    {
        id: 24,
        title: "IELTS Reading Practice Test 24",
        passages: [],
        questions: []
    },

    {
        id: 25,
        title: "IELTS Reading Practice Test 25",
        passages: [],
        questions: []
    }

];
