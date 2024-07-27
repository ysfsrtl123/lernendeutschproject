exports.getHome = (req, res, next) => {
    const navbarTitle = 'DEUTSCH';
    res.render('index', { 
        navbarTitle,
        title: 'HomePage',
        path: '/home'
    });
};


