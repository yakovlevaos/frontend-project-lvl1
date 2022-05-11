#!/usr/bin/env node
import userName from '../src/cli.js';

const brainGame = () => {
    console.log('Welcome to the Brain Games!');
    userName();
};

export default brainGame;