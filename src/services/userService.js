// src/services/userService.js
export async function registerUser(email, password) {
    // Simulating a real API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ email, id: 1 });  // Mock successful response
        } else {
          reject('Email and password are required');
        }
      }, 1000);
    });
  }
  