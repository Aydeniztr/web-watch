# Dark Mode Guide - Web Watch

## 🌙 Overview

Web Watch now includes a beautiful dark mode that respects your system preference and allows manual toggling.

## ✨ Features

### Automatic Theme Detection
- On first visit, Web Watch automatically detects your system theme preference
- If your system is in dark mode, the app loads in dark mode
- If your system is in light mode, the app loads in light mode

### Manual Toggle
- Click the **sun/moon icon** in the top-right corner of the navigation bar
- **☀️ Sun icon** = Light mode active
- **🌙 Moon icon** = Dark mode active

### Persistent Preference
- Your choice is automatically saved to browser localStorage
- The same theme loads every time you visit
- Switch devices/browsers for independent preferences

## 🎨 What Changes

### Light Mode (Default)
- White backgrounds
- Dark text
- Blue accents
- Green for open markets
- Red for closed markets

### Dark Mode
- Dark slate backgrounds (#020617, #0F172A, #0F1729)
- Light text (#F1F5F9, #E2E8F0)
- Same blue accents
- Same green/red for markets
- Professional color scheme

## 🔄 Smooth Transitions

- Color changes animate smoothly (300ms)
- No jarring flashes or flicker
- Professional transition effects
- Works on all browsers

## 📱 All Elements Styled

### Fully Dark Mode Compatible
- ✅ Navigation bar
- ✅ Digital clock display
- ✅ Timer cards and buttons
- ✅ Market cards
- ✅ Modal dialogs
- ✅ Input fields
- ✅ Progress bars
- ✅ Icons and badges
- ✅ Text and headings

## 💾 How It Works

### Initial Load
```javascript
// Check localStorage for saved preference
if (localStorage.getItem('dark-mode') === 'true') {
    // User previously selected dark mode
    document.documentElement.classList.add('dark');
}
// Fallback to system preference if not saved
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // System is in dark mode
    document.documentElement.classList.add('dark');
}
```

### On Toggle
```javascript
// Add/remove 'dark' class
const isDark = document.documentElement.classList.toggle('dark');
// Save preference
localStorage.setItem('dark-mode', isDark);
```

### Tailwind Integration
```html
<!-- Light mode (default) -->
<button class="bg-blue-500 text-white">
    Click me
</button>

<!-- Dark mode (when 'dark' class on <html>) -->
<button class="bg-blue-500 dark:bg-blue-600 text-white">
    Click me
</button>
```

## 🎯 Use Cases

### When to Use Dark Mode
- Evening/night browsing
- Reduced eye strain
- Reduced blue light
- Battery saving (on OLED screens)
- Personal preference

### When to Use Light Mode
- Daytime use
- Bright environments
- Personal preference
- Better visibility on LCDs

## 🔧 Customization

If you want to modify dark mode colors, edit the CSS in `index.html`:

```css
/* Dark mode backgrounds */
.dark {
    /* Background colors */
}

/* Dark mode specific elements */
.dark .your-class {
    /* Custom dark mode styles */
}
```

## 📊 Color Palette

### Dark Mode Slate Colors
- `#020617` - Darkest (bg-slate-950)
- `#0F172A` - Dark (bg-slate-900)
- `#1E293B` - Medium Dark (bg-slate-800)
- `#334155` - Medium (bg-slate-700)
- `#F1F5F9` - Light text (text-slate-100)
- `#E2E8F0` - Medium light text (text-slate-200)

### Accent Colors (Both Modes)
- **Blue**: #3B82F6 (Primary action)
- **Green**: #22C55E (Market open)
- **Red**: #EF4444 (Market closed)
- **Yellow**: #FBBF24 (Moon icon)

## 🚀 Browser Support

Dark mode works on:
- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 13.1+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Dark mode not staying after reload?
- Check if localStorage is enabled in browser settings
- Privacy/Incognito mode may not persist localStorage
- Try clearing cache and reloading

### Colors look wrong?
- Ensure browser is up to date
- Check if browser has dark mode support
- Try clearing browser cache

### Toggle button not working?
- Ensure JavaScript is enabled
- Check browser console for errors (F12)
- Try refreshing the page

## 🎓 Tips & Tricks

### Keyboard Shortcut
Currently, there's no keyboard shortcut for dark mode, but you can easily add one!

### System Preference
Your OS dark/light preference is respected on first visit. Change your system theme to see it reflected.

### Different Per Device
Your preference is stored locally, so:
- Desktop can be in light mode
- Mobile can be in dark mode
- Laptop can be different again
Each device remembers its own preference.

## 📝 Notes

- Dark mode uses Tailwind CSS's built-in dark mode
- No custom theme variables or CSS-in-JS needed
- All styling is in standard CSS with `dark:` prefix
- Performance impact is minimal (CSS only, no JavaScript overhead)

## ✨ Enjoy!

Dark mode is now an integral part of Web Watch. Use whichever theme suits you best!

🌙 Happy watching! 🌙
