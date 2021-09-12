# clustering-nodejs-benchmark

## Prerequistes
Install artillery globally

`npm i -g artillery`

## How to benchmark clustering

### 1. Working with a single server instance
Run a single server instance

`npm start-server`

Open a new terminal to make some concurrent calls to test the server response times. 
By using artillery to create 50 virtual users to send 40 HTTP request (total 2K requeest)

`artillery quick --count 50 -n 40 http://localhost:8080`

See the response times and stop the server instance.



### 2. Working with a Cluster instance
The first process will be the master and it will fork itself based on how many CPU cores we have. This should mean better performance..

`npm start-cluster`

Open a new terminal to make some concurrent calls to test the server response times. 
By using artillery to create 50 virtual users to send 40 HTTP request (total 2K requeest)

`artillery quick --count 50 -n 40 http://localhost:8080`

See the response times and stop the cluster instance.



### 3. Compare results
Response times using the clusterized instance should be better.
