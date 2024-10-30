<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/taskstyle.css">
    <title>Список задач</title>
</head>

<body>
    <h1>Список задач</h1>
    <input type="text" id="TaskInput" placeholder="В планах...">
    <input type="date" id ="TaskDate">
    <input type="time" id ="TaskTime">
    <select id ="TaskPriority">
        <option value="низкий">Низкий</option>
        <option value="средний">Средний</option>
        <option value="высокий">Высокий</option>
    </select>
    <button id="TaskInptBTN">Добавить</button>
    <ul id="TaskList"></ul>

    <script src="/js/taskscript.js"></script>
</body>
</html>