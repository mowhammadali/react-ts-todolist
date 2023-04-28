export const getTime = (): string => {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return ` ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `
}