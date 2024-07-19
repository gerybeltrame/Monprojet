import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", [], "/js/auth/commentaires.js"),
    new Route("/Services", "Services", "/Pages/Services.html", []),
    new Route("/Habitats", "Habitats", "/Pages/Habitats.html", []),
    new Route("/Contacts", "Contacts", "/Pages/Contacts.html", []),
    new Route("/Connexion", "Connexion", "/Pages/Connexion.html", ["disconnected"],"/js/auth/signin.js"),
    new Route("/Page_admin", "Pageadministration", "/Pages/Page_admin.html", ["admin"], "/js/auth/signup.js"),
    new Route("/Animaux_savane", "Animauxsavane", "/Pages/Animauxsavane.html", []),
    new Route("/Animaux_jungle", "Animauxjungle", "/Pages/Animauxjungle.html", []),
    new Route("/Animaux_marais", "Animauxmarais", "/Pages/Animauxmarais.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";