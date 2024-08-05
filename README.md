# Voting DApp

The Voting decentralized application (dApp) documentation.

It provides a secure and transparent platform for conducting votes on various topics, leveraging blockchain technology for ownership assurance, secure and reliable rewards, and decentralized network benefits.

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Ensure you have the following packages installed on your PC:

- Node.js, npm, Yarn
- Docker
- Cartesi CLI

  Install Cartesi CLI:
  
  npm install -g @cartesi/cli
  

### Installation

1. Clone this repository:
   
   git clone https://github.com/Victoric3/voting-dapp
   

2. Install NPM packages:
   
   yarn install
   

3. Build and run the dApp via `cartesi-cli`:
   
   cartesi build
   
   and
   
   cartesi run
   

## Usage

Access the examples of dApp communication and resource consumption.

### Advanced handlers

* **createVote**

  Description — create a vote.
  Param data — `{owner: address ("0x...")}`

  Data sample:
  {
      "action":"createVote", 
      "data":{
          "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      }
  } 
  

  Hex sample:
  
  0x7b22616374696f6e223a22637265617465566f7465222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
  

  Interact:
  - Via `cartesi cli`, access your terminal in another window and input these instructions:
    
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a22637265617465566f7465222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
    

  - Via `cast`, access your terminal in another window and input this single line instruction:
    
    cast send 0x59b22D57D4f067708AB0c00552767405926dc768 "addInput(address,bytes)" 0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e 0x7b22616374696f6e223a22637265617465566f7465222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d --mnemonic 'test test test test test test test test test test test junk'
    

* **castVote**

  Description — cast a vote on a given proposal.
  Param required — `{vote: UUID, option: string}`

  Data sample:
  {
      "action":"castVote", 
      "data":{
          "vote":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", 
          "option":"Yes"
      }
  }
  

  Hex sample:
  
  0x7b22616374696f6e223a2263617374566f7465222c202264617461223a7b22766f7465223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c20226f7074696f6e223a22596573227d7d
  

  Interact:
  - Via `cartesi cli`, access your terminal in another window and input these instructions:
    
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a2263617374566f7465222c202264617461223a7b22766f7465223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c20226f7074696f6e223a22596573227d7d
    

  - Via `cast`, access your terminal in another window and input this single line instruction:
    
    cast send 0x59b22D57D4f067708AB0c00552767405926dc768 "addInput(address,bytes)" 0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e 0x7b22616374696f6e223a2263617374566f7465222c202264617461223a7b22766f7465223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c20226f7074696f6e223a22596573227d7d --mnemonic 'test test test test test test test test test test test junk'
    

### Inspect handlers

* **getAllVotes**

  Description — get all votes.

  Returned hex sample:
  {
      "status": "Accepted",
      "exception_payload": null,
      "reports": [
          {
              "payload": "0x..."
          }
      ],
      "processed_input_count": 2
  }
  

  Converted payload sample: 
  [
      {
          "id":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
          "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
          "createdAt":8034,
          "options":{}
      }
  ]
  

  Interact:
  - Access the Cartesi inspect endpoint on your browser:
    
    http://localhost:8080/inspect/getAllVotes
    

* **getVoteById**

  Description — get a vote by given id.
  Param data — vote id (UUID)

  Returned hex sample:
  {
      "status": "Accepted",
      "exception_payload": null,
      "reports": [
          {
              "payload": "0x..."
          }
      ],
      "processed_input_count": 2
  }
  

  Converted payload sample: 
  {
      "data":{
          "details":{
              "id":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
              "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
              "createdAt":8034
          },
          "options":[
              {
                  "id":"...",
                  "option":"..."
              }
          ]
      }
  }

  Interact:
  - Access the Cartesi inspect endpoint on your browser:
    http://localhost:8080/inspect/getVoteById/{voteId}
