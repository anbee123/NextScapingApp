const app = require('./src/server')

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend Server started at PORT ${PORT}`);
});
