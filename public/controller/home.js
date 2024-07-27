exports.getHome = (req, res, next) => {
    const navbarTitle = 'DEUTSCH';
    res.render('index', { 
        navbarTitle,
        title: 'HomePage',
        path: '/home'
    });
};

exports.getAdminHome = (req, res, next) => {
    const navbarTitle = 'Admin Login';
    res.render('index', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin'
    });
};
