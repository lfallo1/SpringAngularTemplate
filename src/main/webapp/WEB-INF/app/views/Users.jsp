<h1>{{userMessage}}</h1>
<div class="alert alert-warning" ng-show="loadingUsers">Loading...</div>
<div class="alert alert-danger" ng-show="!loadingUsers && error">{{error}}</div>
<table class="table table-hover" ng-show="!loadingUsers && !error">
	<thead>
		<tr>
			<th>Email</th>
			<th>Name</th>
			<th>Phone</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="u in users">
			<td>{{u.email}}</td>
			<td>{{u.name}}</td>
			<td>{{u.phone}}</td>
			<td><button class="btn btn-primary" ng-click="showPosts(u)">View Posts</button></td>
		</tr>
	</tbody>
</table>