// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000); // RangeError: Invalid array length

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }

    return 'file contencts📃';
}

function closeFile(fileName: string) {
    //
}

const fileName = 'file';
console.log(readFile(fileName));
closeFile(fileName);

const fileName1 = 'not exist!💩'; // try catch 이전: throw new Error(`file not exist! ${fileName}`); Error: file not exist! not exist!💩
try {
    console.log(readFile(fileName1));
} catch (error) {
    console.log(`catched!!`); //catched!!

} finally {
    closeFile(fileName1);
    console.log(`finally!!`); //finally!!
}
console.log(`!!!`); // !!!      
console.log(`-------------------------`); // !!!      

function run() {
    const fileName2 = 'not exist!💩';
    try {
        console.log(readFile(fileName2));
    } catch (error) {
        console.log(`catched!!`); //catched!!
        return; // return이 있어도
    } finally { // finally는 무조건 실행됨
        closeFile(fileName2);
        console.log(`closed!`); //finally!!
    }
}

run();