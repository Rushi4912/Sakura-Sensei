# SakuraSensei  - Japanese Learning App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge\&logo=Prisma\&logoColor=white)

**SakuraSensei** is a gamified Japanese learning application that makes language acquisition fun, engaging, and effective through interactive lessons, spaced repetition, and game mechanics.

## ✨ Features

### 🎯 Core Learning

* **Structured Curriculum**: 10+ lessons covering JLPT N5 vocabulary, kanji, and grammar
* **Multi-Modal Learning**: Vocabulary, kanji, grammar points with native audio
* **Interactive Practice**: Flashcards, quizzes, listening exercises, matching games
* **Spaced Repetition System**: Smart review scheduling for optimal memory retention

### 🏆 Gamification

* **XP & Leveling System**: Earn XP, level up from Traveler to Samurai
* **Daily Streaks**: Maintain learning streaks with visual calendar
* **Achievements**: Unlock 10+ badges for various milestones
* **Virtual Economy**: Earn and spend Sakura Coins
* **Progress Tracking**: Detailed dashboard with learning statistics

### 📱 App Features

* **Cross-Platform**: iOS and Android support
* **Offline Mode**: Download lessons for offline learning
* **Dark/Light Mode**: Automatic theme switching
* **Push Notifications**: Daily reminders and achievement alerts
* **Progress Sync**: Cloud sync across devices

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    React Native Mobile App                  │
├─────────────────────────────────────────────────────────────┤
│  • Expo Framework                                           │
│  • React Navigation (Stack, Tabs, Drawer)                   │
│  • Zustand for State Management                             │
│  • React Query for Data Fetching                            │
│  • NativeBase UI Components                                 │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTPS / REST API
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    Express.js API Server                    │
├─────────────────────────────────────────────────────────────┤
│  • TypeScript                                               │
│  • JWT Authentication                                       │
│  • Rate Limiting                                            │
│  • Re Validation                                            │
│  • Error Handling Middleware                                │
└──────────────────────────────┬──────────────────────────────┘
                               │ PostgreSQL Connection
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL Database                      │
├─────────────────────────────────────────────────────────────┤
│  • Normalized Tables                                        │
│  • Prisma ORM                                               │
│  • Database Migrations                                      │
│  • Connection Pooling                                       │
└──────────────────────────────┬──────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* PostgreSQL 14+
* Expo CLI or React Native CLI

### Installation

```bash
git clone https://github.com/swamiabhishek45/japanese-learning.git
cd japanese-learning
npm install
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT License

---

**Made with ❤️ by the SakuraSensei Team**

*Learning Japanese should be an adventure, not a chore.*
