// Market Hours Management
const MARKETS = [
    {
        id: 'bist',
        name: 'BIST',
        fullName: 'Borsa Istanbul',
        timezone: 'Europe/Istanbul',
        openTime: '10:00',
        closeTime: '18:00',
        daysOpen: [1, 2, 3, 4, 5], // Monday-Friday
        icon: '📈',
        country: '🇹🇷 Turkey'
    },
    {
        id: 'nyse',
        name: 'NYSE',
        fullName: 'New York Stock Exchange',
        timezone: 'America/New_York',
        openTime: '09:30',
        closeTime: '16:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🗽',
        country: '🇺🇸 USA'
    },
    {
        id: 'nasdaq',
        name: 'NASDAQ',
        fullName: 'NASDAQ Stock Exchange',
        timezone: 'America/New_York',
        openTime: '09:30',
        closeTime: '16:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '📊',
        country: '🇺🇸 USA'
    },
    {
        id: 'lse',
        name: 'LSE',
        fullName: 'London Stock Exchange',
        timezone: 'Europe/London',
        openTime: '08:00',
        closeTime: '16:30',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🏛️',
        country: '🇬🇧 UK'
    },
    {
        id: 'euronext',
        name: 'EURONEXT',
        fullName: 'Euronext (Paris, Amsterdam, Brussels)',
        timezone: 'Europe/Paris',
        openTime: '09:00',
        closeTime: '17:30',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🌍',
        country: '🇪🇺 Europe'
    },
    {
        id: 'dax',
        name: 'DAX',
        fullName: 'Deutsche Börse',
        timezone: 'Europe/Berlin',
        openTime: '08:00',
        closeTime: '22:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🇩🇪',
        country: '🇩🇪 Germany'
    },
    {
        id: 'hkex',
        name: 'HKEX',
        fullName: 'Hong Kong Exchanges and Clearing',
        timezone: 'Asia/Hong_Kong',
        openTime: '09:30',
        closeTime: '16:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🏙️',
        country: '🇭🇰 Hong Kong'
    },
    {
        id: 'jse',
        name: 'JSE',
        fullName: 'Japan Exchange Group',
        timezone: 'Asia/Tokyo',
        openTime: '09:00',
        closeTime: '15:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '⛩️',
        country: '🇯🇵 Japan'
    },
    {
        id: 'asx',
        name: 'ASX',
        fullName: 'Australian Securities Exchange',
        timezone: 'Australia/Sydney',
        openTime: '10:00',
        closeTime: '16:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🦘',
        country: '🇦🇺 Australia'
    },
    {
        id: 'tsx',
        name: 'TSX',
        fullName: 'Toronto Stock Exchange',
        timezone: 'America/Toronto',
        openTime: '09:30',
        closeTime: '16:00',
        daysOpen: [1, 2, 3, 4, 5],
        icon: '🍁',
        country: '🇨🇦 Canada'
    }
];

class MarketStatus {
    constructor(market) {
        this.market = market;
        this.isOpen = false;
        this.nextEvent = '';
        this.timeUntilEvent = '';
        this.update();
        setInterval(() => this.update(), 60000); // Update every minute
    }

