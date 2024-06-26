# `AURA`

Aura is a fungible [Crypto Token](#what-is-a-crypto-token).
This token is built to study the development and deployment of decentralized applications on the Internet Computer blockchain. 
The project uses Motoko in the backend and React on the front-end.
Users can login using Internet Identity, an on-chain authentication service similar to OAuth. 
After that, a user can recieve free 10000 AURA tokens to their account.
The user can check their balance or transfer some tokens to another account, using the reciever's identity.

<table>
    <tr>
        <th>Name</th>
        <td>Aura</td>
    </tr>
    <tr>
        <th>Symbol</th>
        <td>AURA</td>
    </tr>
</table>

## [Live Demo](https://ulodo-zyaaa-aaaal-qjgkq-cai.icp0.io/)

Frontend canister via browser: https://ulodo-zyaaa-aaaal-qjgkq-cai.icp0.io/

Backend canister via Candid interface: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=umpf2-uaaaa-aaaal-qjgka-cai

## What is a Crypto Token?

A crypto token is a type of digital asset that represents a unit of value or utility on a blockchain network.
Unlike cryptocurrencies such as Bitcoin or Ethereum, which have their own blockchains, tokens are typically built on existing blockchain platforms, like Ethereum or Internet Computer.
Tokens can represent various things, such as assets, rights or access.
They rely on the underlying technology of a blockchain for secure transactions and transparent record-keeping. 
Behavior and properties of a token is defined by smart contracts.
Different blockchain platforms have their own token standards, for example ERC-20 in Ethereum or ICRC-1 (fungible), ICRC-7 (NFT) etc. in Internet Computer.
Tokens can be transferred between addresses on the blockchain, allowing for peer-to-peer transactions without the need for intermediaries like banks.

An example of a crypto token is The Shiba Inu Coin (SHIB), which operates on the Ethereum blockchain, implementing the ERC-20 token standard.



## Development

### Check your Balance

1. Find out your principal id:

```
dfx identity get-principal
```

2. Save it somewhere.

e.g. My principal id is: gbdev-tyqsv-hnvqv-7mgz4-4kcfl-wbv6x-6khez-y56gq-uohqs-quomc-uqe


3. Format and store it in a command line variable:
```
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

4. Check that step 3 worked by printing it out:
```
echo $OWNER_PUBLIC_KEY
```

5. Check the owner's balance:
```
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

### Charge the Canister


1. Check canister ID:
```
dfx canister id token
```

2. Save canister ID into a command line variable:
```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:
```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:
```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

### Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```
dfx deploy --network ic
```

2. Check the live canister ID:
```
dfx canister --network ic id token
```

3. Save the live canister ID to a command line variable:
```
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

4. Check that it worked:
```
echo $LIVE_CANISTER_KEY
```

5. Transfer some tokens to the live canister:
```
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```
6. Get live canister front-end id:
```
dfx canister --network ic id token_assets
```
7. Copy the id from step 6 and add `.icp0.io` to the end to form a URL.

