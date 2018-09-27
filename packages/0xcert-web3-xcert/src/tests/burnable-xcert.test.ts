import { Spec } from '@specron/spec';

/**
 * Spec context interfaces.
 */

interface Data {
  xcert?: any;
  owner?: string;
  bob?: string;
  jane?: string;
  sara?: string;
  id1?: string;
  id2?: string;
  url1?: string;
  url2?: string;
  proof1?: string;
  proof2?: string;
}

const spec = new Spec<Data>();

export default spec;

spec.beforeEach(async (ctx) => {
  const accounts = await ctx.web3.eth.getAccounts();
  ctx.set('owner', accounts[0]);
  ctx.set('bob', accounts[1]);
  ctx.set('jane', accounts[2]);
  ctx.set('sara', accounts[3]);
});

spec.beforeEach(async (ctx) => {
  ctx.set('id1', '123');
  ctx.set('id2', '124');
  ctx.set('url1', 'http://0xcert.org/1');
  ctx.set('url2', 'http://0xcert.org/2');
  ctx.set('proof1', '973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9');
  ctx.set('proof2', '6F25B3F4BC7EADAFB8F57D69F8A59DB3B23F198151DBF3C66AC3082381518329');
});

spec.beforeEach(async (ctx) => {
  const xcert = await ctx.deploy({ 
    src: './build/burnable-xcert-mock.json',
    contract: 'BurnableXcertMock',
    args: ['Foo','F','0x9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658']
  });
  ctx.set('xcert', xcert);
});

spec.test('successfuly burns an xcert', async (ctx) => {
  const xcert = ctx.get('xcert');
  const owner = ctx.get('owner');
  const bob = ctx.get('bob');
  const id1 = ctx.get('id1');
  const id2 = ctx.get('id2');
  const url1 = ctx.get('url1');
  const url2 = ctx.get('url2');
  const proof1 = ctx.get('proof1');
  const proof2 = ctx.get('proof2');

  await xcert.methods.mint(bob, id1, url1, proof1).send({ from: owner });
  await xcert.methods.mint(bob, id2, url2, proof2).send({ from: owner });
  const logs = await xcert.methods.burn(id1).send({ from: bob });
  ctx.not(logs.events.Transfer, undefined);

  const balance = await xcert.methods.balanceOf(bob).call();
  ctx.is(balance, '1');
  await ctx.reverts(() => xcert.methods.ownerOf(id1).call());
   
  const tokenIndex0 = await xcert.methods.tokenByIndex(0).call();
  ctx.is(tokenIndex0, id2);

  const tokenOwnerIndex0 = await xcert.methods.tokenOfOwnerByIndex(bob, 0).call();
  ctx.is(tokenOwnerIndex0, id2);

  await ctx.reverts(() => xcert.methods.tokenByIndex(1).call());
  await ctx.reverts(() => xcert.methods.tokenOfOwnerByIndex(bob, 1).call());
});

spec.test('successfuly burns an xcert from an operator', async (ctx) => {
  const xcert = ctx.get('xcert');
  const owner = ctx.get('owner');
  const bob = ctx.get('bob');
  const sara = ctx.get('sara');
  const id1 = ctx.get('id1');
  const url1 = ctx.get('url1');
  const proof1 = ctx.get('proof1');

  await xcert.methods.mint(bob, id1, url1, proof1).send({ from: owner });
  await xcert.methods.setApprovalForAll(sara, true).send({ from: bob });
  
  const logs = await xcert.methods.burn(id1).send({ from: sara });
  ctx.not(logs.events.Transfer, undefined);
});

spec.test('throws when trying to burn an already burned xcert', async (ctx) => {
  const xcert = ctx.get('xcert');
  const owner = ctx.get('owner');
  const bob = ctx.get('bob');
  const id1 = ctx.get('id1');
  const url1 = ctx.get('url1');
  const proof1 = ctx.get('proof1');

  await xcert.methods.mint(bob, id1, url1, proof1).send({ from: owner });
  await xcert.methods.burn(id1).send({ from: bob});
  await ctx.reverts(() => xcert.methods.burn(id1).send({ from: bob}));
});

spec.test('throws when a third party tries to burn a xcert', async (ctx) => {
  const xcert = ctx.get('xcert');
  const owner = ctx.get('owner');
  const bob = ctx.get('bob');
  const sara = ctx.get('sara');
  const id1 = ctx.get('id1');
  const url1 = ctx.get('url1');
  const proof1 = ctx.get('proof1');

  await xcert.methods.mint(bob, id1, url1, proof1).send({ from: owner });
  await ctx.reverts(() => xcert.methods.burn(id1).send({ from: sara}));
});