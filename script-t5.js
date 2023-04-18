// получаем кнопку и блок tasks-body
const createTableBtn = document.getElementById('createTableBtn');
const tasksBody = document.querySelector('.tasks-body');
const t5Table = document.querySelector('.t5-table');

// добавляем обработчик клика на кнопку
createTableBtn.addEventListener('click', function() {
//     // создаем таблицу
//     const table = document.createElement('table');
//
// // запрашиваем количество строк и столбцов
//     const rowsCount = parseInt(prompt('Введите количество строк:', '2'));
//     const colsCount = parseInt(prompt('Введите количество столбцов:', '2'));
//
// // добавляем строки и столбцы, включая номера строк и столбцов
//     for (let i = 0; i <= rowsCount; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j <= colsCount; j++) {
//             const td = document.createElement('td');
//             if (i === 0 && j === 0){
//                 // добавляем обозначения
//                 td.textContent = "строка\\столбец"
//             }
//             if (i === 0 && j > 0) {
//                 // добавляем номера столбцов в первую строку таблицы
//                 td.textContent = j;
//             } else if (j === 0 && i > 0) {
//                 // добавляем номера строк в первый столбец таблицы
//                 td.textContent = i;
//             } else if (i > 0 && j > 0) {
//                 // добавляем обычные ячейки таблицы
//                 const content = prompt(`Введите содержимое для ячейки (${i},${j}):`);
//                 if (content !== null) {
//                     td.textContent = content;
//                 }
//             }
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }

    // создаем таблицу
    const table = document.createElement('table');

    // запрашиваем количество строк и столбцов
    const rowsCount = parseInt(prompt('Введите количество строк:', '2'));
    const colsCount = parseInt(prompt('Введите количество столбцов:', '2'));

    // добавляем строки и столбцы
    for (let i = 0; i < rowsCount; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < colsCount; j++) {
            const td = document.createElement('td');
            const content = prompt(`Введите содержимое для ячейки (${i + 1},${j + 1}):`);
            if (content !== null) {
                td.textContent = content;
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }


    // добавляем таблицу в блок t5-table
    t5Table.appendChild(table);

    // добавляем стили для таблицы
    table.classList.add('table');
    table.classList.add('table-bordered');
    table.classList.add('table-striped');

    // добавляем обработчик клика на таблицу
    table.addEventListener('click', function(event) {
        const target = event.target;
        // проверяем, что кликнули на ячейку
        if (target.tagName === 'TD') {
            const content = target.textContent;
            if (confirm(`Вы действительно хотите удалить ячейку с содержимым "${content}"?`)) {
                target.parentNode.removeChild(target);
                alert(`Ячейка с содержимым "${content}" удалена.`);
            }
        }
    });
});
