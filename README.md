# sub_crash
A generalized testing framework for substrate chains

## TODO

### substrate tests
- [ ]  x amount of transactions from y accounts with z amount 
- [ ]  allow config file to call custom SRMLS 

### Databasing layer
 * a database layer will be made available to track actions over time this will allow developers to write custom code to view current and past states 

 - [x] set up postgres DB
 - [x] dockerize DB for easy setup
 - [x] Create tx table for log success and failures 

 
 ### API Layer 
- [ ] create a rest api to return data from DB

### frontend layer 
- [ ] display chart of transaction failures vs successes
- [ ] TPS chart?