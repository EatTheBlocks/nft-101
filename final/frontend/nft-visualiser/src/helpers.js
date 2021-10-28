export async function connect() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = handleAccountsChanged(accounts)
        return account
    } catch(error) {
        if (error.code === 4001) {
            alert('Please connect to metamask to continue');
        } else {
            console.error(error);
        }
    }
}

export function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
    } else {
        // When user changes their account.
        window.ethereum.on("accountsChanged", () => { window.location.reload() });
        // When user changes their network.
        window.ethereum.on("chainChanged", () => { window.location.reload() });

        return accounts[0];
    }
}