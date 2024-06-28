const bodyParser = require('body-parser');
const  { path, app, fs } = require('../config/config') ;
// CONFIG DOSYASINDA TANIMLADIĞIM MODÜLLERİ BURADA KULLANMAK İÇİN BU KODU YAZIYORUZ

//DOSYALARI BAĞLAMAK İÇİN 
app.set('view engine','pug');
app.set('views', path.join(__dirname,'../views'));

app.use(bodyParser.urlencoded({ extended:false }));
//ANASAYFA ROUTE
app.get('/', (req, res) =>{
    res.render('index', {
        title: 'anasayfa',
        welcomeMessage: 'hoşgeldiniz',
        desc:'nassın?'
    });
});

app.get('/add-product', (req, res) =>{
    res.render('add-product', {
        title: 'Ürün Ekle'
    });                                

});

app.post('/add-product', (req, res) =>{
    const product = req.body.productname;
    const price = req.body.productprice;
    fs.appendFile('products.txt', `${product}\n`, (err) =>{
       if (err) {
        console.error('ürün kaydedilmedi' , err);
        return res.status(500).send('bir hata oluştu')
       }

       fs.appendFile('products.txt', `${price}\n`, (err) =>{
        if (err) {
         console.error('ürün kaydedilmedi' , err);
         return res.status(500).send('bir hata oluştu')
        }});
       res.redirect('/');           
    });
});





const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 