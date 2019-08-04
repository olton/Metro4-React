String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.contains = function() {
    return !!~String.prototype.indexOf.apply(this, arguments);
};

String.prototype.toDate = function(format, locale, months) {
    let result;
    let normalized, normalizedFormat, formatItems, dateItems, checkValue;
    let monthIndex, dayIndex, yearIndex, hourIndex, minutesIndex, secondsIndex;
    let year, month, day, hour, minute, second;
    let parsedMonth;

    locale = locale || "en-US";

    const defaultMonths = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthNameToNumber = function(month, months){
        let d, index, i;

        if (typeof month !== 'string') {
            return -1;
        }

        month = month.substr(0, 3);

        if (
            locale !== undefined
            && locale !== "en-US"
            && months !== undefined
        ) {
            for(i = 12; i < months.length; i++) {
                if (months[i].toLowerCase() === month.toLowerCase()) {
                    index = i - 12;
                    break;
                }
            }
            month = defaultMonths[index];
        }

        d = Date.parse(month + " 1, 1972");
        if(!isNaN(d)){
            return new Date(d).getMonth() + 1;
        }
        return -1;
    };

    if (format === undefined || format === null || format === "") {
        return new Date(this);
    }

    normalized      = this.replace(/[\/,.:\s]/g, '-');
    normalizedFormat= format.toLowerCase().replace(/[^a-zA-Z0-9%]/g, '-');
    formatItems     = normalizedFormat.split('-');
    dateItems       = normalized.split('-');
    checkValue      = normalized.replace(/-/g,"");

    if (checkValue.trim() === "") {
        return "Invalid Date";
    }

    monthIndex  = formatItems.indexOf("mm") > -1 ? formatItems.indexOf("mm") : formatItems.indexOf("%m");
    dayIndex    = formatItems.indexOf("dd") > -1 ? formatItems.indexOf("dd") : formatItems.indexOf("%d");
    yearIndex   = formatItems.indexOf("yyyy") > -1 ? formatItems.indexOf("yyyy") : formatItems.indexOf("yy") > -1 ? formatItems.indexOf("yy") : formatItems.indexOf("%y");
    hourIndex     = formatItems.indexOf("hh") > -1 ? formatItems.indexOf("hh") : formatItems.indexOf("%h");
    minutesIndex  = formatItems.indexOf("ii") > -1 ? formatItems.indexOf("ii") : formatItems.indexOf("mi") > -1 ? formatItems.indexOf("mi") : formatItems.indexOf("%i");
    secondsIndex  = formatItems.indexOf("ss") > -1 ? formatItems.indexOf("ss") : formatItems.indexOf("%s");

    if (monthIndex > -1 && dateItems[monthIndex] !== "") {
        if (isNaN(parseInt(dateItems[monthIndex]))) {
            dateItems[monthIndex] = monthNameToNumber(dateItems[monthIndex], months);
            if (dateItems[monthIndex] === -1) {
                return "Invalid Date";
            }
        } else {
            parsedMonth = parseInt(dateItems[monthIndex]);
            if (parsedMonth < 1 || parsedMonth > 12) {
                return "Invalid Date";
            }
        }
    } else {
        return "Invalid Date";
    }

    year  = yearIndex >-1 && dateItems[yearIndex] !== "" ? dateItems[yearIndex] : null;
    month = monthIndex >-1 && dateItems[monthIndex] !== "" ? dateItems[monthIndex] : null;
    day   = dayIndex >-1 && dateItems[dayIndex] !== "" ? dateItems[dayIndex] : null;

    hour    = hourIndex >-1 && dateItems[hourIndex] !== "" ? dateItems[hourIndex] : null;
    minute  = minutesIndex>-1 && dateItems[minutesIndex] !== "" ? dateItems[minutesIndex] : null;
    second  = secondsIndex>-1 && dateItems[secondsIndex] !== "" ? dateItems[secondsIndex] : null;

    result = new Date(year,month-1,day,hour,minute,second);

    return result;
};

String.prototype.toArray = function(delimiter, type, format){
    let a;

    type = type || "string";
    delimiter = delimiter || ",";
    format = format === undefined || format === null ? false : format;

    a = (this).split(delimiter);

    return a.map(function(s){
        let result;

        switch (type) {
            case "int":
            case "integer": result = parseInt(s); break;
            case "number":
            case "float": result = parseFloat(s); break;
            case "date": result = !format ? new Date(s) : s.toDate(format); break;
            default: result = s.trim();
        }

        return result;
    });
};

String.prototype.camelCase = function(){
    return this.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
};

String.prototype.dashedName = function(){
    return this.replace(/([A-Z])/g, function(u) { return "-" + u.toLowerCase(); });
};

String.prototype.isDate = function(format){
    let result = "";

    if (typeof format === 'string') {
        result = this.toDate(format);
    } else {
        result = String(new Date(this));
    }

    return result !== "Invalid Date";
};