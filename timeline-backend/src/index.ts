import app from "./app.js";

// Change this at deployment
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
