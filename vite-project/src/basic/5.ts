// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

// First method
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const isWeekend1 = (day: number): boolean => {
    return day >= 5;
}

isWeekend1(DayOfWeek.Monday);
isWeekend1(DayOfWeek.Thursday);
isWeekend1(DayOfWeek.Saturday);

// Second method

function isWeekend2(day: DayOfWeek): boolean {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

isWeekend2(DayOfWeek.Tuesday);
isWeekend2(DayOfWeek.Thursday);
isWeekend2(DayOfWeek.Sunday);

export {};