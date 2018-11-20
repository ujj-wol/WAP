package controller;

import dao.ProductDAO;
import model.Product;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class ProductController
 */
@WebServlet({ "/product" })
public class ProductController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private ProductDAO dao;
	ObjectMapper mapper = new ObjectMapper();

	@Override
	public void init() throws ServletException {
		dao = new ProductDAO();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		request.setAttribute("products", dao.getAllProducts());
//		RequestDispatcher view = request.getRequestDispatcher("product.jsp");
//		view.forward(request, response);
		response.sendRedirect("product.jsp");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String jsonSting = request.getParameter("product");
		Product product = mapper.readValue(request.getParameter("product"), Product.class);
		product.setId(dao.genId());
		dao.addProduct(product);
		
		PrintWriter out =response.getWriter();
		try{
			out.print(mapper.writeValueAsString(product));
		}catch (JsonGenerationException e) {
			e.printStackTrace();
		}

	}

}
