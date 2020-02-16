const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const open = require("open");
const util = require("util");
const axios = require("axios");
// const api = require("./api");
// const genereateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

getQuestions();

async function getQuestions(question) {
    let question = [{
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Profile?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the title of your Repository?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Describe your Repository?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Table of Contents?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'How will your Repository be used?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Describe the license of content?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Would you like to credit contributors?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What are the test procedures?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Questions?'
    },
]


try {
    const {username, title, description, tableOfContents, installation, usage, license, contributing, tests, question}  = await inquirer.prompt(questions);

    let {question} = await axios.get(`https://api.github.com/users/${username}`)

    await writeFileAsync("README.md",  `
    # GitHub Username: ${username}
    # Email: ${data.email}
    # Bio Image: ${data.avatar_url}
    # Repo Title: ${title}
    # Repo Description: ${description}
    # Table of Contents: ${tableOfContents}
    # Installation: ${installation}
    # Usage: ${usage}
    # License: ${license}
    # Contributing: ${contributing}
    # Tests: ${tests}
    # Questions: ${question}
    # Badge: ${data.badge}
    `)

} catch (err) {
    console.log(err);
};



// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(),
//     fileName), data);
// }

// function init() {
//     inquirer.prompt(questions).then(({ github, color }) => {
//         console.log('Searching...');

//         api
//             .getUser(github)
//             .then(response =>
//                 api.getTotalStars(github).then(stars => {
//                     return generateHTML({
//                         stars,
//                         color,
//                         ...response.data
//                     });
//                 }))
//                 .then(html => {
//                     const conversion = convertFactory({
//                         converterPath: convertFactory.converters.PDF
//                     });

//                     conversion({ html }, function (err, result) {
//                         if (err) {
//                         }

//                         result.stream.pipe(
//                             fs.createWriteStream(path.join(__dirname, "resume.pdf"))
//                         );

//                         conversion.kill();
//                     });

//                     open(path.join(process.cwd(), "resume.pdf"));
//                 });
//     });
// }
// init();


