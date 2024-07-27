const path = require('path');
const express = require('express');
const app = express();

const adminRoutes = require('../routes/admin'); // admin route dosyasının yolu
const homeRoutes = require('../routes/user');   // home route dosyasının yolu

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views')); // views dizini

app.use('/admin', adminRoutes); // Ana sayfa için adminRoutes
app.use('/home', homeRoutes); // Home sayfası için homeRoutes

    app.use((req, res) => {
        res.status(404).render('404', { pageTitle: 'Seite nicht gefunden' });
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
