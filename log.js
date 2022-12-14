const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#FF0000").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FFFF00").bold('[ Roshi ] »» ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FFFF00").bold('[ Roshi ] »» ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FFFF00").bold(`[ Roshi ] »» `) + data);
			break;
	}
	}