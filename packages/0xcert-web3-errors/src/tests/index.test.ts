import { Spec } from '@specron/spec';
import * as errors from '..';

const spec = new Spec();

spec.test('exposed content', (ctx) => {
  ctx.true(!!errors.ConnectorError);
  ctx.true(!!errors.ConnectorIssue);
  ctx.true(!!errors.parseError);
});

export default spec;
