export interface User {
    name: string;
    age: number | null;
    date: {
        day: number;
        month: number;
        year: number;
    } | null
}
