#!/usr/bin/env node
import askForName from '../src/cli.js';
import evenNum from '../src/evennum.js';
import bgGreeting from '../src/greeting.js';

bgGreeting();

evenNum(askForName());