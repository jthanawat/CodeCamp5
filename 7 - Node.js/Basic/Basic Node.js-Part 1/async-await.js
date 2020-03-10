// * Await/Async *
async function runcode() {
    for (let i = 0; i < 1-; i++) {
        await setTimeoutAndLog(i)
    }
}

async function runcode() {
    const input1 = await setTimeoutAndLog('a');
    const input2 = await setTimeoutAndLog('b');
    const input3 = await setTimeoutAndLog('c');
    const input4 = await setTimeoutAndLog('d');
    console.log(input1, input2, input3, input4);
}
runcode();


async runcode(){
    const a = await setTimeoutAndLog('a');
    await setTimeoutAndLog('b');
    await setTimeoutAndLog('c');
    await setTimeoutAndLog('d');
}

runcode();