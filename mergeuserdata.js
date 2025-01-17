function mergeUserData(...objects) {
    return { ...objects.reduce((merged, obj) => ({ ...merged, ...obj }), {}) };
}
const userDetails = { name: 'CVR', age: 25 };
const userAddress = { address: 'Mangalpally', city: 'Hyderabad' };
const userPreferences = { theme: 'Engineering Edu', language: 'EN' };
const mergedUserData = mergeUserData(userDetails, userAddress, userPreferences);
console.log(mergedUserData);

