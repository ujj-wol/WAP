import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Hashtable;

@WebServlet("") //this servlet is in root path
public class LoginServlet extends HttpServlet {
    private Hashtable<String, String> userTable = new Hashtable();

    //initialize the hashtable from constructor
    public LoginServlet() {
        userTable.put("user", "abc");
        userTable.put("user2", "bcd");
        userTable.put("user3", "cde");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("LoginServlet: doGet() called!");

        String userName="";
        //check cookie for remembered user
        for (Cookie cookie : req.getCookies()) {
            if (cookie.getName().equals("userName")) {
                userName = cookie.getValue(); }
        }

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CSTech</title></head><body>");
        out.println("<form method=post>");
        out.println("Username: <input type=\"text\" name=\"user_name\" placeholder=\"enterusername\" value="
                + userName + "> <br />");
        out.println("Password: <input type=password name=pswd placeholder=enterpassword> <br />");
        if(!userName.equals(""))
            out.println("<input type=checkbox name=remember checked> Remember me <br />");
        else
            out.println("<input type=checkbox name=remember> Remember me <br />");
        out.println("<br /><button value=submit>Submit</button>");
        out.println("</form>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        System.out.println("LoginServlet: doPost() called!");

        String user_name = req.getParameter("user_name");
        String password = req.getParameter("pswd");
        PrintWriter out = resp.getWriter();


        if(userTable.containsKey(user_name) && userTable.get(user_name).equals(password)) {
            User user1 = new User(user_name, password);
            HttpSession session = req.getSession(true);
            //setting session to expire in 5 mins
            session.setMaxInactiveInterval(5*60);
            //setting session attributes
            session.setAttribute("loggedUser", user1);
            session.setAttribute("is_logged_in", "true");
//            ServletContext sc = this.getServletContext();
//            sc.setAttribute("is_logged_in", "true");

            if(req.getParameter("remember") != null) {
                Cookie cookie = new Cookie("userName", user_name);
                cookie.setMaxAge(30*24*60*60);
                resp.addCookie(cookie);
            } else {
                Cookie cookie = new Cookie("userName", "");
                cookie.setMaxAge(-1);
                resp.addCookie(cookie);
            }
            resp.sendRedirect("/welcome");

        } else {
            out.println("Username and password not matched!!");
            out.println("You entered:");
            out.print("Username: " + user_name);
            out.println(", Password: " + password);
        }
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
