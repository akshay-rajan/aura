import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";


actor Token {

    // Token properties
    var owner : Principal = Principal.fromText("34vio-ivgye-qlzr7-3llli-mqhgg-2k2bd-73lwc-fs24p-pvpzo-v44m2-lqe");
    var totalSupply : Nat = 1_000_000_000;
    var symbol : Text = "AURA";

    // Ledger
    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash); // (InitialSize, EqualityCheck, HashFunction)

    // Deposit tokens to the owner
    balances.put(owner, totalSupply);

    public query func balanceOf(account : Principal) : async Nat {
        // Default return value of .get is ?Type, meaning, either Type or null.
        // Hence we need to convert the ?Nat type here to Nat
        var balance : Nat = switch (balances.get(account)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };
};
