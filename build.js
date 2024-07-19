'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

const data = {
  name: chalk.white('           Ritankar Saha'),
  work: chalk.white('Back-End & Web3 Developer, Cloud Architect'),
  twitter: `${chalk.gray('https://twitter.com/')}${chalk.cyan('ritankarxx')}`,
  github: `${chalk.gray('https://github.com/')}${chalk.green('ritankarsaha')}`,
  linkedin: `${chalk.gray('https://linkedin.com/in/')}${chalk.blue('ritankar-saha-8041b9289')}`,
  web: chalk.cyan('https://ritankarsaha-portfolio.netlify.app/'),
  blog: chalk.cyan(''),
  npx: `${chalk.red('npx')} ${chalk.white('ritankarsaha')}`,
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelBlog: chalk.white.bold('     Blog:'),
  labelCard: chalk.white.bold('    Card:'),
};

const newline = '\n';
const heading = `${data.name}`;
const work = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const blog = `${data.labelBlog} ${data.blog}`;
const card = `${data.labelCard}  ${data.npx}`;

const output = `${heading}\n\n${work}\n${web}\n${blog}\n${github}\n${twitter}\n${linkedin}\n\n${card}`

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
