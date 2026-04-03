# Web Watch - Apple-Styled Clock & Timer App

A beautiful, full-featured web-based clock application with timer management and global stock market hours tracking.

## 🌟 Features

### Clock Display
- **Full-screen digital clock** with seconds precision
- **Real-time updates** - synchronized to the second
- **12/24 hour format toggle** - switch between formats anytime
- **Current date display** with day of the week
- **Apple-inspired design** with clean typography and smooth animations

### Timer Management
- **Multiple simultaneous timers** - add as many as you need
- **Custom durations** - set hours, minutes, and seconds
- **Timer labels** - name your timers (e.g., "Cooking pasta", "Workout")
- **Play/Pause/Reset controls** - full timer management
- **Visual progress bar** - see progress at a glance
- **Sound notification** - audio alert when timer completes
- **Persistent storage** - timers are saved in browser localStorage
- **Responsive layout** - stacked cards on mobile, grid on desktop

### Market Hours Tracker
- **10 major stock exchanges** monitored in real-time:
  - 🇹🇷 BIST (Borsa Istanbul)
  - 🇺🇸 NYSE & NASDAQ (New York)
  - 🇬🇧 LSE (London Stock Exchange)
  - 🇪🇺 EURONEXT (Paris, Amsterdam, Brussels)
  - 🇩🇪 DAX (Deutsche Börse)
  - 🇭🇰 HKEX (Hong Kong)
  - 🇯🇵 JSE (Japan)
  - 🇦🇺 ASX (Australia)
  - 🇨🇦 TSX (Toronto)

- **Live market status** - green for open, red for closed
- **Timezone awareness** - accurate times in each market's local timezone
- **Time to open/close** - see when markets open or close
- **Beautiful cards** with color-coded status indicators
- **Responsive grid layout** - adapts to your screen size

## 🎨 Design

- **Apple-inspired UI** - clean, minimal, professional
- **Tailwind CSS** - modern, responsive styling
- **Heroicons & Font Awesome** - professional icon set
- **Smooth animations** - polished user experience
- **Dark mode ready** - optimized for readability
- **Full responsive** - works perfectly on mobile, tablet, and desktop

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+C` | Toggle 24/12 hour format |
| `Ctrl+1` | Jump to Clock tab |
| `Ctrl+2` | Jump to Markets tab |

## 🚀 Usage

### Opening the App
1. Open `index.html` in any modern web browser
2. No installation or build process required
3. All resources load from CDN (internet required)

### Adding a Timer
1. Click the **"+ Add Timer"** button
2. Enter hours, minutes, and seconds
3. Optionally add a label (e.g., "Cooking pasta")
4. Click **"Create Timer"**
5. Timer appears as a card with play/pause/reset/delete buttons

### Managing Timers
- **Start/Pause**: Click the play/pause button on any timer
- **Reset**: Click reset to return to the original duration
- **Delete**: Click the trash icon to remove a timer
- Timers are automatically saved to localStorage

### Viewing Market Hours
1. Click the **"Market Hours"** tab in the navigation
2. See all major stock exchanges and their current status
3. Green cards indicate open markets, red indicates closed
4. Each card shows:
   - Market name and country
   - Opening and closing times (in local timezone)
   - Time until next event (open/close)

## 📱 Responsive Design

- **Mobile**: Single-column stacked layout
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid for timers and markets

## 💾 Data Persistence

- **Timers** are automatically saved to browser localStorage
- **Timers persist** across browser refreshes and sessions
- **No data transmission** - everything stays on your device

## 🔧 Technical Details

### Stack
- **HTML5** - semantic markup
- **CSS3 + Tailwind CSS** - modern, responsive styling via CDN
- **Vanilla JavaScript (ES6+)** - no frameworks, fast and lightweight
- **Heroicons & Font Awesome** - icon libraries via CDN

### Files
- `index.html` - Main HTML structure and modals
- `clock.js` - Real-time clock management
- `timer.js` - Timer logic and management
- `markets.js` - Market hours and status tracking
- `main.js` - App initialization and event handlers

### No Dependencies
- Zero npm packages
- No build step required
- All assets from CDN
- Works offline except for market timezone data (which uses browser APIs)

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🎯 Future Enhancements

- Voice timer announcements
- Multiple alarm sounds
- Dark mode toggle
- Timezone selection
- Stopwatch mode
- Pomodoro timer presets
- Market alerts/notifications
- Historical market data

## 📄 License

Free to use and modify!

## 🐛 Troubleshooting

**Timers not saving?**
- Check if localStorage is enabled in browser settings
- Try clearing browser cache and reloading

**Markets showing incorrect time?**
- Ensure your system clock is accurate
- The app uses your browser's timezone settings

**Clock or timers not updating?**
- Refresh the page
- Check browser console for errors (F12)

---

Enjoy your Web Watch! ⏰✨
