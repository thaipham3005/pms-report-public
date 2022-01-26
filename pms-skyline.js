export class Skyline {
    constructor(source, options) {
        /**
         * The version of Toastify
         * @type {string}
         * @public
         */
        this.version = "1.0.0";

        /**
         * The configuration object to configure Toastify
         * @type {ConfigurationObject}
         * @public
         */
        this.options = {};

        /**
         * The element that is the Toast
         * @type {Element}
         * @public
         */
        this.skylineElement = null;

        /**
         * The root element that contains all the toasts
         * @type {Element}
         * @private
         */
        this._rootElement = document.getElementsByClassName('skyline')[0];

        /**
         * Source data of chart
         */
        this.source = source;
        /**
         * Initialization
         * @private
         */
        this._init(options);
    }

    /**
     * Get the earliest date of array
     * @private
     */
    _getMinDate() {
        let min = new Date(8640000000000000);
        this.source.forEach(data => {
            if (Date.parse(data[6]) < min && data[6] != null) {
                min = Date.parse(data[6]);
            }
        })
        // console.log(`min: ${new Date(min)}`)
        return min;
    }
    /**
     * Get the latest date of array
     * @private
     */
    _getMaxDate() {
        let max = new Date(-8640000000000000);;
        this.source.forEach(data => {
            // console.log(data[6]);
            if (Date.parse(data[6]) > max && data[6] != null) {
                max = Date.parse(data[6]);
            }
        })
        // console.log(`max: ${new Date(max)}`)
        return max;
    }
    _findMonday(refDate) {
        let weekDay = (new Date(refDate)).getDay();
        if (weekDay == 0) {
            return (refDate - 7)
        } else {
            // console.log(`first Monday: ${new Date(refDate - (weekDay - 1)*(24*3600*1000))}`);
            return (refDate - weekDay + 1)
        }
    }
    /**
     * Get duration of array of data
     * @private
     */
    _getDuration(fromDate, toDate) {
        let duration = (toDate - fromDate) / (24 * 3600 * 1000);
        // console.log(duration)
        return duration;
    }
    /**
     * Get numbers of weeks from start to complete schedule
     * @private
     */
    _getWeeksCount(fromDate, toDate) {
        let duration = (toDate - fromDate) / (24 * 3600 * 1000);
        let weeks = Math.ceil(duration / 7);
        // console.log(weeks);
        return weeks;
    }

    /**
     * Fill data from data source to weeks
     * @param {Array} source 
     * @param {JSON} cellOptions 
     * @returns 
     */
    _arrangeToWeeks(source, cellOptions) {
        let _listCells = [];
        for (let i = 0; i < this.weeksCount; i++) {
            _listCells.push([]);
        }
        for (let i = 0; i < source.length; i++) {
            let data = source[i];
            let cell = new SkylineCell(data, cellOptions);
            let cellDate = (Date.parse(cell.plan_complete));

            let weekNo = Math.floor((cellDate - this.firstMonday) / (7 * 24 * 3600 * 1000));



            if (cellDate) {
                _listCells[weekNo].push(cell);
            }

        }

        return _listCells;
    }

    /**
     * Extract weeks from data source
     */
    _getWeeks() {
        let weeks = [];
        for (let i = 0; i < this.weeksCount; i++) {
            let _thisWeek = this.firstMonday + (7 * 24 * 3600 * 1000) * i
            weeks.push(new Date(_thisWeek));
        }
        // console.log(weeks);
        return weeks;
    }

    _getMostCrowdedWeek() {
        let max = 0;
        for (let i = 0; i < this.weeksCount; i++) {
            if (this.listWeeks[i].length > max) {
                max = this.listWeeks[i].length;
            }
        }
        return max;
    }

    /**
     * Initialize 
     */
    _init(options) {
        this.options = Object.assign({
            fit: true,
            maxWidth: "100%",
            maxHeight: "100%",
            callback: function () { },

            offset: {
                x: 0,
                y: 0
            },
            title: "SKYLINE CHART - PIPING LEAK TEST",
            titlePosition: "top center"
        }, options);

        this.skylineElement = null;
        let from = this._getMinDate();
        let to = this._getMaxDate();
        let duration = this._getDuration(from, to);

        this.firstMonday = this._findMonday(from);
        this.weeksCount = this._getWeeksCount(this.firstMonday, to);

        this.cellOptions = {
            width: "100px",
            height: "50px",
            color: "#fff",
            offset: {
                x: 0,
                y: 0
            }
        }
    }

    /**
     * generate and fill cells into chart container
     * @param {Element} chartContainer 
     */
    _fillCells(chartContainer) {
        for (let i = 0; i < this.listCells.length; i++) {
            let listCellsPerWeek = this.listCells[i];
            let weekDiv = document.createElement("div");
            weekDiv.className = "week week-" + i;

            if (listCellsPerWeek.length > 0) {
                for (let j = 0; j < listCellsPerWeek.length; j++) {
                    weekDiv.insertBefore(listCellsPerWeek[j].draw(), weekDiv.lastChild)
                }
            }
            let weekMonday = document.createElement("div");
            weekMonday.className = "week-day";
            weekMonday.innerText = moment(this.listWeeks[i].toString()).format("DD/MM/YYYY");
            weekDiv.insertBefore(weekMonday, weekDiv.firstChild);

            chartContainer.insertBefore(weekDiv, chartContainer.lastChild);
        }
    }

    /**
     * build required elements
     */
    _buildSkyline() {
        // Validating if the options are defined
        if (!this.options) {
            throw "Skyline is not initialized";
        }
        // Validating if root element is present in DOM
        if (!this._rootElement) {
            throw "Root element is not defined";
        }
        // Creating the DOM object
        let titleElement = document.createElement("div");
        titleElement.className = 'skyline-title';
        titleElement.innerText = this.options.title;
        this._rootElement.insertBefore(titleElement, this._rootElement.firstChild);

        let chartElement = document.createElement("div");
        chartElement.className = 'skyline-chart';
        this.listWeeks = this._getWeeks(this.source);
        this.listCells = this._arrangeToWeeks(this.source, this.cellOptions)
        // console.log(listCells)
        this._fillCells(chartElement);

        this._rootElement.insertBefore(chartElement, this._rootElement.lastChild);

        return this._rootElement;
    }

    _destroySkyline() {
        this._rootElement.innerHTML = "";
    }

    destroy() {
        this.skylineElement = this._destroySkyline();
    }

    show() {
        this.skylineElement = this._buildSkyline();
    }
}

