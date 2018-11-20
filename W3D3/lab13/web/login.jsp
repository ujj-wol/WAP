<%--
  Created by IntelliJ IDEA.
  model: ubhandari2
  Date: 11/17/18
  Time: 12:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <form action="/login" method="post">
        model ID: <input name="userId"><br>
        Password: <input type="password" name="password"><br>
        <button>Submit</button><br>
        <br>
        Continue as guest<input type="checkbox" name="guest">
    </form>
</body>
</html>
