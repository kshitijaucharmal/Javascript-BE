function generateMultiplicationTable() {
  // process.argv[2] holds the first argument after 'node <script_name>'
  const cliArgument = process.argv[2];

  if (!cliArgument) {
    console.log("Error: Please provide a number as a command-line argument.");
    console.log("   Usage: node multiplication_table.js <number>");
    return;
  }

  const number = parseInt(cliArgument);

  if (isNaN(number) || number == 0) {
    console.log(`Error: "${cliArgument}" is not a valid number.`);
    return;
  }

  {
    console.log(`\n--- Multiplication Table for ${number} using FOR loop ---`);

    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
    }

    console.log("------------------------------------\n");
  }

  {
    console.log(
      `\n--- Multiplication Table for ${number} using WHILE loop ---`,
    );

    let i = 1;
    while (i <= 10) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
      i++;
    }

    console.log("------------------------------------\n");
  }
  {
    console.log(
      `\n--- Multiplication Table for ${number} using DO WHILE loop ---`,
    );

    let i = 1;
    do {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
      i++;
    } while (i <= 10);

    console.log("------------------------------------\n");
  }
}

// Execute the function
generateMultiplicationTable();
