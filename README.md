# New Me - Personal Growth App 🚀

A comprehensive self-improvement web application designed to help you track progress, build habits, and become the best version of yourself through guided check-ins, gamification, and beautiful analytics.

## 🌟 Features

### 📋 Onboarding Flow
- Multi-step wizard to define your life goals and vision
- Set up yearly milestones and life pillars
- Create your personal success definition

### 📅 Check-in System
- **Daily Power System**: Track energy, focus, confidence, and daily wins
- **Weekly Nuclear System**: Deep reflection and goal planning
- **Monthly & Yearly Reviews**: Long-term vision and milestone tracking

### 📊 Progress Analytics
- Beautiful charts showing your improvement over time
- Life areas progress rings (Health, Career, Learning, Relationships)
- Habit completion tracking with visual feedback

### 🏆 Gamification Engine
- Daily and weekly streak counters
- Achievement badges and milestones
- Progress bars for different life areas
- Motivational quotes and celebrations

### 🎨 Beautiful Design
- Dark theme with motivational gradients
- Smooth animations and transitions
- Responsive design for all devices
- Custom design system with semantic tokens

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Charts**: Recharts for beautiful data visualization
- **Forms**: React Hook Form for dynamic template forms
- **Routing**: React Router DOM
- **State Management**: React Query for data fetching
- **Animation**: Custom CSS animations and transitions
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-me-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view the app

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/
│   │   └── dynamic-form.tsx      # Template-based form renderer
│   ├── layout/
│   │   └── navigation.tsx        # Sidebar navigation
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress-ring.tsx
│       ├── stat-card.tsx
│       └── ...
├── lib/
│   ├── templates.ts              # Check-in templates and forms
│   └── utils.ts                  # Utility functions
├── pages/
│   ├── Dashboard.tsx             # Main dashboard with analytics
│   ├── DailyCheckin.tsx          # Daily check-in form
│   ├── WeeklyReview.tsx          # Weekly reflection form
│   ├── Progress.tsx              # Progress analytics page
│   ├── Onboarding.tsx            # Initial setup flow
│   └── Index.tsx                 # Landing page
└── App.tsx                       # Main app with routing
```

## 🎯 Templates System

The app uses a flexible template system for different check-in types:

### Template Structure
```typescript
interface Template {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'onboarding';
  category: string;
  fields: TemplateField[];
  motivationalQuote?: string;
}
```

### Field Types
- **Text/Textarea**: Open-ended responses
- **Slider**: Numeric ratings (1-10)
- **Boolean**: Yes/no checkboxes
- **Select**: Dropdown options
- **Table**: Dynamic rows for habits, goals, etc.

## 🎨 Design System

### Colors
- **Primary**: Motivational green gradient
- **Success**: Achievement and progress
- **Warning**: Attention and focus areas
- **Semantic tokens**: All colors use HSL CSS variables

### Animations
- **Fade-in**: Smooth content loading
- **Slide-up**: Page transitions
- **Bounce-in**: Achievement celebrations
- **Glow**: Interactive elements

### Components
- **Card Glow**: Elevated cards with shadows
- **Progress Rings**: Circular progress indicators
- **Stat Cards**: Metric display with trends
- **Gradient Buttons**: Motivational call-to-actions

## 🔧 Customization

### Adding New Templates
1. Open `src/lib/templates.ts`
2. Add new template to the `templates` array
3. Define fields with appropriate types
4. Include motivational quotes

### Creating New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/layout/navigation.tsx`

### Styling
- Modify `src/index.css` for global design tokens
- Update `tailwind.config.ts` for theme extensions
- Create new UI components in `src/components/ui/`

## 📱 Features in Detail

### Daily Check-ins
- Energy, focus, and confidence sliders
- Daily wins and challenges reflection
- Tomorrow's priority setting
- Habit tracking table

### Weekly Reviews
- Overall week rating
- Biggest wins and lessons
- Goal setting for next week
- Life pillars assessment

### Progress Analytics
- Line charts for trends over time
- Bar charts for habit completion
- Pie charts for time distribution
- Achievement badge system

### Gamification
- Streak counters with fire emojis
- Progress rings for life areas
- Motivational quotes rotation
- Celebration animations

## 🎯 Personal Growth Philosophy

New Me is built on the principle that consistent small improvements lead to transformational change. The app encourages:

- **Daily reflection** for awareness
- **Weekly planning** for direction
- **Monthly reviews** for course correction
- **Yearly visioning** for long-term growth

## 📊 Data & Privacy

- All data is stored locally in browser storage
- No external tracking or analytics
- 100% private and personal
- Export functionality for data portability

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with one click

### Environment Variables
Create `.env.local` for any configuration:
```
# Add any needed environment variables here
```

## 🤝 Contributing

This is a personal growth app template. Feel free to:
- Customize templates for your needs
- Add new check-in types
- Enhance the UI/UX
- Add new analytics views

## 📄 License

MIT License - Feel free to use this for your personal growth journey!

---

**Start your transformation today. Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown.**

*Built with ❤️ for personal growth enthusiasts*