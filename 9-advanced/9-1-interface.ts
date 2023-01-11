type PositionType = {
    x: number;
    y: number;
};
interface PositionInterface {
    x: number;
    y: number;
};

// object *
const obj1: PositionType = {
    x: 1,
    y: 1,
}

// 재정의한 interface는 사용자들이 앞서 재정의한 것과 기존의 것을 합한 형태로 사용해야함
const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
}

// class *
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionTyep = PositionType & { z: number };

// 😆 only interfaces can be merged. interface는 재정의 가능
interface PositionInterface {
    z: number;
}

// Type은 불가능
// type PositionTpye {
// }

// 😅 Type aliases can be computed properties
type Person = {
    name: string,
    age: number,
}

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'