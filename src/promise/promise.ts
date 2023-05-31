interface MyPromise {
    status: String,
    value: String | undefined,
    reason: String | undefined,
    callbacks: any[]
}
class MyPromise{
    static pending = 'pending'
    static fulfilled = 'fulfilled'
    static rejected = 'rejected'

    constructor(executor) {
        this.status = MyPromise.pending;
        this.value = undefined;
        this.reason = undefined;
        this.callbacks  = []
        executor(this._resolve.bind(this), this._reject.bind(this));
    }

    then(onFulfilled, onRejected) {
        this.callbacks.push({
            onFulfilled,
            onRejected
        })
    }

    _resolve(value) {
        this.value = value;
        this.status = MyPromise.fulfilled;
        this.callbacks.forEach(cb=>this._handler(cb))
    }

    _reject(value) {
        this.value = value;
        this.status = MyPromise.rejected;
        this.callbacks.forEach(cb=>this._handler(cb))
    }

    _handler(callback) {
        const { onFulfilled, onRejected } = callback;
        if (this.status === MyPromise.fulfilled && onFulfilled) {
            onFulfilled(this.value)
        }
        if (this.status === MyPromise.rejected && onRejected) {
            onRejected(this.reason)
        }
    }

}