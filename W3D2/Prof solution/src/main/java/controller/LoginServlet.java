package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet({ "/login", "" })
public class LoginServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getRequestDispatcher("login.jsp").forward(req, resp);

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String userName = req.getParameter("user_name");
		String password = req.getParameter("pass");
		String remember = req.getParameter("remember");
		HttpSession session = req.getSession();

		if ("Rakesh".equals(userName) && "123".equals(password)) {
			
			session.setAttribute("user_info", userName);

			if ("yes".equals(remember)) {
				Cookie c = new Cookie("user", userName);
				c.setMaxAge(30 * 24 * 60 * 60);
				resp.addCookie(c);
			} else {
				Cookie c = new Cookie("user", null);
				c.setMaxAge(0);
				resp.addCookie(c);

			}
			resp.sendRedirect("welcome.jsp");
		} else {
			session.setAttribute("err_msg", "Username and/or password invalid.");
			resp.sendRedirect("login");
		}
	}
}
