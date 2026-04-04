# 🕐 Web Watch - Apple-Styled Clock & Timer App

A beautiful, full-featured web-based clock application with timer management and global stock market hours tracking.

## 🚀 Quick Start

Simply open `index.html` in any modern web browser. No installation, no build process required!

```bash
# macOS
open index.html

# Windows (PowerShell)
start index.html

# Linux
xdg-open index.html

# Or use a Python server
python3 -m http.server 8080
# Visit http://localhost:8080 in your browser
```

## 🌟 Features

### ⏰ Full-Featured Clock
- Real-time digital display with seconds precision
- 12/24 hour format toggle
- Current date display with day of the week
- Apple-inspired design with smooth animations

### ⏱️ Advanced Timer System
- Add unlimited simultaneous timers
- Custom durations (hours, minutes, seconds)
- Optional labels for each timer
- Play/Pause/Reset/Delete controls
- Visual progress bar with animations
- Audio notification when timer completes
- Persistent storage (timers survive browser reload!)

### 🌍 Global Market Hours Tracker
- Track 10 major stock exchanges in real-time
- Live market status (green for open, red for closed)
- Timezone awareness with accurate times
- Time to open/close display
- Beautiful responsive card layout

### 🎨 Beautiful Design
- Apple-inspired UI with clean typography
- Tailwind CSS for modern styling
- Heroicons & Font Awesome icons
- Smooth animations and transitions
- Dark mode support
- Fully responsive (mobile, tablet, desktop)

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+C` | Toggle 24/12 hour format |
| `Ctrl+1` | Jump to Clock tab |
| `Ctrl+2` | Jump to Markets tab |

## 📱 Responsive Design

- **Mobile**: Single-column stacked layout
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid for timers and markets

## 💾 Data Persistence

- Timers automatically saved to browser localStorage
- Timers persist across browser refreshes and sessions
- No data transmission - everything stays on your device

## 🔧 Technical Details

### Stack
- **HTML5** - Semantic markup
- **CSS3 + Tailwind CSS** - Modern styling via CDN
- **Vanilla JavaScript (ES6+)** - No frameworks
- **Heroicons & Font Awesome** - Icon libraries via CDN

### Files
- `index.html` - Main application
- `clock.js` - Clock management
- `timer.js` - Timer logic
- `markets.js` - Market tracking
- `main.js` - App initialization

### No Dependencies
- Zero npm packages
- No build step required
- All assets from CDN
- Works offline (except market data)

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📚 Documentation

Full documentation available in the `/docs` folder:

- **[Quick Start Guide](./docs/QUICK_START.md)** - Get started in 3 minutes
- **[Setup & Usage](./docs/SETUP.md)** - Detailed instructions and troubleshooting
- **[Features](./docs/FEATURES.md)** - Complete feature breakdown (100+ points)
- **[Overview](./docs/OVERVIEW.md)** - Project statistics and overview
- **[Dark Mode Guide](./docs/DARK_MODE.md)** - Dark mode features
- **[Dark Mode Technical Fix](./docs/DARK_MODE_FIX.md)** - Technical details

## 🎯 Use Cases

- **Kitchen**: Cooking timers for pasta, eggs, baking
- **Work**: Meeting reminders, Pomodoro time management
- **Fitness**: Workout interval timers, rest periods
- **Trading**: Stock market hours tracking
- **Study**: Focus intervals, study sessions

## ✨ Highlights

✅ No login required  
✅ No tracking or analytics  
✅ No ads  
✅ Completely free  
✅ Open source (you have the code)  
✅ Works offline  
✅ Mobile-friendly  
✅ Professional quality  
✅ Production-ready  

## 🚀 Future Enhancements

- Voice timer announcements
- Multiple alarm sounds
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

For more troubleshooting, see [SETUP.md](./docs/SETUP.md#-troubleshooting).

---

Enjoy your Web Watch! ⏰✨
