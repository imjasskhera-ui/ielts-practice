const readingTests = [

    {
        id: 1,
        title: "Reading Practice Test 1",

        passages: [
            {
                title: "Passage 1 — The Benefits of Exercise",
                text: `
                    Regular exercise is important for young people.
                    It can improve physical fitness and help people feel
                    more energetic. Activities such as walking, swimming
                    and cycling are simple ways to stay active.
                `
            },

            {
                title: "Passage 2 — Learning Technology",
                text: `
                    Technology has changed the way students learn.
                    Computers, tablets and educational websites can give
                    students access to information and learning resources.
                `
            },

            {
                title: "Passage 3 — Green Cities",
                text: `
                    Modern cities are looking for ways to become greener.
                    Public transport, parks, cycling routes and renewable
                    energy can help reduce pollution and improve city life.
                `
            }
        ],

        questions: [
            {
                number: 1,
                type: "mc",
                question: "What can regular exercise improve?",
                options: [
                    "Physical fitness",
                    "Traffic",
                    "Buildings",
                    "Computers"
                ],
                answer: "Physical fitness"
            },

            {
                number: 2,
                type: "mc",
                question: "Which activity is mentioned?",
                options: [
                    "Swimming",
                    "Driving",
                    "Flying",
                    "Shopping"
                ],
                answer: "Swimming"
            },

            {
                number: 3,
                type: "tf",
                question: "Technology has changed the way students learn.",
                answer: "TRUE"
            },

            {
                number: 4,
                type: "mc",
                question: "What can educational websites provide?",
                options: [
                    "Learning resources",
                    "Cars",
                    "Food",
                    "Clothing"
                ],
                answer: "Learning resources"
            },

            {
                number: 5,
                type: "tf",
                question: "Public transport can help reduce pollution.",
                answer: "TRUE"
            }
        ]
    }

];
