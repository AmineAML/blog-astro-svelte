const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export function formatDate(date) {
    var d = new Date(date);

    const month = months[d.getMonth()];

    const day = d.getDate();

    const year = d.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const ree = 'ree';