import dto.User;
import service.LoginService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String userId, password;

    userId = req.getParameter("userId");
    password = req.getParameter("password");

    LoginService loginService = new LoginService();
    boolean result = loginService.authenticate(userId, password);

    //login successful
    if(result) {
      User user = loginService.getUserDetails(userId);
      req.getSession().setAttribute("user", user);
      resp.sendRedirect("success.jsp");
      return;
    }
    else {
      resp.sendRedirect("login.jsp");
      return;
    }
  }
}
