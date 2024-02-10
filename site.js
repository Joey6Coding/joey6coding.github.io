const hours = new Date().getHours()

if(hours >= 4 && hours < 12) {
    welcome.textContent = 'Good Morning';
} else if(hours >= 12 && hours < 17) {
    welcome.textContent = 'Good Afternoon';
} else if(hours >= 17 || hours < 4) {
    welcome.textContent = 'Good Evening';
}
