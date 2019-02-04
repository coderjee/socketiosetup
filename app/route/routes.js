const path = require('path');
const express = require('express');

module.exports = [
    {
        method: 'get',
        path: '/',
        handler: (request, response) => {
            response.send('Socket setup API is runing.');
            response.end();
        }
    },
    {
        method: 'get',
        path: '/hello',
        handler: (request, response) => {
            response.send('hello world');
            response.end();
        }
    },
    {
        method: 'use',
        path: '/socket/test',
        handler: express.static(path.resolve('public'))
    }
]