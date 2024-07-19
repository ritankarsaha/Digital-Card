'use strict';

import { writeFileSync } from 'fs';
import { join } from 'path';
import { white, gray, cyan, green, blue, red } from 'chalk';
import boxen from 'boxen';

const data = {
  name: white('           Ritankar Saha'),
  work: white('Back-End & Web3 Developer, Cloud Architect'),
  twitter: `${gray('https://twitter.com/')}${cyan('ritankarxx')}`,
  github: `${gray('https://github.com/')}${green('ritankarsaha')}`,
  linkedin: `${gray('https://linkedin.com/in/')}${blue('ritankar-saha-8041b9289')}`,
  web: cyan('https://ritankarsaha-portfolio.netlify.app/'),
  blog: cyan(''),
  npx: `${red('npx')} ${white('ritankarsaha')}`,
  labelWork: white.bold('    Work:'),
  labelTwitter: white.bold(' Twitter:'),
  labelGitHub: white.bold('  GitHub:'),
  labelLinkedIn: white.bold('LinkedIn:'),
  labelWeb: white.bold('     Web:'),
  labelBlog: white.bold('     Blog:'),
  labelCard: white.bold('    Card:'),
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

writeFileSync(
  join(__dirname, 'bin/output'),
  green(boxen(output, options))
);
