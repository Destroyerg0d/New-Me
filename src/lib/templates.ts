export interface TemplateField {
  id: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'slider' | 'table' | 'textarea';
  label: string;
  prompt: string;
  required?: boolean;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: any;
  tableColumns?: { key: string; label: string; type: string }[];
}

export interface Template {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'onboarding';
  category: string;
  fields: TemplateField[];
  motivationalQuote?: string;
}

export const templates: Template[] = [
  {
    id: 'daily-power-system',
    title: 'Daily Power System',
    description: 'Track your daily energy, focus, and progress toward becoming your best self.',
    frequency: 'daily',
    category: 'Power System',
    motivationalQuote: "Today is the day you get 1% better. Small steps lead to giant leaps.",
    fields: [
      {
        id: 'energy_level',
        type: 'slider',
        label: 'Energy Level',
        prompt: 'How energized do you feel today?',
        min: 1,
        max: 10,
        defaultValue: 5,
        required: true
      },
      {
        id: 'focus_level',
        type: 'slider',
        label: 'Focus Level',
        prompt: 'How focused and clear is your mind?',
        min: 1,
        max: 10,
        defaultValue: 5,
        required: true
      },
      {
        id: 'confidence_level',
        type: 'slider',
        label: 'Confidence Level',
        prompt: 'How confident do you feel about tackling your goals?',
        min: 1,
        max: 10,
        defaultValue: 5,
        required: true
      },
      {
        id: 'daily_wins',
        type: 'textarea',
        label: 'Today\'s Wins',
        prompt: 'What are 3 things you accomplished or are proud of today?',
        required: true
      },
      {
        id: 'challenges_faced',
        type: 'textarea',
        label: 'Challenges & Lessons',
        prompt: 'What challenges did you face? What did you learn?',
        required: false
      },
      {
        id: 'tomorrow_focus',
        type: 'text',
        label: 'Tomorrow\'s Priority',
        prompt: 'What\'s the ONE thing you want to focus on tomorrow?',
        required: true
      },
      {
        id: 'habits_completed',
        type: 'table',
        label: 'Habit Tracker',
        prompt: 'Track your daily habits and routines',
        tableColumns: [
          { key: 'habit', label: 'Habit', type: 'text' },
          { key: 'completed', label: 'Completed', type: 'boolean' },
          { key: 'notes', label: 'Notes', type: 'text' }
        ]
      }
    ]
  },
  {
    id: 'weekly-nuclear-system',
    title: 'Weekly Nuclear System',
    description: 'Deep weekly reflection and planning to maximize your growth trajectory.',
    frequency: 'weekly',
    category: 'Nuclear System',
    motivationalQuote: "This week is your chance to level up. What legacy will you build?",
    fields: [
      {
        id: 'week_rating',
        type: 'slider',
        label: 'Week Overall Rating',
        prompt: 'How would you rate this week overall?',
        min: 1,
        max: 10,
        defaultValue: 5,
        required: true
      },
      {
        id: 'biggest_win',
        type: 'textarea',
        label: 'Biggest Win',
        prompt: 'What was your biggest accomplishment this week?',
        required: true
      },
      {
        id: 'biggest_lesson',
        type: 'textarea',
        label: 'Biggest Lesson',
        prompt: 'What was the most important thing you learned?',
        required: true
      },
      {
        id: 'growth_areas',
        type: 'textarea',
        label: 'Areas for Growth',
        prompt: 'Where do you see opportunities to improve next week?',
        required: true
      },
      {
        id: 'next_week_goals',
        type: 'table',
        label: 'Next Week Goals',
        prompt: 'Set 3-5 specific goals for next week',
        tableColumns: [
          { key: 'goal', label: 'Goal', type: 'text' },
          { key: 'priority', label: 'Priority (1-5)', type: 'number' },
          { key: 'deadline', label: 'Deadline', type: 'text' }
        ]
      },
      {
        id: 'life_pillars_review',
        type: 'table',
        label: 'Life Pillars Check-in',
        prompt: 'Rate your progress in each life area',
        tableColumns: [
          { key: 'area', label: 'Life Area', type: 'text' },
          { key: 'current_rating', label: 'Current (1-10)', type: 'number' },
          { key: 'target_rating', label: 'Target (1-10)', type: 'number' },
          { key: 'action_needed', label: 'Action Needed', type: 'text' }
        ]
      }
    ]
  },
  {
    id: 'onboarding-profile',
    title: 'New Me Profile Setup',
    description: 'Let\'s set up your personal growth foundation and define your vision.',
    frequency: 'onboarding',
    category: 'NEW-ME',
    motivationalQuote: "Every master was once a beginner. Every pro was once an amateur. Every icon was once an unknown.",
    fields: [
      {
        id: 'life_goal',
        type: 'textarea',
        label: 'Ultimate Life Goal',
        prompt: 'What is your ultimate life goal? What does success look like to you?',
        required: true
      },
      {
        id: 'one_year_vision',
        type: 'textarea',
        label: '1-Year Vision',
        prompt: 'Where do you see yourself in 1 year?',
        required: true
      },
      {
        id: 'five_year_vision',
        type: 'textarea',
        label: '5-Year Vision',
        prompt: 'Where do you see yourself in 5 years?',
        required: true
      },
      {
        id: 'success_definition',
        type: 'textarea',
        label: 'Personal Success Definition',
        prompt: 'How do YOU define success? What does it mean to you personally?',
        required: true
      },
      {
        id: 'yearly_milestones',
        type: 'table',
        label: 'Yearly Milestones',
        prompt: 'Break down your multi-year goals into yearly milestones',
        tableColumns: [
          { key: 'year', label: 'Year', type: 'text' },
          { key: 'goal', label: 'Goal', type: 'text' },
          { key: 'why', label: 'Why Important', type: 'text' },
          { key: 'progress', label: 'Current Progress', type: 'text' }
        ]
      },
      {
        id: 'life_pillars',
        type: 'table',
        label: 'Life Pillars',
        prompt: 'Rate different areas of your life and set targets',
        tableColumns: [
          { key: 'area', label: 'Life Area', type: 'text' },
          { key: 'current', label: 'Current Rating (1-10)', type: 'number' },
          { key: 'target', label: 'Target Rating (1-10)', type: 'number' }
        ]
      }
    ]
  }
];

export const getTemplateByFrequency = (frequency: Template['frequency']) => {
  return templates.filter(template => template.frequency === frequency);
};

export const getTemplateById = (id: string) => {
  return templates.find(template => template.id === id);
};