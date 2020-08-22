Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const fs = require("fs");
const { candidateModel } = require("../server/database/index");
const bytecode = fs
  .readFileSync(__dirname + "/voting_sol_Voting.bin")
  .toString();
const abi = JSON.parse(
  fs.readFileSync(__dirname + "/voting_sol_Voting.abi").toString()
);
const deployedContract = new web3.eth.Contract(abi);

function getAddress(bytecode, deployedContract, account) {
  return candidateModel
    .find({})
    .then((data) => {
      listOfCandidates = data.map((e) => {
        return e.name;
      });
      return deployedContract
        .deploy({
          data: bytecode,
          arguments: [
            listOfCandidates.map((name) => web3.utils.asciiToHex(name)),
          ],
        })
        .send({
          from: account,
          gas: 1500000,
          gasPrice: web3.utils.toWei("0.00003", "ether"),
        })
        .then((newContractInstance) => {
          deployedContract.options.address =
            newContractInstance.options.address;
          var address = newContractInstance.options.address;
          return address;
        });
    })
    .catch((error) => {
      console.log(
        "Error in retrieving data from database in the ganach",
        error
      );
    });
}
web3.eth.getAccounts().then((res) => {
  account = res[0];
  console.log("my account...", account);
  getAddress(bytecode, deployedContract, account).then((address) => {
    console.log("my address...", address);
  });
});
// module.exports = { getAddress };
