<%@ taglib prefix="springform"
	uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<body>
	<springform:form action="saveCustomer" modelAttribute="customer" method="POST">
	First Name :
	<springform:input path="firstName" placeholder="FirstName" />
		</br>
			Last Name : 
		<springform:input path="lastName" placeholder="LastName" />
		</br>
		Email :<springform:input path="email" placeholder="email" />
		<input type="submit" value="Save Customer" />
	</springform:form>
</body>
</html>