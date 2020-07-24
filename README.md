# sub_crash
A generalized testing framework for substrate chains

The goal is to be able to run this on most if not all substrate chains out of the box. To do this the project will rely heavily on config files. 
There are 3/4 parts of the project. A test substrate chain (which can be replaced by the substrate chain to test). A db/api for logging chain info and serving it up to a front end. 
There is also a frontend to visualize results and since blockchains are community driven maybe to host and allow communities to see blockchain progress.



## TODO

### substrate
- [x]  send multiple transactions 
- [ ]  allow config file to call custom SRMLS 
- [x]  add utility pallet to chain
- [ ]  create custom frame and call it in test 

### config
- [ ] node types
- [ ] endpoint
- [ ] ip address (env)
- [ ] sending address (env) (alice default)
- [ ] transaction sending to call custom frame functions

### Databasing layer
 * a database layer will be made available to track actions over time this will allow developers to write custom code to view current and past states 

 - [x] set up postgres DB
 - [x] dockerize DB for easy setup
 - [x] Create tx table for log success and failures 

 
 ### API Layer 
- [x] create a rest api to return data from DB
- [ ] batch transaction fire x tx no data logging

### frontend layer 
- [x] display chart of transaction failures vs successes


## limitations 
* requires the utility Frame in chain to batch transactions

## Running 

### substrate chain
* run substrate chain (you can subsitute yours) or run the one in the repo in /substrate
    * navigate to /substrate
    * ``` cargo build --release ```
    * purge your chain first just incase ``` ./target/release/node-template purge-chain --dev ```
    * run your chain ```./target/release/node-template --dev --ws-external```

### backend 
* navigate to /db
* ``` docker-compose build ```
* ``` docker-compose up ```

### frontend
* navigate to /fe
* ``` yarn ```
* ``` yarn start ```

