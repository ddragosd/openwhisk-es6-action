import chai from 'chai';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import action from '../src/action/hello-world.js';

chai.config.includeStack = true;
chai.use(chaiAsPromised);
chai.should();

describe('Say hello', () => {
    describe('with name parameter', () => {
        it('should say Hello, ECAMEscript6', (done) => {
            var params = {
               "name":"ECMAscript6"
            };

            // The action returns a Promise and we can use "eventually" to wait for it.
            // If the action doesn't return a Promise we can remove "eventually"
            //   and write instead "should.deep.equal"
            action(params).should.eventually.deep.equal({payload: "Hello, ECMAscript6!"});

            done();
        });
    })
});
