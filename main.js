// Main App Initialization and Event Handlers

// Dark Mode Toggle
function setupDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    
    if (!toggle) {
        console.error('Dark mode toggle button not found!');
        return;
    }
    
    const html = document.documentElement;

    // Toggle dark mode on click
    toggle.addEventListener('click', function() {
        console.log('Dark mode toggle clicked');
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('dark-mode', isDark ? 'true' : 'false');
        console.log('Dark mode is now:', isDark);
    });
    
    console.log('Dark mode setup complete - button found and listener attached');
}

// Tab Navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabSections = document.querySelectorAll('[id$="-tab"]');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Update active states
            tabButtons.forEach(btn => {
                if (btn.getAttribute('data-tab') === tabName) {
                    btn.classList.remove('tab-inactive');
                    btn.classList.add('tab-active');
                } else {
                    btn.classList.add('tab-inactive');
                    btn.classList.remove('tab-active');
                }
            });

            // Show/hide sections
            tabSections.forEach(section => {
                if (section.id === `${tabName}-tab`) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
}

// Timer Modal Handler
function setupTimerModal() {
    const modal = document.getElementById('timer-modal');
    const addBtn = document.getElementById('add-timer-btn');
    const cancelBtn = document.getElementById('modal-cancel');
    const createBtn = document.getElementById('modal-create');

    const hoursInput = document.getElementById('timer-hours');
    const minutesInput = document.getElementById('timer-minutes');
    const secondsInput = document.getElementById('timer-seconds');
    const labelInput = document.getElementById('timer-label');

    // Open modal
    addBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        minutesInput.focus();
    });

    // Close modal
    const closeModal = () => {
        modal.classList.add('hidden');
        hoursInput.value = 0;
        minutesInput.value = 1;
        secondsInput.value = 0;
        labelInput.value = '';
    };

    cancelBtn.addEventListener('click', closeModal);

    // Click outside modal to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Create timer
    createBtn.addEventListener('click', () => {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        const label = labelInput.value || 'Timer';

        // Validation
        if (hours === 0 && minutes === 0 && seconds === 0) {
            alert('Please enter a valid time');
            return;
        }

        if (hours > 23 || minutes > 59 || seconds > 59) {
            alert('Please enter valid values');
            return;
        }

        timerManager.addTimer(hours, minutes, seconds, label);
        closeModal();
    });

    // Allow Enter key to create timer
    labelInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            createBtn.click();
        }
    });

    // Quick presets (optional enhancement)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            addBtn.click();
        }
    });
}

// Handle window focus to update clock and timers more frequently
function setupWindowFocus() {
    let isActive = true;

    window.addEventListener('focus', () => {
        isActive = true;
        clockManager.updateClock();
        marketManager.render();
    });

    window.addEventListener('blur', () => {
        isActive = false;
    });
}

// Setup responsive behavior
function setupResponsive() {
    const updateLayout = () => {
        const width = window.innerWidth;
        const container = document.getElementById('timers-container');
        const marketsGrid = document.getElementById('markets-grid');
        
        if (width >= 1024) {
            container?.classList.remove('grid-cols-1');
            container?.classList.add('lg:grid-cols-3');
            marketsGrid?.classList.remove('grid-cols-1');
            marketsGrid?.classList.add('lg:grid-cols-3');
        }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Shift + C to toggle clock format
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            clockManager.toggleFormat();
        }

        // Ctrl/Cmd + 1 to go to Clock tab
        if ((e.ctrlKey || e.metaKey) && e.key === '1') {
            e.preventDefault();
            document.querySelector('[data-tab="clock"]').click();
        }

        // Ctrl/Cmd + 2 to go to Markets tab
        if ((e.ctrlKey || e.metaKey) && e.key === '2') {
            e.preventDefault();
            document.querySelector('[data-tab="markets"]').click();
        }
    });
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupDarkMode();
    setupTabNavigation();
    setupTimerModal();
    setupWindowFocus();
    setupResponsive();
    setupKeyboardShortcuts();
    
    // Initial render
    timerManager.render();
    
    console.log('Web Watch initialized successfully! 🕐');
    console.log('Keyboard shortcuts:');
    console.log('  Ctrl+Shift+C - Toggle 24/12 hour format');
    console.log('  Ctrl+1 - Go to Clock tab');
    console.log('  Ctrl+2 - Go to Markets tab');
});

// Persist app state before unload
window.addEventListener('beforeunload', () => {
    timerManager.saveTimers();
});
