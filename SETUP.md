# Web Watch - Setup & Usage Guide

## ✅ Quick Start

### 1. Open the Application
Simply open `index.html` in any modern web browser:
```bash
# On macOS
open index.html

# On Windows (PowerShell)
start index.html

# On Linux
xdg-open index.html

# Or use any HTTP server
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### 2. No Installation Required
- No npm install
- No build step
- No server setup
- Just open in browser!

---

## 🕐 Clock Tab Usage

### Display Current Time
1. The clock updates automatically every second
2. Shows time in large, readable format: `HH:MM:SS`
3. Displays current date below the time

### Toggle Time Format
- Click the **"24H"** or **"12H"** button to switch formats
- 24-hour: Shows `00:00:00` to `23:59:59`
- 12-hour: Shows `12:00:00 AM` to `11:59:59 PM`
- Or use keyboard shortcut: `Ctrl+Shift+C`

---

## ⏱️ Add a Timer

### Step-by-Step
1. Click **"+ Add Timer"** button
2. Enter the timer duration:
   - **Hours**: 0-23
   - **Minutes**: 0-59
   - **Seconds**: 0-59
3. (Optional) Add a label like "Cooking pasta"
4. Click **"Create Timer"**

### Quick Example
To set a 5-minute timer:
- Hours: `0`
- Minutes: `5`
- Seconds: `0`
- Label: `Break` (optional)

### Timer Controls
Once created, each timer card shows:

| Button | Action |
|--------|--------|
| ▶️ Play | Start the timer |
| ⏸️ Pause | Pause the timer |
| 🔄 Reset | Return to original duration |
| 🗑️ Delete | Remove the timer |

### Visual Indicators
- **Progress bar**: Shows how much time has passed
- **Large number**: Time remaining in `HH:MM:SS` format
- **Emoji (🎉)**: Appears when timer completes

### Audio Alert
When a timer reaches zero:
- **Beep sound** automatically plays
- Card **pulses** with animation
- You can start/delete the timer anytime

---

## 🌍 Market Hours Tab

### View All Markets
1. Click **"Market Hours"** tab
2. See all 10 stock exchanges with their status

### Reading Market Cards

Each card shows:
- **Market Name**: NYSE, BIST, EURONEXT, etc.
- **Country Flag**: 🇺🇸, 🇹🇷, 🇪🇺, etc.
- **Status Badge**: 
  - 🟢 **Open** (green card)
  - 🔴 **Closed** (red card)
- **Opening Time**: When market opens (local time)
- **Closing Time**: When market closes (local time)
- **Time to Event**: 
  - If open: "Closes at 16:00" + time remaining
  - If closed: "Opens at 09:30" + time until opening
- **Timezone**: Market timezone (e.g., `America/New_York`)

### Example
```
NYSE (New York Stock Exchange)
🇺🇸 USA

Status: 🟢 Open
Times: 09:30 - 16:00
Closes at 16:00
2h 15m

America/New_York
```

### Responsive Layout
- **Mobile**: Cards stack vertically (1 column)
- **Tablet**: 2 columns wide
- **Desktop**: 3 columns wide

---

## ⌨️ Keyboard Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+1` | Jump to Clock & Timers tab |
| `Ctrl+2` | Jump to Market Hours tab |
| `Ctrl+Shift+C` | Toggle 12/24 hour clock format |
| `Enter` | Create timer (when modal open) |
| `Esc` | Close modal (on most browsers) |

---

## 💾 Data Saving

### Automatic Saving
- **Timers** are automatically saved to browser storage
- Your timers persist even if you close the browser
- No login required, no cloud sync

### How It Works
1. Every time you create/modify a timer, it's saved
2. On page refresh, timers reload automatically
3. Data stored locally in your browser only

### What Gets Saved
✅ Timer durations  
✅ Timer labels  
✅ Timer state (running/paused)  
✅ Time remaining  

### What Doesn't Get Saved
❌ Clock settings (12/24 hour resets)  
❌ Active tab (resets to Clock tab)  

---

## 🎨 Theme & Appearance

### Colors
- **Blue**: Action buttons, accents
- **Green**: Open markets, positive status
- **Red**: Closed markets, warnings
- **Gray**: Default text and backgrounds

### Typography
- **Large Clock**: San Francisco Mono font
- **Body Text**: Apple's SF Pro font
- **All text**: Smooth antialiased rendering

### Responsive
- Works on phones (320px+)
- Works on tablets (768px+)
- Works on desktops (1024px+)

---

## 🔧 Troubleshooting

### Timers Not Saving?
1. Check if browser allows localStorage
2. Open browser settings → Privacy
3. Ensure "Cookies and Site Data" is enabled
4. Try clearing cache and reloading page

### Clock Shows Wrong Time?
1. Check your computer's system time
2. Ensure timezone is correct in system settings
3. Browser cannot override system time

### Markets Showing Wrong Status?
1. Ensure your system time is accurate
2. Market times use your browser's timezone
3. Check if it's a market holiday
4. For accuracy, use `America/New_York` or similar

### Beep Sound Not Working?
1. Check browser volume settings
2. Audio context may require user interaction
3. Some browsers require HTTPS for audio (check URL)
4. Check browser console (F12) for errors

### Button Not Working?
1. Try refreshing the page
2. Check browser console for JavaScript errors (F12)
3. Ensure JavaScript is enabled
4. Try a different browser

---

## 📱 Mobile Tips

### Best Experience
1. Use Chrome or Safari (latest versions)
2. Full-screen app: Tap menu → "Add to home screen"
3. Landscape mode works best for clock display
4. Timers can run in background

### Persistent Timers
- iOS: Timers continue in background
- Android: Timers continue in background
- Lock screen won't stop timers

### Offline Usage
- Clock works offline
- Timers work offline
- Markets require internet (for first load)

---

## 🌐 Browser Compatibility

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ | 90+ |
| Firefox | ✅ | 88+ |
| Safari | ✅ | 14+ |
| Edge | ✅ | 90+ |
| Opera | ✅ | 76+ |
| Mobile Chrome | ✅ | Latest |
| Mobile Safari | ✅ | Latest |

---

## 📊 File Structure

```
web-watch/
├── index.html          # Main HTML structure
├── clock.js            # Clock display logic
├── timer.js            # Timer management
├── markets.js          # Market hours tracking
├── main.js             # App initialization
├── README.md           # User manual
├── FEATURES.md         # Detailed feature list
├── SETUP.md            # This file
└── TROUBLESHOOTING.md  # Common issues
```

---

## 🎯 Pro Tips

### Multiple Timers
- Use different labels to identify timers
- Colors in progress bar help distinguish them
- Pause one while working on another

### Market Watching
- Watch European markets open in the morning
- Monitor US markets for day trading
- Check Asian markets before US close

### Time Management
- Use Pomodoro technique: 25min work, 5min break
- Set cooking timers with food names
- Use for meeting reminders

---

## 🚀 Performance

- **Fast**: Loads in <1 second
- **Lightweight**: ~50KB total code
- **Smooth**: 60fps animations
- **Efficient**: Minimal CPU usage
- **No ads**: No tracking, no analytics

---

## 📞 Support

Having issues? Check:
1. README.md - General information
2. FEATURES.md - What's available
3. Browser console (F12) - Error messages
4. System time/timezone - May affect timers/markets

---

**Enjoy Web Watch! Happy timing! ⏰**
