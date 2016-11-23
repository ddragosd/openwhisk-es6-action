/**
 *
 * @param params Input object
 * @returns {Promise}
 */
function main(params) {
    var name = params.name || "World";
    return new Promise(
        (resolve, reject) => {
            resolve({payload: "Hello, " + name + "!"})
        }
    )
}

export default main;