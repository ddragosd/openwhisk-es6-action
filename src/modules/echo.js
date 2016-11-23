export default class Echo {
    constructor() {
    }

    /**
     * Says Hello, ${name}
     * @param name A name
     * @returns {Promise}
     */
    sayHello(name) {
        return new Promise(
            (resolve, reject) => {
                resolve({payload: "Hello, " + name + "!"})
            }
        )
    }
}