// Stack
interface Stack {
    readonly size: number; // change X
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0; // 내부에서 쓰이는 변수
    private head?: StackNode;

    constructor(private capacity: number){}
    get size() { // 동일한 public 변수
        return this._size;
    }

    push(value: string) {
        if(this.size === this.capacity){
            throw new Error('Stack is full!');
        }
        const node: StackNode = { value, next: this.head };
        this.head = node;
        this._size++;
    }

    pop(): string {
        if (this.head == null) { // normal-> null == undefined, strict-> null !== undefined
            throw new Error('Stack is empty!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(10);
stack.push('Jennie 1');
stack.push('Bob 2');
stack.push('Steve 3');
while(stack.size !== 0){
    console.log(stack.pop());
}


