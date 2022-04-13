const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];          // récupère le token dans le navigateur
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');  // décoder le token pour le vérifier avec la clé secrète
    const userId = decodedToken.userId;                             // on récupère l'id user dans l'objet Token décoder de l'utilisateur
    req.auth = {userId};                                            // req.auth = {userId: userId}
    if (req.body.userId && req.body.userId !== userId) {            // si user ID de la requête est présent et différent de l'user ID récupérer de l'ID de l'objet Token
      throw 'Invalid user ID';                                      // erreur
    } else {
      next();                                                       // peut passer a la suite de l'execution ou il est appelé
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};