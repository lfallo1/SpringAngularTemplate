<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="angularAuthDemo" ng-controller="RouteChangeCtrl">
<head>
    <title>{{pageTitle}}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script src="bower/jquery/dist/jquery.min.js" type="text/javascript"></script>
    <script src="bower/angular/angular.js" type="text/javascript"></script>
    <script src="bower/angular-route/angular-route.min.js" type="text/javascript"></script>
    <script src="bower/angular-resource/angular-resource.min.js" type="text/javascript"></script>
    <script src="bower/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="bower/angular-bootstrap/ui-bootstrap.min.js" type="text/javascript"></script>
    <script src="bower/angular-bootstrap/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
    <script src="bower/bootstrap-multiselect/dist/js/bootstrap-multiselect.js" type="text/javascript"></script>
    <script src="bower/lodash/lodash.js" type="text/javascript"></script>
    <script src="bower/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min.js" type="text/javascript"></script>
    
    <!-- Modules -->
    <script src="app/js/App.js" type="text/javascript"></script>
    <script src="app/js/Controllers.js" type="text/javascript"></script>
    
    <!-- Controllers -->
    <script src="app/js/controllers/RouteChangeCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/WelcomeCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/UsersCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/directiveControllers/NavbarCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/directiveControllers/DatepickerPopupCustomCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/modalControllers/InfoModalCtrl.js" type="text/javascript"></script>
    <script src="app/js/controllers/modalControllers/UserPostsModalCtrl.js" type="text/javascript"></script>

	<!-- Directives -->
    <script src="app/js/directives/Navbar.js" type="text/javascript"></script>
    <script src="app/js/directives/DatepickerPopupCustom.js" type="text/javascript"></script>
    
    <!-- CSS libs -->
    <link type="text/css" rel="stylesheet" href="bower/bootstrap/dist/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="bower/bootstrap-multiselect/dist/css/bootstrap-multiselect.css" />
    <link type="text/css" rel="stylesheet" href="bower/animate-css/animate.min.css" />
</head>
<body>
<!-- Navigation Bar -->
<dir-nav-bar></dir-nav-bar>
<div class="container">
	<!-- Views -->
    <div ng-view></div>
</div>
<hr>
<footer><h3>Footer Placeholder</h3></footer>
</body>
</html>