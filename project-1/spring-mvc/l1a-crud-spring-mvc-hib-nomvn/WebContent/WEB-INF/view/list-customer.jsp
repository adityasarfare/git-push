<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<body>
	<h3>Customer List</h3>
	<c:forEach var="customer" items="${customers}">
	${customer.firstName}</br>
	${customer.lastName} </br>
	${customer.email} </br>
		<br />
		<hr />
	</c:forEach>
</body>
</html>