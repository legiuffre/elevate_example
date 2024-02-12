///////////////////////////////
// on load
///////////////////////////////
if (!isAuthorized()) {
    window.location.href = "../../auth/s2s/auth.html"
}


//////////////////////////////
// UI event handlers
//////////////////////////////
document.getElementById('logout').addEventListener("click", () => logout(), false);

document.getElementById('usageHistoryGroup').addEventListener("click", onGroupUsageHistory, false);

document.getElementById('clearLog').addEventListener("click", () => document.getElementById('out').innerHTML = '', false);

///////////////////////////////
// Usage History for Group Calls functions
///////////////////////////////
function onGroupUsageHistory() {
    let body = {};

    usageHistoryGroup(
        document.getElementById('dateFromGroupUsageHistory').value,
        document.getElementById('dateToGroupUsageHistory').value,
        document.getElementById('sortColumn').value,
        document.getElementById('descending').value,
        document.getElementById('groupUsageHistoryAccountId').value,
        body ? body : null
    ).then((response) => {
        log(response);
    }).catch((error) => {
        log("Get usage history for group calls failed! " + error);
    });
}
