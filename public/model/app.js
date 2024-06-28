const bodyParser = require('body-parser');
const  { path, app, fs } = require('../config/config') ;
// CONFIG DOSYASINDA TANIMLADIĞIM MODÜLLERİ BURADA KULLANMAK İÇİN BU KODU YAZIYORUZ

//DOSYALARI BAĞLAMAK İÇİN 
app.set('view engine','pug');
app.set('views', path.join(__dirname,'../views'));

app.use(bodyParser.urlencoded({ extended:false }));
//ANASAYFA ROUTE
app.get('/home', (req, res) => {
    const navbarTitle = 'DEUTSCH'
   res.render('index',{navbarTitle});
   
});





const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 