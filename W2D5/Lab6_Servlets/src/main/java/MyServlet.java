import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/support")
public class MyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CSTech</title></head><body>");
        out.print("<form  method='POST'>");
        out.print("Name:<input name='user'/><br>");
        out.print("Email address:<input type=email name=email><br>");
        out.print("Problem:<textarea></textarea><br>");
        out.print("<input type=submit value=help>");
        out.print("</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("user");
        String email = req.getParameter("email");
        String support_email = "****";   //Support_email should come from context param.
        String support_ticket_id = "****";    //Support_ticket_id is generated automatically for every request.

        String htmlResponse = "<html><head><title>CSTechResponse</title></head><body>";
        htmlResponse += "<p>Thank you! " + name + " for contacting us.</p>";
        htmlResponse += "<p>You should receive reply from us with in 24 hrs in your email address " + email + ".</p>";
        htmlResponse += "<p>Let us know in our support email " + support_email + " if you don't receive reply within 24 hrs. " +
                        "Please be sure to attach your reference " + support_ticket_id + " in your email.</p></body></html>";

        PrintWriter out = resp.getWriter();
        out.print(htmlResponse);
    }
}