class SkylineCell {
    constructor(cellData, options) {
        /**
         * Version of Skyline
         */
        this.version - "1.0.0";
        /**
         * Json data parse into Skyline Cell
         */
        this.data = cellData;
        /**
         * Configuration for a single cell
         */
        this.options = {};
        /**
         * The element is Skyline itself
         */
        this.cellElement = null;
        /** 
         * Root element that contains the Skyline cells
         */
        this._rootElement = document.getElementsByClassName('skyline-chart');

        this._getCellData();

        this._init(options);
    }
    /**
     * 
     */
    _getCellData() {
        this.test_pack = this.data[1] ? this.data[1] : "";
        this.description = this.data[2] ? this.data[2] : "[No description]";
        this.subsystem = this.data[3] ? this.data[3] : "";
        this.supervisor = this.data[4] ? this.data[4] : "";
        this.qc = this.data[5] ? this.data[5] : "";
        this.plan_complete = this.data[6] ? this.data[6] : "";
        this.actual_complete = this.data[7] ? this.data[7] : "";
        this.status = this.data[22] ? this.data[22] : 0;
        this.remarks = this.data[9] ? this.data[9] : 0;
        this.visual_total = this.data[10] ? this.data[10] : 0;
        this.visual_remain = this.data[11] ? this.data[11] : 0;
        this.visualBW_total = this.data[12] ? this.data[12] : 0;
        this.visualBW_remain = this.data[13] ? this.data[13] : 0;
        this.visualNonBW_total = this.data[14] ? this.data[14] : 0;
        this.visualNonBW_remain = this.data[15] ? this.data[15] : 0;
        this.fitup_total = this.data[16] ? this.data[16] : 0;
        this.fitup_remain = this.data[17] ? this.data[17] : 0;
        this.ndtBW_total = this.data[18] ? this.data[18] : 0;
        this.ndtBW_remain = this.data[19] ? this.data[19] : 0;
        this.ndtBWRequest_total = this.data[20] ? this.data[20] : 0;
        this.ndtBWRequest_remain = this.data[21] ? this.data[21] : 0;
        this.id = this.data[22];


    }
    /**
     * Build the Skyline element
     * @return {Element}
     * @private
     */
    _buildCell() {
        // Validating if the options are defined
        if (!this.options) {
            throw "Skyline cell is not initialized";
        }
        if (!this.data) {
            throw "Source data is not available"
        }
        let skylineElement = document.createElement("div");
        skylineElement.className = 'cell';

        let title = document.createElement("div");
        title.className = "title";
        title.innerText = this.test_pack;
        skylineElement.insertBefore(title, skylineElement.lastChild);


        let status = document.createElement("div");
        status.className = "status";
        skylineElement.insertBefore(status, skylineElement.lastChild);
        let completed = document.createElement("div");
        completed.className = "completed";
        skylineElement.insertBefore(completed, skylineElement.lastChild);

        let tooltip = document.createElement("div");
        tooltip.innerHTML = `<span>Visual: ${this.visual_remain} (${this.visual_total})</span><br>`;
        tooltip.innerHTML += `<span>NDT BW: ${this.ndtBW_remain} (${this.ndtBW_total})</span>`;
        tooltip.className = "tooltip";
        skylineElement.insertBefore(tooltip, skylineElement.lastChild);

        // Triggering the click event of cell 
        skylineElement.addEventListener(
            "click",
            (event) => {
                var cellInfo = document.getElementsByClassName("cell-info")[0];
                cellInfo.style.display = "block";
                console.log(cellInfo.getElementsByClassName("test-pack")[0], this.test_pack);
                cellInfo.getElementsByClassName("test-pack")[0].innerText = this.test_pack;
                cellInfo.getElementsByClassName("plan-date")[0].innerText = convertDateFormat(this.plan_complete, "yyyy-mm-dd", "dd/mm/yyyy");
            }
        );

        // console.log(skylineElement)
        return skylineElement;
    }

    _init(options) {
        this.options = Object.assign({
            width: "100px",
            height: "50px",
            callback: function () { },
            color: "#fff",
            offset: {
                x: 0,
                y: 0
            }
        }, options);

    }

    draw() {
        //Creating DOM object
        return this._buildCell();

    }

}