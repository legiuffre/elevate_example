const baseUrl = 'https://api.elevate.services';

// https://developer.elevate.services/api/spec/meeting/index.html#post-/meetings/v1/meeting/start/details
function startMeeting(){
    const url = `${baseUrl}/meetings/v1/meeting/start/details`;

    return makeRequest('POST', url).then((response) => response.json());
}

// https://developer.elevate.services/api/spec/meeting/index.html#get-/meetings/v1/user
function getUserDetails(){
    const url = `${baseUrl}/meetings/v1/user`;

    return makeRequest('GET', url).then((response) => response.json());
}

// https://developer.elevate.services/api/spec/meeting/index.html#get-/meetings/v1/meeting/{meetingCode}
function getMeetingDetails(meetingCode){
    const url = `${baseUrl}/meetings/v1/meeting/${meetingCode}`;

    return makeRequest('GET', url).then((response) => response.json());
}