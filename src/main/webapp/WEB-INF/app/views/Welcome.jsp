<h1>{{welcomeMessage}}</h1>
<div class="btn btn-lg btn-primary" ng-click="openInfoModal()">What is Angular?</div>

<div class="btn-group" dropdown is-open="dropdown.isopen">
     <button type="button" class="btn btn-lg btn-success dropdown-toggle" dropdown-toggle ng-disabled="disabled">
       Available Angular Libraries <span class="caret"></span>
     </button>
     <ul class="dropdown-menu" role="menu">
       <li><a href="#">Bootstrap</a></li>
       <li><a href="#">ngRoute</a></li>
       <li><a href="#">ngResource</a></li>
       <li class="divider"></li>
       <li><a href="https://angular-ui.github.io/bootstrap/">View more</a></li>
     </ul>
</div>

<div class="btn btn-warning btn-lg" ng-click="getUsers()">Get Users</div>
<table class="table table-hover" ng-show="users.length > 0">
	<thead>
		<tr>
			<th>Email</th>
			<th>Name</th>
			<th>Phone</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="u in users">
			<td>{{u.email}}</td>
			<td>{{u.name}}</td>
			<td>{{u.phone}}</td>
		</tr>
	</tbody>
</table>
<br>


<label for="answer">What is {{num1}} + {{num2}}</label><input name="answer" class="form-control" ng-model="answer" />
<div class="btn btn-lg btn-primary" ng-click="tryResolve()" ng-disabled="answered">Attempt to resolve</div>

<div ng-show="deferredResult">
	<div ng-class="{{deferredResultClass}}">{{deferredResult}}</div>
</div>
<hr>
<dir-datepicker-popup-custom dt="dt"></dir-datepicker-popup-custom>

<hr>

<dir-captain-justice-carousel images="captainJusticeImages" path="basePath"></dir-captain-justice-carousel>