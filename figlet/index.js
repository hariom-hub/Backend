const figlet = require("figlet");

console.log(
    figlet.textSync("Hii Hariom", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);