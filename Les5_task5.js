let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        let board = this.generateBoard();
        //добавляем доску в body
        document.body.innerHTML = board;

        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();
    },

    /**
     * Метод генерирует игровое поле 8 на 8.
     * @returns {string} html-разметка в виде строки.
     */
    generateBoard() {
        let board = "";
        let rowStartColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = "";
            if (rowStartColor == 'white') {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'black';
            } else {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'white';
            }
            board += row;
        }
        return `<table>${board}</table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} startWithColor с какого цвета строка начинается от левого края("white", "black")
     * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 8.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */
    generateRow(startWithColor, rowNum) {
        let currentColor = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColor === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColor = 'black';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColor = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) с нужным классом цвета и координатами на поле.
     * @param {string} color класс цвета ячейки, м.б. "white", "black".
     * @param {number} rowNum номер строки игровой доски.
     * @param {string} colChar буква колонки игровой доски.
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * Метод вставляет на существующую доску колонки 
     * слева и справа, с указанием номера строки.
     */
    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let typeIns = "afterbegin";
            let td = []
            for (let j = 0; j < 2; j++) {
                td[j] = document.createElement('td');
                td[j].innerText = this.config.rows[i];
                trs[i].insertAdjacentElement(typeIns, td[j]);
                typeIns = "beforeend";
            }
        }
    },

    /**
     * Метод создает строки (tr1, tr2) с названиями колонок в виде букв,
     * а также в начале вставляет пустые ячейки, которые идут над/под цифрами.
     */
    insertColsChars() {
        let tr1 = document.createElement('tr');
        tr1.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr1.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        let tr2 = document.createElement('tr');
        tr2.innerHTML = tr1.innerHTML;
        tbody.insertAdjacentElement("afterbegin", tr1);
        tbody.insertAdjacentElement("beforeend", tr2);

    },
}

app.run();
