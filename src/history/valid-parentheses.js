function isValid(s) {
    const model = {
        ")": '(',
        "]": '[',
        "}": '{',
    }
    const task = []
    for (item of s) {
        if (!model[item]) {
            task.push(item)
        } else if (task.pop() !== model[item]) {
            return false;
        }
    }
    return task.length === 0
};
const s = "{[]}"
console.log(isValid(s));