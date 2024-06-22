# `aura`

Aura is a Crypto Token.

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

```bash
cd aura/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.


echo $OWNER_PUBLIC_KEY
principal "34vio-ivgye-qlzr7-3llli-mqhgg-2k2bd-73lwc-fs24p-pvpzo-v44m2-lqe"

dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
dfx canister call aura_backend balanceOf "( $OWNER_PUBLIC_KEY )"
(1_000_000_000 : nat)
