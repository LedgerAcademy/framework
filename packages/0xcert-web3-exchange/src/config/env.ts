/**
 * Full Exchange smart contract ABI.
 *
 * NOTE: This value can automatically copied from the package by using the
 * scripts/update-exchange-abi.
 */
export const exchangeAbi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"idToProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"swapPerformed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"swapCancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_target","type":"address"},{"name":"_ability","type":"uint8"}],"name":"isAble","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_target","type":"address"},{"name":"_abilities","type":"uint8[]"}],"name":"assignAbilities","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_signer","type":"address"},{"name":"_claim","type":"bytes32"},{"components":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"kind","type":"uint8"}],"name":"_signature","type":"tuple"}],"name":"isValidSignature","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expiration","type":"uint256"}],"name":"_data","type":"tuple"}],"name":"cancelSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_target","type":"address"},{"name":"_abilities","type":"uint8[]"}],"name":"revokeAbilities","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expiration","type":"uint256"}],"name":"_data","type":"tuple"},{"components":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"kind","type":"uint8"}],"name":"_signature","type":"tuple"}],"name":"performSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expiration","type":"uint256"}],"name":"_swapData","type":"tuple"}],"name":"getSwapDataClaim","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_maker","type":"address"},{"indexed":true,"name":"_taker","type":"address"},{"indexed":false,"name":"_claim","type":"bytes32"}],"name":"PerformSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_maker","type":"address"},{"indexed":true,"name":"_taker","type":"address"},{"indexed":false,"name":"_claim","type":"bytes32"}],"name":"CancelSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"uint256"},{"indexed":false,"name":"_proxy","type":"address"}],"name":"ProxyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_target","type":"address"},{"indexed":true,"name":"_ability","type":"uint8"}],"name":"AssignAbility","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_target","type":"address"},{"indexed":true,"name":"_ability","type":"uint8"}],"name":"RevokeAbility","type":"event"}]');
export const minterAbi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"idToProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"xcertMintProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"signer","type":"address"},{"name":"to","type":"address"},{"components":[{"name":"xcert","type":"address"},{"name":"id","type":"uint256"},{"name":"proof","type":"string"}],"name":"xcertData","type":"tuple"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expirationTimestamp","type":"uint256"}],"name":"_mintData","type":"tuple"},{"components":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"kind","type":"uint8"}],"name":"_signatureData","type":"tuple"}],"name":"performMint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_target","type":"address"},{"name":"_ability","type":"uint8"}],"name":"isAble","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_target","type":"address"},{"name":"_abilities","type":"uint8[]"}],"name":"assignAbilities","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_signer","type":"address"},{"name":"_claim","type":"bytes32"},{"components":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"kind","type":"uint8"}],"name":"_signature","type":"tuple"}],"name":"isValidSignature","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_target","type":"address"},{"name":"_abilities","type":"uint8[]"}],"name":"revokeAbilities","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"signer","type":"address"},{"name":"to","type":"address"},{"components":[{"name":"xcert","type":"address"},{"name":"id","type":"uint256"},{"name":"proof","type":"string"}],"name":"xcertData","type":"tuple"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expirationTimestamp","type":"uint256"}],"name":"_mintData","type":"tuple"}],"name":"getMintDataClaim","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"signer","type":"address"},{"name":"to","type":"address"},{"components":[{"name":"xcert","type":"address"},{"name":"id","type":"uint256"},{"name":"proof","type":"string"}],"name":"xcertData","type":"tuple"},{"components":[{"name":"token","type":"address"},{"name":"proxy","type":"uint256"},{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfers","type":"tuple[]"},{"name":"seed","type":"uint256"},{"name":"expirationTimestamp","type":"uint256"}],"name":"_mintData","type":"tuple"}],"name":"cancelMint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"mintCancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"mintPerformed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_xcertMintProxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_signer","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":true,"name":"_xcert","type":"address"},{"indexed":false,"name":"_xcertMintClaim","type":"bytes32"}],"name":"PerformMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_signer","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":true,"name":"_xcert","type":"address"},{"indexed":false,"name":"_xcertMintClaim","type":"bytes32"}],"name":"CancelMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"uint256"},{"indexed":false,"name":"_proxy","type":"address"}],"name":"ProxyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_target","type":"address"},{"indexed":true,"name":"_ability","type":"uint8"}],"name":"AssignAbility","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_target","type":"address"},{"indexed":true,"name":"_ability","type":"uint8"}],"name":"RevokeAbility","type":"event"}]');