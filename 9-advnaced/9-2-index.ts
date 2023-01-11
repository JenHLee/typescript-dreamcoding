{
    const obj = {
        name: 'jennie',
    }
    obj.name; // jennie
    obj['name'] // jennie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female',
    };

    type Name = Animal['name'] // string
    const text: Name = 'hello'
    
    type Gender = Animal['gender'] //'male' | 'female'
    
    type Key = keyof Animal; // Aniaml에 있는 모든 key // 'name' | 'age' | 'gender'
    const key: Key = 'age'; // or 'name' or 'gender'

    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'jennie',
        gender: 'female'
    }

    


}