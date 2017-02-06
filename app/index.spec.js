import test from 'tape';
import Greeter from './';

test('index', t => {
  t.plan(1);
  t.equal(new Greeter().hello(), 'hello');
});