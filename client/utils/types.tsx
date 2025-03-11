interface Task{
    _id: string;
    title: string;
    description: string;
    status: string;
    // dueDate: string;
    completed: boolean;
    priority: string;
    createdAt: string;
    updatedAt: string;

}

export type {Task};