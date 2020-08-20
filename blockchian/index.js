Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var account;
web3.eth.getAccounts().then((f) => {
  account = f[0];
});

abi = JSON.parse(
  '[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
);
var listOfCandidates = ["a", "b", "c", "d"];
contract = new web3.eth.Contract(abi);
contract.options.address = "0xeFb651FF7d6e05eDE02B30857f814B5B140449F1";
var listOfCandidatesIds = [65042, 4277, 3206, 71782, 66871, 81803];

function voteForCandidate(candidate) {
  contract.methods
    .voteForCandidate(web3.utils.asciiToHex(candidate))
    .send({ from: account })
    .then((f) => {
      console.log("added///////////", candidate, f);
      contract.methods
        .totalVotesFor(web3.utils.asciiToHex(candidate))
        .call()
        .then((m) => {
          console.log("back///////////", candidate, m);
        });
    });
}
var result = [];
function retrieveVotes() {
  listOfCandidates.map((e) => {
    contract.methods
      .totalVotesFor(web3.utils.asciiToHex(e))
      .call()
      .then((f) => {
        console.log("name", e, "votes:", f);
        result.push(f);
      });
  });

  return result;
}
function retriveOne(name) {
  contract.methods
    .totalVotesFor(web3.utils.asciiToHex(name))
    .call()
    .then((f) => {
      console.log("name:", name, "votes:", f);
    });
}
module.exports = { voteForCandidate, retrieveVotes, retriveOne };

//__________________________________________________________________________________
// bytecode = fs.readFileSync('voting_sol_Voting.bin').toString()
// abi = JSON.parse(fs.readFileSync('voting_sol_Voting.abi').toString())
//deployment for the candidates____________________________________________________
// deployedContract.deploy({
//     data: bytecode,
//     arguments: [listOfCandidates.map((id) => web3.utils.asciiToHex(id))],
//   }).send({
//     from: "0x4b167330AE4A2ABDB23755Ce79620306cfFC801d",
//     gas: 1500000,
//     gasPrice: web3.utils.toWei("0.00003", "ether"),
//   }).then((newContractInstance) => {
//     deployedContract.options.address = newContractInstance.options.address;
//     console.log(newContractInstance.options.address);
//   }).catch((err) => {
//     console.log("Error in sending the data", err);
//   });
//____________________________________________________________________________________

//adding and reteving from the blockChain
//  deployedContract.methods.voteForCandidate(web3.utils.asciiToHex('b')).send({from: '0x4b167330AE4A2ABDB23755Ce79620306cfFC801d'}).then((f) => console.log(f))
//  deployedContract.methods.totalVotesFor(web3.utils.asciiToHex('c')).call(console.log)
//______________________________________________________________________________________
