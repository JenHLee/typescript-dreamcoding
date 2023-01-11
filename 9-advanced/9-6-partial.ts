{
    // Partial : 부분적인 수정에 용이
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate };
    }
    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
    // {
    //     title: 'learn TypeScript',
    //     description: 'study hard',
    //     label: 'study',
    //     priority: 'low'
    //   }
}