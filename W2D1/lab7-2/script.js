//Below text tells JSHint that your code uses ECMAScript 6 specific syntax
/*jshint esversion: 6 */
(function () {
    let createAccountButton;
    let textArea;
    let name;
    let deposit;

    function initialize() {
        createAccountButton = document.getElementById("btn");
        textArea = document.getElementsByTagName("textarea")[0];

        name = document.getElementById("acctname");
        deposit = document.getElementById("deposit");

        createAccountButton.onclick = createAccount;
    }

    function createAccount() {
        //accountInfoList.push(accountModule(name.value, deposit.value));
        accountInfoList.push(accountModule.createNewAccount(name.value, deposit.value));
        var accountsString = '';
        for (const account of accountInfoList) {
            accountsString += 'Account name: ' + account['Account name'] + "  \t\t" + 'Balance: ' + account.Balance + "\n";
        }
        // for(var key in accountInfoList) {
        //     accountsString += accountInfoList[key]['Account name'] + " " + accountInfoList[key].Balance;
        // }
        textArea.value = accountsString;
    }

    // function accountModule(n, b) {
    //     return {
    //         'Account name': n,
    //         Balance: b
    //     };
    // }

    const accountModule = (function () {
        let accountName;
        let balance;

        return {
            createNewAccount: function(n, b) {
                accountName = n;
                balance = b;
                return {'Account name': n, Balance: b};
            }
        };
    })();

    let accountInfoList = [];

    window.onload = initialize;
})();