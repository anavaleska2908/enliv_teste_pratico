export interface ITask {
    id: string;
    title: string;
    description: string;
    status: "complete" | "incomplete";
    createdAt: Date;
    updatedAt: Date;
}
