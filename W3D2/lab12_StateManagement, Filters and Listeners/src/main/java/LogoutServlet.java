import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("LogoutServlet: doGet() called!");

    HttpSession session = request.getSession(false);
//    if(session != null) {
      request.getSession().invalidate();
      //request.getServletContext().setAttribute("is_logged_in", "false");

//    } else {
//      System.out.println("Error: Cannot access logout without login!");
//    }
    response.sendRedirect("/");
    //or alt
    /*RequestDispatcher rd = request.getRequestDispatcher("");
    rd.forward(request, response);*/
  }

  @Override
  public void init() throws ServletException {
    System.out.println("\nServlet " + getServletName() + " has started.");
  }

  @Override
  public void destroy() {
    System.out.println("Servlet " + getServletName() + " has stopped.");
  }
}
