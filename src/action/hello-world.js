import Echo from '../modules/echo';

/**
 * The entry point for the action.
 * @param params Input object
 * @returns {Promise}
 */
function main(params) {
    var name = params.name || "World";
    var responder = new Echo();
    return responder.sayHello(name);
}

export default main;