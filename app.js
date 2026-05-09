// ==========================================
// 🌡️ Professional Temperature Converter
// ==========================================

const readline = require("readline");

// ==========================
// Readline Setup
// ==========================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ==========================
// Welcome Screen
// ==========================
function showHeader() {

    console.log("\n======================================");
    console.log("🌡️  TEMPERATURE CONVERTER APPLICATION");
    console.log("======================================");

    console.log("\nChoose Conversion Type:");
    console.log("1. Celsius → Fahrenheit");
    console.log("2. Fahrenheit → Celsius");
    console.log("3. Exit");
}

// ==========================
// Celsius to Fahrenheit
// ==========================
function celsiusToFahrenheit(temp) {

    return (temp * 9 / 5) + 32;
}

// ==========================
// Fahrenheit to Celsius
// ==========================
function fahrenheitToCelsius(temp) {

    return (temp - 32) * 5 / 9;
}

// ==========================
// Main Menu
// ==========================
function mainMenu() {

    showHeader();

    rl.question("\nEnter your choice: ", (choice) => {

        switch (choice) {

            // Celsius → Fahrenheit
            case "1":

                rl.question(
                    "\nEnter Temperature in Celsius: ",
                    (input) => {

                        const celsius = parseFloat(input);

                        if (isNaN(celsius)) {

                            console.log("❌ Invalid Input!");

                            return mainMenu();
                        }

                        const result =
                            celsiusToFahrenheit(celsius);

                        console.log("\n==============================");
                        console.log("✅ Conversion Successful");
                        console.log("==============================");

                        console.log(
                            `🌡️ Celsius: ${celsius}°C`
                        );

                        console.log(
                            `🔥 Fahrenheit: ${result.toFixed(2)}°F`
                        );

                        restartProgram();
                    }
                );

                break;

            // Fahrenheit → Celsius
            case "2":

                rl.question(
                    "\nEnter Temperature in Fahrenheit: ",
                    (input) => {

                        const fahrenheit = parseFloat(input);

                        if (isNaN(fahrenheit)) {

                            console.log("❌ Invalid Input!");

                            return mainMenu();
                        }

                        const result =
                            fahrenheitToCelsius(fahrenheit);

                        console.log("\n==============================");
                        console.log("✅ Conversion Successful");
                        console.log("==============================");

                        console.log(
                            `🔥 Fahrenheit: ${fahrenheit}°F`
                        );

                        console.log(
                            `🌡️ Celsius: ${result.toFixed(2)}°C`
                        );

                        restartProgram();
                    }
                );

                break;

            // Exit
            case "3":

                console.log("\n👋 Exiting Application...");
                rl.close();
                break;

            default:

                console.log("❌ Invalid Choice!");

                mainMenu();
        }
    });
}

// ==========================
// Restart Program
// ==========================
function restartProgram() {

    rl.question(
        "\n🔄 Do you want to convert again? (yes/no): ",
        (answer) => {

            if (answer.toLowerCase() === "yes") {

                mainMenu();

            } else {

                console.log("\n👋 Thank You for Using!");

                rl.close();
            }
        }
    );
}

// ==========================
// Start Application
// ==========================
mainMenu();