    update() {
        const now = new Date();
        const marketTime = this.getMarketTime(now);
        const dayOfWeek = marketTime.getDay();
        
        // Check if market is open today
        if (!this.market.daysOpen.includes(dayOfWeek === 0 ? 7 : dayOfWeek)) {
            this.isOpen = false;
            this.nextEvent = 'Closed (Weekend)';
            return;
        }

        const [openHour, openMin] = this.market.openTime.split(':').map(Number);
        const [closeHour, closeMin] = this.market.closeTime.split(':').map(Number);

        const currentMinutes = marketTime.getHours() * 60 + marketTime.getMinutes();
        const openMinutes = openHour * 60 + openMin;
        const closeMinutes = closeHour * 60 + closeMin;

        if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
            this.isOpen = true;
            this.nextEvent = `Closes at ${this.market.closeTime}`;
            this.timeUntilEvent = this.formatTimeUntilClose(marketTime, closeHour, closeMin);
        } else if (currentMinutes < openMinutes) {
            this.isOpen = false;
            this.nextEvent = `Opens at ${this.market.openTime}`;
            this.timeUntilEvent = this.formatTimeUntil(marketTime, openHour, openMin);
        } else {
            this.isOpen = false;
            // Market closes today, opens tomorrow
            const tomorrow = new Date(marketTime);
            tomorrow.setDate(tomorrow.getDate() + 1);
            this.nextEvent = `Opens tomorrow at ${this.market.openTime}`;
            this.timeUntilEvent = this.formatTimeUntilTomorrow(marketTime, openHour, openMin);
        }
    }

    getMarketTime(now) {
        // Create date in market timezone
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: this.market.timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        const parts = formatter.formatToParts(now);
        const values = {};
        parts.forEach(({ type, value }) => {
            values[type] = value;
        });

        const marketDate = new Date(
            values.year,
            values.month - 1,
            values.day,
            values.hour,
            values.minute,
            values.second
        );
        return marketDate;
    }

    formatTimeUntilClose(now, closeHour, closeMin) {
        const closeMillis = new Date(now);
        closeMillis.setHours(closeHour, closeMin, 0, 0);
        const diff = closeMillis - now;
        return this.formatDifference(diff);
    }

    formatTimeUntil(now, openHour, openMin) {
        const openMillis = new Date(now);
        openMillis.setHours(openHour, openMin, 0, 0);
        const diff = openMillis - now;
        return this.formatDifference(diff);
    }

    formatTimeUntilTomorrow(now, openHour, openMin) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(openHour, openMin, 0, 0);
        const diff = tomorrow - now;
        return this.formatDifference(diff);
    }

    formatDifference(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    }
}

class MarketManager {
    constructor() {
        this.markets = MARKETS.map(market => ({
            ...market,
            status: new MarketStatus(market)
        }));
        this.render();
        setInterval(() => this.render(), 60000); // Update display every minute
    }

    render() {
        const grid = document.getElementById('markets-grid');
        grid.innerHTML = this.markets.map(market => this.createMarketCard(market)).join('');
    }

    createMarketCard(market) {
        const status = market.status;
        status.update();
        
        const bgClass = status.isOpen 
            ? 'bg-market-open dark:bg-market-open-dark border-green-300 dark:border-green-800' 
            : 'bg-market-closed dark:bg-market-closed-dark border-red-300 dark:border-red-800';
        
        const statusClass = status.isOpen 
            ? 'status-open' 
            : 'status-closed';
        
        const statusText = status.isOpen ? '🟢 Open' : '🔴 Closed';
        const statusIcon = status.isOpen 
            ? '<i class="fas fa-circle text-green-500 dark:text-green-400"></i>' 
            : '<i class="fas fa-circle text-red-500 dark:text-red-400"></i>';

        return `
            <div class="market-card ${bgClass} border-2 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all">
                <div class="space-y-4">
                    <!-- Header -->
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center space-x-3 mb-2">
                                <span class="text-3xl">${market.icon}</span>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${market.name}</h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">${market.fullName}</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">${market.country}</p>
                        </div>
                    </div>

                    <!-- Status Badge -->
                    <div class="flex items-center justify-between">
                        <span class="${statusClass}">
                            ${statusIcon}
                            ${statusText}
                        </span>
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400 font-mono">
                            ${market.timezone.split('/')[1]}
                        </span>
                    </div>

                    <!-- Market Hours -->
                    <div class="bg-white dark:bg-slate-700 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-3 space-y-1">
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-600 dark:text-gray-400">Opens:</span>
                            <span class="font-semibold text-gray-900 dark:text-white">${market.openTime}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-600 dark:text-gray-400">Closes:</span>
                            <span class="font-semibold text-gray-900 dark:text-white">${market.closeTime}</span>
                        </div>
                    </div>

                    <!-- Next Event -->
                    <div class="border-t border-opacity-20 dark:border-opacity-30 border-gray-300 dark:border-slate-600 pt-3">
                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300">${status.nextEvent}</p>
                        <p class="text-lg font-bold text-gray-900 dark:text-white mt-1 clock-text">${status.timeUntilEvent}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

const marketManager = new MarketManager();
