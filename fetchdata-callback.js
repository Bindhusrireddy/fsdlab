function fetchDataWithCallback(success, callback) {
    setTimeout(() => {
        if (success) {
            const data = { message: "Data fetched successfully", data: [1, 2, 3, 4, 5] };
            callback(null, data); 
        } else {
            const error = "Error: Failed to fetch data from API";
            callback(error, null); 
        }
    }, 2000);  
}
function handleResponse(error, data) {
    if (error) {
        console.log(error); 
    } else {
        console.log(data);  
    }
}
console.log("Testing success scenario:");
fetchDataWithCallback(true, handleResponse);
setTimeout(() => {
    console.log("\nTesting failure scenario:");
    fetchDataWithCallback(false, handleResponse);
}, 2500); 
