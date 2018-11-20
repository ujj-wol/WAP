package controller;

import dao.userDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet({"/login", ""})
public class LoginServlet extends HttpServlet {

  private userDAO dao;

  @Override
  public void init() throws ServletException {
    dao = new userDAO();
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.sendRedirect("/login.jsp");
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String guest = req.getParameter("guest");
    String username = req.getParameter("userId");
    String password = req.getParameter("password");

    if(guest==null) {

      resp.sendRedirect("login.jsp");
    }
    else {
      resp.sendRedirect("/product.jsp");
    }
  }
}
