import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";


actor Token {

    // Token properties
    let owner : Principal = Principal.fromText("34vio-ivgye-qlzr7-3llli-mqhgg-2k2bd-73lwc-fs24p-pvpzo-v44m2-lqe");
    let totalSupply : Nat = 1_000_000_000;
    let symbol : Text = "AURA";

    // Ledger
    // We can't use 'stable' for HashMap to introduce persistence, hence we need pre & postupgrade methods
    // balanceEntries is an array of tuples. Array is a serialized datatype and hence is computationally expensive
    // Hence, we only update balanceEntries before and after upgrades
    private stable var balanceEntries: [(Principal, Nat)] = [];
    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash); // (InitialSize, EqualityCheck, HashFunction)

    // Deposit tokens to the owner
    if (balances.size() < 1) {
        balances.put(owner, totalSupply);
    };

    public query func balanceOf(account : Principal) : async Nat {
        // Default return value of .get is ?Type, meaning, either Type or null.
        // Hence we need to convert the ?Nat type here to Nat
        var balance : Nat = switch (balances.get(account)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    // Giveaway tokens (Update method)
    // Shared methods are those that can also be called by other actors
    // By default, all public methods are shared
    // We can use shared method to identify the principal id of the canister calling it
    public shared(msg) func payOut() : async Text {
        // Debug.print(debug_show(msg));
        // Check whether the current user has not redeemed already
        if (balances.get(msg.caller) == null) {
            let freeTokenAmount = 10000;
            let result = await transfer(msg.caller, freeTokenAmount);
            return result;
        } else {
            return "Already Claimed!";
        }
    };

    // Transfer Tokens from the function caller to another id
    public shared(msg) func transfer(to : Principal, amount : Nat) : async Text {
        let fromBal = await balanceOf(msg.caller);
        // Check for sufficient balance
        if (fromBal > amount) {
            
            // Update balance of the sender
            let newBal : Nat = fromBal - amount;
            balances.put(msg.caller, newBal);
            // Update the balance of reciever
            let newToBal = (await balanceOf(to)) + amount;
            balances.put(to, newToBal);

            return "Success!";
        } else {
            return "Insufficient Balance!"
        };
    };
    
    // Back-up and restore the ledger on upgrade (SYSTEM FUNCTIONS)
    system func preupgrade() {
        // Convert the hashmap to an array and reassign it
        balanceEntries := Iter.toArray(balances.entries());
    };

    system func postupgrade() {
        // Fetch from the array to the hashmap
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
    };

};
