const baseUrl = 'https://api.elevate.services';

// https://developer.elevate.services/api/spec/analytics/index.html#post-/analytics/calls/call/detail
function usageHistoryGroup(dateFrom, dateTo, sortColumn, descending, accountId, body){
    let url = `${baseUrl}/analytics/usageHistory/calls/group`;

    let searchParams = new URLSearchParams();

    searchParams.append("dateFrom", dateFrom + 'Z');
    searchParams.append("dateTo", dateTo + 'Z');
    if(sortColumn) searchParams.append("sortColumn", sortColumn);
    if(descending) searchParams.append("descending", descending);
    if(accountId) searchParams.append("accountId", accountId);

    url += `?${searchParams.toString()}`;
    console.log(response.json());
    return makeRequest("POST", url, body).then( response => response.json());
}
