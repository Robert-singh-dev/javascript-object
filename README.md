# 🧑‍💻 User Input Script

This is a simple JavaScript script that prompts the user to enter their name, trims any extra spaces, and logs the result to the console.

---

## 🔗 How It Works

1. The user is asked to enter their name using `prompt()`.
2. The script removes any **leading or trailing spaces** using `trim()`.
3. If the user provides a valid name, the trimmed name is logged to the console.
4. If the user leaves the input **empty** or cancels the prompt, a message is shown indicating that no name was entered.
5. The script also logs:
   - The **type** of the input.
   - The **length** of the trimmed name.

---

## 📜 Example Code
```javascript
let userName = prompt("Enter your name:");
let userNameNospace = userName.trim();

if (userName) {
    console.log(userNameNospace);
} else {
    console.log("You didn't enter your name");
}

console.log(typeof userName);           // Logs the data type
console.log(userNameNospace.length);    // Logs the length of the trimmed name
