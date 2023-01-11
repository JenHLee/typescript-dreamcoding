{
    type Video = {
        title: string;
        author: string;
    };

    // [1,2,3].map(item => item * item); // 1, 4, 9
    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in 오브젝트에 있는 모든 key들을 하나하나씩 도는 것
        // key를 돌면서 T타입에 있는 모든 키를 순차적으로 P에 할당하고, 그것들은 옵셔널?로 만듬.

    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
        // key를 돌면서 T타입에 있는 모든 키를 순차적으로 P에 할당하고, 그것들은 readonly로 만듬.
    }

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'hi',
    };

    type Animal = {
        name: string;
        age: number;
    };

    const animal: Optional<Animal> = {
        age: 3,
    }

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'jennie',
    }

    // video.author = // cannot change cus it's readonly

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }

    // type VideoReadOnly = {
    //     readonly title?: string;
    //     readonly author?: string;
    //     readonly description?: string;
    // }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
        // key를 돌면서 T타입에 있는 모든 키를 순차적으로 P에 할당하고, 그것들은 기존 타입이거나 null이 가능하게 만듬
    };

    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
}