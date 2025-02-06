# Setting Up Ionic Angular and Cloning This Repository

## 1. Install Node.js
Make sure you have **Node.js** installed.  
- [Download Node.js](https://nodejs.org/) if needed.  
- Verify installation:

   ```bash
   node -v
   npm -v

## 2. Install Ionic CLI Globally
Use npm to install the Ionic CLI:
 ```bash
   npm install -g @ionic/cli
```

## 3. Create a New Ionic Angular Project
Navigate to the directory where you want your project:
```cd ~/your-desired-directory
   ionic start SeasonalSavor blank --type=angular
```

## 4. Navigate to Project Directory
```cd SeasonalSavor
```

## 5. Initialize Git and Clone This Repo
Initialize Git:
```git init
```

Clone the GitHub Repo into Your Project Directory:
```git remote add origin https://github.com/TanavSureddy/SeasonalSavor.git
   git pull origin main
```

## 6. Run the App
```ionic serve
```



