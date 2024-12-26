# Competitive Programmers of CSE Department, Comilla University

A directory of competitive programmers from CSE Department, Comilla University, showcasing their names, sessions, and social profiles (Facebook, LinkedIn, GitHub, and Codeforces). The project displays each programmer's information in a user-friendly UI, with options to filter by name and session.

## Project Structure

- **`src/user.js`**: Contains the data in an array of objects, where each object represents a competitive programmer with:
  - **`name`**: Full name of the programmer
  - **`session`**: University session (e.g., "2019-20")
  - **`avatar`**: The image file name, stored in the `public` folder (e.g., `"ahnafshifat.jpeg"`)
  - **`social`**: An object containing social media profile links (GitHub, Facebook, LinkedIn, Codeforces)
  
  ```js
  export default [
    {
      name: "Ahnaf Hasan Shifat",
      session: "2019-20",
      avatar: "ahnafshifat.jpeg",
      social: {
        github: "https://www.github.com/ah-naf",
        facebook: "https://www.facebook.com/ahnaf.hasan.144",
        linkedin: "https://www.linkedin.com/in/ahnafhasan144",
        codeforces: "https://codeforces.com/profile/Ah_naf",
      },
    },
    {
      name: "Md. Rakib Hossain",
      session: "2019-20",
      avatar: "rakibjoy.jpeg",
      social: {
        github: "https://www.github.com/TheRakibJoy",
        facebook: "https://www.facebook.com/therakibjoy",
        linkedin: "https://www.linkedin.com/in/therakibjoy",
        codeforces: "https://codeforces.com/profile/rakibjoy",
      },
    },
    // ...more user objects
  ];
  ```

- **`public` folder**: Stores images referenced by the `avatar` field in `user.js`.

- **UI Components**: Implemented with React and [@nextui-org/react](https://nextui.org/). Styling utilizes Tailwind CSS.

## Installation & Running Locally

1. **Clone** the repository:
   ```bash
   git clone https://github.com/ah-naf/CoU-CSE-CP-Alumni
   cd CoU-CSE-CP-Alumni
   ```

2. **Install** dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Start** the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open** your browser and navigate to:
   ```
   http://localhost:3000
   ```
   (or the port specified in your console) to view the app.

## Usage

- **Home Page**: Displays the main landing section and a search/filter area.  
  - **Name**: Type in a name to narrow down the displayed programmers.  
  - **Session Dropdown**: Filter by a specific session.  
  - **Reset**: Clear all filters to show the full directory again.
- **Programmers Directory**: Displays each member’s information, including name, session, and social media links.

## Contributing

Contributions are welcome! Here’s how you can help:

1. **Fork** the repository and create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature/my-new-feature
   ```
2. **Make** your changes in the codebase.
3. **Commit** and push to your forked repository:
   ```bash
   git add .
   git commit -m "Add my new feature"
   git push origin feature/my-new-feature
   ```
4. **Create** a Pull Request (PR) from your branch against `main` or the appropriate branch on this repository.  
5. After review, your changes may be merged into the main project.

Please ensure your contributions adhere to the following guidelines:

- **Follow** the existing code style and naming conventions.
- **Test** your code to ensure there are no regressions or broken features.
- **Provide** clear and concise commit messages and PR descriptions.

Thank you for helping to make this project better! If you have any questions or suggestions, feel free to open an [issue](https://github.com/ah-naf/CoU-CSE-CP-Alumni).
