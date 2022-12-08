{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 })
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfType = 'Monday' | 'Tuesday' | 'Wednesday'; // Union is better to use than enum in typescript ✨
    enum Days { //💩
        Monday, // 0
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4
        Saturday, // 5
        Sunday, // 6
    }

    // if set the number, then automatically increased by order
    enum SetDays {
        Monday = 1,
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4
        Saturday, // 5
        Sunday, // 6
    }

    // if set the string, then should be set all manullay
    enum SetLetterDays {
        Monday = 'mon',
        Tuesday = 'tue',
        Wednesday = 'wed',
        Thursday = 'thu',
        Friday = 'fri',
        Saturday = 'sat',
        Sunday = 'sun'
    }
    console.log(Days.Monday);
    console.log(Days.Tuesday);
    console.log("--------------")
    console.log(SetDays.Monday);
    console.log(SetDays.Tuesday);
    console.log("--------------")
    console.log(SetLetterDays.Monday);
    console.log(SetLetterDays.Tuesday);
    console.log("--------------")
    let day = Days.Saturday; // let day:Days = Days.Saturday;
    day = Days.Tuesday;
    day = 8; // can assign other values rather than enum that we already assigned.
    console.log(day);

    let daysOfType : DaysOfType = 'Monday'; // only assign union value that we already assigned.
    
}