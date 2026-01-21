# Tailwind CSS Color Configuration (v3.4.1)

## Overview
This project uses **Tailwind CSS v3.4.1** with a comprehensive custom color palette defined in `tailwind.config.js`.

## Color Palette

### Primary Colors (Blue)
Modern blue palette for primary actions and branding.
- `primary-50` to `primary-950` (11 shades)
- Usage: `bg-primary-600`, `text-primary-500`, `border-primary-400`

### Secondary Colors (Purple/Violet)
Purple/violet palette for secondary actions and accents.
- `secondary-50` to `secondary-950` (11 shades)
- Usage: `bg-secondary-600`, `text-secondary-500`, `border-secondary-400`

### Accent Colors (Teal)
Vibrant teal palette for highlights and special elements.
- `accent-50` to `accent-950` (11 shades)
- Usage: `bg-accent-600`, `text-accent-500`, `border-accent-400`

### Status Colors

#### Success (Green)
- `success-50` to `success-950` (11 shades)
- Usage: Success messages, confirmations, positive states

#### Warning (Amber/Orange)
- `warning-50` to `warning-950` (11 shades)
- Usage: Warnings, cautions, attention-required states

#### Error (Red)
- `error-50` to `error-950` (11 shades)
- Usage: Errors, destructive actions, critical alerts

### Neutral Colors (Gray)
Modern gray scale for text, backgrounds, and borders.
- `neutral-50` to `neutral-950` (11 shades)
- Usage: Text, backgrounds, borders, dividers

## Usage Examples

### Buttons
```tsx
// Primary Button
<button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
  Primary Button
</button>

// Secondary Button
<button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
  Secondary Button
</button>

// Accent Button
<button className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
  Accent Button
</button>
```

### Alerts
```tsx
// Success Alert
<div className="bg-success-100 border-l-4 border-success-600 text-success-800 p-4 rounded">
  <p className="font-semibold">Success!</p>
  <p className="text-sm">Your action was completed successfully.</p>
</div>

// Warning Alert
<div className="bg-warning-100 border-l-4 border-warning-600 text-warning-800 p-4 rounded">
  <p className="font-semibold">Warning!</p>
  <p className="text-sm">Please review this information carefully.</p>
</div>

// Error Alert
<div className="bg-error-100 border-l-4 border-error-600 text-error-800 p-4 rounded">
  <p className="font-semibold">Error!</p>
  <p className="text-sm">Something went wrong. Please try again.</p>
</div>
```

### Cards
```tsx
<div className="bg-neutral-50 border border-neutral-200 rounded-xl shadow-lg p-6">
  <h3 className="text-xl font-bold text-neutral-900 mb-2">Card Title</h3>
  <p className="text-neutral-600 mb-4">
    This is an example card using neutral colors.
  </p>
  <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
    Learn More
  </button>
</div>
```

### Text Styling
```tsx
<h1 className="text-neutral-900">Primary Heading</h1>
<p className="text-neutral-600">Secondary text content</p>
<span className="text-neutral-400">Muted or tertiary text</span>
```

### Gradients
```tsx
<div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-lg">
  Gradient Background
</div>
```

## Color Selection Guidelines

### When to Use Each Color

- **Primary**: Main actions, primary buttons, links, active states
- **Secondary**: Secondary actions, alternative buttons, supporting elements
- **Accent**: Highlights, special features, call-to-action elements
- **Success**: Confirmations, success messages, positive feedback
- **Warning**: Warnings, cautions, important notices
- **Error**: Errors, destructive actions, critical alerts
- **Neutral**: Text, backgrounds, borders, dividers

### Shade Selection

- **50-200**: Very light backgrounds, subtle highlights
- **300-400**: Light backgrounds, hover states, disabled states
- **500-600**: Primary colors, buttons, active elements
- **700-800**: Dark text, hover states on light backgrounds
- **900-950**: Very dark text, dark backgrounds

## Customization

To customize colors, edit `tailwind.config.js` and modify the color values in the `theme.extend.colors` section:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#22c55e', // Change to your desired color
        }
      }
    }
  }
}
```

## Demo

Run the development server to see a live demo of all colors:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the color palette showcase.

## Configuration Files

- **tailwind.config.js** - Main Tailwind configuration with custom colors
- **src/index.css** - Tailwind directives and base styles
- **postcss.config.js** - PostCSS configuration (auto-generated)
