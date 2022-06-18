# Simple Blockchain Logs
Create simple blockchain logging with Solidity. This logging process use only :
- mapping of address and
- mapping of uint.

Before going deeper, things need to know about folders :

- **contracts**   = this directory contain all of your contracts. all contract will have a file extension of *.sol*
- **migrations**  = this directory simply contain a set of managed deployment scripts that will deploy contracts to the Ethereum network. this migrations file is Javascript files. Note that the filename is prefixed with a number and is suffixed by a description.  
- **build**       = this folder will be created (if it does not exist) when *truffle compile* command successfully run. This folder contain *.json* file. These file play an importal part of successful deployment of application, Shouldn't edit these file as they will be overwritten by contract compilation and deployment.

very simple to understand !


## Tools
You need tools like :
1. [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
2. [Ganache](https://www.trufflesuite.com/ganache)

## Usage Truffle With Ganache
1. Clone this repo
2. check **truffle-config.js**, add some information :
```bash
networks: {
  development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
  },
}
```
3. Make sure [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) is installed. Open command line. To compile SimpleLogs.sol and Migrations.sol contract, just type **truffle compile**.
```bash
truffle compile
```
This will compile all contract. Upon subsequent runs, Truffle will compile only the contracts that have been changed since the last compile.
4. To migrate (deploy) your contract to ganache Ethereum network, first open **ganache**, assign new workspace to your project(locate the truffle-config.js). After that, type command
```bash
truffle migrate
```
5. To check your deployed SimpleLogs contract and enter the local Ethereum network, type command
```bash
truffle console
```  
With this command, truffle start new Blockchain network on ganache. Here are a list of command that can be run inside truffle conso(truffle development command line):
  - *accounts*    : see all account inside Ganache
  - *accounts[0]* : see account with index 0 inside Ganache
  - *let instance = await SimpleLogs.deployed()*  : deploy SimpleLogs contract and make instance of it named **instance**
  - *instance.saveLogs("0xE98BfDd71Ba07FB25295e7A36044b0326178835c", "url_ipfs")* : call saveLogs with parameter address and url ipfs.
  - *instance.getDataById(100)* : call function to get data with parameter index.
  - *instance.getDataByOwner("0xE98BfDd71Ba07FB25295e7A36044b0326178835c")* : call function to get data id logs by address/owner.
  - *.exit* : exit from truflle console

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  Please make sure to update tests as appropriate.

## License
  [MIT](https://choosealicense.com/licenses/mit/)
