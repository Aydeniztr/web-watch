// Clock Management
class ClockManager {
    constructor() {
        this.format24Hour = true;
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        
        // Digital clock
        let hours = now.getHours();
        let period = 'AM';
        
        if (!this.format24Hour) {
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
        }
        
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const displayHours = String(hours).padStart(2, '0');
        
        const clockElement = document.getElementById('digital-clock');
        const periodElement = document.getElementById('clock-period');
        
        if (clockElement) {
            clockElement.textContent = `${displayHours}:${minutes}:${seconds}`;
        }
        
        if (periodElement) {
            periodElement.textContent = period;
        }
        
        // Date display
        this.updateDate(now);
    }

    updateDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = date.toLocaleDateString('en-US', options);
        const dateElement = document.getElementById('date-display');
        
        if (dateElement) {
            dateElement.textContent = dateString;
        }
    }

    toggleFormat() {
        this.format24Hour = !this.format24Hour;
        const btn = document.getElementById('toggle-format');
        if (btn) {
            btn.textContent = this.format24Hour ? '24H' : '12H';
        }
        this.updateClock();
    }
}

// Initialize clock
const clockManager = new ClockManager();

// Handle format toggle
document.getElementById('toggle-format').addEventListener('click', () => {
    clockManager.toggleFormat();
});
