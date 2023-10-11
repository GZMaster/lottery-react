import web3 from "./web3";

const address = "0x93720485aC21E9c7Bf7515de34C4b9332dDAaDE1";
const abi = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{
		inputs: [],
		name: "enter",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "getPlayers",
		outputs: [
			{ internalType: "address payable[]", name: "", type: "address[]" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "manager",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "pickWinner",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "players",
		outputs: [{ internalType: "address payable", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
];
// eslint-disable-next-line import/no-anonymous-default-export
export default new web3.eth.Contract(abi, address);
