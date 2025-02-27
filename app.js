require('dotenv').config();

const sequelize = require('./backend/models/index'); 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session= require('express-session');
const flash = require('connect-flash');

//importer les modèles
const Utilisateurs = require('./backend/models/Utilisateurs');
const Champs = require('./backend/models/Champs');
const Stocks = require('./backend/models/Stock');
const Livraisons = require('./backend/models/Livraisons');
const Capteurs = require('./backend/models/Capteurs');
const roles = require('./backend/models/Roles');
const previsions = require('./backend/models/Previsions');

//importer les routes
const indexRouter = require('./backend/routes/index');
const CapteursRouter = require('./backend/routes/CapteursRoutes');
const ChampsRouter = require('./backend/routes/ChampsRoutes');
const LivraisonRouter = require('./backend/routes/LivraisonsRoutes');
const PrevisionsRouter = require('./backend/routes/PrevisionsRoutes');
const RolesRouter = require('./backend/routes/RolesRoutes');
const StocksRouter = require('./backend/routes/StocksRoutes');
const UtilisateursRoutes = require('./backend/routes/UtilisateursRoutes');

const app = express();
const port = process.env.PORT || 5001;

// Configuration du moteur de vues
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/clients'),
  path.join(__dirname, 'views/modals'),
  path.join(__dirname, 'views/agriculteurs'),
  path.join(__dirname, 'includes'),
  path.join(__dirname, 'views/components'),
]);
app.set('view engine', 'ejs');

// Middlewares globaux
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

// configuration de la session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false, 
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 jours
  }
}));

// Initialiser Flash après la session
app.use(flash());

// Middleware pour rendre Flash accessible dans les vues
app.use((req, res, next) => {
  res.locals.error_conn = "";
  
  // Vérifier si des messages existent avant de les assigner
  const errorFlash = req.flash('error_msg');
  const successFlash = req.flash('success_msg');

  res.locals.success_msg = (successFlash.length > 0) ? successFlash : null;
  res.locals.error_msg = (errorFlash.length > 0) ? errorFlash : null;

  console.log('📌 Contenu de error_msg après récupération:', res.locals.error_msg);
  
  next();
});

// Déclaration des routes
app.use('/', indexRouter);
app.use('/api/utilisateurs', UtilisateursRoutes);
// app.use('/api/capteurs', CapteursRouter);
// app.use('/api/champs', ChampsRouter);
// app.use('/api/livraison', LivraisonRouter);
// app.use('/api/prevision', PrevisionsRouter);
app.use('/api/role/users', RolesRouter);
// app.use('/user/mon-compte', StocksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port,() => {
  console.log(`✅ App is listening on port ${port}`)
})

// Synchronisation avec MySQL
sequelize.sync({ force: false })
    .then(() => console.log('✅ Base de données synchronisée avec Sequelize !'))
    .catch(err => console.error('❌ Erreur de synchronisation de la BDD :', err));

module.exports = app;
