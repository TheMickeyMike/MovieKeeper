export function ProgressCalculator(startDate, endDate) {
    var start = new Date(startDate);
    var finish = new Date(endDate);
    var elapsed = new Date().getTime() - start;
    return (elapsed / (finish - start)) * 100;
}


function pad(num) {
    return ("0" + num).slice(-2);
}

export function Duration(seconds) {
    var hours = Math.floor(seconds / 60)
    var minutes = Math.floor(seconds % 60)
    return `${pad(hours)}:${pad(minutes)}`;
}