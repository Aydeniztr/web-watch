// Timer Management
class Timer {
    constructor(id, hours, minutes, seconds, label = '') {
        this.id = id;
        this.totalSeconds = hours * 3600 + minutes * 60 + seconds;
        this.remainingSeconds = this.totalSeconds;
        this.label = label || 'Timer';
        this.isRunning = false;
        this.intervalId = null;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => this.tick(), 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.intervalId);
        }
    }

    tick() {
        if (this.remainingSeconds > 0) {
            this.remainingSeconds--;
            this.onTick();

            if (this.remainingSeconds === 0) {
                this.complete();
            }
        }
    }

    complete() {
        this.pause();
        this.onComplete();
    }

    reset() {
        this.pause();
        this.remainingSeconds = this.totalSeconds;
        this.onReset();
    }

    formatTime() {
        const hours = Math.floor(this.remainingSeconds / 3600);
        const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
        const seconds = this.remainingSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    getProgress() {
        return (1 - this.remainingSeconds / this.totalSeconds) * 100;
    }

    onTick() {}
    onComplete() {}
    onReset() {}
}

class TimerManager {
    constructor() {
        this.timers = new Map();
        this.nextId = 1;
        this.loadTimers();
    }

    addTimer(hours, minutes, seconds, label = '') {
        const id = this.nextId++;
        const timer = new Timer(id, hours, minutes, seconds, label);
        
        timer.onTick = () => this.renderTimer(id);
        timer.onComplete = () => this.onTimerComplete(id);
        timer.onReset = () => this.renderTimer(id);
        
        this.timers.set(id, timer);
        this.saveTimers();
        this.renderTimer(id);
        return id;
    }

    removeTimer(id) {
        const timer = this.timers.get(id);
        if (timer) {
            timer.pause();
            this.timers.delete(id);
            this.saveTimers();
        }
        this.render();
    }

    getTimer(id) {
        return this.timers.get(id);
    }

    toggleTimer(id) {
        const timer = this.timers.get(id);
        if (timer) {
            if (timer.isRunning) {
                timer.pause();
            } else {
                timer.start();
            }
            this.renderTimer(id);
        }
    }

    resetTimer(id) {
        const timer = this.timers.get(id);
        if (timer) {
            timer.reset();
        }
    }

    onTimerComplete(id) {
        this.playNotification();
        this.renderTimer(id);
        
        // Pulse the timer card
        const card = document.getElementById(`timer-${id}`);
        if (card) {
            card.classList.add('animate-pulse');
        }
    }

    playNotification() {
        // Create a simple beep sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    renderTimer(id) {
        const timer = this.timers.get(id);
        if (!timer) return;

        const container = document.getElementById('timers-container');
        let timerElement = document.getElementById(`timer-${id}`);

        if (!timerElement) {
            timerElement = document.createElement('div');
            timerElement.id = `timer-${id}`;
            timerElement.className = 'timer-card bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all';
            container.appendChild(timerElement);
        }

        const progress = timer.getProgress();
        const isCompleted = timer.remainingSeconds === 0;

        timerElement.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-start justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${timer.label}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Timer</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        ${isCompleted ? '<span class="text-2xl animate-pulse">🎉</span>' : ''}
                    </div>
                </div>

                <div class="text-4xl font-light clock-text text-gray-900 dark:text-white tracking-tight py-3">
                    ${timer.formatTime()}
                </div>

                <div class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 h-full transition-all duration-300" style="width: ${progress}%"></div>
                </div>

                <div class="flex gap-2 pt-2">
                    <button
                        onclick="timerManager.toggleTimer(${id})"
                        class="flex-1 flex items-center justify-center space-x-2 px-3 py-2 ${timer.isRunning ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800' : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'} rounded-lg font-medium transition-colors text-sm"
                    >
                        <i class="fas ${timer.isRunning ? 'fa-pause' : 'fa-play'}"></i>
                        <span>${timer.isRunning ? 'Pause' : 'Start'}</span>
                    </button>
                    <button
                        onclick="timerManager.resetTimer(${id})"
                        class="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg font-medium transition-colors text-sm"
                    >
                        <i class="fas fa-redo"></i>
                        <span>Reset</span>
                    </button>
                    <button
                        onclick="timerManager.removeTimer(${id})"
                        class="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 rounded-lg font-medium transition-colors text-sm"
                    >
                        <i class="fas fa-trash"></i>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        `;

        this.updateContainerState();
    }

    render() {
        const container = document.getElementById('timers-container');
        
        if (this.timers.size === 0) {
            container.innerHTML = `
                <div class="text-center py-12 col-span-full text-gray-400">
                    <i class="fas fa-inbox text-4xl mb-2"></i>
                    <p class="text-lg">No timers yet. Add one to get started!</p>
                </div>
            `;
        } else {
            // Re-render all timers
            this.timers.forEach((timer, id) => {
                this.renderTimer(id);
            });
        }
        
        this.updateContainerState();
    }

    updateContainerState() {
        const container = document.getElementById('timers-container');
        
        if (this.timers.size === 0) {
            container.innerHTML = `
                <div class="text-center py-12 col-span-full text-gray-400">
                    <i class="fas fa-inbox text-4xl mb-2"></i>
                    <p class="text-lg">No timers yet. Add one to get started!</p>
                </div>
            `;
        }
    }

    saveTimers() {
        const data = Array.from(this.timers.entries()).map(([id, timer]) => ({
            id,
            totalSeconds: timer.totalSeconds,
            remainingSeconds: timer.remainingSeconds,
            label: timer.label,
            isRunning: timer.isRunning
        }));
        localStorage.setItem('timers', JSON.stringify(data));
    }

    loadTimers() {
        const data = localStorage.getItem('timers');
        if (data) {
            try {
                const timers = JSON.parse(data);
                timers.forEach(timerData => {
                    const hours = Math.floor(timerData.totalSeconds / 3600);
                    const minutes = Math.floor((timerData.totalSeconds % 3600) / 60);
                    const seconds = timerData.totalSeconds % 60;
                    this.addTimer(hours, minutes, seconds, timerData.label);
                    if (timerData.nextId > this.nextId) {
                        this.nextId = timerData.nextId + 1;
                    }
                });
            } catch (e) {
                console.error('Failed to load timers:', e);
            }
        }
    }
}

const timerManager = new TimerManager();
