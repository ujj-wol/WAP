import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/welcome")
public class WelcomePageServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        HttpSession session = req.getSession(false);

//        if(session != null && "true".equals(session.getAttribute("is_logged_in"))) {
        //if("true".equals(this.getServletContext().getAttribute("is_logged_in"))) {

            System.out.println("WelcomePageServlet: doGet() called!");

            out.print("<html><head><title>CSTech</title></head><body>");
            String userName = ((User) session.getAttribute("loggedUser")).getName();
            out.println("Welcome " + userName + "!!");
            out.println("<form method=get action='/logout'>");
            out.println("<button value=logout>LogOut</button>");
            out.println("</form>");
            out.println("</body></html>");

//        } else {
//            System.out.println("Error: Please login first!!");
//            resp.sendRedirect("/");
            //or alt
            //req.getRequestDispatcher("").forward(req, resp);
//        }
    }

    @Override
    public void init() throws ServletException {
        System.out.println("\nServlet " + this.getServletName() + " has started.");
    }

    @Override
    public void destroy() {
        System.out.println("Servlet " + this.getServletName() + " has stopped.");
    }
}
