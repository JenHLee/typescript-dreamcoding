// either: a or b
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) { }
    left(): L {
        return this.leftValue;
    }
    right(): R {
        return this.rightValue;
    }
}

const either: Either<number, number> = new SimpleEither(4, 5);
console.log(either.left()); // 4
console.log(either.right()); // 5
const best = new SimpleEither(4, 'hello');
console.log(best.left());
console.log(best.right());
const best1 = new SimpleEither({name: 'jennie'}, 'hello world');
const bestLeft = best1.left();
console.log(best1.left());
console.log(bestLeft.name);
console.log(best1.right());

