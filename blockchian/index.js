// Web3 = require("web3");
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// const fs = require("fs");
// const { candidateModel } = require("../server/database/index");
// const { resolve } = require("path");
// var account;
// web3.eth.getAccounts().then((f) => {
//   account = f[0];
// });
// const bytecode = fs
//   .readFileSync(__dirname + "/voting_sol_Voting.bin")
//   .toString();
// const abi = JSON.parse(
//   fs.readFileSync(__dirname + "/voting_sol_Voting.abi").toString()
// );

// // contract = new web3.eth.Contract(abi);

// contract.options.address = "0xd3d89BbB750E42DbA32330f7eA5D064Aaa13d640";
// function voteForCandidate(candidate) {
//   console.log("inside the chain...", candidate);
//   return contract.methods
//     .voteForCandidate(web3.utils.asciiToHex(candidate))
//     .send({ from: account })
//     .then((res) => {
//       console.log("added///////////", candidate, res);
//       return contract.methods
//         .totalVotesFor(web3.utils.asciiToHex(candidate))
//         .call()
//         .then((result) => {
//           console.log("back///////////", candidate, result);
//           return result;
//         });
//     });
// }

// function retrieveVotes() {
//   return candidateModel
//     .find({})
//     .then((listOfCandidates) => {
//       var rr = {};
//       return listOfCandidates.map((cand) => {
//         return contract.methods
//           .totalVotesFor(web3.utils.asciiToHex(cand.name))
//           .call()
//           .then((candVotes) => {
//             console.log(`Candidtaes: ${cand.name},Votes:${candVotes}`);
//             rr[cand.name] = candVotes;
//             if (Object.keys(rr).length === 5) {
//               return rr;
//             }
//           });
//       });
//     })
//     .catch((error) => {
//       console.log(
//         "Error in retrieving data from database in the blockchain index",
//         error
//       );
//     });
// }

// function retriveOne(name) {
//   contract.methods
//     .totalVotesFor(web3.utils.asciiToHex(name))
//     .call()
//     .then((f) => {
//       console.log("name:", name, "votes:", f);
//     });
// }
// module.exports = { voteForCandidate, retrieveVotes, retriveOne };

// //__________________________________________________________________________________
// // bytecode = fs.readFileSync('voting_sol_Voting.bin').toString()
// // abi = JSON.parse(fs.readFileSync('voting_sol_Voting.abi').toString())
// //deployment for the candidates____________________________________________________
// // deployedContract.deploy({
// //     data: bytecode,
// //     arguments: [listOfCandidates.map((id) => web3.utils.asciiToHex(id))],
// //   }).send({
// //     from: "0x4b167330AE4A2ABDB23755Ce79620306cfFC801d",
// //     gas: 1500000,
// //     gasPrice: web3.utils.toWei("0.00003", "ether"),
// //   }).then((newContractInstance) => {
// //     deployedContract.options.address = newContractInstance.options.address;
// //     console.log(newContractInstance.options.address);
// //   }).catch((err) => {
// //     console.log("Error in sending the data", err);
// //   });
// //____________________________________________________________________________________

// //adding and reteving from the blockChain
// //  deployedContract.methods.voteForCandidate(web3.utils.asciiToHex('b')).send({from: '0x4b167330AE4A2ABDB23755Ce79620306cfFC801d'}).then((f) => console.log(f))
// //  deployedContract.methods.totalVotesFor(web3.utils.asciiToHex('c')).call(console.log)
// //______________________________________________________________________________________
