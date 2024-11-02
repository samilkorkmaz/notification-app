const apiBaseUrl = 'http://localhost:8000/api';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`${apiBaseUrl}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
					//console.log("data.token:", data.token);
					//console.log(data);
                    window.location.href = 'index.html';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});

async function checkNotifications() {
    const token = localStorage.getItem('token');
	console.log("token:", token);
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch(`${apiBaseUrl}/notifications`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (response.ok) {
            const notificationIcon = document.getElementById('notification-icon');
            const notificationCount = document.getElementById('notification-count');

            if (data.count > 0) {
                notificationIcon.style.display = 'block';
                notificationCount.textContent = data.count;
            } else {
                notificationIcon.style.display = 'none';
            }
        } else {
            console.error('Failed to fetch notifications:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

if (window.location.pathname.endsWith('index.html')) {
    setInterval(checkNotifications, 5000);
    checkNotifications(); // Initial call
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

