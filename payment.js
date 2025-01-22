let users = {
    'john': { balance: 1000, email: 'john@example.com' },
    'jane': { balance: 500, email: 'jane@example.com' }
};
function authenticateUser(username, callback) {
    setTimeout(() => {
        if (users[username]) {
            console.log('User authenticated.');
            callback(null, username); // Proceed to next step with username
        } else {
            callback('Authentication failed. User not found.', null);
        }
    }, 1000);
}
function verifyPaymentMethod(paymentMethod, callback) {
    setTimeout(() => {
        const validMethods = ['credit', 'debit', 'paypal'];
        if (validMethods.includes(paymentMethod)) {
            console.log('Payment method verified.');
            callback(null, paymentMethod); // Proceed to next step
        } else {
            callback('Invalid payment method.', null);
        }
    }, 1000); 
}

function processPayment(username, amount, callback) {
    setTimeout(() => {
        const user = users[username];
        if (user.balance >= amount) {
            console.log('Payment processed successfully.');
            user.balance -= amount;
            callback(null, amount);
        } else {
            callback('Insufficient balance.', null);
        }
    }, 1000);
}

function updateUserBalance(username, callback) {
    setTimeout(() => {
        const user = users[username];
        console.log(`User balance updated. New balance: ${user.balance}`);
        callback(null); 
    }, 1000); 
}

function notifyUser(username, callback) {
    setTimeout(() => {
        const user = users[username];
        console.log(`Notification sent to ${user.email}: Payment successful!`);
        callback(null); 
    }, 1000); 
}

function processPaymentSequence(username, paymentMethod, amount) {
    authenticateUser(username, (authError, username) => {
        if (authError) {
            console.error(authError);
            return;
        }

        verifyPaymentMethod(paymentMethod, (methodError, paymentMethod) => {
            if (methodError) {
                console.error(methodError);
                return;
            }

            processPayment(username, amount, (paymentError, amount) => {
                if (paymentError) {
                    console.error(paymentError);
                    return;
                }

                updateUserBalance(username, (updateError) => {
                    if (updateError) {
                        console.error(updateError);
                        return;
                    }

                    notifyUser(username, (notificationError) => {
                        if (notificationError) {
                            console.error(notificationError);
                        } else {
                            console.log('Payment processing completed successfully.');
                        }
                    });
                });
            });
        });
    });
}
