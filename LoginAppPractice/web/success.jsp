<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--
  Created by IntelliJ IDEA.
  User: ubhandari2
  Date: 11/17/18
  Time: 10:45 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ page import="dto.User" %>
<html>
<head>
    <title>Success</title>
</head>
<body>

<h3>Login Successful !!</h3>

<%
    User user = (User)session.getAttribute("user");
%>

Hello <%= user.getUserName() %> !

</body>
</html>
