
let bankBranchInstance = null; 

class BankBranch{
 
    constructor(branchInfo){
      
      if (!bankBranchInstance) {
       
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


