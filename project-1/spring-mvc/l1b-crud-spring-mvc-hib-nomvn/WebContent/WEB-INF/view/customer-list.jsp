<%@ page language="java" session="false" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>

<head>
	<title>Customers List</title>
</head>

<body>
	<h1>Customers List</h1>
	<c:forEach var="customerObject" items="${customerModelFromController}">
		${customerObject.firstName } &nbsp; ${customerObject.lastName } &nbsp; ${customerObject.email } &nbsp;
		<a href="${pageContext.request.contextPath}/customer/delete?customerId=${customerObject.id}">Delete </a>
		<hr />
	</c:forEach>
	<input type="button" onclick="window.location.href='showFormForAdd'" value="New Customer" />

</body>

</html>