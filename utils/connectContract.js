import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract(){
 //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
 const contractAddress = "0x56660E3c04cd4b5033a20af88138677153C46A06";
 const contractABI = abiJSON.abi;
 let rsvpContract;
 try {
   const { ethereum } = window;

   if (ethereum) {
     //checking for eth object in the window
     const provider = new ethers.providers.Web3Provider(ethereum);
     const signer = provider.getSigner();
     rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
   
  } else {
    throw new Error('Please connect to the Polygon Mumbai network.')
  }
} catch (error) {
  console.log("ERROR:", error);
}
 return rsvpContract;

}
export default connectContract;