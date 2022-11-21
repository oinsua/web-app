export interface Tasks {
    id: string;
    name: string;
    status?: "TODO" | "CURSE" | "TEST" | "BLOCKED" | "READY";
    time: number;
}