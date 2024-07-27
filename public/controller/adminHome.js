exports.getAdminHome = (req, res, next) => {
    const navbarTitle = 'Admin Login';
    res.render('index', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin'
    });
};