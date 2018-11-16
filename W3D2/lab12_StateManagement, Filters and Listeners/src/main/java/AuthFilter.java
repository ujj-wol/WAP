import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.Instant;

@WebFilter(filterName = "AuthFilter",
            urlPatterns = {"/logout", "/welcome"},
            servletNames = {})
public class AuthFilter implements Filter {
  public void destroy() {
  }

  public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
    try {
      System.out.println("Entered filter");
      HttpServletRequest request = (HttpServletRequest) req;
      HttpServletResponse response = (HttpServletResponse) resp;

      HttpSession session = request.getSession(false);
      if (session != null && "true".equals(session.getAttribute("is_logged_in"))) {
        chain.doFilter(req, resp);

      } else {
        response.sendRedirect("/");
      }
    }
    finally {
      System.out.println("Response back!");
    }
  }

  public void init(FilterConfig config) throws ServletException {

  }

}
