{
    /**
     * Type Aliases
     */
    type Text = string;
    const firstName: string = 'jennie';
    const lastName: Text = 'Lee';
    const address: Text = 'Canada';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'jennie',
        age: 20,
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let jennieName: Name;
    jennieName = 'name'; // only can be 'name'
    type JSON = 'json';
    const json: JSON = 'json'; // only can be 'json'

    type Boal = true;
    const isCat: Boal = true; // only can be true
}