export function GetTimeAPI() {
    return ["time", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM", "11:00 PM"]
}
export function GetDatesAPI() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let today = new Date();
    const availableDates = Array.from({ length: 5 }, () => {
        let date = new Date();
        return date.setDate(today.getDate() + Math.ceil(Math.random() * 7));
    });
    let arr = availableDates.sort().map(d => {
        let date = new Date(d);
        const month = date.getMonth();
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const monthName = months[month];
        const dayOfWeekName = daysOfWeek[dayOfWeek];
        return `${dayOfWeekName} - ${dayOfMonth} ${monthName}`
    })
    arr.unshift("date")
    return [...new Set(arr)];

}