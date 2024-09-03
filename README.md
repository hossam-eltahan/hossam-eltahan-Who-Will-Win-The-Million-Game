
# من سيربح المليون؟ (Who Will Win the Million?)

Welcome to the "Who Will Win the Million?" game! This project is a web-based quiz game inspired by the popular TV show, designed for educational purposes. The game includes a dashboard for administrators to manage questions and answers, and a leaderboard to track top players.

## Live Demo

Check out the live version of the game [here](https://hossam-eltahan-who-will-win-the-million-game-145h.vercel.app/).

## Features

- **Dynamic Quiz Game:** Questions are selected gradually from easy to hard.
- **Admin Control Panel:** Admins can add, edit, and remove questions, and manage game settings.
- **Leaderboard:** Tracks and displays the best records with players' names.
- **Responsive Design:** Works seamlessly on different devices.
- **Local Storage:** Saves game data locally for a personalized experience.

## Project Structure

- **Front End:** Built with React.js.
- **Back End:** (Optional) Node.js with `mysql2` for database connections (if applicable).
- **Deployment:** Deployed on Vercel.

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

### Build for Production

To build the project for production:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

### Deployment

The project is deployed using Vercel. You can deploy it by connecting your GitHub repository to Vercel.

1. **Sign in to [Vercel](https://vercel.com).**
2. **Create a new project** and import your GitHub repository.
3. **Configure** the build settings (build command: `npm run build`, output directory: `build`).
4. **Deploy** and get your live URL.

## Usage

### Admin Control Panel

1. **Login as Admin:** Use the admin credentials to log in to the control panel.
2. **Manage Questions:** Add, edit, or remove questions directly from the control panel.
3. **Leaderboard:** View the top players who have won the game.

### Student Access

1. **Register/Sign In:** Students can register or sign in to play the game.
2. **Start the Game:** The game starts with easier questions and progresses to harder ones.
3. **Track Progress:** The leaderboard shows the highest scores.

## Technologies Used

- **React.js** for the front end
- **Node.js** and **mysql2** for the back end (if applicable)
- **Vercel** for deployment
- **Local Storage** for saving game data

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the popular TV show "Who Wants to Be a Millionaire?"

---

