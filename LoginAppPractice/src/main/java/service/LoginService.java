package service;

import java.util.HashMap;
import dto.User;

public class LoginService {

  HashMap<String, String> users = new HashMap<>();

  //in real world this data would come from database, here lets initialize a hashmap
  public LoginService() {
    users.put("johndoe", "John Doe");
    users.put("janedoe", "Jane Doe");
    users.put("jguru", "Java Guru");
  }

  public boolean authenticate(String userId, String password) {
//    if(userId.equals("admin") && password.equals("admin")) {
//
//    }
    if(password == null || password.trim().equals("")) {
      return  false;
    }
    return true;
  }

  public User getUserDetails(String userId) {
    User user = new User();
    user.setUserName(users.get(userId));
    user.setUserId(userId);
    return user;
  }
}
