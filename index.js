// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null; 
//Define a class named BankBranch
class BankBranch{
  //Define a constructor method that takes 'branchInfo' as a parameter
    constructor(branchInfo){
      //Check if 'bankBranchInstance' does not exist
      if (!bankBranchInstance) {
        //if not, assign 'the branchInfo'parameter tp the 'branchInfo' property of the current instance. 
        this.branchInfo = branchInfo; 
        bankBranchInstance = this; 
      } 
  return bankBranchInstance; 
    } 
getBranchInfo() {
  return this.branchInfo;
}
}
const branchA = new BankBranch("Main Street branch")
console.log(branchA.getBranchInfo());

const branchB = new BankBranch("Second Street branch")
console.log(branchA.getBranchInfo());

console.log(branchA === branchB);


