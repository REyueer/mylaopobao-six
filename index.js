/**
 * @fileOverview index.js - 主文件，负责初始化应用程序并启动服务
 * @module index
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/**
 * @description 初始化应用程序，设置中间件和路由
 */
function initializeApp() {
    // 设置 JSON 解析中间件
    app.use(express.json());

    // 设置路由
    app.get('/', (req, res) => {
        res.send('Welcome to the task manager application!');
    });

    // 启动服务
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

// 调用初始化函数
initializeApp();
