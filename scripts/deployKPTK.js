
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const KPTK = await ethers.getContractFactory("KPTK");
    const token = await KPTK.deploy(deployer.address);

    console.log("KPTK token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


    // npx hardhat run ./scripts/deployKPTK.js --network goerli